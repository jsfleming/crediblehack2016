'''
Created on Apr 10, 2016

@author: Victor
'''
import json
import requests

url = 'https://stageservices.crediblebh.com/bitcamp/api/'
employee_list = ['sbrin', 'cchung', 'ldavid', 'jhenson', 'gking']
schedule_list = list()

for employee in employee_list:
    r = requests.post(url + 'account/mobilelogin',
                      data = {
                              "Password": "6eb151338030ac420e4cbcd4ff8ac28f",
                              "UserName": employee,
                              "Domain": "BITCAMP",
                              "ApplicationId": "com.crediblebh.care"
                              }
                      )

    token = r.json()["SecurityToken"]

    header = {
              "Authorization": "Bearer {}".format(token),
              "Content-Type": "application/json"
    }

    r = requests.get(url + 'schedules',
                     headers = header
                     )
    
    for scheduled_event in r.json():
        schedule_list.append(scheduled_event)
    print json.dumps(r.json(), indent=4, sort_keys=True)