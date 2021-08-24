#include <iostream>
#include <fstream>
#include <string>
#include <stdlib.h>
#include <random>
#include <iomanip>
#include <sstream>
#include "psexpect.hpp"
using namespace std;

void bubble_sort(double list[][2],int n) {
  int i, j;
  double tempw, tempt;

  for (i=n-1; i>0; i--) {
    for (j=0; j<i; j++) {
      if (list[j][1] < list[j+1][1]) {
        tempw = list[j][1];
	list[j][1] = list[j+1][1];
	list[j+1][1] = tempw;
	tempt = list[j][0];
	list[j][0] = list[j+1][0];
	list[j+1][0] = tempt;
      }
    }
  }
}

int main(int argc, char **argv) {
  int fmonth, fday, openDay, numTeam;

  fmonth = atoi(argv[1]);
  fday = atoi(argv[2]);
  openDay = atoi(argv[3]);
  numTeam = atoi(argv[4]);

  stringstream monthint, dateint;
  monthint << setw(2) << setfill('0') << fmonth;
  dateint << setw(2) << setfill('0') << fday;

  string fname = "Result_through_"+monthint.str()+"_"+dateint.str()+".csv";

  ifstream file;
  file.open("wpct_data.csv");
		
  team_Data KBO[numTeam];

  if (file.fail()) {
    return (cout << "No such file exists." << endl)  && 0;
  }
  
  int tnum = 0;
  while(file.good()) {
    string team_name, team_wpct;
    getline(file,team_name,',');
    getline(file,team_wpct);
    double twpct = atof(team_wpct.c_str());
    if (twpct > 0) {
      KBO[tnum].setData(team_name,twpct);
      tnum ++;
    }
  }
  file.close();
  
  file.open("Home_remained_game.csv");
 
  OppWP<double> *oppo = new OppWP<double>(numTeam);

  tnum =0;
  if (file.fail()) {
    return (cout << "No such file in this directory." << endl) && 0;
  }
  while(file.good()) {
    string remained_one;
    int remainG[numTeam];
    if (tnum == 0 || tnum > numTeam) {
      getline(file,remained_one);
    } else {
      getline(file,remained_one,',');
      for (int i = 0; i < numTeam; i++) {
        if (i < 9) {
          getline(file,remained_one,',');
	} else {
          getline(file,remained_one);
	}
        remainG[i] = atoi(remained_one.c_str());
      }
      oppo->Hremained(tnum-1,remainG);//KBO[tnum-1].remaindGame(remaind,numTeam);
    }
    tnum++;	
  }
  
  file.close();

  file.open("Away_remained_game.csv");

  tnum =0;
  if (file.fail()) {
    return (cout << "No such file in this directory." << endl) && 0;
  }
  while(file.good()) {
    string remained_one;
    int remainG[numTeam];
    if (tnum == 0 || tnum > numTeam) {
      getline(file,remained_one);
    } else {
      getline(file,remained_one,',');
      for (int i = 0; i < numTeam; i++) {
        if (i < 9) {
          getline(file,remained_one,',');
        } else {
          getline(file,remained_one);
        }
        remainG[i] = atoi(remained_one.c_str());
      }
      oppo->Aremained(tnum-1,remainG);//KBO[tnum-1].remaindGame(remaind,numTeam);
    }
    tnum++;
  }
  
  file.close();
  
  file.open(fname);
  
  if (file.fail()) {
    return (cout << "No such file in this directory." << endl) && 0;
  }
  tnum = 0;
  while (file.good()) {
    string team, won, tied, lost;
    int w, t, l;
    if (tnum == 0 || tnum > numTeam) {
      getline(file,team);
    } else{
      getline(file,team,',');
      getline(file,won,',');
      getline(file,tied,',');
      getline(file,lost);
      w = atoi(won.c_str());
      t = atoi(tied.c_str());
      l = atoi(lost.c_str());
      KBO[tnum-1].getResult(w,t,l);
    }
    tnum++;		
  }
  
  file.close();

  file.open("opp_res.csv");
  if (file.fail()) {
    return (cout << "No such file in this directory." << endl) && 0;
  }
  tnum = 0;
  string oppo_w;
  int opponents[numTeam];
  while(file.good()) {
    if (tnum == 0 || tnum > numTeam) {
      getline(file,oppo_w);
    } else {
      getline(file,oppo_w,',');
      for (int i = 0; i < numTeam; i++) {
        if (i < 9) {
          getline(file,oppo_w,',');
        } else {
          getline(file,oppo_w);
        }
        opponents[i] = atoi(oppo_w.c_str());
        }
      oppo->wins(tnum-1,opponents);//KBO[tnum-1].opponentsStats(opponents,numTeam);
    }
    tnum++;
  }
 
  double wpct[numTeam];
  string team[numTeam];
  for (int i=0; i<numTeam; i++) {
    wpct[i] = KBO[i].represent_wpct();
    team[i] = KBO[i].represent_name();
  }
  
  //double opp_wpct[numTeam][numTeam];
  double opp_rem[numTeam][numTeam];
  double opp_until[numTeam][numTeam];

  oppo->hOpp(wpct);
  oppo->aOpp(wpct);
  for (int i=0; i<numTeam; i++) {
    for (int j=0; j<numTeam; j++) {
      /*if (i == j) {
        opp_wpct[i][j] = 0.0;
      } else if (i < j) {
        opp_wpct[i][j] = wpct[i]*(1-wpct[j])/(wpct[i]*(1-wpct[j])+wpct[j]*(1-wpct[i]));
      } else {
        opp_wpct[i][j] = 1- opp_wpct[j][i];
      }*/
      opp_rem[i][j] = oppo->getHrem(i,j) + oppo->getArem(i,j);//KBO[i].represent_game(j);
      opp_until[i][j] = 0;//oppo->getWins(i,j);// KBO[i].represent_win(j);
    }
  }
  
  int simNumber = 0;
  int totsimN = 100000;
  int win[numTeam],tie[numTeam],lose[numTeam];
  int opp_win[numTeam][numTeam];
  double res_wpct[numTeam][2],standing[numTeam][numTeam];
  default_random_engine hGenerator;
  default_random_engine aGenerator;
  
  for (int i=0; i<numTeam; i++) {
    for (int j=0; j<numTeam; j++) {
      standing[i][j] = 0.0;
    }
  }

  while (simNumber < totsimN) {
    int nocount = 0;
    for (int i=0; i<numTeam; i++) {
      win[i] = 0;
      tie[i] = 0;
      lose[i] = 0;
      res_wpct[i][0] = i;
      res_wpct[i][1] = 0.0;
    }
    
    for (int i=0; i<numTeam; i++) {
      for (int j = i+1; j < numTeam; j++) {	
        binomial_distribution<int> hDistribution(oppo->getHrem(i,j),oppo->getHOpp(i,j));
        binomial_distribution<int> aDistribution(oppo->getArem(i,j),oppo->getAOpp(i,j));
	opp_until[i][j] = oppo->getWins(i,j);
	if (opp_rem[i][j] != 0) {
          int wnum= hDistribution(hGenerator) + aDistribution(aGenerator);
	  int lnum = oppo->getHrem(i,j) + oppo->getArem(i,j)-wnum;//opp_rem[i][j] - wnum;
	  win[i] += wnum;
	  win[j] += lnum;
	  lose[i] += lnum;
	  lose[j] += wnum;
          opp_until[i][j] += wnum;
          opp_until[j][i] += lnum;
          
	}
      }
      win[i] += KBO[i].represent_result("WIN");
      tie[i] += KBO[i].represent_result("TIE");
      lose[i] += KBO[i].represent_result("LOSE");
      res_wpct[i][1] = (double)(win[i])/((double)(win[i]+lose[i]));
    }
    bubble_sort(res_wpct,numTeam); 
    int rank[numTeam];
    for (int i=0; i<numTeam; i++) {
      rank[i] = 1;
    }
    for (int i=0; i<9; i++) {
      if (rank[i] > 0) {
        for (int j=i+1; j<numTeam; j++) {
          if (res_wpct[i][1] == res_wpct[j][1]) {
            nocount = 1;
            rank[i]++;
            rank[j] = 0;
	  }
        }
      }
    }

    simNumber++;
    if (nocount == 0) {
      for (int i=0; i<numTeam; i++) {
        int team;
        team = res_wpct[i][0];
        standing[team][i] += 1.0;///totsimN;
      }
    } else {
      for (int i=0; i<numTeam; i++) {
        int team;
        if (rank[i] > 2) {
          int num;
          num = rank[i];
          for (int j=0; j<num; j++) {
            team = res_wpct[i+j][0];
            for (int k=0; k<num; k++) {
              standing[team][i+k] += 1.0/(num);//*totsimN);
            }
          }
        } else if (rank[i] == 2) {
          int teamhi, teamun;
          teamhi = res_wpct[i][0];
          teamun = res_wpct[i+1][0];
          if (i == 0) {
            double win, lose;
	    if (opp_until[teamhi][teamun] > opp_until[teamun][teamhi]) {
	      win = oppo->getHOpp(i,i+1);//opp_wpct[i][i+1];
	    } else if (opp_until[teamhi][teamun] < opp_until[teamun][teamhi]) {
	      win = oppo->getAOpp(i,i+1);
	    } else {
	      win = (oppo->getHOpp(i,i+1) + oppo->getAOpp(i,i+1))/2.0;
	    }
            lose = 1-win;
            team = res_wpct[i][0];
            standing[team][i] += win;//totsimN;
            standing[team][i+1] += lose;//totsimN;
            team = res_wpct[i+1][0];
            standing[team][i] += lose;//totsimN;
            standing[team][i+1] += win;//totsimN;
          } else {
            if (opp_until[teamhi][teamun] > opp_until[teamun][teamhi]) {
              team = res_wpct[i][0];
              standing[team][i] += 1.0;//totsimN;
              team = res_wpct[i+1][0];
              standing[team][i+1] += 1.0;//totsimN;
            } else if (opp_until[teamun][teamhi] > opp_until[teamhi][teamun]) {
              team = res_wpct[i+1][0];
              standing[team][i] += 1.0;//totsimN;
              team = res_wpct[i][0];
              standing[team][i+1] += 1.0;//totsimN;
            } else {
              double win, lose;
              team = res_wpct[i][0];
              standing[team][i] += 0.5;//totsimN;
              standing[team][i+1] += 0.5;//totsimN;
              team = res_wpct[i+1][0];
              standing[team][i] += 0.5;//totsimN;
              standing[team][i+1] += 0.5;//totsimN;
            }
          }
        } else if (rank[i] == 1){
          team = res_wpct[i][0];
          standing[team][i] += 1.0;//totsimN;
        }
      }
    }
  }

  for (int i=0; i<numTeam; i++) {
    double exWins = 0;
    for (int j=0; j<numTeam; j++) {
      exWins += oppo->getHrem(i,j) * oppo->getHOpp(i,j) + oppo->getArem(i,j) * oppo->getAOpp(i,j);
    }
    exWins += KBO[i].represent_result("WIN") + (double)(KBO[i].represent_result("TIE"))/2.0;
    KBO[i].standingPercent(standing[i],numTeam,exWins);
    KBO[i].makeCSV(fmonth,fday,openDay);
  }

  return 0;
}
