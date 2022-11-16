""" Scrapes data from Ramshaw Apartments """
import csv
from bs4 import BeautifulSoup #pylint: disable=E0401
import requests #pylint: disable=E0401

def contains_number(value):
    """ Checks if a string contains a digit """
    for character in value:
        if character.isdigit():
            return True
    return False

# source = requests.get('https://www.smilestudentliving.com/availability').text
# source = requests.get('https://jsmliving.com/search-available-units').text
# source = requests.get('https://www.bankierapartments.com/apartments').text
# source = requests.get('https://ugroupcu.com/apartment-search/').text
# source = requests.get('https://www.greenstrealty.com/properties/search/area/
# on-campus/availability/Available%20Now/availability/Available%20August%202023').text

source = requests.get('https://ramshaw.com/apartments-for-rent/', timeout=10).text

soup = BeautifulSoup(source, 'lxml')
AVAIL_UNITS = 0

with open('ramshaw_scrape.csv', 'w', encoding='utf8') as csv_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(['Company', 'Address'])

    addresses = []

    project_href = [i['title'] for i in soup.find_all('a', title =True)]

    # print(project_href)

    # for i in project_href:
    #     if (i[0] != '"'):
    #         project_href.remove(i)

    project_href.pop(0)
    project_href.pop(0)
    project_href.pop(0)
    project_href.pop(0)
    project_href.pop(0)
    project_href.pop(0)
    project_href.pop(0)
    project_href.pop(0)
    project_href.pop(0)

    project_href = project_href[::2]

    for i in project_href:
        csv_writer.writerow(["Ramshaw", i])


# for i in project_href:
#     if ("https://ramshaw.com/properties" in i):
#         dat = i.replace('https://ramshaw.com/properties/', '')
#         chunk = dat.replace('-', ' ')
#         addresses.append(chunk)

# print(addresses)
