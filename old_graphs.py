import matplotlib
import matplotlib.pyplot as plt
from matplotlib.patches import Patch
import matplotlib.font_manager as fm
import pandas as pd
import numpy as np
import mpld3

font_loc = '/usr/share/fonts/truetype/nanum/NanumGothic.ttf'
font_name = fm.FontProperties(fname=font_loc).get_name()
matplotlib.rc('font', family=font_name)

team = ['두산','롯데','삼성','키움','한화','KIA','KT','LG','NC','SK']
noteams = len(team)
tcolors = ['navy','darkgoldenrod','blue','firebrick','darkorange','red','black','mediumvioletred','royalblue','crimson']
ecolors = ['red','red','mediumblue','goldenrod','black','black','red','black','goldenrod','red']
col_names = ['MM','DD','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th']

legend_elements= [Patch(facecolor='navy',edgecolor='red',label='두산'),Patch(facecolor='darkgoldenrod',edgecolor='red',label='롯데'),Patch(facecolor='blue',edgecolor='mediumblue',label='삼성'),Patch(facecolor='firebrick',edgecolor='goldenrod',label='키움'),Patch(facecolor='darkorange',edgecolor='black',label='한화'),Patch(facecolor='red',edgecolor='black',label='KIA'),Patch(facecolor='black',edgecolor='red',label='KT'),Patch(facecolor='mediumvioletred',edgecolor='black',label='LG'),Patch(facecolor='royalblue',edgecolor='goldenrod',label='NC'),Patch(facecolor='crimson',edgecolor='red',label='SK')]

#plt.ion()
fig = plt.figure(dpi=200)
data = {}

for x in team:
	fname = x+'.csv'
	data[team.index(x)] = pd.read_csv(fname,names=col_names,header=None)

length = len(data[0])
date = np.empty((10,length))
xtrick = np.zeros((10,length),dtype=int)
percentage = np.zeros((10,10,length),dtype=float)
PS_odd = np.zeros((10,length),dtype=float)

for x in range (0,noteams):
	for y in range (0,length):
		date[x][y] = str(data[x].loc[y,'MM'])+"."+str(data[x].loc[y,'DD'])
		xtrick[x][y] = y
		for z in range (0,noteams):
			percentage[x][z][y] = data[x].loc[y,col_names[z+2]]
		PS_odd[x][y] = percentage[x][0][y] + percentage[x][1][y] + percentage[x][2][y] + percentage[x][3][y] + percentage[x][4][y]

date_interval = int(length/20)
tick_print = [None]*21
for z in range (0,21):
	tick_print[z] = date[0,int((z)*date_interval)]

for x in range (0,noteams):
	plt.plot(xtrick[x],PS_odd[x],color=ecolors[x],linewidth=4)
	plt.plot(xtrick[x],PS_odd[x],color=tcolors[x],linewidth=2)
	plt.xlim([0,length-1])
	plt.ylim([0,1])
	plt.gca().set_yticklabels(['{:.0f}%'.format(x*200) for x in plt.gca().get_yticks()])

plt.xticks(xtrick[0],tick_print,rotation=45)
plt.locator_params(axis='x',nbins=21)
plt.tick_params(axis='x',which='major',labelsize=6)
plt.ylabel('PS %')
plt.grid(True,linestyle='--')
fig.subplots_adjust(left=0.16,right=0.9)
plt.legend(handles=legend_elements,title='',loc='upper right',bbox_to_anchor=(1.15,1))

def update_plot(ind):

    pos = sc.get_offsets()[ind["ind"][0]]

html_str = mpld3.fig_to_html(fig)
Html_file = open("index.html","w")
Html_file.write(html_str)
Html_file.close()
#plt.show()
#plt.savefig('PS_odd_2020.png',dpi=200)
