window.onload = function() {
  var strYearLinks = '';
  var strOptions = '<option value="">-Season-</option>'; // 셀렉트박스용 <option>들
  
  for (var i = 2025; i >= 2001; i--) {
    var url = 'https://psodds.com/en/' + i + '_en.html';
    
    // 드롭다운 바둑판 메뉴용
    strYearLinks += '<a href="' + url + '">' + i + '</a>\n';
  }

  for (var i = 2026; i >= 2001; i--) {
    var urloption = 'https://psodds.com/en/' + i + '_en.html';
    // 현재 페이지 연도와 일치하면 'selected' 표시 (선택 사항)
    strOptions += '<option value="' + urloption + '">' + i + '</option>';
  }

  var strRank = rank();

  if (document.getElementById("header") != null) {
    document.getElementById("dropdown-years").innerHTML = strYearLinks;
  }
  if (document.getElementById("Season") != null) {
    document.getElementById("Season").innerHTML=strOptions;
  }
  if (document.getElementById("table") != null) {
    document.getElementById("table").innerHTML=strRank;
  }
  document.fonts.ready.then(function() {
    document.body.classList.add('fonts-loaded');
  });
}
