var xRange = ["2022-04-01", "2022-04-02", "2022-04-03", "2022-04-04", "2022-04-05"];
var PS1= {
  x: xRange,
  y: [0.5,0.5137518000000001,0.548318,0.548318,0.5095632999999999],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PS2= {
  x: xRange,
  y: [0.5,0.5210468,0.4916202999999999,0.4916202999999999,0.527598],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PS3= {
  x: xRange,
  y: [0.5,0.4600927,0.4922856,0.4922856,0.5256540000000001],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PS4= {
  x: xRange,
  y: [0.5,0.4584152,0.48718180000000005,0.48718180000000005,0.464389],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PS5= {
  x: xRange,
  y: [0.5,0.46793010000000007,0.4356692,0.4356692,0.39922379999999996],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PS6= {
  x: xRange,
  y: [0.5,0.46478289999999994,0.4289683,0.4289683,0.46438160000000006],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PS7= {
  x: xRange,
  y: [0.5,0.536835,0.502189,0.502189,0.47005870000000005],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PS8= {
  x: xRange,
  y: [0.5,0.5460839999999999,0.584639,0.584639,0.6170939999999999],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PS9= {
  x: xRange,
  y: [0.5,0.47650309999999996,0.43637770000000004,0.43637770000000004,0.4042527],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PS10= {
  x: xRange,
  y: [0.5,0.554559,0.592752,0.592752,0.6177860000000001],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataPS = [PS1, PS2, PS3, PS4, PS5, PS6, PS7, PS8, PS9, PS10]

var KS1= {
  x: xRange,
  y: [0.1,0.11342100000000001,0.126211,0.126211,0.106358],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var KS2= {
  x: xRange,
  y: [0.1,0.112574,0.101283,0.101283,0.11288799999999999],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var KS3= {
  x: xRange,
  y: [0.1,0.0863526,0.10047299999999999,0.10047299999999999,0.111185],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var KS4= {
  x: xRange,
  y: [0.1,0.08446229999999999,0.0951676,0.0951676,0.0833068],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var KS5= {
  x: xRange,
  y: [0.1,0.0858604,0.074458,0.074458,0.0630123],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var KS6= {
  x: xRange,
  y: [0.1,0.0859533,0.0707695,0.0707695,0.0822281],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var KS7= {
  x: xRange,
  y: [0.1,0.11308,0.096548,0.096548,0.0833168],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var KS8= {
  x: xRange,
  y: [0.1,0.116738,0.13314,0.13314,0.151566],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var KS9= {
  x: xRange,
  y: [0.1,0.08465719999999999,0.0683854,0.0683854,0.059732799999999996],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var KS10= {
  x: xRange,
  y: [0.1,0.116902,0.133564,0.133564,0.146406],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataKS = [KS1, KS2, KS3, KS4, KS5, KS6, KS7, KS8, KS9, KS10]

var PO1= {
  x: xRange,
  y: [0.1,0.0945558,0.10246200000000001,0.10246200000000001,0.09205129999999999],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PO2= {
  x: xRange,
  y: [0.1,0.0985458,0.09081959999999999,0.09081959999999999,0.10035100000000001],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PO3= {
  x: xRange,
  y: [0.1,0.08493110000000001,0.0935318,0.0935318,0.10207],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PO4= {
  x: xRange,
  y: [0.1,0.0869832,0.0926479,0.0926479,0.088834],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PO5= {
  x: xRange,
  y: [0.1,0.08957760000000001,0.0815957,0.0815957,0.0713557],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PO6= {
  x: xRange,
  y: [0.1,0.0898034,0.08188899999999999,0.08188899999999999,0.09001690000000001],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PO7= {
  x: xRange,
  y: [0.1,0.112947,0.102839,0.102839,0.0929544],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PO8= {
  x: xRange,
  y: [0.1,0.11726299999999999,0.12973700000000002,0.12973700000000002,0.139794],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PO9= {
  x: xRange,
  y: [0.1,0.09902219999999999,0.08910290000000001,0.08910290000000001,0.07748060000000001],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PO10= {
  x: xRange,
  y: [0.1,0.12637,0.135375,0.135375,0.145092],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataPO = [PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO10]

var SP1= {
  x: xRange,
  y: [0.1,0.103349,0.11221600000000001,0.11221600000000001,0.103823],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var SP2= {
  x: xRange,
  y: [0.1,0.10580200000000001,0.09830370000000001,0.09830370000000001,0.105669],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var SP3= {
  x: xRange,
  y: [0.1,0.09423450000000001,0.099206,0.099206,0.10628],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var SP4= {
  x: xRange,
  y: [0.1,0.0928743,0.0990665,0.0990665,0.09423899999999999],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var SP5= {
  x: xRange,
  y: [0.1,0.09535469999999999,0.0875735,0.0875735,0.08282020000000001],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var SP6= {
  x: xRange,
  y: [0.1,0.0933742,0.0863458,0.0863458,0.09580229999999999],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var SP7= {
  x: xRange,
  y: [0.1,0.105227,0.10072,0.10072,0.09526219999999999],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var SP8= {
  x: xRange,
  y: [0.1,0.106491,0.114111,0.114111,0.11718100000000001],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var SP9= {
  x: xRange,
  y: [0.1,0.096786,0.08893229999999999,0.08893229999999999,0.08153300000000001],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var SP10= {
  x: xRange,
  y: [0.1,0.10650799999999999,0.113526,0.113526,0.11739100000000001],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataSP = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]

var WINS1= {
  x: xRange,
  y: [72.0,72.476,72.9725,72.9725,72.4224],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var WINS2= {
  x: xRange,
  y: [72.0,72.5533,72.1023,72.1023,72.616],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var WINS3= {
  x: xRange,
  y: [72.0,71.5063,72.0498,72.0498,72.5496],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var WINS4= {
  x: xRange,
  y: [72.0,71.4468,71.8988,71.8988,71.5055],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var WINS5= {
  x: xRange,
  y: [72.0,71.5238,71.0272,71.0272,70.4932],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var WINS6= {
  x: xRange,
  y: [72.0,71.4257,70.8413,70.8413,71.3988],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var WINS7= {
  x: xRange,
  y: [72.0,72.4938,71.9491,71.9491,71.4723],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var WINS8= {
  x: xRange,
  y: [72.0,72.5743,73.1588,73.1588,73.6815],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var WINS9= {
  x: xRange,
  y: [72.0,71.4257,70.8319,70.8319,70.295],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var WINS10= {
  x: xRange,
  y: [72.0,72.5743,73.1683,73.1683,73.5658],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataWINS = [WINS1, WINS2, WINS3, WINS4, WINS5, WINS6, WINS7, WINS8, WINS9, WINS10]