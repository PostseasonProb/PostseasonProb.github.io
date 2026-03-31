season = parseInt(window.location.href.substring(33,37));

var layout = {
  width: 1000,
  height: 562.5,
  xaxis: {
    showgrid: false,
    dtick: "M1",
    tickformat: "%b %d",
  },
  yaxis: {
    showgrid: true,
    gridcolor: "LightGray",
    gridwidth: 1,
    range: [-0.05,1.05],
    tickformat: ".1%",
    zeroline: false
  },
  hovermode: 'x',
  hoverlabel : {
    font: {
      size: 12,
      color: "white", 
      family: "Pretendard"
    },
    bordercolor: "transparent"
  }
}

function reRange() {
  if (document.getElementById("WINS").className == "selected") {
    layout.yaxis.range = [36,100];
    if ((season >= 2005) && (season <= 2008)) {
      layout.yaxis.range = [31.5,90];
    } else if ((season >= 2013) && (season <= 2014)) {
      layout.yaxis.range = [32,90];
    } else if (season < 2015) {
      layout.yaxis.range = [33,93];
    }
  } else {
    layout.yaxis.range = [-0.05,1.05];
  }
}

var option = {
  displayModeBar: false,
  showTips: false,
  doubleClick: false
}

change_tab("PS");

var first_Date = layout.xaxis.range[0];
var last_Date = layout.xaxis.range[1];

$(function() {
  $("input[name='daterange']").daterangepicker({
    minDate: moment(first_Date),
    maxDate: moment(last_Date),
    startDate: moment(first_Date),
    endDate: moment(last_Date),
    opens: "right",
    drops: "up"
  }, function(start, end, label) {
    reRange();
    var updateDate = {
      'xaxis.range': [start.format('YYYY-MM-DD'),end.format('YYYY-MM-DD')],
      'yaxis.range': layout.yaxis.range//inRange
    };
    Plotly.relayout("graphPS",updateDate);
  });
});

function resetDate() {
  reRange();
  var dateRange = $("input[name='daterange']").data('daterangepicker');
  $("input[name='daterange']").data('daterangepicker').setStartDate(dateRange.minDate);
  $("input[name='daterange']").data('daterangepicker').setEndDate(dateRange.maxDate);
  var resetDLayout = {
    'xaxis.range': [dateRange.minDate.format('YYYY-MM-DD'),dateRange.maxDate.format('YYYY-MM-DD')],
    'yaxis.range': layout.yaxis.range
  };
  Plotly.relayout("graphPS",resetDLayout);
}

function resetAxes() {
  reRange();
  var reLay = $("input[name='daterange']").data('daterangepicker');
  var resetLayout = {
    'xaxis.range': [reLay.startDate.format('YYYY-MM-DD'),reLay.endDate.format('YYYY-MM-DD')],
    'yaxis.range': layout.yaxis.range
  };
  Plotly.relayout("graphPS",resetLayout);
}

function downloadGraph() {
    let gd = document.getElementById('graphPS');
    if (!gd || !gd._fullLayout) gd = document.querySelector('.js-plotly-plot');
    if (!gd) return;

    // 1. 파일명 설정 로직 (동일)
    const titleElem = document.querySelector('title');
    const currentYear = (titleElem && titleElem.innerText.match(/\d+/)) ? titleElem.innerText.match(/\d+/)[0] : '';
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '_');
    const defaultName = 'psodds_kbo_' + currentYear + '_' + dateStr;
    const userName = prompt("저장할 파일 이름을 입력하세요:", defaultName);
    if (userName === null) return;
    const finalName = userName.trim() || defaultName;

    // 2. [찰칵!] 효과용 오버레이 (transition 시간을 0.1s -> 0.4s로 늘려 부드럽게)
    const flash = document.createElement('div');
    flash.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:white; opacity:0; z-index:9999; pointer-events:none; transition:opacity 0.4s ease-out;";
    document.body.appendChild(flash);

    // 3. 백업 및 출처 설정
    const oldMarginB = (gd.layout && gd.layout.margin && gd.layout.margin.b) ? gd.layout.margin.b : 50;
    const oldAnnotations = gd.layout && gd.layout.annotations ? JSON.parse(JSON.stringify(gd.layout.annotations)) : [];
    const watermark = {
        text: "출처: psodds.com",
        xref: "paper", yref: "paper",
        x: 1, xanchor: "right", y: -0.12, yanchor: "top",
        showarrow: false, font: { size: 14, color: "#999" }
    };

    // 4. 실행 순서: 레이아웃 변경 -> [플래시 ON] -> 다운로드 -> [플래시 OFF] -> 원복
    Plotly.relayout(gd, {
        'margin.b': 100,
        'annotations': [...oldAnnotations, watermark]
    }).then(() => {
        // [플래시 ON] 하얗게 불태웁니다.
        flash.style.opacity = "0.9";

        // 플래시가 완전히 켜진 상태에서 사진을 찍도록 충분히 대기 (0.3초)
        return new Promise(resolve => setTimeout(resolve, 300));
    }).then(() => {
        return Plotly.downloadImage(gd, {
            format: 'png',
            width: gd.getBoundingClientRect().width,
            height: gd.getBoundingClientRect().height,
            filename: finalName
        });
    }).then(() => {
        // [플래시 OFF] 사진 찍었으니 서서히 사라집니다.
        flash.style.opacity = "0";

        // 플래시가 완전히 사라질 때쯤(0.4초 뒤) 레이아웃을 원복합니다.
        // 이렇게 하면 그래프가 다시 커지는 모습이 플래시에 가려져서 안 보입니다!
        setTimeout(() => {
            if (flash.parentNode) document.body.removeChild(flash);
            Plotly.relayout(gd, { 'margin.b': oldMarginB, 'annotations': oldAnnotations });
        }, 200);
    });
}
