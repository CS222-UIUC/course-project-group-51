from bs4 import BeautifulSoup
from lxml import html
import requests
import csv

source = requests.get('https://www.smilestudentliving.com/availability').text
# source = requests.get('https://jsmliving.com/search-available-units').text
# source = requests.get('https://www.bankierapartments.com/apartments').text

soup = BeautifulSoup(source, 'lxml')
avail_units = 0

csv_file = open('smile_scrape.csv', 'w')

csv_writer = csv.writer(csv_file)
csv_writer.writerow(['Address', 'Rent'])

art = soup.find('div', class_ ='info').h3.text
print(art)

# for article in soup.find_all('article'):
#     print("loop")
#     rent = article.find('div', class_ = "rent").text
#     print(rent)


# page = requests.get('https://www.smilestudentliving.com/availability')
# tree = html.fromstring(page.content)

# rent = tree.xpath('//*[@id="1307928463"]/div/div/div[2]/div[2]/section/div[1]/div[2]/h3/div/text()')
# print(rent)


print("done")

