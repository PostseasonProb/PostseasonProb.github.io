var xRange = ["2025-03-21", "2025-03-22", "2025-03-23", "2025-03-24", "2025-03-25", "2025-03-26"];
var PS1= {
  x: xRange,
  y: [0.4891813,0.45830160000000003,0.42646520000000004,0.42646520000000004,0.40204290000000004,0.43201449999999997],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PS2= {
  x: xRange,
  y: [0.5194230000000001,0.48757,0.45798900000000003,0.45798900000000003,0.492559,0.46377300000000005],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PS3= {
  x: xRange,
  y: [0.514857,0.548426,0.577186,0.577186,0.609749,0.572704],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PS4= {
  x: xRange,
  y: [0.47967800000000005,0.45044979999999996,0.41959029999999997,0.41959029999999997,0.38908660000000006,0.42806690000000003],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PS5= {
  x: xRange,
  y: [0.5029830000000001,0.5340469999999999,0.5039144999999999,0.5039144999999999,0.474208,0.4450729],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PS6= {
  x: xRange,
  y: [0.499135,0.526836,0.492709,0.492709,0.520158,0.48480599999999996],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PS7= {
  x: xRange,
  y: [0.508087,0.47638300000000006,0.5067839,0.5067839,0.535596,0.498251],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PS8= {
  x: xRange,
  y: [0.48640809999999995,0.5183315000000001,0.5479067,0.5479067,0.579555,0.6074284],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PS9= {
  x: xRange,
  y: [0.4868719,0.4582585,0.49236199999999997,0.49236199999999997,0.4609576,0.49982699999999997],
  mode: "lines",
  name: "NC",
  line: {color:"#af917b", width: 4}
};
var PS10= {
  x: xRange,
  y: [0.513375,0.541396,0.5750930000000001,0.5750930000000001,0.536089,0.568056],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPS = [PS1, PS2, PS3, PS4, PS5, PS6, PS7, PS8, PS9, PS10]

var KS1= {
  x: xRange,
  y: [0.09502469999999999,0.0814376,0.07121859999999999,0.07121859999999999,0.061549799999999995,0.0716916],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var KS2= {
  x: xRange,
  y: [0.107921,0.09467040000000002,0.08133069999999999,0.08133069999999999,0.0932583,0.08195469999999999],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var KS3= {
  x: xRange,
  y: [0.10433,0.119921,0.132142,0.132142,0.148542,0.126662],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var KS4= {
  x: xRange,
  y: [0.09222860000000001,0.0800605,0.0705817,0.0705817,0.0596825,0.0716885],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var KS5= {
  x: xRange,
  y: [0.0996667,0.11381,0.10160899999999999,0.10160899999999999,0.0866588,0.0775149],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var KS6= {
  x: xRange,
  y: [0.0995459,0.11125,0.0954482,0.0954482,0.105098,0.0916824],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var KS7= {
  x: xRange,
  y: [0.103647,0.0889055,0.0999789,0.0999789,0.11137299999999999,0.0966302],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var KS8= {
  x: xRange,
  y: [0.09526860000000001,0.106848,0.12089200000000001,0.12089200000000001,0.135413,0.15463200000000002],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var KS9= {
  x: xRange,
  y: [0.096484,0.0834286,0.0941123,0.0941123,0.0836144,0.098485],
  mode: "lines",
  name: "NC",
  line: {color:"#af917b", width: 4}
};
var KS10= {
  x: xRange,
  y: [0.10588399999999999,0.119669,0.132687,0.132687,0.11481100000000001,0.129059],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataKS = [KS1, KS2, KS3, KS4, KS5, KS6, KS7, KS8, KS9, KS10]

var PO1= {
  x: xRange,
  y: [0.09834530000000001,0.0886124,0.07966140000000001,0.07966140000000001,0.0732402,0.0802984],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PO2= {
  x: xRange,
  y: [0.104159,0.0946996,0.0891793,0.0891793,0.09511170000000001,0.08989530000000001],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PO3= {
  x: xRange,
  y: [0.1044,0.112229,0.119558,0.119558,0.130598,0.11985799999999999],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PO4= {
  x: xRange,
  y: [0.0938014,0.0871495,0.07824829999999999,0.07824829999999999,0.0697575,0.0801115],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PO5= {
  x: xRange,
  y: [0.0987633,0.1095,0.10071100000000001,0.10071100000000001,0.0917912,0.0853951],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PO6= {
  x: xRange,
  y: [0.0989141,0.10688,0.0980018,0.0980018,0.10680200000000001,0.0952576],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PO7= {
  x: xRange,
  y: [0.10263299999999999,0.09341450000000001,0.101761,0.101761,0.110267,0.0984898],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PO8= {
  x: xRange,
  y: [0.09631139999999999,0.106702,0.11334799999999999,0.11334799999999999,0.12310700000000001,0.132018],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PO9= {
  x: xRange,
  y: [0.097986,0.08990139999999999,0.09913770000000001,0.09913770000000001,0.09057559999999999,0.098665],
  mode: "lines",
  name: "NC",
  line: {color:"#af917b", width: 4}
};
var PO10= {
  x: xRange,
  y: [0.104686,0.11091100000000001,0.12039299999999999,0.12039299999999999,0.108749,0.120011],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPO = [PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO10]

var SP1= {
  x: xRange,
  y: [0.09855,0.09251,0.08623,0.08623,0.08192,0.08831],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var SP2= {
  x: xRange,
  y: [0.10312,0.09803,0.09148,0.09148,0.09935,0.09326],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var SP3= {
  x: xRange,
  y: [0.10231,0.10872,0.11502,0.11502,0.119,0.11283],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var SP4= {
  x: xRange,
  y: [0.09661,0.0912,0.08351,0.08351,0.08161,0.08601],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var SP5= {
  x: xRange,
  y: [0.10233,0.10694,0.10192,0.10192,0.09669,0.08973],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var SP6= {
  x: xRange,
  y: [0.09906,0.10533,0.10033,0.10033,0.10453,0.09852],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var SP7= {
  x: xRange,
  y: [0.10041,0.09509,0.1006,0.1006,0.10622,0.1007],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var SP8= {
  x: xRange,
  y: [0.09777,0.1038,0.10865,0.10865,0.11231,0.1166],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var SP9= {
  x: xRange,
  y: [0.09739,0.09044,0.09957,0.09957,0.09165,0.10198],
  mode: "lines",
  name: "NC",
  line: {color:"#af917b", width: 4}
};
var SP10= {
  x: xRange,
  y: [0.10245,0.10794,0.11269,0.11269,0.10672,0.11206],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataSP = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]

var WINS1= {
  x: xRange,
  y: [71.8196,71.3345,70.8573,70.8573,70.4447,70.9571],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var WINS2= {
  x: xRange,
  y: [72.2826,71.7809,71.3375,71.3375,71.8826,71.4436],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var WINS3= {
  x: xRange,
  y: [72.2393,72.7257,73.1474,73.1474,73.6549,73.0673],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var WINS4= {
  x: xRange,
  y: [71.6694,71.2221,70.7728,70.7728,70.2928,70.8842],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var WINS5= {
  x: xRange,
  y: [72.0318,72.5404,72.0812,72.0812,71.6055,71.1691],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var WINS6= {
  x: xRange,
  y: [71.978,72.425,71.9146,71.9146,72.3319,71.7603],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var WINS7= {
  x: xRange,
  y: [72.1235,71.6228,72.1036,72.1036,72.5257,71.9636],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var WINS8= {
  x: xRange,
  y: [71.7958,72.2871,72.7378,72.7378,73.2305,73.6924],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var WINS9= {
  x: xRange,
  y: [71.8327,71.3671,71.8829,71.8829,71.4292,72.0127],
  mode: "lines",
  name: "NC",
  line: {color:"#af917b", width: 4}
};
var WINS10= {
  x: xRange,
  y: [72.2272,72.6946,73.1648,73.1648,72.6021,73.0498],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataWINS = [WINS1, WINS2, WINS3, WINS4, WINS5, WINS6, WINS7, WINS8, WINS9, WINS10]