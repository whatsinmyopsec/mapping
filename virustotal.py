from __future__ import print_function
import json
import os
import time
from tqdm import tqdm
import requests
import pprint

apikey = ''


def progress(s):
    pbar = tqdm(total=s)
    for i in range(s):
        time.sleep(1)
        pbar.update(1)
    pbar.close()


def mainboi():
    url = 'https://www.virustotal.com/vtapi/v2/file/scan'
    params = {'apikey': apikey}
    files = []
    listdir = os.listdir("/home/vape/fyp/server/hp-coll-1/downloads/dir_3/dir_3-bins/")
    for file in listdir:
        files.append(file)
    for file in files:
        f = {'file': (file, open(f"/home/vape/fyp/server/hp-coll-1/downloads/dir_3/dir_3-bins/{file}", 'rb'))}
        response0 = requests.post(url, files=f, params=params)
        progress(40)
        os.remove(f"/home/vape/fyp/server/hp-coll-1/downloads/dir_3/dir_3-bins/{file}")
        pprint.pprint(response0.json())

        url = 'https://www.virustotal.com/vtapi/v2/file/report'
        params = {'apikey': apikey, 'resource': file}
        r = requests.get(url, params=params)
        progress(40)
        file = open(f"/home/vape/fyp/server/hp-coll-1/downloads/dir-3-json/{file}.json", "w")
        json.dump(r.json(), file)


if __name__ == '__main__':
    mainboi()
