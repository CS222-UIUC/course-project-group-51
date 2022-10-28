from bs4 import BeautifulSoup
import requests
import csv

source = requests.get('https://jsmliving.com/search-available-units').text

soup = BeautifulSoup(source, 'lxml')
avail_units = 0

csv_file = open('JSM_scraped_info.csv', 'w')

csv_writer = csv.writer(csv_file)
csv_writer.writerow(['Address', 'Rent', 'Bedrooms', 'Bathrooms'])

for article in soup.find_all('article'):
    rent = article.find('div', class_ = "unit__card-rent").text
    if "No Units Available" in rent: 
        break
    rent2 = rent.split(':')

    avail_units += 1
    # print(avail_units)

    
    #address = article.find('div', class_= "field field--name-field-building field--type-entity-reference field--label-hidden field--item").a.text
    address = article.h4.a.text
    # print(address)

    print(rent2[1].strip())

    bed = article.find('div', class_ = 'unit__card-bedrooms').p.text
    # print(bed)

    bath = article.find('div', class_ = 'unit__card-bathrooms').p.text
    # print(bath)
    # print("--------")
    
    csv_writer.writerow([address, rent2[1].strip(), bed, bath])

csv_file.close()