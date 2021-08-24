#!/bin/sh

python src/crawler_gmRslts.py

for month in 4 5 6 7 8
do
  if [ ${month} -eq 4 ]; then
    for day in `seq 2 30` ;
    do
      python src/read_data.py --m ${month} --d ${day}
      if [ ${day} -eq 2 ]; then
        ./psKBO "$month" "$day" 1 10
      else
        ./psKBO "$month" "$day" 0 10
      fi
      rm -rf Result_through_*.csv
    done
  elif [ ${month} -eq 8 ]; then
    for day in `seq 1 9`
    do
      python src/read_data.py --m ${month} --d ${day}
      ./psKBO "$month" "$day" 0 10
      rm -rf Result_through_*.csv
    done
  elif [ ${month} -eq 5 ] || [ ${month} -eq 7 ]; then
    for day in $(seq 31)
    do
      python src/read_data.py --m ${month} --d ${day}
      ./psKBO "$month" "$day" 0 10
      rm -rf Result_through_*.csv
    done
  else
    for day in $(seq 30)
    do
      python src/read_data.py --m ${month} --d ${day}
      ./psKBO "$month" "$day" 0 10
      rm -rf Result_through_*.csv
    done
  fi
  echo $month ended!
done

rm -rf *_2021.csv
rm -rf opp_res.csv
rm -rf remained_game.csv
rm -rf wpct_data.csv

python draw_PS.py
python draw_KS.py
python draw_PO.py
python draw_SP.py
