function change_tab(id='PS')
{
  document.getElementById("PS").className="notselected";
  document.getElementById("KS").className="notselected";
  document.getElementById("PO").className="notselected";
  document.getElementById("SP").className="notselected";
  document.getElementById("WINS").className="notselected";
  document.getElementById(id).className="selected";
  $('#graphPS').load(window.location+'#graphPS')
}
