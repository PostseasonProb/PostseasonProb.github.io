window.onload=function() {
  var strYear = '<option value="none">-시즌-</option>\n';
  for (var i=2001; i<=2021; i++) {
    strYear += '<option value="https://postseasonprob.github.io/'+i+'.html">'+i+'</option>\n';
  }
  var strHead = '<nav>\n  <link rel="stylesheet" href="StyleSheet.css">\n  <ul>\n    <li>\n      <a href="https://postseasonprob.github.io/">Home</a>\n    </li>\n    <li><a href="https://postseasonprob.github.io/GuideTo.html">사용설명서</a>\n    </li>\n    <li>\n      <a href="https://postseasonprob.github.io/2021.html">시즌별 일람</a>\n    </li>\n  </ul>\n</nav>'
  document.getElementById("navHeader").innerHTML=strHead;
  document.getElementById("Season").innerHTML=strYear;
}
