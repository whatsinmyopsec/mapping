from __future__ import print_function
import pprint
import os
import json
import re
import ipinfo

access_token = ''
handler = ipinfo.getHandler(access_token)


def getipsfromfiles():
    files = []
    listdir = os.listdir("/home/vape/fyp/server/hp-coll-1/raw/json/formatted/")
    for file in listdir:
        files.append(file)
    for file in files:
        x = open(f"/home/vape/fyp/server/hp-coll-1/raw/json/formatted/{file}")
        line = re.findall(r"\"src_ip\":\"\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b\"", x.read())
        lines = ' '.join(map(str, line))
        line = re.findall(r"\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b", lines)
        line = list(set(line))

        with open(f"/home/vape/fyp/server/hp-coll-1/ipinfo/{file}", "w") as fp:
            r = (handler.getBatchDetails(line[:100]))
            json.dump(r, fp)
        # pprint.pprint(r)
        # print(f'{file}: {len(line[:100])}')


if __name__ == '__main__':
    getipsfromfiles()
