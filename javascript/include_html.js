window.onload=function() {

  var strHead = '<nav>\n  <ul>\n    <li>\n      <a href="https://postseasonprob.github.io/">Home</a>\n    </li>\n    <li><a href="https://postseasonprob.github.io/GuideTo.html">사용설명서</a>\n    </li>\n    <li>\n      <a href="https://postseasonprob.github.io/2021.html">시즌별 일람</a>\n    </li>\n  </ul>\n</nav>'

  var strYear = '<option value="none">-시즌-</option>\n';
  for (var i=2021; i>=2001; i--) {
    strYear += '<option value="https://postseasonprob.github.io/'+i+'.html">'+i+'</option>\n';
  }

  var strFoot = '<p>© 2021, DNY&nbsp;&nbsp;</a></p>\n<p><a href="mailto:dnyeum@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>&nbsp;/&nbsp;<a href="https://junkstorage.tistory.com/" target="_blank" rel="noopener noreferrer">TISTORY</a></p>'

  document.getElementById("header").innerHTML=strHead;
  document.getElementById("Season").innerHTML=strYear;
  document.getElementById("footer").innerHTML=strFoot;
}
