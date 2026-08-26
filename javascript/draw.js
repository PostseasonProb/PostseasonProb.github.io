// 1. 전역 변수 선언 (ReferenceError 방지)
var myChart;
var season = window.location.pathname.match(/\d{4}/)?.[0] || new Date().getFullYear();

var first_Date = xRange[0];
var last_Date = xRange[xRange.length - 1];

// 기본 레이아웃 설정값
var layout = {
	width: 1000,
	height: 562.5,
	yRange: { min: -0.05, max: 1.05 }
};

document.fonts.ready.then(function() {
	document.body.classList.add('fonts-loaded');
});

// 2. 탭 변경 및 차트 초기화 함수
function change_tab(id = 'PS') {
	var loader = document.getElementById('loading-overlay');
	if(loader) {
		loader.style.display = 'flex';
	}

	setTimeout(function() {
		var titleText = document.title;

		// 탭 스타일 변경
		["PS", "KS", "PO", "SP", "WINS"].forEach(tab => {
			const el = document.getElementById(tab);
			if(el) el.className = "notselected";
		});
		if(document.getElementById(id)) document.getElementById(id).className = "selected";

		// 3. 데이터 및 Y축 범위 설정
		var currentData, yFormat, yStepSize, titleKr, titleEn;
		
		if (id === "PS") {
			currentData = dataPS;
			layout.yRange = { min: -0.05, max: 1.05 };
			yFormat = 'percent';
			yStepSize = 0.2;
			titleKr = season + " KBO 포스트시즌 진출 확률";
			titleEn = season + " KBO Postseason Odds";
		} else if (id == "KS") {
			currentData = dataKS;
			layout.yRange = { min: -0.05, max: 1.05 };
			yFormat = 'percent';
			yStepSize = 0.2;
			titleKr = season + " KBO 한국시리즈 직행 확률";
			titleEn = season + " KBO Korean Series Automatic Advancing Odds";
		} else if (id == "PO") {
			currentData = dataPO;
			layout.yRange = { min: -0.05, max: 1.05 };
			yFormat = 'percent';
			yStepSize = 0.2;
			titleKr = season + " KBO 플레이오프 직행 확률";
			titleEn = season + " KBO Playoff Series Automatic Advancing Odds";
		} else if (id == "SP") {
			currentData = dataSP;
			layout.yRange = { min: -0.05, max: 1.05 };
			yFormat = 'percent';
			yStepSize = 0.2;
			titleKr = season + " KBO 준플레이오프 직행 확률";
			titleEn = season + " KBO Semi Playoff Automatic Advancing Odds";
		} else if (id == "WINS") {
			currentData = dataWINS;
			yFormat = 'float';
			yStepSize = 10;
			titleKr = season + " KBO 예상 승리";
			titleEn = season + " KBO Projected Full Season Win Total";
			
			var minW = 36, maxW = 100;
			if (season >= 2005 && season <= 2008) { minW = 31.5; maxW = 90; }
			else if (season >= 2013 && season <= 2014) { minW = 32; maxW = 90; }
			else if (season < 2015) { minW = 33; maxW = 93; }
			layout.yRange = { min: minW, max: maxW };
		}

		// 제목 업데이트
		var isEn = titleText.includes("Season");
		document.getElementById("text").innerHTML = "<h2>&nbsp;&nbsp;" + (isEn ? titleEn : titleKr) + "</h2>";

		// 4. Chart.js 그리기
		var ctx = document.getElementById('graphPS').getContext('2d');

		if (myChart) { myChart.destroy(); }

		currentData.datasets.forEach(dataset => {
			dataset.radius = 0;
			dataset.pointRadius = 0;
			dataset.hoverRadius = 5;
			dataset.pointHoverRadius = 5;
			dataset.borderWidth = 4;
			dataset.pointHoverBackgroundColor = dataset.borderColor;
			dataset.pointHoverBorderColor = dataset.borderColor;
		});

		myChart = new Chart(ctx, {
			type: 'line',
			data: JSON.parse(JSON.stringify(currentData)),
			options: {
				animation: false,
				responsive: false,
				maintainAspectRatio: false,
				interaction: { mode: 'index', intersect: false },
				scales: {
					y: {
						min: layout.yRange.min,
						max: layout.yRange.max,
						border: { display: false },
						ticks: {
							stepSize: yStepSize,
							padding: 5,
							display: true,
							drawTicks: false,
							callback: function(value) {
								if (yFormat == 'float' && value < 40) return '';
								if (yFormat == 'percent') {
									if (value < 0 || value > 1) return '';
									return (value * 100).toFixed(0) + '%';
								}
								return value;
							}
						},
						afterBuildTicks: function(axis) {
							if (yFormat == 'percent') {
								axis.ticks = axis.ticks.filter(tick => tick.value >= 0 && tick.value <= 1);
							} else {
								axis.ticks = axis.ticks.filter(tick => tick.value >= 40);
							}
						},
						grid: {
							color: function(context) {
								if (yFormat == 'percent') {
									if (context.tick.value < 0 || context.tick.value > 1) return 'transparent';
								} else {
									if (context.tick.value < 40) return 'transparent';
								}
								return 'LightGray';
							}
						}
					},
					x: {
						grid: { display: false, drawBorder: false },
						border: { display: false },
						ticks: {
							drawTicks: false,
							padding: 10,
							maxRotation: 0,
							autoSkip: false,
							callback: function(value) {
								const dateStr = this.getLabelForValue(value);
								if (dateStr.endsWith("-01")) {
									return dateStr.substring(5);
								}
								return '';
							}
						}
					}
				},
				plugins: {
					zoom: {
						pan: { enabled: true, mode: 'x' },
						zoom: {
							wheel: { enabled: false },
							drag: { enabled: true, backgroundColor: 'transparent', borderColor: '#333', borderWidth: 1, dash: [5,5] },
							pinch: { enabled: true },
							mode: 'x'
						},
						limits: {
							x: { min: first_Date, max: last_Date, minRange: 1 }
						}
					},
					legend: {
						display: true,
						position: 'right',
						onClick: function(e, legendItem, legend) {
							const index = legendItem.datasetIndex;
							const ci = legend.chart;
							const now = Date.now();
							
							if (this.lastClick && (now - this.lastClick) < 250) {
								const allDatasets = ci.data.datasets;
								const isAnyOtherVisible = allDatasets.some((ds, i) => i !== index && !ds.hidden);

								if (isAnyOtherVisible) {
									allDatasets.forEach((ds, i) => { ds.hidden = (i !== index); });
								} else {
									allDatasets.forEach((ds) => { ds.hidden = false; });
								}
								this.lastClick = 0;
							} else {
								const dataset = ci.data.datasets[index];
								dataset.hidden = !dataset.hidden; // 오타(;;) 수정 완료
								this.lastClick = now;
							}
							ci.update();
						},
						labels: {
							usePointStyle: true,
							pointStyle: 'line',
							boxWidth: 20,
							boxHeight: 20,
							font: { size: 12, family: "'Pretendard', sans-serif" },
							padding: 10
						}
					},
					tooltip: {
						enabled: true,
						mode: 'index',
						intersect: false,
						backgroundColor: 'rgba(255, 255, 255, 0.9)',
						titleColor: 'black',
						titleFont: { size: 14, weight: 'bold' },
						bodyFont: { size: 13 },
						bodyColor: 'black',
						padding: 10,
						cornerRadius: 6,
						displayColors: true,
						itemSort: function(a, b) { return b.raw - a.raw; },
						usePointStyle: true,
						callbacks: {
							labelPointStyle: function() {
								return { pointStyle: 'rect', rotation: 0 };
							},
							label: function(context) {
								let label = context.dataset.label || '';
								let val = context.parsed.y;
								let dataIndex = context.dataIndex;

								let status = context.dataset.Status ? context.dataset.Status[dataIndex] : 0;
								let formattedVal = '';

								if (yFormat == 'percent') {
									if (status == 1) {
										formattedVal = '100%';
									} else if (status == -1) {
										formattedVal = '0%';
									} else {
										if (val < 0.0005) {
											formattedVal = '<0.1%';
										} else if (val > 0.9995) {
											formattedVal = '>99.9%';
										} else {
											formattedVal = (val * 100).toFixed(1) + '%';
										}
									}
								} else {
									formattedVal = val.toFixed(1);
								}
								return " " + formattedVal + " " + label;
							},
							labelColor: function(context) {
								return {
									borderColor: context.dataset.borderColor,
									backgroundColor: context.dataset.borderColor,
									borderWidth: 0,
									borderRadius: 0
								};
							}
						}
					}
				}
			}
		});

		if(loader) { loader.style.display = 'none'; }
		var mainLoader = document.getElementById('loading');
		if(mainLoader) {
			mainLoader.style.display = 'none';
			document.body.classList.remove('fonts-loaded');
			void document.body.offsetWidth;
			document.body.classList.add('fonts-loaded');
		}
	}, 100);
}

function reRange() {
	if (document.getElementById("WINS").className == "selected") {
		layout.yRange.min = 36; layout.yRange.max = 100;
		if ((season >= 2005) && (season <= 2008)) {
			layout.yRange.min = 31.5; layout.yRange.max = 90;
		} else if ((season >= 2013) && (season <= 2014)) {
			layout.yRange.min = 32; layout.yRange.max = 90;
		} else if (season < 2015) {
			layout.yRange.min = 33; layout.yRange.max = 93;
		}
	} else {
		layout.yRange.min = -0.05; layout.yRange.max = 1.05;
	}
}

$(function() {
	$("input[name='daterange']").daterangepicker({
		minDate: moment(first_Date),
		maxDate: moment(last_Date),
		startDate: moment(first_Date),
		endDate: moment(last_Date),
		opens: "right",
		drops: "up",
		locale: { format: 'YYYY-MM-DD' }
	}, function(start, end) {
		if (myChart) {
			myChart.options.scales.x.min = start.format('YYYY-MM-DD');
			myChart.options.scales.x.max = end.format('YYYY-MM-DD');
			myChart.update();
		}
	});
});

function resetDate() {
	var drp = $("input[name='daterange']").data('daterangepicker');
	drp.setStartDate(drp.minDate);
	drp.setEndDate(drp.maxDate);

	if (myChart) {
		myChart.options.scales.x.min = drp.minDate.format('YYYY-MM-DD');
		myChart.options.scales.x.max = drp.maxDate.format('YYYY-MM-DD');
		myChart.update();
	}
}

function resetAxes() {
	if (myChart) { myChart.resetZoom(); }
}

function downloadGraph() {
	const canvas = document.getElementById('graphPS');
	const tempCanvas = document.createElement('canvas');
	const tCtx = tempCanvas.getContext('2d');

	tempCanvas.width = canvas.width;
	tempCanvas.height = canvas.height + 40;

	tCtx.fillStyle = "white";
	tCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
	tCtx.drawImage(canvas, 0, 0);

	const sourceText = "Data Source: KBO Official / Analysis: psodds.com";
	tCtx.font = "14px Arial";
	tCtx.fillStyle = "rgba(0, 0, 0, 0.5)";
	tCtx.textAlign = "right";
	tCtx.shadowColor = "rgba(255, 255, 255, 0.8)";
	tCtx.shadowBlur = 4;
	tCtx.shadowOffsetX = 1;
	tCtx.shadowOffsetY = 1;

	tCtx.fillText(sourceText, tempCanvas.width - 20, tempCanvas.height - 20);

	var defaultName = 'psodds_kbo_' + new Date().toISOString().slice(0,10);
	var userName = prompt("저장할 파일 이름을 입력하세요:", defaultName);
	if (userName === null) return;
	var finalName = userName.trim() || defaultName;

	const link = document.createElement('a');
	link.download = finalName + '.png';
	link.href = tempCanvas.toDataURL('image/png');
	link.click();
}

$(document).ready(function() {
	document.fonts.ready.then(function() {
		document.body.classList.add('fonts-loaded');
		change_tab("PS");
	});
});
