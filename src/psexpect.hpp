#include <iostream>
#include <fstream>
#include <string>
#include <cmath>

using namespace std;

class team_Data
{
  string name;
  double wpct;
  int win, tie, lose;
  int rem_game[10];
  int opp_win[10];
  double plPercent[10];
  double exWins;
public:
  void setData(string team_name, double team_wpct){
    name = team_name;
    wpct = team_wpct;
  }

  void getResult(int won, int tied, int lost) {
    win = won;
    tie = tied;
    lose = lost;
  }

  /*void remaindGame(int remaind[], int size) {
    if (size != 10) {
      cout << "Resize your array." << endl;
    } else {
      for (int i=0; i<size; i++) {
        rem_game[i] = remaind[i];
      }
    }
  }

  void opponentsStats(int opponents[], int size) {
    if (size != 10) {
      cout << "Resize your array." << endl;
    } else {
      for (int i=0; i<size; i++) {
        opp_win[i] = opponents[i];
      }
    }
  }*/

  void standingPercent(double standing[], int size, double reWins) {
    if (size != 10) {
      cout << "Resize your array." << endl;
    } else {
      exWins = reWins;
      for (int i=0; i<size; i++) {
        plPercent[i] = standing[i];
      }
    }
  }

  void makeCSV(int month, int day, int open) {
    string fname = name+".csv";
    ofstream cfile(fname,ios::app);

    if (open == 1) {
      cfile << month << "," << day << ",";
      for (int i=0; i<11; i++) {
        plPercent[i] = 10000.;
        if (i < 10) {
          cfile << plPercent[i] <<",";
        } else {
          cfile << "72.0" << endl;
        }
      }
    } else {
      cfile << month << "," << day << ",";
      for (int i=0; i<11; i++) {
        if (i<10) {
          cfile << plPercent[i] << ",";
        } else {
          cfile << exWins << endl;
        }
      }
    }
  }

  double represent_wpct() {
    return wpct;
  }

  string represent_name() {
    return name;
  }

  int represent_game(int team) {
    return rem_game[team];
  }

  int represent_win(int team) {
    return opp_win[team];
  }

  int represent_result(string res) {
    if (res == "WIN") {
      return win;
    } else if (res == "TIE") {
      return tie;
    } else if (res == "LOSE") {
      return lose;
    } else {
      return (cout << "You searched wrong one." << endl) && 0;
    }
  }

  void print() {
    cout << name << " " << wpct << " " << win << " " << tie << " " << lose << " " << (double)(win)/(double)(win+lose)<< endl;
    for (int i=0; i<10; i++) {
      if (i < 9) {
        cout << rem_game[i] << ", " << opp_win[i] << " | ";
      } else {
        cout << rem_game[i] << ", " << opp_win[i] << endl;
      }
    }
  }
};

template <typename T>

class OppWP
{
private:
    T *opHWP;
    T *opAWP;
    T *hReGame;
    T *aReGame;
    T *unWins;
    int aTeam;
    int hTeam;
    int nTeam;
public:
  OppWP(int nteam) {
    nTeam = nteam;
    opHWP = new T[nTeam*nTeam];
    opAWP = new T[nTeam*nTeam];
    hReGame = new T[nTeam*nTeam];
    aReGame = new T[nTeam*nTeam];
    unWins = new T[nTeam*nTeam];
  }

  ~OppWP() {
    delete[] opHWP;
    delete[] opAWP;
    delete[] hReGame;
    delete[] aReGame;
    delete[] unWins;
  }

  T *hOpp(double wpct[]) {
    for (int i=0; i<nTeam; i++) {
      for (int j=0; j<nTeam; j++) {
	if (i == j) {
	  opHWP[i*nTeam+j] = 0.0;
        } else {
          double temp = wpct[i]*(1-wpct[j])/(wpct[i]*(1-wpct[j])+wpct[j]*(1-wpct[i]));
          if (temp >= 0.5) {
            opHWP[i*nTeam+j] = pow(temp,0.914);
          } else {
            opHWP[i*nTeam+j] = pow((1-temp),0.914)+2*temp-1;
          }
	}
      }
    }
    return opHWP;
  }

  T *aOpp(double wpct[]) {
    for (int i=0; i<nTeam; i++) {
      for (int j=0; j<nTeam; j++) {
        if (i == j) {
          opAWP[i*nTeam+j] = 0.0;
        } else {
          double temp = wpct[i]*(1-wpct[j])/(wpct[i]*(1-wpct[j])+wpct[j]*(1-wpct[i]));
	  if (temp >= 0.5) {
            opAWP[i*nTeam+j] = 2*temp-pow(temp,0.914);
          } else {
            opAWP[i*nTeam+j] = 1-pow((1-temp),0.914);
          }
        }
      }
    }
    return opAWP;
  }
  
  T *Hremained(int team, int hRemainGames[]) {
    for (int i=0; i<nTeam; i++) {
      hReGame[team*nTeam+i] = hRemainGames[i];
    }
    return hReGame;
  }

  T *Aremained(int team, int aRemainGames[]) {
    for (int i=0; i<nTeam; i++) {
      aReGame[team*nTeam+i] = aRemainGames[i];
    }
    return aReGame;
  }
  
  T *wins(int team, int until[]) {
    for (int i=0; i<nTeam; i++) {
      unWins[team*nTeam+i] = until[i];
    }
    return unWins;
  }
  
  T& getHOpp(int ateam, int hteam) {
    return opHWP[ateam*nTeam+hteam];
  }

  T& getAOpp(int ateam, int hteam) {
    return opAWP[ateam*nTeam+hteam];
  }
  
  T& getHrem(int ateam, int hteam) {
    return hReGame[ateam*nTeam+hteam];
  }

  T& getArem(int ateam, int hteam) {
    return aReGame[ateam*nTeam+hteam];
  }
  
  T& getWins(int ateam, int hteam) {
    return unWins[ateam*nTeam+hteam];
  }
};
