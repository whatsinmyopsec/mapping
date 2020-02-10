import json

import pandas as pd

data = []
with open("27-29.json") as f:
    for line in f:
        data.append(json.loads(line))


# print(type(data))
# print(data[1]["message"])


def remove_duplicates(seq, idfun=None):
    if idfun is None:
        def idfun(x): return x
    seen = {}
    result = []
    for item in seq:
        marker = idfun(item)
        if marker in seen: continue
        seen[marker] = 1
        result.append(item)
    return result


def get_lists(json_data, key):
    full_list = ""
    for x in range(0, len(json_data)):
        try:
            full_list += str(data[x][key]) + ","
        except:
            pass
    deduped_list = remove_duplicates(full_list.split())
    return full_list, deduped_list


cols = ['dst_port', 'src_port', 'sensor', 'timestamp', 'message', 'src_ip', 'protocol', 'dst_ip', 'session', 'eventid',
        'version', 'duration', 'compCS', 'langCS', 'kexAlgs', 'hassh', 'keyAlgs', 'encCS', 'macCS', 'hasshAlgorithms',
        'password', 'username', 'arch', 'input', 'size', 'ttylog', 'duplicate', 'shasum', 'destfile', 'outfile',
        'filename', 'data', 'id']
# list all the column names

sorted_lists = {}  # define new dict for fun
for group in cols:
    sorted_lists[group], _ = get_lists(data, group)  # make the magic function run _ is a throwaway

print(sorted_lists)  # Print the fix

# fileOut = sys.argv[1]
#
# outputFile = open(fileOut, 'w')
# output = csv.DictWriter(outputFile, fieldnames=cols)  # create a csv.write
# output.writeheader()
# output.writerow(sorted_lists)  # header row

df = pd.DataFrame.from_dict(sorted_lists, orient="index", columns=cols)

df.to_csv("data.csv")

# def get_ip_location(ip):
#     url = 'http://ipinfo.io/' + ip + '/json'
#     response = urllib.request.urlopen(url)
#     data = json.load(response)
# 
#     city = data['city']
#     country = data['country']
# 
#     return country, city

# def get_top_ten(full_list, deduped_list):
#     count_dict = {}
#     for item in deduped_list:
#         count_dict[item] = full_list.count(item)
#     top_ten = sorted(count_dict, key=count_dict.get, reverse=True)[:10]
# 
#     return top_ten, count_dict


# Tester function no longer needed
# sensor_list, deduped_sensor_list = get_lists(data, "sensor")
