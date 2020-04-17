from __future__ import print_function
import collections


passwords = open("/home/vape/fyp/server/hp-coll-1/dl-fix/passwords.txt", "r").readlines()
prefix_length = 8
print_values = 5
print(30*"~")
print("no filtering")
print(30*"=")
prefix_counts = collections.Counter()
for password in passwords:
    password_prefix = password[:prefix_length].strip()
    prefix_counts[password_prefix] += 1

for prefix, number_of_passwords in prefix_counts.most_common(print_values):
    print(f"{number_of_passwords} passwords started with `{prefix}` at {prefix_length} prefix characters")

print(30*"~")
print("Cast to lowercase")
print(30*"=")
prefix_count = collections.Counter()

for password in passwords:
    v = password.lower()
    password_prefix = v[:prefix_length].strip()
    prefix_count[password_prefix] += 1

for prefix, number_of_passwords in prefix_count.most_common(print_values):
    print(f"{number_of_passwords} passwords started with `{prefix}` at {prefix_length} prefix characters")

print(30*"~")
print("replace $, @ and to lowercase")
print(30*"=")
prefix_coun = collections.Counter()

for password in passwords:
    v = password.replace("$", "s", 3)
    x = v.replace("@", "a", 3)
    f = x.lower()
    password_prefix = f[:prefix_length].strip()
    prefix_coun[password_prefix] += 1

for prefix, number_of_passwords in prefix_coun.most_common(print_values):
    print(f"{number_of_passwords} passwords started with `{prefix}` at {prefix_length} prefix characters")
