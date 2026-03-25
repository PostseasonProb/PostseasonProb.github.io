window.onload = function() {
  // 1. 네비게이션바 구성
  // Home은 노출, 나머지는 '햄버거 드롭다운' 안에 숨김
  var strHead = '<nav class="navbar">\n' +
                '  <div class="nav-left"><a href="https://psodds.com/" class="home-link">Home</a></div>\n' +
                '  <div class="nav-right dropdown">\n' +
                '    <button class="dropbtn">☰</button>\n' + 
                '    <div class="dropdown-content">\n' +
                '      <div class="main-menu-area">\n' +
                '        <a href="https://psodds.com/2025.html" class="new-season">2025 시즌</a>\n' +
                '        <a href="https://psodds.com/GuideTo.html" style="display:inline-block; width:45%;">사용설명서</a>\n' +
                '        <a href="https://psodds.com/blog/index.html" style="display:inline-block; width:45%;">PS Odds BLOG</a>\n' +
                '      </div>\n' +
                '      <div id="dropdown-years"></div>\n' + /* 여기가 바둑판 */
                '    </div>\n' +
                '  </div>\n' +
                '</nav>';

  // 2. 과거 시즌 목록 생성
  var strYearLinks = '';
  var strOptions = '<option value="">-시즌-</option>'; // 셀렉트박스용 <option>들
  
  for (var i = 2024; i >= 2001; i--) {
    var url = 'https://psodds.com/' + i + '.html';
    
    // 드롭다운 바둑판 메뉴용
    strYearLinks += '<a href="' + url + '">' + i + '</a>\n';
  }

  for (var i = 2025; i >= 2001; i--) {
    var urloption = 'https://psodds.com/' + i + '.html';
    // 기존 셀렉트 박스(<select id="Season">)용
    // 현재 페이지 연도와 일치하면 'selected' 표시 (선택 사항)
    strOptions += '<option value="' + urloption + '">' + i + '</option>';
  }

  var strRank = rank();

  var strFoot = '<p>© 2021, DNY&nbsp;&nbsp;</a></p>\n<p><a href="mailto:dnyeum@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>&nbsp;/&nbsp;<a href="https://junkstorage.tistory.com/" target="_blank" rel="noopener noreferrer">TISTORY</a></p>'

  if (document.getElementById("header") != null) {
    document.getElementById("header").innerHTML = strHead;
    document.getElementById("dropdown-years").innerHTML = strYearLinks;
  }
  if (document.getElementById("Season") != null) {
    document.getElementById("Season").innerHTML=strOptions;
  }
  if (document.getElementById("table") != null) {
    document.getElementById("table").innerHTML=strRank;
  }
  if (document.getElementById("footer") != null) {
    document.getElementById("footer").innerHTML=strFoot;
  }
}
