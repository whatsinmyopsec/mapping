import json
import urllib.request

data = []
with open("27-29.json") as f:
    for line in f:
        data.append(json.loads(line))


# print(type(data))
# print(type(data[1]))
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


def get_ip_location(ip):
    url = 'http://ipinfo.io/' + ip + '/json'
    response = urllib.request.urlopen(url)
    data = json.load(response)

    city = data['city']
    country = data['country']

    return country, city


def get_lists(json_data, key):
    full_list = ""
    for x in range(0, len(json_data)):
        try:
            full_list += str(data[x][key]) + "\n"
        except:
            pass
    deduped_list = remove_duplicates(full_list.split())
    return full_list, deduped_list


def get_top_ten(full_list, deduped_list):
    count_dict = {}
    for item in deduped_list:
        count_dict[item] = full_list.count(item)
    top_ten = sorted(count_dict, key=count_dict.get, reverse=True)[:10]

    return top_ten, count_dict


# Get a list of all IP addresses that connected to the honeypot.
# And a deduplicated list too, Then calculate the top ten IP addresses
# and how often they connected
ip_list, deduped_ip_list = get_lists(data, "src_ip")
top_ten_ips, ip_freq_dict = get_top_ten(ip_list, deduped_ip_list)

# Get a list of all passwords used and a list of deduplicated passwords
# Then use those to calculate the top ten passwords and how often they were used
password_list, deduped_password_list = get_lists(data, "password")
top_ten_passwords, pass_freq_dict = get_top_ten(password_list, deduped_password_list)

# Get a list of all usernames that were tried
# Figure out the top 10 users by connection attempts
user_list, deduped_user_list = get_lists(data, "username")
top_ten_users, user_freq_dict = get_top_ten(user_list, deduped_user_list)

# Het a list of all inputs that were tried
# Get top 10 commands
cmds_list, deduped_cmd_list = get_lists(data, "input")
top_ten_cmds, cmds_freq_list = get_top_ten(cmds_list, deduped_cmd_list)

print("\n\n\t\tHONEYPOT ANALYSIS\n\n")
print("Total unique attacker IPS: {}".format(len(deduped_ip_list)))
print("Top 10 attackers by IP:\n")
print("\tIP\t\tConnections\tCountry\tCity")
for x in top_ten_ips:
    print("\t{:15}\t{}".format(x, ip_freq_dict[x])),
    country, city = get_ip_location(x)
    print('\t\t{}\t{}'.format(country, city))
print("\n\tMost common usernames\tMost common passwords:\n")
for x in range(0, 10):
    print("user:\t{:10}\t{}".format(top_ten_users[x], user_freq_dict[top_ten_users[x]])),
    print("passwd:\t{:10}\t{}".format(top_ten_passwords[x], pass_freq_dict[top_ten_passwords[x]]))
print("\n\tMost common commands\n")
for x in range(0, 10):
    print("\t{:8}\t{}".format(top_ten_cmds[x], cmds_freq_list[top_ten_cmds[x]]))
