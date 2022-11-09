""" Scraping from JSM """
import csv
from bs4 import BeautifulSoup
import requests

source = requests.get('https://jsmliving.com/search-available-units', timeout=10).text

soup = BeautifulSoup(source, 'lxml')
AVAIL_UNITS = 0

with open('JSM_scraped_info.csv', 'w', encoding='utf8') as csv_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(['Address', 'Rent', 'Bedrooms', 'Bathrooms'])

    for article in soup.find_all('article'):
        rent = article.find('div', class_ = "unit__card-rent").text
        if "No Units Available" in rent:
            break
        rent2 = rent.split(':')

        AVAIL_UNITS += 1
        # print(avail_units)
        # address = article.find('div',
        # class_= "field field--name-field-building field--type-entity-reference
        # field--label-hidden field--item").a.text
        address = article.h4.a.text
        # print(address)

        print(rent2[1].strip())

        bed = article.find('div', class_ = 'unit__card-bedrooms').p.text
        # print(bed)

        bath = article.find('div', class_ = 'unit__card-bathrooms').p.text
        # print(bath)
        # print("--------")
        csv_writer.writerow([address, rent2[1].strip(), bed, bath])
