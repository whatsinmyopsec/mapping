import pandas as pd
import os

files = []
listdir = os.listdir("/home/vape/fyp/server/hp-coll-1/raw/json/formatted/")
for file in listdir:
    files.append(file)
for file in files:
    df = pd.read_json(f"/home/vape/fyp/server/hp-coll-1/raw/json/formatted/{file}")
    df = df.drop(
        columns=["langCS", "encCS", "compCS", "keyAlgs", "kexAlgs", "hassh", "macCS", "hasshAlgorithms", "shasum",
                 "sensor", "version", "ttylog", "fingerprint", "key", "id", "duplicate", "password", "username", "size",
                 "data", "filename", "destfile", "type"], errors='ignore')
    x = ["outfile"]
    for i in x:
        if i in df:
            df["outfile"] = df["outfile"].str.replace("var/lib/cowrie/downloads/", "")
    filename = f"/home/vape/fyp/server/hp-coll-1/json-logs/{file}"
    print(filename)
    df.to_json(filename)
