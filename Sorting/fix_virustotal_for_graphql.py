import glob
import re

path_to_virustotal = '/vt/'


def regex_those_names():
    allfiles = [f for f in glob.glob(
        path_to_virustotal + '**/*.json', recursive=True)]
    for files in allfiles:
        with open(files, 'r') as suspects:
            content = suspects.read()
            fixed_content = re.sub("-", "_", content)
        with open(files, 'w') as finish_me:
            finish_me.write(fixed_content)


if __name__ == "__main__":
    regex_those_names()
