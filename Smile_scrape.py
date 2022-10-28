# https://medium.com/@raiyanquaium/how-to-web-scrape-using-beautiful-soup-in-python-without-running-into-http-error-403-554875e5abed
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import requests
import csv
from selenium import webdriver

d = webdriver.Chrome(r'C:\Users\User\Documents\chromedriver.exe')
d.get('https://www.smilestudentliving.com/availability')
print(d.find_element_by_class_name('listing-item').text)
d.quit()

# url = 'https://www.smilestudentliving.com/availability'
# source = Request(url, headers= {'User-Agent': 'Mozilla/5.0'})
# webpage = urlopen(source).read()

# soup = BeautifulSoup(webpage, 'lxml')
# avail_units = 0

# # csv_file = open('Smile_scraped.csv', 'w')

# # csv_writer = csv.writer(csv_file)
# # csv_writer.writerow(['Address', 'Rent', 'Bedrooms', 'Bathrooms'])

# article = soup.find_all('div', class_ = 'listing-item')
# print(article)

# print(soup)