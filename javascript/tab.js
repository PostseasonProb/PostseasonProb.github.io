function change_tab(id='PS')
{
  string = document.title;
  season = parseInt(string.substring(21,25));
  document.getElementById("PS").className="notselected";
  document.getElementById("KS").className="notselected";
  document.getElementById("PO").className="notselected";
  document.getElementById("SP").className="notselected";
  document.getElementById("WINS").className="notselected";
  document.getElementById(id).className="selected";
  if (id == "PS") {
    layout.yaxis.range = [-0.05,1.05];
    layout.yaxis.tickformat = ".1%";

    Plotly.newPlot("graphPS",dataPS,layout,option);
    if (string.substring(26,32) == "Season") {
      document.getElementById("text").innerHTML="<h2>&nbsp;&nbsp;"+season+"&nbsp;KBO Postseason Odds</h2>"
    } else {
      document.getElementById("text").innerHTML="<h2>&nbsp;&nbsp;"+season+"&nbsp;KBO 포스트시즌 진출 확률</h2>"
    }
  } else if (id == "KS") {
    layout.yaxis.range = [-0.05,1.05];
    layout.yaxis.tickformat = ".1%";

    Plotly.newPlot("graphPS",dataKS,layout,option);
    if (string.substring(26,32) == "Season") {
      document.getElementById("text").innerHTML="<h2>&nbsp;&nbsp;"+season+"&nbsp;KBO Korean Series Automatic Advancing Odds</h2>" 
    } else {
      document.getElementById("text").innerHTML="<h2>&nbsp;&nbsp;"+season+"&nbsp;KBO 한국시리즈 직행 확률</h2>"
    }
  } else if (id == "PO") {
    layout.yaxis.range = [-0.05,1.05];
    layout.yaxis.tickformat = ".1%";

    Plotly.newPlot("graphPS",dataPO,layout,option);
    if (string.substring(26,32) == "Season") {
      document.getElementById("text").innerHTML="<h2>&nbsp;&nbsp;"+season+"&nbsp;KBO Playoff Series Automatic Advancing Odds</h2>"
    } else {
      document.getElementById("text").innerHTML="<h2>&nbsp;&nbsp;"+season+"&nbsp;KBO 플레이오프 직행 확률</h2>"
    }
  } else if (id == "SP") {
    layout.yaxis.range = [-0.05,1.05];
    layout.yaxis.tickformat = ".1%";

    Plotly.newPlot("graphPS",dataSP,layout,option);
    if (string.substring(26,32) == "Season") {
      document.getElementById("text").innerHTML="<h2>&nbsp;&nbsp;"+season+"&nbsp;KBO Semi Playoff Automatic Advancing Odds </h2>"
    } else {
      document.getElementById("text").innerHTML="<h2>&nbsp;&nbsp;"+season+"&nbsp;KBO 준플레이오프 직행 확률</h2>"
    }
  } else if (id == "WINS") {
    //relayout
    layout.yaxis.range = [36,100];
    layout.yaxis.tickformat = ".1f";
    if ((season >= 2005) && (season <= 2008)) {
      layout.yaxis.range = [31.5,90];
    } else if ((season >= 2013) && (season <= 2014)) {
      layout.yaxis.range = [32,90];
    } else if (season < 2015) {
      layout.yaxis.range = [33,93];
    }

    Plotly.newPlot("graphPS",dataWINS,layout,option);
    if (string.substring(26,32) == "Season") {
      document.getElementById("text").innerHTML="<h2>&nbsp;&nbsp;"+season+"&nbsp;KBO Expected Full Season Win Total</h2>"
    } else {
      document.getElementById("text").innerHTML="<h2>&nbsp;&nbsp;"+season+"&nbsp;KBO 기대 승리</h2>"
    }
  }
}
