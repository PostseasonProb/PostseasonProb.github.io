var xRange = ["2023-03-31", "2023-04-01", "2023-04-02", "2023-04-03", "2023-04-04", "2023-04-05", "2023-04-06", "2023-04-07", "2023-04-08", "2023-04-09", "2023-04-10", "2023-04-11", "2023-04-12", "2023-04-13", "2023-04-14"];
var PS1= {
  x: xRange,
  y: [0.5,0.5388769,0.5010729,0.5010729,0.5398891,0.4997768,0.5307139999999999,0.576653,0.5502407,0.592431,0.592431,0.6161519999999999,0.622413,0.5533642,0.49403400000000003],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PS2= {
  x: xRange,
  y: [0.5,0.4711257,0.5095599,0.5095599,0.48105269999999994,0.4777255,0.4784789,0.439945,0.4026344,0.4410624000000001,0.4410624000000001,0.47318350000000003,0.4280182,0.46369,0.4256386],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PS3= {
  x: xRange,
  y: [0.5,0.45838539999999994,0.49189809999999995,0.49189809999999995,0.5200381,0.5235441000000001,0.4787176,0.43520919999999996,0.3991701,0.35864409999999997,0.35864409999999997,0.32529870000000005,0.2840967,0.3243494,0.36046290000000003],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PS4= {
  x: xRange,
  y: [0.5,0.5249159999999999,0.554373,0.554373,0.5092591000000001,0.542827,0.5033706,0.459579,0.4253822,0.37886119999999995,0.37886119999999995,0.3460919,0.3489036,0.39874050000000005,0.44340880000000005],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PS5= {
  x: xRange,
  y: [0.5,0.4739209,0.44174410000000003,0.44174410000000003,0.403778,0.4060065,0.44560450000000007,0.3977779,0.36092119999999994,0.3176968,0.3176968,0.35514520000000005,0.31698919999999997,0.3594369,0.3655977],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PS6= {
  x: xRange,
  y: [0.5,0.46460019999999996,0.501506,0.501506,0.5065829000000001,0.5032312999999999,0.5041877,0.4672466,0.4994293,0.4697984000000001,0.4697984000000001,0.4233679,0.45470549999999993,0.3957253,0.34632299999999994],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PS7= {
  x: xRange,
  y: [0.5,0.5350488,0.49967149999999994,0.49967149999999994,0.49784660000000003,0.4994421,0.5006703,0.5466052,0.5855035999999999,0.557795,0.557795,0.535471,0.5071205,0.558217,0.555322],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PS8= {
  x: xRange,
  y: [0.5,0.46134830000000004,0.49775640000000004,0.49775640000000004,0.5275798,0.49753539999999996,0.5449963000000001,0.5820821,0.6102625,0.6339622,0.6339622,0.6035493,0.6415557,0.6285926000000001,0.6803525],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PS9= {
  x: xRange,
  y: [0.5,0.5331824000000001,0.5011178,0.5011178,0.4737259,0.5142152999999999,0.48028669999999996,0.5219536,0.5586896,0.6013435,0.6013435,0.6438973,0.6855335,0.6428339,0.6140389999999999],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PS10= {
  x: xRange,
  y: [0.5,0.5385961,0.5012995,0.5012995,0.5402477,0.5356961,0.5329743,0.5729485999999999,0.6077671000000001,0.6484081,0.6484081,0.6778451,0.7106658,0.675051,0.7148211],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataPS = [PS1, PS2, PS3, PS4, PS5, PS6, PS7, PS8, PS9, PS10]

var KS1= {
  x: xRange,
  y: [0.1,0.114791,0.10131899999999999,0.10131899999999999,0.114225,0.0982741,0.110869,0.131906,0.115948,0.132743,0.132743,0.14363299999999998,0.141297,0.11156100000000001,0.0858274],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var KS2= {
  x: xRange,
  y: [0.1,0.0893516,0.10124799999999999,0.10124799999999999,0.0912178,0.0904541,0.0903421,0.075572,0.061400699999999996,0.0714008,0.0714008,0.08059100000000001,0.0613247,0.0767991,0.0625053],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var KS3= {
  x: xRange,
  y: [0.1,0.0830757,0.0942569,0.0942569,0.109001,0.10927200000000001,0.0913429,0.0731421,0.0591546,0.047376800000000004,0.047376800000000004,0.0389373,0.0296587,0.0382788,0.045323800000000004],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var KS4= {
  x: xRange,
  y: [0.1,0.110656,0.12415,0.12415,0.104176,0.118379,0.10099899999999999,0.0812255,0.0670494,0.052904099999999996,0.052904099999999996,0.043454,0.0405233,0.056506499999999994,0.0680079],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var KS5= {
  x: xRange,
  y: [0.1,0.0887347,0.078502,0.078502,0.06435060000000001,0.066008,0.08006100000000001,0.060965,0.0490457,0.0383255,0.0383255,0.0445345,0.035034699999999995,0.0470601,0.047127600000000006],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var KS6= {
  x: xRange,
  y: [0.1,0.085106,0.100151,0.100151,0.102338,0.102346,0.102412,0.0853998,0.0948919,0.080715,0.080715,0.0653194,0.06952180000000001,0.057512,0.043755699999999995],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var KS7= {
  x: xRange,
  y: [0.1,0.115615,0.10046799999999999,0.10046799999999999,0.0985102,0.0988768,0.0977151,0.11867299999999999,0.135889,0.115646,0.115646,0.10405700000000001,0.08637260000000001,0.11513200000000001,0.11248200000000001],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var KS8= {
  x: xRange,
  y: [0.1,0.0833874,0.0994168,0.0994168,0.11139600000000001,0.0978919,0.119208,0.13400700000000001,0.14740799999999998,0.156722,0.156722,0.13591799999999998,0.15170799999999998,0.14957,0.181545],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var KS9= {
  x: xRange,
  y: [0.1,0.11302,0.0995789,0.0995789,0.08731860000000001,0.10393100000000001,0.09233770000000001,0.106539,0.12120600000000001,0.135988,0.135988,0.158532,0.180523,0.159195,0.137679],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var KS10= {
  x: xRange,
  y: [0.1,0.11626299999999999,0.100909,0.100909,0.117466,0.114567,0.114713,0.132571,0.148007,0.16817900000000002,0.16817900000000002,0.185025,0.204036,0.188386,0.215746],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataKS = [KS1, KS2, KS3, KS4, KS5, KS6, KS7, KS8, KS9, KS10]

var PO1= {
  x: xRange,
  y: [0.1,0.0957579,0.0866248,0.0866248,0.0968791,0.08671290000000001,0.093689,0.105001,0.0975317,0.108029,0.108029,0.115714,0.11574200000000001,0.09692719999999999,0.0848576],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PO2= {
  x: xRange,
  y: [0.1,0.0813657,0.0909449,0.0909449,0.0848468,0.0854309,0.0836089,0.0751654,0.0657702,0.0738226,0.0738226,0.0817488,0.0702301,0.0794621,0.0712267],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PO3= {
  x: xRange,
  y: [0.1,0.08297270000000001,0.0908924,0.0908924,0.0980041,0.0970211,0.087404,0.0757906,0.0652629,0.056997,0.056997,0.049898000000000005,0.040404699999999995,0.050171400000000005,0.0584126],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PO4= {
  x: xRange,
  y: [0.1,0.102979,0.109694,0.109694,0.09721010000000001,0.106032,0.09680280000000001,0.08470280000000001,0.0743036,0.0621859,0.0621859,0.0556403,0.054554700000000005,0.067956,0.0791239],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PO5= {
  x: xRange,
  y: [0.1,0.09092700000000001,0.0823872,0.0823872,0.07420439999999999,0.0736046,0.0839235,0.0719021,0.0615747,0.0511618,0.0511618,0.0584758,0.048555,0.0580578,0.0615024],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PO6= {
  x: xRange,
  y: [0.1,0.0914393,0.101875,0.101875,0.103639,0.100901,0.10256299999999999,0.09052729999999999,0.0979264,0.08907620000000001,0.08907620000000001,0.0753413,0.0842189,0.0698629,0.0592555],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PO7= {
  x: xRange,
  y: [0.1,0.113878,0.104138,0.104138,0.102988,0.10409600000000001,0.103974,0.116405,0.126803,0.116949,0.116949,0.110389,0.0984689,0.11557,0.11446799999999999],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PO8= {
  x: xRange,
  y: [0.1,0.0970445,0.107509,0.107509,0.11489700000000001,0.10777700000000001,0.120562,0.13004200000000002,0.13881,0.144647,0.144647,0.134106,0.142749,0.143407,0.155089],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PO9= {
  x: xRange,
  y: [0.1,0.11973,0.11023899999999999,0.11023899999999999,0.10330600000000001,0.11428,0.10433200000000001,0.114634,0.12578899999999998,0.138964,0.138964,0.151647,0.16377799999999998,0.151859,0.138573],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PO10= {
  x: xRange,
  y: [0.1,0.123906,0.11569600000000001,0.11569600000000001,0.124025,0.12414399999999999,0.123141,0.13583,0.146229,0.158168,0.158168,0.16703900000000002,0.18129900000000002,0.16672599999999999,0.17749099999999998],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataPO = [PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO10]

var SP1= {
  x: xRange,
  y: [0.1,0.104778,0.0973693,0.0973693,0.10618799999999999,0.10051600000000001,0.10424399999999999,0.11330899999999999,0.107413,0.118409,0.118409,0.120249,0.12279200000000001,0.111447,0.10160899999999999],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var SP2= {
  x: xRange,
  y: [0.1,0.0933082,0.10074200000000001,0.10074200000000001,0.09535129999999999,0.09350370000000001,0.0939482,0.0862188,0.078697,0.0879513,0.0879513,0.0967098,0.0851475,0.0936283,0.0855708],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var SP3= {
  x: xRange,
  y: [0.1,0.09182649999999999,0.09983030000000001,0.09983030000000001,0.10317799999999999,0.10362600000000001,0.09557620000000001,0.0891632,0.0806343,0.0719903,0.0719903,0.0657473,0.054588199999999996,0.0644325,0.0723998],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var SP4= {
  x: xRange,
  y: [0.1,0.103281,0.109075,0.109075,0.100439,0.107575,0.099652,0.09212479999999999,0.0873067,0.0769092,0.0769092,0.0695153,0.071976,0.08082270000000001,0.0912858],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var SP5= {
  x: xRange,
  y: [0.1,0.0963277,0.08865719999999999,0.08865719999999999,0.08255620000000001,0.0808185,0.0900518,0.08015560000000001,0.0750693,0.06419,0.06419,0.0712731,0.064134,0.07272,0.07346],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var SP6= {
  x: xRange,
  y: [0.1,0.0934713,0.10167,0.10167,0.100735,0.10071,0.09998399999999999,0.0945604,0.10243100000000001,0.0970362,0.0970362,0.08851930000000001,0.09551879999999999,0.0816853,0.071369],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var SP7= {
  x: xRange,
  y: [0.1,0.106255,0.101476,0.101476,0.10038200000000001,0.10117799999999999,0.102434,0.109547,0.117955,0.113054,0.113054,0.11050299999999999,0.106419,0.11492,0.11476],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var SP8= {
  x: xRange,
  y: [0.1,0.09403270000000001,0.098979,0.098979,0.10556,0.0997692,0.108919,0.115183,0.120738,0.12402,0.12402,0.120256,0.13089,0.125794,0.13302799999999998],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var SP9= {
  x: xRange,
  y: [0.1,0.107444,0.10095299999999999,0.10095299999999999,0.0975853,0.10415799999999999,0.0972008,0.107114,0.110386,0.120794,0.120794,0.128275,0.135267,0.127086,0.125193],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var SP10= {
  x: xRange,
  y: [0.1,0.109276,0.10124799999999999,0.10124799999999999,0.108026,0.108145,0.107991,0.11262299999999999,0.11937,0.125647,0.125647,0.12895299999999998,0.133268,0.127464,0.131325],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataSP = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]

var WINS1= {
  x: xRange,
  y: [72.0,72.5943,72.0567,72.0567,72.6039,72.0263,72.4386,73.1751,72.7457,73.456,73.456,73.8306,73.8631,72.8179,71.9442],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var WINS2= {
  x: xRange,
  y: [72.0,71.5899,72.1276,72.1276,71.7454,71.6684,71.6983,71.1049,70.5338,71.1118,71.1118,71.5823,70.9422,71.4994,70.8983],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var WINS3= {
  x: xRange,
  y: [72.0,71.3643,71.8408,71.8408,72.283,72.3376,71.6533,70.997,70.4548,69.8589,69.8589,69.3198,68.632,69.2713,69.9093],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var WINS4= {
  x: xRange,
  y: [72.0,72.4147,72.8869,72.8869,72.1905,72.678,72.0709,71.445,70.8552,70.1553,70.1553,69.6701,69.6816,70.4999,71.1419],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var WINS5= {
  x: xRange,
  y: [72.0,71.5852,71.1126,71.1126,70.5203,70.5765,71.1864,70.4324,69.8611,69.2154,69.2154,69.7555,69.1816,69.8115,69.9425],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var WINS6= {
  x: xRange,
  y: [72.0,71.4449,72.0111,72.0111,72.0799,72.0444,72.0563,71.5033,72.0267,71.5584,71.5584,70.8669,71.3447,70.4432,69.6633],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var WINS7= {
  x: xRange,
  y: [72.0,72.4189,71.8868,71.8868,71.8524,71.8709,71.8873,72.5708,73.1724,72.7324,72.7324,72.3784,71.9241,72.7249,72.6708],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var WINS8= {
  x: xRange,
  y: [72.0,71.3969,71.9283,71.9283,72.4143,71.9515,72.6458,73.2476,73.6861,73.9888,73.9888,73.5775,74.1269,73.9581,74.7053],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var WINS9= {
  x: xRange,
  y: [72.0,72.5129,72.0371,72.0371,71.5868,72.1815,71.7161,72.3047,72.8753,73.5019,73.5019,74.1441,74.8545,74.1438,73.6507],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var WINS10= {
  x: xRange,
  y: [72.0,72.5552,71.9893,71.9893,72.6008,72.5419,72.5243,73.0965,73.6663,74.2984,74.2984,74.7523,75.3268,74.7079,75.3518],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataWINS = [WINS1, WINS2, WINS3, WINS4, WINS5, WINS6, WINS7, WINS8, WINS9, WINS10]