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
  } else if (id == "KS") {
    Plotly.newPlot("graphPS",dataKS,layout,option);
  } else if (id == "PO") {
    Plotly.newPlot("graphPS",dataPO,layout,option);
  } else if (id == "SP") {
    Plotly.newPlot("graphPS",dataSP,layout,option);
  } else if (id == "WINS") {
    Plotly.newPlot("graphPS",dataWINS,layoutWIN,option);
  }
}
