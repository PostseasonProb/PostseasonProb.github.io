function change_tab(id='PS')
{
  document.getElementById("PS").className="notselected";
  document.getElementById("KS").className="notselected";
  document.getElementById("PO").className="notselected";
  document.getElementById("SP").className="notselected";
  document.getElementById("WINS").className="notselected";
  document.getElementById(id).className="selected";
  if (id == "PS") {
    Plotly.newPlot("graphPS",dataPS,layout,option);
    document.getElementById("text").innerHTML="<h2> 2021 KBO 포스트시즌 진출 확률</h2>"
  } else if (id == "KS") {
    Plotly.newPlot("graphPS",dataKS,layout,option);
    document.getElementById("text").innerHTML="<h2> 2021 KBO 한국시리즈 직행 확률</h2>"
  } else if (id == "PO") {
    Plotly.newPlot("graphPS",dataPO,layout,option);
    document.getElementById("text").innerHTML="<h2> 2021 KBO 플레이오프 직행 확률</h2>"
  } else if (id == "SP") {
    Plotly.newPlot("graphPS",dataSP,layout,option);
    document.getElementById("text").innerHTML="<h2> 2021 KBO 준플레이오프 직행 확률</h2>"
  } else if (id == "WINS") {
    Plotly.newPlot("graphPS",dataWINS,layoutWIN,option);
    document.getElementById("text").innerHTML="<h2> 2021 KBO 기대 승리</h2>"
  }
}
