'''
Created on Apr 9, 2016

@author: Victor
'''

import json
import requests

url = 'https://stageservices.crediblebh.com/bitcamp/api/'
employee_id_list = [3935, 3936, 3937, 3938, 3939]
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

#print e_id

#print token

header = {
            "Authorization": "Bearer {}".format(token),
            "Content-Type": "application/json"
}

r = requests.post(url + 'employees/detailList',
                 data = json.dumps({"EmployeeIdList" : employee_id_list}),
                 headers = header
                 )

print json.dumps(r.json(), indent=4, sort_keys=True)