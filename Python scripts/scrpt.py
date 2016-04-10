'''
Created on Apr 9, 2016

@author: Victor
'''
import json
import requests

url = 'https://stageservices.crediblebh.com/bitcamp/api/'
client_id_list = list()
json_list = list()

r = requests.post(url + 'account/mobilelogin',
                  data = {
                        "Password": "6eb151338030ac420e4cbcd4ff8ac28f",
                        "UserName": "sbrin",
                        "Domain": "BITCAMP",
                        "ApplicationId": "com.crediblebh.care"
                        }
                  )

token = r.json()["SecurityToken"]
e_id = r.json()["EmployeeId"]

#print token

header = {
            "Authorization": "Bearer {}".format(token),
            "Content-Type": "application/json"
        }

r = requests.get(url + 'clients', headers = header)

#print json.dumps(r.json(), indent=4, sort_keys=True)

for client in r.json():
    client_id_list.append(client["clientId"])
    
client_id_list = list(set(client_id_list))

#for client_id in client_id_list:
#    print client_id
    
for client in client_id_list:
    r = requests.get(url + 'clients/'+ str(client)  +'/medications?count=' + str(len(client_id_list)),
                  data = json.dumps({"ClientIdList" : client_id_list}),
                  headers = header
                  )
    print json.dumps(r.json(), indent=4, sort_keys=False)
