import glob
import json
from pathlib import Path

logpath = './json-data/json-formatted/'
cowrie_download = 'cowrie.session.file_download'
vt_report_path = './vt/'
response = 'response_code'


def json_log_files():
    logs = []
    hashes = []
    hashset = {}

    logfiles = [log for log in glob.glob(
        logpath + '**/*.json', recursive=True)]
    for log in logfiles:
        with open(log) as logfile:
            for line in logfile:
                data = json.loads(line)
                eventid = data['eventid']
                if eventid == cowrie_download:
                    outfile = data['outfile']
                    # THIS MAKES ME UNCOMFORTABLE
                    logs.append(outfile)

    for files in logs:
        filenames = Path(files).stem
        hashes.append(filenames)
    hashset = list(set(hashes))

    with open('hashes.txt', 'w') as file_handle:
        file_handle.writelines("%s\n" % hashes for hashes in hashset)


def virustotal_files_resource_signature():
    files = []

    allfiles = [f for f in glob.glob(
        vt_report_path + '**/*.json', recursive=True)]
    for files in allfiles:
        with open(files) as resource_files:
            resource_data = json.load(resource_files)
            if resource_data[0][response] == '1' or resource_data[0][response] == 1:
                resources = resource_data[0]['resource']
                files.append(resources)

    with open('resources.txt', 'w') as file_handle:
        file_handle.writelines("%s\n" % resource for resource in files)


def compare_res_sig_to_hash():
    matches = {}
    virustotal_resources = open('resources.txt', 'r').read().splitlines()
    set_virustotal_resources = set(virustotal_resources)
    hashes_from_logs = open('hashes.txt', 'r').read().splitlines()
    set_hashes_from_logs = set(hashes_from_logs)
    matches = set(set_virustotal_resources).intersection(set_hashes_from_logs)

    with open('matches.txt', 'w') as filehandle:
        filehandle.writelines("%s\n" % match for match in matches)


if __name__ == '__main__':
    json_log_files()
    vtfiles_resource_sig()
    compare_res_sig_to_hash()
