'''
Created on Apr 9, 2016

@author: Victor
'''

import datetime
import requests
import json
from gettext import lngettext

link = 'https://www.google.com/maps/embed/v1/'
api_key = '?key=AIzaSyAd1Q67XiaiBREcNWNff5o7RgeptKSXJ4o'


today = datetime.date.today()

year = today.year
month = today.month
#day = today.day

day = 8

formatted_date = today.year.__str__() + '-' + month.__str__().zfill(2) + '-' + day.__str__().zfill(2)

print formatted_date

url = 'https://stageservices.crediblebh.com/bitcamp/api/'

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

r = requests.get(url + 'schedules?startDate=' + formatted_date + '&endDate=' + formatted_date + '&page=1&perPage=100&sort=clientId&count=1',
                  headers = header
                  )

#print r
#print json.dumps(r.json(), indent=4, sort_keys=True)

place_list = list()
time_dict = dict()

for sched in r.json():
    clientId = sched['clientId']
    r = requests.get(url + 'clients/' + clientId.__str__() + '/profiles',
                 headers = header
                 )
    address = r.json()['address1']
    city = r.json()['city']
    abbrev = r.json()['stateAbbreviation']
    place = address + ',' + city + ',' + abbrev
    place_list.append(place)
    time_dict[sched['DateAndTimePlanned']] = place

for key in time_dict:
    time_dict[key] = time_dict[key].replace(' ', '+')
#    print key + ' : ' + time_dict[key]

r = requests.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAd1Q67XiaiBREcNWNff5o7RgeptKSXJ4o')

lat = r.json()["location"]["lat"]
lng = r.json()["location"]["lng"]

print lat
print lng

if time_dict.__len__() == 0:
    link = link + 'place' + api_key +'&q=' + lat.__str__() + ',' + lng.__str__()
else :
    link = link + 'directions' + api_key
    orig = '&origin=' + lat.__str__() + ',' + lng.__str__()
    dest = '&destination=' + place_list[-1].replace(' ', '+')
    waypt = '&waypoints='
    place_list.pop()
    if place_list.__len__() != 0:
        while place_list.__len__() != 0:
            waypt = waypt + place_list[0].replace(' ', '+') + '|'
            place_list.pop()
        waypt = waypt[:-1]
    if waypt == '&waypoints=':
        link = link + orig + dest
    else :
        link = link + orig + dest + waypt

print link