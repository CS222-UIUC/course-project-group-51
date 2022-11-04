from bs4 import BeautifulSoup
from lxml import html
import requests
import csv


# source = requests.get('https://www.smilestudentliving.com/availability').text
# source = requests.get('https://jsmliving.com/search-available-units').text
source = requests.get('https://www.bankierapartments.com/apartments').text
# source = requests.get('https://ugroupcu.com/apartment-search/').text


soup = BeautifulSoup(source, 'lxml')
avail_units = 0

csv_file = open('bankier_scrape.csv', 'w')

csv_writer = csv.writer(csv_file)
csv_writer.writerow(['Company', 'Title', 'Address'])

# art = soup.find('span', class_ = "title").text
# print(art)

# for article in soup.find_all('span', class_ = "address"):
#     print(article.text)

titles = []
addresses = []

for article in soup.find_all('span', class_ = "title"):
    titles.append(article.text)

for article in soup.find_all('span', class_ = "address"):
    addresses.append(article.text)

for i in range(0, len(titles)):
    csv_writer.writerow(["Bankier", titles[i], addresses[i]])


print("done")

csv_file.close()

# project_href = [i['href'] for i in soup.find_all('a', href=True)]
# print(project_href)

