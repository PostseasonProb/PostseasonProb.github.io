function change_tab(id)
{
  document.getElementById("page_content").innerHTML=document.getElementById(id+"_desc").innerHTML;
  document.getElementById("page1").className="notselected";
  document.getElementById("page2").className="notselected";
  document.getElementById("page3").className="notselected";
  document.getElementById("page4").className="notselected";
  document.getElementById("page5").className="notselected";
  document.getElementById(id).className="selected";
}
