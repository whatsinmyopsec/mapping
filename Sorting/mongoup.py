from __future__ import print_function
import subprocess
import os
import time

files = []
listdir = os.listdir("/home/vape/fyp/server/hp-coll-1/downloads/dir-8-json/")
for file in listdir:
    files.append(file)
for file in files:
    subprocess.run(f"mongoimport --host localhost:27017 --db "
                   f"malwaredumps --type --collection malwaretests json --mode upsert --file /home/vape/fyp/server/hp-coll-1/downloads/dir-8-json/{file} --jsonArray "
                   f"--authenticationDatabase admin --username root --password example", shell=True)
    time.sleep(5)
    print(20*"*")

print("Finished")
