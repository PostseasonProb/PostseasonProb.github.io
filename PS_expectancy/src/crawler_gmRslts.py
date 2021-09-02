import numpy as np
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from datetime import datetime
import pathlib
import re

options = webdriver.ChromeOptions()
options.add_argument("headless")

fileread = open(str(pathlib.Path().resolve())+'/TmText.txt', 'r')

today = datetime.today()
month = today.month

while True:
    searchList = []
    line = fileread.readline()
    if not line: break
    m = re.findall(r'\s|,|[^,\s]+,|[^=\s]+',line)
    search_team = m[2]
    search_year = m[0]
    
    if (search_team == '두산'):
        tcode = 'OB'
    elif (search_team == '롯데'):
        tcode = 'LT'
    elif (search_team == '삼성'):
        tcode = 'SS'
    elif (search_team == '한화'):
        tcode = 'HH'
    elif (search_team == '키움'):
        tcode = 'WO'
    elif (search_team == 'KIA'):
        tcode = 'HT'
    elif (search_team == 'KT'):
        tcode = 'KT'
    elif (search_team == 'LG'):
        tcode = 'LG'
    elif (search_team == 'NC'):
        tcode = 'NC'
    elif (search_team == 'SSG'):
        tcode = 'SK'
    else:
        tcode = ''

    driver = webdriver.Chrome(str(pathlib.Path().resolve())+'/chromedriver', options=options)
    url=driver.get('https://www.koreabaseball.com/Schedule/Schedule.aspx')
    driver.find_element_by_xpath("//select[@id='ddlSeries']/option[text()='KBO 정규시즌 일정']").click()
    driver.find_element_by_xpath("//ul[@class='tab-schedule']/li[@attr-value = '"+tcode+"']").click()#//select[@id='ddlYear']/option[text()='"+search_year+"']").click()
    driver.find_element_by_xpath("//select[@id='ddlYear']/option[text()='"+search_year+"']").click()#//ul[@class='tab-schedule']/li[@attr-value = '"+tcode+"']").click()
    for i in range (4,month+1):
        driver.find_element_by_xpath("//select[@id='ddlMonth']/option[text()='"+format(i,'02d')+"']").click()
        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')
        Schedule = soup.find('table',{'class':'tbl'})
        trs = Schedule.find_all('tr')
        for idx, tr in enumerate(trs):
            if (idx > 0):
                tds = tr.find_all('td')
                if (re.findall('<td class="play">',str(tds[1]))):
                    temp = ['',tds[1].text.strip(),tds[6].text.strip()]
                else:
                    temp = [tds[0].text.strip(), tds[2].text.strip(), tds[7].text.strip()]
                searchList.append(temp)
	
    data = pd.DataFrame(searchList)
    data.columns = ['day', 'result', 'park']
    driver.close()
    for x in range (len(data)):
        data.loc[x,'W'] = 0
        data.loc[x,'T'] = 0
        data.loc[x,'L'] = 0
        TmAway = bool(re.search(search_team+'\d{1,2}', data.loc[x, 'result']))
        TmHome = bool(re.search('\d{1,2}'+search_team, data.loc[x, 'result']))
        data.loc[x,'month'] = re.sub('(\d{2})\W(\d{2})\W\w\W','\\1',data.loc[x,'day'])
        data.loc[x,'date'] = re.sub('(\d{2})\W(\d{2})\W\w\W','\\2',data.loc[x,'day'])
        if (data.loc[x,'day'] == ''):
            data.loc[x,'day'] = data.loc[x-1,'day']
            data.loc[x,'month'] = data.loc[x-1,'month']
            data.loc[x,'date'] = data.loc[x-1,'date']
        if (TmAway == True):
            data.loc[x,'RS'] = int(re.sub('('+search_team+')(\d{1,2})\w\w(\d{1,2})(KIA|KT|LG|NC|SSG|두산|롯데|삼성|키움|한화)','\\2', data.loc[x, 'result']))
            data.loc[x,'RA'] = int(re.sub('('+search_team+')(\d{1,2})\w\w(\d{1,2})(KIA|KT|LG|NC|SSG|두산|롯데|삼성|키움|한화)','\\3', data.loc[x, 'result']))
            data.loc[x,'Opp'] = re.sub(search_team+'\d{1,2}\w\w\d{1,2}(KIA|KT|LG|NC|SSG|두산|롯데|삼성|키움|한화)','\\1', data.loc[x, 'result'])
            data.loc[x,'HA'] = 0
            if ((search_team == '두산' and data.loc[x,'Opp'] == 'LG') or (search_team == 'LG' and data.loc[x,'Opp'] == '두산')):
                data.loc[x,'js'] = 1
            else:
                data.loc[x,'js'] = 0
        elif (TmHome == True):
            data.loc[x,'RS'] = int(re.sub('(KIA|KT|LG|NC|SSG|두산|롯데|삼성|키움|한화)(\d{1,2})\w\w(\d{1,2})('+search_team+')','\\3', data.loc[x, 'result']))
            data.loc[x,'RA'] = int(re.sub('(KIA|KT|LG|NC|SSG|두산|롯데|삼성|키움|한화)(\d{1,2})\w\w(\d{1,2})('+search_team+')','\\2', data.loc[x, 'result']))
            data.loc[x,'Opp'] = re.sub('(KIA|KT|LG|NC|SSG|두산|롯데|삼성|키움|한화)\d{1,2}\w\w\d{1,2}'+search_team,'\\1', data.loc[x, 'result'])
            data.loc[x,'HA'] = 1
            if ((search_team == '두산' and data.loc[x,'Opp'] == 'LG') or (search_team == 'LG' and data.loc[x,'Opp'] == '두산')):
                data.loc[x,'js'] = 1
            else:
                data.loc[x,'js'] = 0

    data = data.dropna(axis=0)
    data = data.drop(['result'],axis=1)
    data.index = np.arange(1,len(data)+1)
    data.index.name='games'
    data['RS_avg'] = data['RS'].cumsum()/data.index
    data['RA_avg'] = data['RA'].cumsum()/data.index
    data['exWPCT'] = data['RS_avg']**1.83/(data['RS_avg']**1.83+data['RA_avg']**1.83)
    for x in range (1,len(data)+1):
        if (data.loc[x,'RS'] > data.loc[x,'RA']):
            data.loc[x,'W'] = 1
        elif (data.loc[x,'RS'] < data.loc[x,'RA']):
            data.loc[x,'L'] = 1
        else:
            data.loc[x,'T'] = 1
    data.to_csv(str(pathlib.Path().resolve())+'/'+search_team+'_'+search_year+'.csv')

fileread.close()
