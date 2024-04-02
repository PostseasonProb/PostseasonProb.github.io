var xRange = ["2024-03-22", "2024-03-23", "2024-03-24", "2024-03-25", "2024-03-26", "2024-03-27", "2024-03-28", "2024-03-29", "2024-03-30", "2024-03-31", "2024-04-01", "2024-04-02"];
var PS1= {
  x: xRange,
  y: [0.49309879999999995,0.46357770000000004,0.494843,0.494843,0.535492,0.5718810000000001,0.538145,0.4965729,0.551101,0.5070935,0.5070935,0.4585014],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PS2= {
  x: xRange,
  y: [0.49648990000000004,0.46522779999999997,0.4331075999999999,0.4331075999999999,0.3987592,0.3671958,0.3676797,0.385605,0.33552479999999996,0.3089655,0.3089655,0.3447278],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PS3= {
  x: xRange,
  y: [0.5058577000000001,0.541973,0.576472,0.576472,0.546394,0.550522,0.5094062,0.47194699999999995,0.420427,0.37493370000000004,0.37493370000000004,0.3358285],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PS4= {
  x: xRange,
  y: [0.5029644,0.4739125,0.4733678,0.4733678,0.4401586,0.41283519999999996,0.4157623,0.3628143,0.4066,0.4481936,0.4481936,0.481369],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PS5= {
  x: xRange,
  y: [0.49618470000000003,0.464275,0.4992964,0.4992964,0.537401,0.571767,0.608637,0.6665019999999999,0.6871438000000001,0.7216467999999999,0.7216467999999999,0.7010595],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PS6= {
  x: xRange,
  y: [0.5019572,0.530784,0.5335036999999999,0.5335036999999999,0.564699,0.601954,0.603045,0.6390480000000001,0.596136,0.648254,0.648254,0.6019880000000001],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PS7= {
  x: xRange,
  y: [0.4964963,0.4594055,0.42464,0.42464,0.3926278999999999,0.3537343,0.37824660000000004,0.33908910000000003,0.3162087,0.268555,0.268555,0.2977986],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PS8= {
  x: xRange,
  y: [0.5080709999999999,0.540781,0.508553,0.508553,0.53779,0.5337080000000001,0.572064,0.638053,0.596643,0.565746,0.565746,0.5312209999999999],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PS9= {
  x: xRange,
  y: [0.5029186,0.534412,0.5016408,0.5016408,0.533748,0.562361,0.5695290000000001,0.5167415,0.585086,0.619981,0.619981,0.6606590000000001],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PS10= {
  x: xRange,
  y: [0.4959618,0.525652,0.554577,0.554577,0.5129302,0.4740454,0.43748429999999994,0.4836303,0.5051299,0.5366316,0.5366316,0.586847],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPS = [PS1, PS2, PS3, PS4, PS5, PS6, PS7, PS8, PS9, PS10]

var KS1= {
  x: xRange,
  y: [0.09616709999999999,0.0853609,0.09658620000000001,0.09658620000000001,0.11190299999999999,0.127246,0.109922,0.08977940000000001,0.11226299999999999,0.0882359,0.0882359,0.0708656],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var KS2= {
  x: xRange,
  y: [0.0983035,0.0846476,0.0735308,0.0735308,0.063136,0.0524117,0.0528059,0.0549003,0.042063500000000004,0.0343047,0.0343047,0.042718599999999995],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var KS3= {
  x: xRange,
  y: [0.104005,0.118491,0.13485,0.13485,0.118636,0.118174,0.0982252,0.08097069999999999,0.06250510000000001,0.0486328,0.0486328,0.0410562],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var KS4= {
  x: xRange,
  y: [0.103409,0.0878574,0.0872107,0.0872107,0.0763002,0.0647382,0.0652988,0.0493508,0.060948100000000005,0.068027,0.068027,0.0817098],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var KS5= {
  x: xRange,
  y: [0.09727770000000001,0.084924,0.0973908,0.0973908,0.112736,0.129225,0.146536,0.17740099999999998,0.195038,0.214672,0.214672,0.198766],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var KS6= {
  x: xRange,
  y: [0.101121,0.113736,0.115631,0.115631,0.127669,0.14445,0.14601799999999998,0.16148700000000002,0.134566,0.163548,0.163548,0.136818],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var KS7= {
  x: xRange,
  y: [0.0981457,0.08378870000000001,0.0712921,0.0712921,0.0601875,0.0476141,0.0541038,0.0430135,0.0368908,0.0267638,0.0267638,0.0331572],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var KS8= {
  x: xRange,
  y: [0.101886,0.116426,0.10035899999999999,0.10035899999999999,0.114016,0.108326,0.127945,0.16014899999999999,0.136335,0.11322700000000001,0.11322700000000001,0.101064],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var KS9= {
  x: xRange,
  y: [0.10272700000000001,0.114841,0.09886879999999999,0.09886879999999999,0.111553,0.12228,0.126472,0.0982385,0.128777,0.143505,0.143505,0.169588],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var KS10= {
  x: xRange,
  y: [0.0969583,0.10992700000000001,0.124281,0.124281,0.10386200000000001,0.0855349,0.0726739,0.08470889999999999,0.0906138,0.0990846,0.0990846,0.124257],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataKS = [KS1, KS2, KS3, KS4, KS5, KS6, KS7, KS8, KS9, KS10]

var PO1= {
  x: xRange,
  y: [0.0987632,0.0901651,0.0991891,0.0991891,0.110109,0.12032799999999999,0.11159799999999999,0.0970535,0.11232700000000001,0.09897360000000001,0.09897360000000001,0.085869],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PO2= {
  x: xRange,
  y: [0.0997451,0.0908639,0.081039,0.081039,0.0731947,0.06371890000000001,0.0639595,0.0683918,0.0561365,0.049113000000000004,0.049113000000000004,0.058404899999999996],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PO3= {
  x: xRange,
  y: [0.102434,0.108498,0.120501,0.120501,0.111814,0.113386,0.100495,0.0891893,0.0776149,0.0644072,0.0644072,0.0566938],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PO4= {
  x: xRange,
  y: [0.10001600000000001,0.09346940000000001,0.0941846,0.0941846,0.0850233,0.07587229999999999,0.0762399,0.0637722,0.0723309,0.08246049999999999,0.08246049999999999,0.09225989999999999],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PO5= {
  x: xRange,
  y: [0.09870200000000001,0.09155469999999999,0.101386,0.101386,0.10984700000000001,0.11858,0.131351,0.147639,0.152682,0.163419,0.163419,0.158562],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PO6= {
  x: xRange,
  y: [0.10031,0.109227,0.108654,0.108654,0.11766,0.129268,0.127506,0.13858299999999998,0.128709,0.14406,0.14406,0.127189],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PO7= {
  x: xRange,
  y: [0.0984593,0.0881143,0.0788176,0.0788176,0.0711121,0.061368599999999995,0.0680017,0.058334,0.052421999999999996,0.042115200000000005,0.042115200000000005,0.047246],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PO8= {
  x: xRange,
  y: [0.102066,0.112538,0.100853,0.100853,0.10943399999999999,0.109274,0.119225,0.139451,0.127455,0.117143,0.117143,0.106666],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PO9= {
  x: xRange,
  y: [0.101167,0.109174,0.09880299999999999,0.09880299999999999,0.108594,0.11717799999999999,0.11943,0.104975,0.122889,0.133,0.133,0.145086],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PO10= {
  x: xRange,
  y: [0.0983369,0.106395,0.116573,0.116573,0.10321200000000001,0.09102629999999999,0.0821934,0.0926114,0.0974331,0.105308,0.105308,0.12202299999999999],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPO = [PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO10]

var SP1= {
  x: xRange,
  y: [0.0981922,0.09379649999999999,0.09897030000000001,0.09897030000000001,0.10658,0.114376,0.107983,0.101459,0.11186,0.10394,0.10394,0.0953068],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var SP2= {
  x: xRange,
  y: [0.0996198,0.09371049999999999,0.0889375,0.0889375,0.0805408,0.07371770000000001,0.0738973,0.07730279999999999,0.06770029999999999,0.062454300000000004,0.062454300000000004,0.0695937],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var SP3= {
  x: xRange,
  y: [0.0990602,0.108264,0.11256,0.11256,0.108359,0.10948,0.10288,0.0986,0.08511,0.0772,0.0772,0.06951],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var SP4= {
  x: xRange,
  y: [0.0992742,0.0944393,0.09686299999999999,0.09686299999999999,0.0886803,0.0824725,0.08461020000000001,0.07505,0.0841003,0.0938018,0.0938018,0.0994603],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var SP5= {
  x: xRange,
  y: [0.100199,0.09433180000000001,0.10059,0.10059,0.106903,0.113298,0.117955,0.12732100000000002,0.128694,0.133854,0.133854,0.13253600000000001],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var SP6= {
  x: xRange,
  y: [0.101243,0.105271,0.10561100000000001,0.10561100000000001,0.11170100000000001,0.118489,0.118785,0.12368799999999999,0.118708,0.126358,0.126358,0.118083],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var SP7= {
  x: xRange,
  y: [0.10026600000000001,0.0927117,0.0842131,0.0842131,0.0801989,0.0724627,0.0779697,0.0684737,0.0637495,0.053112799999999995,0.053112799999999995,0.0600925],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var SP8= {
  x: xRange,
  y: [0.10068200000000001,0.10782299999999999,0.102787,0.102787,0.106297,0.1075,0.11444,0.12501,0.11681,0.11597,0.11597,0.10723],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var SP9= {
  x: xRange,
  y: [0.10023299999999999,0.10524299999999999,0.100567,0.100567,0.107656,0.11147,0.11316299999999999,0.10498299999999999,0.117415,0.12227,0.12227,0.129051],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var SP10= {
  x: xRange,
  y: [0.101231,0.10441,0.108901,0.108901,0.103084,0.09673520000000001,0.08831649999999999,0.09811399999999999,0.10585299999999999,0.111039,0.111039,0.119137],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataSP = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]

var WINS1= {
  x: xRange,
  y: [71.8772,71.4034,71.9507,71.9507,72.5364,73.1149,72.5888,71.9308,72.7791,72.1464,72.1464,71.3529],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var WINS2= {
  x: xRange,
  y: [71.9386,71.4602,70.9841,70.9841,70.4277,69.9463,69.9554,70.2932,69.4987,69.0704,69.0704,69.6194],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var WINS3= {
  x: xRange,
  y: [72.0614,72.6125,73.1472,73.1472,72.7079,72.7948,72.128,71.5665,70.7988,70.0367,70.0367,69.5086],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var WINS4= {
  x: xRange,
  y: [72.0614,71.5867,71.5908,71.5908,71.1034,70.6433,70.681,69.8566,70.5837,71.2023,71.2023,71.7689],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var WINS5= {
  x: xRange,
  y: [71.9386,71.4449,71.9915,71.9915,72.5782,73.1178,73.6694,74.574,74.9255,75.5199,75.5199,75.1387],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var WINS6= {
  x: xRange,
  y: [72.0614,72.5361,72.5398,72.5398,73.0046,73.568,73.5978,74.1307,73.4542,74.3219,74.3219,73.5639],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var WINS7= {
  x: xRange,
  y: [71.9386,71.3876,70.8516,70.8516,70.3241,69.7182,70.1132,69.5229,69.1066,68.3373,68.3373,68.7898],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var WINS8= {
  x: xRange,
  y: [72.1228,72.6166,72.0674,72.0674,72.58,72.5034,73.1093,74.1272,73.4965,72.9809,72.9809,72.4929],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var WINS9= {
  x: xRange,
  y: [72.0614,72.5351,71.9866,71.9866,72.5018,72.9545,73.0722,72.2648,73.2845,73.8156,73.8156,74.4423],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var WINS10= {
  x: xRange,
  y: [71.9386,72.4169,72.8903,72.8903,72.2359,71.6389,71.0848,71.7332,72.0723,72.5685,72.5685,73.3226],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataWINS = [WINS1, WINS2, WINS3, WINS4, WINS5, WINS6, WINS7, WINS8, WINS9, WINS10]