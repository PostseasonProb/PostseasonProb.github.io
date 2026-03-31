// 1. 전역 변수 선언 (ReferenceError 방지)
var myChart;
var season = window.location.pathname.match(/\d{4}/)?.[0] || new Date().getFullYear();

var first_Date = xRange[0];
var last_Date = xRange[xRange.length - 1];

// 기본 레이아웃 설정값 (Chart.js에서는 초기 설정 및 ReRange용으로 사용)
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

		// [기존 로직] 탭 스타일 변경
		["PS", "KS", "PO", "SP", "WINS"].forEach(tab => {
			const el = document.getElementById(tab);
			if(el) el.className = "notselected";
		});
		if(document.getElementById(id)) document.getElementById(id).className = "selected";

		// 3. 데이터 및 Y축 범위 설정
		var currentData, yFormat, titleKr, titleEn;
		// id에 따라 dataPS, dataKS 등을 매칭 (이 데이터셋들은 전역에 선언되어 있어야 함)
		if (id === "PS") {
			currentData = dataPS;
			layout.yRange = { min: -0.05, max: 1.05 };
			yFormat = 'percent';
			yStepSize = 0.2;
			yFormat = 'percent';
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
		}  else if (id == "WINS") {
			currentData = dataWINS;
			yFormat = 'float';
			yStepSize = 10;
			titleKr = season + " KBO 예상 승리";
			titleEn = season + " KBO Projected Full Season Win Total";
			// WINS 전용 범위 계산
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

		if (myChart) { myChart.destroy(); } // 기존 차트 파괴

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
			data: JSON.parse(JSON.stringify(currentData)), // 원본 보존을 위한 복사
			options: {
				animation: false,
				responsive: false,
				maintainAspectRatio: false,
				interaction: { mode: 'index', intersect: false },
				scales: {
					y: {
						min: layout.yRange.min,
						max: layout.yRange.max,
						border: {
							display: false
						},
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
						grid: { 
							display: false,
							drawBorder: false
						},
						border: {
							display: false
						},
						ticks: {
							drawTicks: false,
							padding: 10,
							maxRotation: 0,
							autoSkip: false,

							callback: function(value, index, values) {
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
						pan: {
							enabled: true,
							mode: 'x',
						},
						zoom: {
							wheel: {
								enabled: false
							},
							drag: {
								enabled: true,
								backgroundColor: 'transparent', 
								borderColor: '#333',
								borderWidth: 1,
								dash: [5,5]
							},
							pinch: {
								enabled: true // 모바일에서 두 손가락 줌
							},
							mode: 'x',
							onZoomStart: function({event}) {
								// 터치 이벤트 발생 시 브라우저 기본 동작 차단 보조
								if (event.type === 'touchstart') return true;
							}
						},
						limits: {
							// [중요] 줌 아웃했을 때 데이터 밖으로 나가는 것 방지
							x: { 
								min: first_Date, 
								max: last_Date, 
								minRange: 1 
							}
						}
					},
					legend: {
						display: true,
						position: 'right',
						onClick: function(e, legendItem, legend) {
							const index = legendItem.datasetIndex;
							const ci = legend.chart;

							// 클릭 간격으로 더블클릭 판정 (250ms 이내)
							const now = Date.now();
							if (this.lastClick && (now - this.lastClick) < 250) {
								// [더블클릭 로직]
								const allDatasets = ci.data.datasets;

								// 1. 현재 선택한 팀 제외, 나머지 팀들이 하나라도 보이고 있는지 확인
								const isAnyOtherVisible = allDatasets.some((ds, i) => i !== index && !ds.hidden);

								if (isAnyOtherVisible) {
									// 2. 다른 팀이 하나라도 보인다면 -> 선택한 팀만 남기고 다 숨김 (Isolate)
									allDatasets.forEach((ds, i) => {
										ds.hidden = (i !== index);
									});
								} else {
									// 3. 이미 선택한 팀만 보이고 있다면 -> 모든 팀을 다시 보여줌 (Restore)
									allDatasets.forEach((ds) => {
										ds.hidden = false;
									});
								}

								this.lastClick = 0; // 시간 초기화
							} else {
								// [싱글클릭 로직] 기존 Chart.js 동작 (켰다 껐다) 유지
								const dataset = ci.data.datasets[index];;
								dataset.hidden = !dataset.hidden;
								this.lastClick = now; // 클릭 시간 저장
							}

							ci.update(); // 차트 새로고침
						},
						labels: {
							usePointStyle: true,
							pointStyle: 'line',
							boxWidth: 20,
							boxHeight: 20,
							font: {
								size: 12,
								family: "'Pretendard', sans-serif"
							},
							padding: 10
						}
					},
					tooltip: {
						enabled: true,
						mode: 'index',         // 같은 날짜 모든 팀 표시
						intersect: false,
						backgroundColor: 'rgba(255, 255, 255, 0.9)',
						titleColor: 'black',
						titleFont: { size: 14, weight: 'bold' },
						bodyFont: { size: 13 },
						bodyColor: 'black',
						padding: 10,
						cornerRadius: 6,
						displayColors: true,   // 색상 박스 표시 활성화

						itemSort: function(a, b) {
							return b.raw - a.raw;
						},

						usePointStyle: true,

						callbacks: {
							labelPointStyle: function(context) {
								return {
									pointStyle: 'rect',
									rotation: 0
								};
							},
							label: function(context) {
								let label = context.dataset.label || '';
								let val = context.parsed.y;
								let formattedVal = (yFormat === 'percent' ? (val * 100).toFixed(1) + '%' : val.toFixed(1));
								return " " + formattedVal + " " + label;
							},
							// 3. 아이콘 색상을 팀 색상으로 강제 지정
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

		if(loader) {
			loader.style.display = 'none';
		}
		var mainLoader = document.getElementById('loading');
		if(mainLoader) {
			mainLoader.style.display = 'none';
			document.body.classList.remove('fonts-loaded');
			void document.body.offsetWidth; // 브라우저 리플로우 강제 (중요!)
			document.body.classList.add('fonts-loaded');
		}
	}, 100);
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

$(function() {
	$("input[name='daterange']").daterangepicker({
		minDate: moment(first_Date),
		maxDate: moment(last_Date),
		startDate: moment(first_Date),
		endDate: moment(last_Date),
		opens: "right",
		drops: "up",
		locale: { format: 'YYYY-MM-DD' } // 날짜 형식 지정
	}, function(start, end, label) {
		// Chart.js 버전으로 업데이트 로직
		if (myChart) {
			myChart.options.scales.x.min = start.format('YYYY-MM-DD');
			myChart.options.scales.x.max = end.format('YYYY-MM-DD');
			myChart.update(); // 차트 다시 그리기
		}
	});
});

function resetDate() {
	// 1. daterangepicker 객체 가져오기
	var drp = $("input[name='daterange']").data('daterangepicker');

	// 2. 날짜 선택기 UI를 처음과 끝 날짜로 되돌리기
	drp.setStartDate(drp.minDate);
	drp.setEndDate(drp.maxDate);

	// 3. [핵심] Chart.js 축 범위를 초기화
	if (myChart) {
		myChart.options.scales.x.min = drp.minDate.format('YYYY-MM-DD');
		myChart.options.scales.x.max = drp.maxDate.format('YYYY-MM-DD');
		myChart.update();
	}
}

function resetAxes() {
	if (myChart) {
		// 줌 상태를 초기화하고 원래 레이아웃으로 복구
		myChart.resetZoom();
	}
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

	tCtx.shadowBlur = 0;
	tCtx.shadowOffsetX = 0;
	tCtx.shadowOffsetY = 0;

	var defaultName = 'psodds_kbo_' + new Date().toISOString().slice(0,10);
	var userName = prompt("저장할 파일 이름을 입력하세요:", defaultName);
	if (userName === null) return;
	var finalName = userName.trim() || defaultName;

	const link = document.createElement('a');
	link.download = finalName + '.png';
	link.href = tempCanvas.toDataURL('image/png');
	link.click();
}

// 초기 실행
$(document).ready(function() {
	document.fonts.ready.then(function() {
		// 1. 클래스를 추가해서 CSS의 opacity를 1로 만듦
		document.body.classList.add('fonts-loaded');

		// 2. 그 다음 차트를 그림 (이미 폰트가 준비된 상태라 튈 일이 없음)
		change_tab("PS");
	});
});
