import chart_studio
import matplotlib
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import pathlib
import plotly.graph_objects as go
import plotly.io as pio
#import chart_studio.plotly as py

#username = 'dnyeum'
#api_key = '4ymtgYOvLAMzYbgGSwCW'
#chart_studio.tools.set_credentials_file(username=username, api_key=api_key)

mname=['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
team = ['두산','롯데','삼성','키움','한화','KIA','KT','LG','NC','SSG']

noteams = len(team)
tcolors = ['#131239','#002955','#074ca1','#820024','#ff6600','#ea0029','#000000','#c30452','#315288','#ff0000']
ecolors = ['#ed1c24','#dc0232','#074ca1','#b07f4a','#000000','#06141f','#eb1c24','#000000','#af917b','#ffa500']
col_names = ['MM','DD','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','wins']

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

for x in range (0,noteams):
    date.append([])
    for y in range (0,length):
        date[x].append(mname[data[x].loc[y,'MM']-1]+" "+str(data[x].loc[y,'DD']).zfill(2))
        if(x == 0):
            datenum[y] = (data[x].loc[y,'MM'])*31+(data[x].loc[y,'DD'])
        xtrick[x][y] = y
        wins[x][y] = data[x].loc[y,col_names[noteams+2]]

tick_where = []
tick_print = []

for x in range (0,length):
    if (np.mod(datenum[x],31) == 1):
        tick_where.append(x)
        month = int(datenum[x]/31)-1
        tick_print.append(mname[month])

fig = go.Figure()
for i in range (0,noteams):
    fig.add_trace(go.Scatter(x=date[i],y=wins[i],mode='lines',name=team[i], line=dict(width=4,color=tcolors[i])))
config = dict({'displayModeBar': False})

fig.update_xaxes(showgrid=False)
fig.update_yaxes(showgrid=True,gridcolor='LightGray',gridwidth=1)
fig.update_layout(plot_bgcolor="white")
fig.layout.yaxis.tickformat = ',.1f'
fig.update_yaxes(range=[40,100])
fig.update_layout(barmode='group', hovermode='x')
fig.update_layout(xaxis = dict(tickmode = 'array',tickvals = tick_where,ticktext = tick_print))
#py.plot(fig,filename='WINS_2020.html',auto_open=False,config=config)
pio.write_html(fig, file=str(pathlib.Path().resolve())+'/WINS_2020.html',auto_open=False,config=config)
