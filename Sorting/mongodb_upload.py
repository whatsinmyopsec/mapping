import glob
import json
import os
import shutil
import subprocess
import time

import dotenv
import pymongo
from tqdm import tqdm

db_name = 'monolith'
logpath = './json-data/json-formatted/'
virustotal_logpath = './vt/'
ipinfo_logpath = './ipinfo/'


def progress(s):
    pbar = tqdm(total=s)
    for i in range(s):
        time.sleep(1)
        pbar.update(1)
    pbar.close()


def jsonlogs_parser():
    def insert_one(collection, event):
        try:
            object_id = collection.insert_one(event).inserted_id
            return object_id
        except Exception as error:
            print('mongo error - {0}'.format(error))

    def update_one(collection, session, doc):
        try:
            object_id = collection.update({'session': session}, doc)
            return object_id
        except Exception as error:
            print('mongo error - {0}'.format(error))

    try:
        mongo_connect = pymongo.MongoClient(os.getenv('MONGO_URI'))
        mongo_db = mongo_connect[db_name]

        col_sensors = mongo_db['sensors']
        col_sessions = mongo_db['sessions']
        col_auth = mongo_db['auth']
        col_input = mongo_db['input']
        col_downloads = mongo_db['downloads']
        col_keyfingerprints = mongo_db['keyfingerprints']
        col_event = mongo_db['event']

    except Exception as error:
        print('mongoDB: Error: %s' % str(error))

    logfiles = [log for log in glob.glob(
        logpath + '**/*.json', recursive=True)]
    for files in logfiles:
        for line in open(files).readlines():
            log_entry = json.loads(line)
            eventid = log_entry['eventid']
            if eventid == 'cowrie.session.connect':
                doc = col_sensors.find_one({'sensor': log_entry['sensor']})
                if doc:
                    sensor_id = doc['sensor']
                else:
                    sensor_id = insert_one(col_sensors, log_entry)

                log_entry['starttime'] = log_entry['timestamp']
                log_entry['endtime'] = None
                log_entry['sshversion'] = None
                log_entry['termsize'] = None
                insert_one(col_sessions, log_entry)

            elif eventid in ['cowrie.login.success', 'cowrie.login.failed']:
                insert_one(col_auth, log_entry)

            elif eventid in ['cowrie.command.success', 'cowrie.command.failed']:
                insert_one(col_input, log_entry)

            elif eventid == 'cowrie.session.file_download':
                insert_one(col_downloads, log_entry)

            elif eventid == 'cowrie.client.version':
                doc = col_sessions.find_one({'session': log_entry['session']})
                if doc:
                    doc['sshversion'] = log_entry['version']
                    update_one(col_sessions, log_entry['session'], doc)
                else:
                    pass

            elif eventid == 'cowrie.client.size':
                doc = col_sessions.find_one({'session': log_entry['session']})
                if doc:
                    doc['termsize'] = f"{log_entry['width']}x{log_entry['height']}"
                    update_one(col_sessions, log_entry['session'], doc)
                else:
                    pass

            elif eventid == 'cowrie.session.closed':
                doc = col_sessions.find_one({'session': log_entry['session']})
                if doc:
                    doc['endtime'] = log_entry['timestamp']
                    update_one(col_sessions, log_entry['session'], doc)
                else:
                    pass

            elif eventid == 'cowrie.client.fingerprint':
                insert_one(col_keyfingerprints, log_entry)

            else:
                insert_one(col_event, log_entry)
        shutil.move(files, './uploaded/')


def virustotal_logs():

    virustotal_report_logs = [log for log in glob.glob(
        virustotal_logpath + '**/*.json', recursive=True)]
    for log_vt_report in virustotal_report_logs:
        command = f"mongoimport.exe /host {os.getenv('MONGO_HOST')} /ssl /username {os.getenv('MONGODB_USER')} /password {os.getenv('MONGODB_PASS')} /authenticationDatabase admin /db {os.getenv('MONGODB_NAME')} /collection vt_reports /type json /mode upsert /file {log_vt_report} --jsonArray"
        subprocess.Popen(command, stdin=subprocess.DEVNULL,  shell=True)
        progress(3)


def ipinfo_logs():

    ipinfo_report_logs = [log for log in glob.glob(
        ipinfo_logpath + '**/*.json', recursive=True)]
    for log_ip_report in ipinfo_report_logs:
        command = f"mongoimport.exe /host {os.getenv('MONGO_HOST')} /ssl /username {os.getenv('MONGODB_USER')} /password {os.getenv('MONGODB_PASS')} /authenticationDatabase admin /db {os.getenv('MONGODB_NAME')} /collection ipinfos /type json /mode upsert /file {log_ip_report} --jsonArray"
        subprocess.Popen(command, stdin=subprocess.DEVNULL,  shell=True)
        progress(2)


# linux
def linux_virustotal_logs():
    virustotal_report_logs = [log for log in glob.glob(
        virustotal_logpath + '**/*.json', recursive=True)]
    for log_vt_report in virustotal_report_logs:
        command = f"mongoimport --host {os.getenv('MONGO_HOST')} --ssl --db {os.getenv('MONGODB_NAME')} --type json --collection vt_reports --mode upsert --file {log_vt_report} --jsonArray --authenticationDatabase admin --username {os.getenv('MONGODB_USER')} --password {os.getenv('MONGODB_PASS')}"
        subprocess.run(command, shell=True)
        progress(3)


def linux_ipinfo_logs():

    ipinfo_report_logs = [log for log in glob.glob(
        ipinfo_logpath + '**/*.json', recursive=True)]
    for log_ip_report in ipinfo_report_logs:
        command = f"mongoimport --host {os.getenv('MONGO_HOST')} --ssl --db {os.getenv('MONGODB_NAME')} --type json --collection ipinfos --mode upsert --file {log_ip_report} --jsonArray --authenticationDatabase admin --username {os.getenv('MONGODB_USER')} --password {os.getenv('MONGODB_PASS')}"
        subprocess.run(command, shell=True)
        progress(2)


def os_check():
    dotenv.load_dotenv()
    jsonlogs_parser()
    progress(5)
    if os.name == 'nt':
        virustotal_logs()
        ipinfo_logs()
    else:
        linux_virustotal_logs()
        linux_ipinfo_logs()


if __name__ == "__main__":
    os_check()
