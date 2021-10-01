window.onload=function() {
  var strYear = '<option value="none">-Season-</option>\n';
  for (var i=2001; i<=2021; i++) {
    strYear += '<option value="https://postseasonprob.github.io/'+i+'_en.html">'+i+'</option>\n';
  }
  document.getElementById("Season").innerHTML=strYear;
}
