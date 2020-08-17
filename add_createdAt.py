import glob
import os
import re

from pathlib import Path

ipinfo_logpath = './ipinfo/'
all_files = [f for f in glob.glob(
    ipinfo_logpath + '**/*.json', recursive=True)]


def final_fix_i_hope():

    for files in all_files:

        # get the file names
        filename = Path(files).stem

        # trim the filename to give the date only
        name = filename[:10]

        # replace - with _ to satisfy graphql
        prep_for_graphql = re.sub("-", "_", name)

        # magic string to be inserted \u007d is }
        createdAt = f',"createdAt": "{prep_for_graphql}" \u007d'

        # look at end of file for problem
        with open(files, 'r') as problematic:
            contents = problematic.read()

            # remove first {
            remove_first_brace = re.sub("{", "", contents, count=1)
            save_removed_brace = remove_first_brace

            # flip file
            flipped = (save_removed_brace[::-1])

            # remove first }
            remove_last_brace = re.sub("}", "", flipped, count=1)

            # flip file again
            final = (remove_last_brace[::-1])

            # remove "info":
            remove_info = re.sub("\"info\":", " ", final)

            # insert createdAt
            z = re.sub('}', createdAt, remove_info)

        # save the changes
        with open(n, 'w') as finish_me:
            finish_me.write(z)


if __name__ == "__main__":
    final_fix_i_hope()

"""
[
    {
        "info": {
            "ip": "209.17.96.250",
            "hostname": "209.17.96.250.rdns.cloudsystemnetworks.com",
            "city": "New York City",
            "region": "New York",
            "country": "US",
            "loc": "40.7143,-74.0060",
            "org": "AS174 Cogent Communications",
            "postal": "10004",
            "timezone": "America/New_York",
            "country_name": "United States",
            "latitude": "40.7143",
            "longitude": "-74.0060"
        }
    }
]
"""
