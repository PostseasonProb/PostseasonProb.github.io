window.onload=function() {

  var strHead = '<nav>\n  <ul>\n    <li>\n      <a href="https://psodds.com/">Home</a>\n    </li>\n    <li><a href="https://psodds.com/GuideTo.html>User Guide</a>\n    </li>\n    <li>\n      <a href="https://psodds.com/2025.html">Season Summary</a>\n    </li>\n    <li>\n      <a href="https://psodds.com/blog/index.html">Blog</a>\n    </li>  </ul>\n</nav>'

  var strYear = '<option value="none">-Season-</option>\n';
  for (var i=2025; i>=2001; i--) {
    strYear += '<option value="https://psodds.com/en/'+i+'_en.html">'+i+'</option>\n';
  }

  var strRank = rank();

  var strFoot = '<p>© 2021, DNY&nbsp;&nbsp;</a></p>\n<p><a href="mailto:dnyeum@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>&nbsp;/&nbsp;<a href="https://junkstorage.tistory.com/" target="_blank" rel="noopener noreferrer">TISTORY</a></p>'

  if (document.getElementById("header") != null) {
    document.getElementById("header").innerHTML=strHead;
  }
  if (document.getElementById("Season") != null) {
    document.getElementById("Season").innerHTML=strYear;
  }
  if (document.getElementById("table") != null) {
    document.getElementById("table").innerHTML=strRank;
  }
  if (document.getElementById("footer") != null) {
    document.getElementById("footer").innerHTML=strFoot;
  }
}
