from scipy.stats import binom
import argparse
import numpy as np
import pandas as pd
import re

parser = argparse.ArgumentParser(description='Get a data until the date through')
parser.add_argument('--m',type=int, help='month', required=True)
parser.add_argument('--d',type=int, help='day', required=True)

args = parser.parse_args()
fmonth = args.m
fdate = args.d

pivoth = 0.5**0.914
pivota = 1 - pivoth

def adjust(a,b,number,total):
    stemp = 0
    for x in range (number):
        stemp += a[x] * b[x]
    adj = stemp / float(total)
    return adj

def calibration(a,b):
    num = len(a)
    tot = np.sum(b)
    if (tot == 0):
        return a
    else:
        adj = adjust(a,b,num,tot)
        while (np.abs(adj-0.5) > 1.0e-7):
            temp = np.ones(num, dtype=float)
            wtemp = np.zeros(num, dtype=float)
            for x in range (num):
                wtemp[x] = adj
            odd = (a * (temp - wtemp)) / ((temp - a)*wtemp)
            for x in range (num):
                if (wtemp[x] == 1.0):
                    odd = 1.0e21
                elif (wtemp[x] == 0.0):
                    odd = 0.0
            a = odd/(temp+odd)
            for x in range (num):
                if (wtemp[x] == 1.0):
                    a = 1.0

            adj = adjust(a,b,num,tot)

        for x in range (num):
            a[x] *= 0.5 / adj
        return a

def calc_below(wpct,ha):
    wret = wpct
    equ = 100.
    slope = 1.
    dw = -equ / slope
    while (np.abs(dw) > 1.0e-7):
        if (ha == 1):       #Home game only, but expected < 0.500 wpct
            if (wret != 1.0):
                slope = -0.914*(1-wret)**(-0.086)+2
                equ = (1-wret)**0.914+2*wret-1-wpct
            else:
                equ = 0.0
        else:               #Away game only, but expected > 0.500 wpct
            if (wret != 1.0):
                slope = -0.914*(1-wret)**(-0.086)+2
                equ = 2 * wret - wret**0.914-wpct
            else:
                equ = 0.0
        dw = -equ/slope
        wret += dw
    return wret

def wp_convert(wpct,ha):
    wret = 0.5
    if (ha == 1):           #Home game only
        if (wpct >= pivoth):
            wret = wpct**(1./0.914)
        else:
            wret = calc_below(wpct,ha)
    else:                   #Away game only
        if (wpct >= pivota):
            wret = calc_below(wpct,ha)
        else:
            wret = 1 - (1 - wpct)**(1./0.914)
    return wret

fileread = open('TmText.txt', 'r')

search_team = []
KBO_data = {}
num = 0

while True:
    line = fileread.readline()
    if not line: break
    m = re.findall(r'\s|,|[^,\s]+,|[^=\s]+',line)
    search_year = m[0]
    search_team.append(m[2])
    fname = (search_team[num]+'_'+search_year+'.csv')
    #print('Search for the TEAM '+search_team[num])
    KBO_data[search_team[num]] = pd.read_csv(fname)
    num += 1
fileread.close()

for teams in search_team:
    for x in range (len(KBO_data[teams])):
        for opp in search_team:
            if (KBO_data[teams].loc[x,'Opp'] == opp):
                KBO_data[teams].loc[x,opp] = 1
            else:
                KBO_data[teams].loc[x,opp] = 0

pyt_w = []
pyt_g = []
w_sum = []
t_sum = []
l_sum = []
rs_sum = []
ra_sum = []
hg_sum = []

num = 0
for teams in search_team:
    w_sum.append(np.sum(KBO_data[teams].loc[(KBO_data[teams]['month']*31+KBO_data[teams]['date'] <=fmonth*31+fdate),'W']))
    t_sum.append(np.sum(KBO_data[teams].loc[(KBO_data[teams]['month']*31+KBO_data[teams]['date'] <=fmonth*31+fdate),'T']))
    l_sum.append(np.sum(KBO_data[teams].loc[(KBO_data[teams]['month']*31+KBO_data[teams]['date'] <=fmonth*31+fdate),'L']))
    rs_sum.append(np.sum(KBO_data[teams].loc[(KBO_data[teams]['month']*31+KBO_data[teams]['date'] <=fmonth*31+fdate),'RS']))
    ra_sum.append(np.sum(KBO_data[teams].loc[(KBO_data[teams]['month']*31+KBO_data[teams]['date'] <=fmonth*31+fdate),'RA']))
    pyt_g.append(w_sum[num]+t_sum[num]+l_sum[num])
    hg_sum.append(np.sum(KBO_data[teams].loc[(KBO_data[teams]['month']*31+KBO_data[teams]['date'] <=fmonth*31+fdate),'HA']))
    if (pyt_g[search_team.index(teams)] > 0):
        hg_sum[search_team.index(teams)] *= 1/(float)(pyt_g[search_team.index(teams)])
    num+=1

if (np.sum(pyt_g) == 0):
    run_avg = 0
else:
    run_avg = np.sum(rs_sum)/np.sum(pyt_g)

noteams = len(search_team)

for teams in range(noteams):
    if (pyt_g[teams] == 0):
        pyt_w.append(0.5)
    else:
        pyt_w.append(rs_sum[teams]**1.83/(rs_sum[teams]**1.83+ra_sum[teams]**1.83))

data_now = {'W':w_sum,'T':t_sum,'L':l_sum}
res_now = pd.DataFrame(data=data_now,index=search_team,columns=['W','T','L'])
res_now.index.name='Team'

res_now.to_csv('Result_through_'+format(fmonth,'02d')+'_'+format(fdate,'02d')+'.csv')

if (np.sum(pyt_g) > 0):
    pyt_w = calibration(pyt_w,pyt_g)

temp_w = np.zeros(noteams,dtype=float)
fin_w = np.zeros(noteams,dtype=float)
exw = np.zeros(noteams,dtype=float)

num = 0
dif_w = np.abs((pyt_w-temp_w))
rmsebef = 1.
rrmse = 0.
noinc = 0           #rrmse increasing
nodec = 0           #rrmse decreasing
noosc = 0           #number of oscillation
while ((np.max(dif_w) > 1.0e-7) and (noinc < 10) and (noosc < 100)):
    if (num == 0):
        temp_w = pyt_w[:]
        for x in range (noteams):
            if (np.sum(pyt_g) > 0):
                if (hg_sum[x] == 1.0 or hg_sum[x] == 0.0):
                    temp_w[x] = wp_convert(temp_w[x],hg_sum[x])
                    temp_w[x] = (-temp_w[x]+np.sqrt(temp_w[x]-temp_w[x]**2))/(1-2*temp_w[x])
    temp_w = calibration(temp_w,pyt_g)
    for teams in search_team:
        exw[search_team.index(teams)] = 0
        for x in range (noteams):
            if (pyt_w[search_team.index(teams)] > 0 and pyt_w[search_team.index(teams)] < 1):
                opp = (temp_w[search_team.index(teams)]*(1-temp_w[x]))/(temp_w[search_team.index(teams)]*(1-temp_w[x])+temp_w[x]*(1-temp_w[search_team.index(teams)]))
                if (opp >= 0.5):
                    opp_home = opp**0.914
                else:
                    opp_home = (1-opp)**0.914+2*opp-1
                opp_away = 2 * opp - opp_home
                exw[search_team.index(teams)] += np.sum(KBO_data[teams].loc[(KBO_data[teams]['month']*31+KBO_data[teams]['date'] <=fmonth*31+fdate) & (KBO_data[teams]['HA'] == 1), search_team[x]])*opp_home
                exw[search_team.index(teams)] += np.sum(KBO_data[teams].loc[(KBO_data[teams]['month']*31+KBO_data[teams]['date'] <=fmonth*31+fdate) & (KBO_data[teams]['HA'] == 0), search_team[x]])*opp_away
            else:
                exw[search_team.index(teams)] = pyt_w[search_team.index(teams)]
        if (pyt_g[search_team.index(teams)] == 0):
            exw[search_team.index(teams)] = 0.5
        else:
            exw[search_team.index(teams)] *= 1/pyt_g[search_team.index(teams)]
    temp = np.ones(noteams,dtype=float)
    odd = (temp_w*(temp-exw)*pyt_w) / ((temp-temp_w)*exw*(temp-pyt_w))
    for x in range (noteams):
        if (exw[x] == 1.0):
            odd[x] = 1.0e21
        elif (exw[x] == 0.0):
            odd[x] = 0
    temp_w = odd / (temp + odd)
    for x in range (noteams):
        if (exw[x] == 1.0):
            temp_w[x] = 1.0

    temp_w = calibration(temp_w,pyt_g)
    dif_w = np.abs(pyt_w-exw)
    rrmse = np.sqrt(np.sum(dif_w**2)/noteams)/rmsebef

    if ((noinc == 1) or (nodec == 1)):
        noosc += 1
    else:
        noosc = 0

    rmsebef = np.sqrt(np.sum(dif_w**2)/noteams)
    if (rrmse >= 1.0):
        noinc += 1
        nodec = 0
    else:
        noinc = 0
        nodec += 1
        fin_w = temp_w
    num+=1

pyt_w = temp_w

for teams in range(noteams):
    regre = 0.0
    if (pyt_g[teams] > 0):
        regre = pyt_g[teams]/144.
        pyt_w[teams] = pyt_w[teams] * regre + 0.5 * (1 - regre)
    else:
        pyt_w[teams] = 0.5

real_w = []

for x in range (noteams):
    if (pyt_g[x] == 0 or pyt_g[x] == 144):
        regression = 0.0
    else:
        regression = (0.57*np.exp(-0.08*(np.log(pyt_g[x]/(144-pyt_g[x])))**2))
    real_w.append(regression*float(pyt_w[x])+0.5*(1-regression))

real_w = calibration(real_w,pyt_g)

opp_remain_home = np.zeros((noteams,noteams),dtype=float)
opp_remain_away = np.zeros((noteams,noteams),dtype=float)
opp_wins = np.zeros((noteams,noteams),dtype=float)

for x in range (noteams):
    for y in range (noteams):
        temp_wh = np.sum(KBO_data[search_team[x]].loc[(KBO_data[search_team[x]]['month']*31+KBO_data[search_team[x]]['date'] <=fmonth*31+fdate) & (KBO_data[search_team[x]]['Opp'] == search_team[y]) & (KBO_data[search_team[x]]['HA'] == 1),'W'])
        temp_th = np.sum(KBO_data[search_team[x]].loc[(KBO_data[search_team[x]]['month']*31+KBO_data[search_team[x]]['date'] <=fmonth*31+fdate) & (KBO_data[search_team[x]]['Opp'] == search_team[y]) & (KBO_data[search_team[x]]['HA'] == 1),'T'])
        temp_lh = np.sum(KBO_data[search_team[x]].loc[(KBO_data[search_team[x]]['month']*31+KBO_data[search_team[x]]['date'] <=fmonth*31+fdate) & (KBO_data[search_team[x]]['Opp'] == search_team[y]) & (KBO_data[search_team[x]]['HA'] == 1),'L'])
        temp_wa = np.sum(KBO_data[search_team[x]].loc[(KBO_data[search_team[x]]['month']*31+KBO_data[search_team[x]]['date'] <=fmonth*31+fdate) & (KBO_data[search_team[x]]['Opp'] == search_team[y]) & (KBO_data[search_team[x]]['HA'] == 0),'W'])
        temp_ta = np.sum(KBO_data[search_team[x]].loc[(KBO_data[search_team[x]]['month']*31+KBO_data[search_team[x]]['date'] <=fmonth*31+fdate) & (KBO_data[search_team[x]]['Opp'] == search_team[y]) & (KBO_data[search_team[x]]['HA'] == 0),'T'])
        temp_la = np.sum(KBO_data[search_team[x]].loc[(KBO_data[search_team[x]]['month']*31+KBO_data[search_team[x]]['date'] <=fmonth*31+fdate) & (KBO_data[search_team[x]]['Opp'] == search_team[y]) & (KBO_data[search_team[x]]['HA'] == 0),'L'])
        if (x == y):
            opp_remain_home[x][y] = 0
            opp_remain_away[x][y] = 0
            opp_wins[x][y] = 0
        else:
            opp_remain_home[x][y] = 8-(temp_wh+temp_th+temp_lh)
            opp_remain_away[x][y] = 8-(temp_wa+temp_ta+temp_la)
            opp_wins[x][y] = temp_wh+temp_wa

wpct_data = pd.DataFrame(real_w,columns=["wpct"])
remain_home_data = pd.DataFrame()
remain_away_data = pd.DataFrame()
wins_until = pd.DataFrame()

for teams in search_team:
    remain_home_data[teams] = opp_remain_home[:,search_team.index(teams)]
    remain_away_data[teams] = opp_remain_away[:,search_team.index(teams)]
    wins_until[teams] = opp_wins[:,search_team.index(teams)]

wpct_data.index = search_team
wpct_data.index.name='Team'
remain_home_data.index = search_team
remain_home_data.index.name='Team'
remain_away_data.index = search_team
remain_away_data.index.name='Team'
wins_until.index = search_team
wins_until.index.name='Team'

wpct_data.to_csv('wpct_data.csv')
remain_home_data.to_csv('Home_remained_game.csv')
remain_away_data.to_csv('Away_remained_game.csv')
wins_until.to_csv('opp_res.csv')
