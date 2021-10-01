window.onload=function() {
  var strYear = '<option value="none">-시즌-</option>\n';
  for (var i=2001; i<=2021; i++) {
    strYear += '<option value="https://postseasonprob.github.io/'+i+'.html">'+i+'</option>\n';
  }
  document.getElementById("Season").innerHTML=strYear;
}
