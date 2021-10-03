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
