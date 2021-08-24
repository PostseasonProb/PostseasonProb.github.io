#!/bin/sh

#python src/crawler_gmRslts.py

DAY=12
#$(date -d "-1 day" '+%d')
MONTH=$(date -d "$D" '+%m')

python src/read_data.py --m ${MONTH} --d ${DAY}
if [ ${MONTH} -eq 4 ] && [ ${DAY} -eq 2 ]; then
	./psKBO "$MONTH" "$DAY" 1 10
else
	./psKBO "$MONTH" "$DAY" 0 10
fi
rm -rf Result_through_*.csv
#rm -rf *_2021.csv
rm -rf opp_res.csv
rm -rf remained_game.csv
rm -rf wpct_data.csv

#python3 draw_PS.py
#python3 draw_KS.py
#python3 draw_PO.py
#python3 draw_SP.py 
