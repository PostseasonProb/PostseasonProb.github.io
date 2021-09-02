import pandas as pd
import numpy as np
import pathlib
import datetime

mname=['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
team = ['두산','롯데','삼성','키움','한화','KIA','KT','LG','NC','SSG']
col_names = ['MM','DD','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','wins','ties']

noteams = len(team)

data = {}

for x in team:
    fname = str(pathlib.Path().resolve())+'/'+x+'.csv'
    data[team.index(x)] = pd.read_csv(fname,names=col_names,header=None)

length = len(data[0])
date = [[]]
datenum = np.empty(length)
xtrick = np.zeros((10,length),dtype=int)
percentage = np.zeros((10,10,length),dtype=float)
wins = np.zeros((10,length),dtype=float)
PS_odd = np.zeros((10,length),dtype=float)
ties = np.zeros((10,length),dtype=float)

for x in range (0,noteams):
    date.append([])
    for y in range (0,length):
        date[x].append(mname[data[x].loc[y,'MM']-1]+" "+str(data[x].loc[y,'DD']).zfill(2))
        if(x == 0):
            datenum[y] = (data[x].loc[y,'MM'])*31+(data[x].loc[y,'DD'])
        xtrick[x][y] = y
        for z in range (0,noteams):
            percentage[x][z][y] = data[x].loc[y,col_names[z+2]]
        wins[x][y] = data[x].loc[y,col_names[noteams+2]]
        ties[x][y] = data[x].loc[y,col_names[noteams+3]]
        PS_odd[x][y] = (percentage[x][0][y] + percentage[x][1][y] + percentage[x][2][y] + percentage[x][3][y] + percentage[x][4][y])/100000.

res_column = ['팀','경기','기대승리','무승부','기대패배','기대승률','PS_odds']
res_df = pd.DataFrame(columns=res_column)
res_df['팀'] = team
res_df['경기'] = [144,144,144,144,144,144,144,144,144,144]
for x in range (noteams):
    res_df['무승부'][x] = float(ties[x][length-1])
    res_df['기대승리'][x] = float(wins[x][length-1])-float(ties[x][length-1])/2.
    res_df['PS_odds'][x] = format(PS_odd[x][length-1]*100.,'.1f')+'%'
    res_df['기대패배'][x] = res_df['경기'][x]-res_df['기대승리'][x]-res_df['무승부'][x]
    res_df['기대승률'][x]=res_df['기대승리'][x]/(res_df['기대승리'][x]+res_df['기대패배'][x])
    res_df['무승부'][x] = res_df['무승부'][x]
    res_df['기대승리'][x] = format(res_df['기대승리'][x],'.1f')
    res_df['기대패배'][x] = format(res_df['기대패배'][x],'.1f')
    res_df['기대승률'][x] = format(res_df['기대승률'][x],'.3f')
res_df = res_df.sort_values(by=['기대승률'],axis=0,ascending=False)
res_df = res_df.reset_index(drop=True)
res_df.index+=1
res_df.index.name='기대순위'

today = datetime.datetime.now()-datetime.timedelta(days=1)

year = today.year
month = today.month
day = today.day

length = len(res_df)

oFile = open(str(pathlib.Path().resolve())+"/../rank_table.html","w")
oFile.write("<h2> 2021시즌 기대 순위 </h2>\n")
oFile.write("<p>"+str(year)+"년 "+str(month)+"월 "+str(day)+"일까지</p><br>\n")
oFile.write("<table>\n")
oFile.write("<tr>\n")
oFile.write("<th>기대순위</th> <th>팀</th> <th>기대승리</th> <th>무승부</th> <th>기대패배</th> <th>기대승률</th> <th>PS_odds</th>\n")
oFile.write("</tr>\n")
for x in range (1,length+1):
        oFile.write("<tr>\n")
        oFile.write("<td>"+str(x)+"</td> <td>"+str(res_df.loc[x,'팀'])+"</td> <td>"+str(res_df.loc[x,'기대승리'])+"</td> <td>"+str(res_df.loc[x,'무승부'])+"</td> <td>"+str(res_df.loc[x,'기대패배'])+"</td> <td>"+str(res_df.loc[x,'기대승률'])+"</td> <td>"+str(res_df.loc[x,'PS_odds'])+"</td>\n")
        oFile.write("</tr>\n")
oFile.write("</table>")
oFile.close()
