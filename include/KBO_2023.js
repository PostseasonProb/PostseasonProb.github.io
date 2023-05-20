var xRange = ["2023-03-31", "2023-04-01", "2023-04-02", "2023-04-03", "2023-04-04", "2023-04-05", "2023-04-06", "2023-04-07", "2023-04-08", "2023-04-09", "2023-04-10", "2023-04-11", "2023-04-12", "2023-04-13", "2023-04-14", "2023-04-15", "2023-04-16", "2023-04-17", "2023-04-18", "2023-04-19", "2023-04-20", "2023-04-21", "2023-04-22", "2023-04-23", "2023-04-24", "2023-04-25", "2023-04-26", "2023-04-27", "2023-04-28", "2023-04-29", "2023-04-30", "2023-05-01", "2023-05-02", "2023-05-03", "2023-05-04", "2023-05-05", "2023-05-06", "2023-05-07", "2023-05-08", "2023-05-09", "2023-05-10", "2023-05-11", "2023-05-12", "2023-05-13", "2023-05-14", "2023-05-15", "2023-05-16", "2023-05-17", "2023-05-18", "2023-05-19", "2023-05-20"];
var PS1= {
  x: xRange,
  y: [0.5,0.5388769,0.5010729,0.5010729,0.5398891,0.4997768,0.5307139999999999,0.576653,0.5502407,0.592431,0.592431,0.6161519999999999,0.622413,0.5533642,0.49403400000000003,0.4553334999999999,0.5044122999999999,0.5044122999999999,0.5429952,0.5108715,0.5517812999999999,0.602814,0.6490319999999999,0.653637,0.653637,0.649492,0.6089019999999999,0.572867,0.5307993,0.48238800000000004,0.5237069999999999,0.5237069999999999,0.5566018,0.50685,0.445706,0.44768699999999995,0.45039199999999996,0.392683,0.392683,0.425596,0.382517,0.35116699999999995,0.400885,0.442199,0.49454699999999996,0.49454699999999996,0.5454680000000001,0.5970155,0.5512469999999999,0.5002369999999999,0.5541969999999999],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PS2= {
  x: xRange,
  y: [0.5,0.4711257,0.5095599,0.5095599,0.48105269999999994,0.4777255,0.4784789,0.439945,0.4026344,0.4410624000000001,0.4410624000000001,0.47318350000000003,0.4280182,0.46369,0.4256386,0.4589536,0.41602330000000004,0.41602330000000004,0.4447018,0.39189589999999996,0.4184697,0.46192429999999995,0.5127784000000001,0.5532407,0.5532407,0.5560876,0.5925590000000001,0.6274419999999999,0.663314,0.66053,0.688663,0.688663,0.7334769999999999,0.6898139999999999,0.6962010000000001,0.698027,0.698024,0.692632,0.692632,0.6444939999999999,0.6801689999999999,0.7103959999999999,0.6746440000000001,0.720182,0.7592070000000001,0.7592070000000001,0.7928580000000001,0.7678779999999998,0.8028580000000001,0.8374889999999999,0.7966409999999999],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PS3= {
  x: xRange,
  y: [0.5,0.45838539999999994,0.49189809999999995,0.49189809999999995,0.5200381,0.5235441000000001,0.4787176,0.43520919999999996,0.3991701,0.35864409999999997,0.35864409999999997,0.32529870000000005,0.2840967,0.3243494,0.36046290000000003,0.3201125,0.3543861,0.3543861,0.39050120000000005,0.43289720000000004,0.3893239,0.35123619999999994,0.3071449,0.2721886,0.2721886,0.26876300000000003,0.30445130000000004,0.3357675,0.3745819,0.412003,0.44676160000000004,0.44676160000000004,0.39518410000000004,0.3505857,0.42108200000000007,0.4194364,0.420697,0.4354027,0.4354027,0.48431099999999994,0.43941369999999996,0.3971196,0.4441949,0.3961882,0.35033480000000006,0.35033480000000006,0.2931623,0.25821079999999996,0.25649150000000004,0.29729279999999997,0.23542369],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PS4= {
  x: xRange,
  y: [0.5,0.5249159999999999,0.554373,0.554373,0.5092591000000001,0.542827,0.5033706,0.459579,0.4253822,0.37886119999999995,0.37886119999999995,0.3460919,0.3489036,0.39874050000000005,0.44340880000000005,0.4791850000000001,0.5107647999999999,0.5107647999999999,0.46274669999999996,0.421354,0.463235,0.42671169999999997,0.3935252,0.3591307000000001,0.3591307000000001,0.3903994,0.46104329999999993,0.49997,0.45585020000000004,0.45290119999999995,0.41012439999999994,0.41012439999999994,0.4579244,0.5072099,0.4391425,0.3961853999999999,0.35786830000000003,0.32574899999999996,0.32574899999999996,0.2872496,0.3557618,0.3277597,0.36809699999999995,0.42708729999999995,0.38118690000000005,0.38118690000000005,0.32337150000000003,0.2775389,0.3155835,0.2634661,0.22472673999999998],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PS5= {
  x: xRange,
  y: [0.5,0.4739209,0.44174410000000003,0.44174410000000003,0.403778,0.4060065,0.44560450000000007,0.3977779,0.36092119999999994,0.3176968,0.3176968,0.35514520000000005,0.31698919999999997,0.3594369,0.3655977,0.413052,0.35972580000000004,0.35972580000000004,0.3107661,0.34887470000000004,0.302091,0.2682007,0.23470580000000002,0.2674826,0.2674826,0.2637281,0.2254078,0.19310290000000002,0.1648107,0.13907201,0.11070321,0.11070321,0.08881850000000001,0.11400031999999999,0.14147389,0.1428626,0.14475821,0.16972674,0.16972674,0.12720399,0.14859307,0.17327334000000003,0.2111048,0.17948137,0.17970882,0.17970882,0.14876398000000002,0.1687073,0.13882408,0.1166625,0.11697],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PS6= {
  x: xRange,
  y: [0.5,0.46460019999999996,0.501506,0.501506,0.5065829000000001,0.5032312999999999,0.5041877,0.4672466,0.4994293,0.4697984000000001,0.4697984000000001,0.4233679,0.45470549999999993,0.3957253,0.34632299999999994,0.307133,0.27072730000000006,0.27072730000000006,0.2394482,0.2725856,0.24433760000000002,0.2693973,0.3054816,0.33804090000000003,0.33804090000000003,0.2887131,0.3342932,0.3820396000000001,0.42530589999999996,0.478148,0.5281653,0.5281653,0.47505850000000005,0.5375072999999999,0.54384,0.5414014,0.5417197,0.5495042,0.5495042,0.5906754,0.5493796,0.5115766,0.4524378,0.4098115,0.36338489999999996,0.36338489999999996,0.4177145,0.46254490000000004,0.4597345,0.5291243000000001,0.5627625],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PS7= {
  x: xRange,
  y: [0.5,0.5350488,0.49967149999999994,0.49967149999999994,0.49784660000000003,0.4994421,0.5006703,0.5466052,0.5855035999999999,0.557795,0.557795,0.535471,0.5071205,0.558217,0.555322,0.5121478,0.5609040000000001,0.5609040000000001,0.600654,0.636485,0.5934590000000001,0.5550390000000001,0.5189136,0.5258012,0.5258012,0.49503410000000003,0.429139,0.3855322,0.3431157,0.2974367,0.2584008,0.2584008,0.3098195,0.27427650000000003,0.2340489,0.237614,0.23899650000000003,0.20544369999999998,0.20544369999999998,0.1528639,0.1325091,0.1115148,0.1283872,0.10195529999999998,0.0782726,0.0782726,0.1007981,0.0826882,0.0672223,0.08301810000000001,0.05982773],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PS8= {
  x: xRange,
  y: [0.5,0.46134830000000004,0.49775640000000004,0.49775640000000004,0.5275798,0.49753539999999996,0.5449963000000001,0.5820821,0.6102625,0.6339622,0.6339622,0.6035493,0.6415557,0.6285926000000001,0.6803525,0.7106483,0.6741447,0.6741447,0.6458410000000001,0.6798229000000001,0.7212806999999999,0.7537716999999998,0.7903326,0.7599475,0.7599475,0.7899620999999999,0.7595719000000001,0.7908294,0.7581329000000001,0.7218097,0.67629,0.67629,0.715835,0.7552091000000001,0.7572175000000001,0.7614162,0.7617137999999999,0.8090250000000001,0.8090250000000001,0.8299406000000001,0.7872776000000001,0.8195921,0.7885059,0.8217689000000001,0.8530165,0.8530165,0.8173642999999999,0.8425144,0.8657509999999999,0.8851595,0.8811754999999999],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PS9= {
  x: xRange,
  y: [0.5,0.5331824000000001,0.5011178,0.5011178,0.4737259,0.5142152999999999,0.48028669999999996,0.5219536,0.5586896,0.6013435,0.6013435,0.6438973,0.6855335,0.6428339,0.6140389999999999,0.6512409,0.7033280000000001,0.7033280000000001,0.7437658,0.7182907000000001,0.6825923999999999,0.6477693000000001,0.5980559999999999,0.5504664,0.5504664,0.604032,0.5538898999999999,0.5094961,0.5472773999999999,0.581867,0.6214870000000001,0.6214870000000001,0.5799110000000001,0.5436553,0.5500658,0.5513519,0.5520371,0.5582153,0.5582153,0.623446,0.660964,0.70891,0.666037,0.6169575,0.6604789999999999,0.6604789999999999,0.697678,0.6519294000000001,0.6517445,0.6121177999999999,0.6691572],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PS10= {
  x: xRange,
  y: [0.5,0.5385961,0.5012995,0.5012995,0.5402477,0.5356961,0.5329743,0.5729485999999999,0.6077671000000001,0.6484081,0.6484081,0.6778451,0.7106658,0.675051,0.7148211,0.6921959,0.645585,0.645585,0.618582,0.5869228,0.6334303000000001,0.6631368000000001,0.6900317,0.7200650999999999,0.7200650999999999,0.6937889,0.7307424,0.7029552,0.7368131,0.7738467000000001,0.7357003,0.7357003,0.6873683,0.7208948,0.7712219,0.8040204,0.8337926999999999,0.8616197999999999,0.8616197999999999,0.8342200999999999,0.8634175000000002,0.8886933,0.8657053,0.8843695999999999,0.8798628,0.8798628,0.8628222999999999,0.8909754,0.8905432000000001,0.8754335000000001,0.8991195],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataPS = [PS1, PS2, PS3, PS4, PS5, PS6, PS7, PS8, PS9, PS10]

var KS1= {
  x: xRange,
  y: [0.1,0.114791,0.10131899999999999,0.10131899999999999,0.114225,0.0982741,0.110869,0.131906,0.115948,0.132743,0.132743,0.14363299999999998,0.141297,0.11156100000000001,0.0858274,0.0716648,0.0867713,0.0867713,0.0992278,0.0882286,0.105961,0.12405799999999999,0.14469,0.148899,0.148899,0.146174,0.126524,0.10803399999999999,0.08918229999999999,0.0718096,0.087715,0.087715,0.09966280000000001,0.07911810000000001,0.0591994,0.0577783,0.0559562,0.037976300000000004,0.037976300000000004,0.044199499999999996,0.035817,0.027175500000000002,0.039393899999999996,0.043330600000000004,0.0506126,0.0506126,0.0644127,0.0773585,0.0574309,0.044542700000000005,0.0541705],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var KS2= {
  x: xRange,
  y: [0.1,0.0893516,0.10124799999999999,0.10124799999999999,0.0912178,0.0904541,0.0903421,0.075572,0.061400699999999996,0.0714008,0.0714008,0.08059100000000001,0.0613247,0.0767991,0.0625053,0.0728425,0.0593001,0.0593001,0.0677082,0.053241000000000004,0.0600796,0.0699094,0.0831266,0.09858299999999999,0.09858299999999999,0.09754389999999999,0.116332,0.13492,0.156199,0.153697,0.175402,0.175402,0.208998,0.170084,0.171816,0.166085,0.16261299999999998,0.150894,0.150894,0.120059,0.13828700000000002,0.13906,0.138177,0.151674,0.170408,0.170408,0.21149,0.175111,0.19555599999999998,0.22722900000000001,0.178415],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var KS3= {
  x: xRange,
  y: [0.1,0.0830757,0.0942569,0.0942569,0.109001,0.10927200000000001,0.0913429,0.0731421,0.0591546,0.047376800000000004,0.047376800000000004,0.0389373,0.0296587,0.0382788,0.045323800000000004,0.0361318,0.04402520000000001,0.04402520000000001,0.0516987,0.0636236,0.050775299999999995,0.0413284,0.029779200000000002,0.0244183,0.0244183,0.024172199999999998,0.029640700000000002,0.0357218,0.0446189,0.0521164,0.060921800000000005,0.060921800000000005,0.0483896,0.0385731,0.050869,0.0505394,0.0467325,0.0455792,0.0455792,0.058436999999999996,0.0475074,0.0333236,0.0483612,0.034532600000000004,0.024852,0.024852,0.0187611,0.0143807,0.013033399999999999,0.0165469,0.00935359],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var KS4= {
  x: xRange,
  y: [0.1,0.110656,0.12415,0.12415,0.104176,0.118379,0.10099899999999999,0.0812255,0.0670494,0.052904099999999996,0.052904099999999996,0.043454,0.0405233,0.056506499999999994,0.0680079,0.0781734,0.09163049999999999,0.09163049999999999,0.071769,0.059316,0.0727633,0.0595237,0.0477689,0.0392534,0.0392534,0.0460375,0.0650519,0.07662229999999999,0.0629067,0.06316569999999999,0.052211099999999996,0.052211099999999996,0.0651273,0.0791769,0.0553734,0.0430743,0.0333965,0.0247109,0.0247109,0.0196191,0.029063699999999998,0.021481,0.0304296,0.039003499999999997,0.027163000000000003,0.027163000000000003,0.020735,0.0143211,0.0166621,0.011241199999999998,0.008430140000000001],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var KS5= {
  x: xRange,
  y: [0.1,0.0887347,0.078502,0.078502,0.06435060000000001,0.066008,0.08006100000000001,0.060965,0.0490457,0.0383255,0.0383255,0.0445345,0.035034699999999995,0.0470601,0.047127600000000006,0.05956020000000001,0.0446367,0.0446367,0.035186,0.042338999999999995,0.031650500000000005,0.0258552,0.0196454,0.0237311,0.0237311,0.0227062,0.018435899999999998,0.014695999999999999,0.010787699999999999,0.008000410000000001,0.00546501,0.00546501,0.00427724,0.00587192,0.00823059,0.0075517,0.00734381,0.00844374,0.00844374,0.00546049,0.0069029700000000005,0.007474539999999999,0.0127061,0.00861937,0.009323920000000001,0.009323920000000001,0.006588579999999999,0.007843300000000001,0.00482928,0.00368383,0.00317],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var KS6= {
  x: xRange,
  y: [0.1,0.085106,0.100151,0.100151,0.102338,0.102346,0.102412,0.0853998,0.0948919,0.080715,0.080715,0.0653194,0.06952180000000001,0.057512,0.043755699999999995,0.0341138,0.0285471,0.0285471,0.0218931,0.0285302,0.0231336,0.027038200000000002,0.0319546,0.0376291,0.0376291,0.026803800000000003,0.0373719,0.0461227,0.058416499999999996,0.0711658,0.08988299999999999,0.08988299999999999,0.0701782,0.0899363,0.089771,0.0870464,0.0841247,0.0772852,0.0772852,0.0945124,0.0765134,0.058391099999999994,0.051389899999999995,0.036881,0.026691999999999997,0.026691999999999997,0.036614,0.04139520000000001,0.0392642,0.05198560000000001,0.0589074],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var KS7= {
  x: xRange,
  y: [0.1,0.115615,0.10046799999999999,0.10046799999999999,0.0985102,0.0988768,0.0977151,0.11867299999999999,0.135889,0.115646,0.115646,0.10405700000000001,0.08637260000000001,0.11513200000000001,0.11248200000000001,0.0899498,0.112673,0.112673,0.130414,0.153181,0.126469,0.105105,0.0872046,0.09928,0.09928,0.08532,0.06516,0.05506,0.04369,0.03408,0.0277,0.0277,0.03651,0.02876,0.02223,0.02091,0.02036,0.01427,0.01427,0.00895,0.00699,0.00462,0.00733,0.00423,0.00252608,0.00252608,0.0034614199999999998,0.0021367,0.00165072,0.00211617,0.00113],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var KS8= {
  x: xRange,
  y: [0.1,0.0833874,0.0994168,0.0994168,0.11139600000000001,0.0978919,0.119208,0.13400700000000001,0.14740799999999998,0.156722,0.156722,0.13591799999999998,0.15170799999999998,0.14957,0.181545,0.20551599999999998,0.175347,0.175347,0.15331799999999998,0.17801799999999998,0.20615599999999998,0.236184,0.266855,0.233879,0.233879,0.26173599999999997,0.231994,0.26474400000000003,0.22822900000000002,0.193176,0.16039899999999999,0.16039899999999999,0.18731799999999998,0.22253799999999999,0.218192,0.212893,0.20627,0.23869900000000002,0.23869900000000002,0.26959900000000003,0.213209,0.22891799999999998,0.216105,0.24167599999999997,0.266546,0.266546,0.220381,0.241553,0.26575099999999996,0.297723,0.27769099999999997],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var KS9= {
  x: xRange,
  y: [0.1,0.11302,0.0995789,0.0995789,0.08731860000000001,0.10393100000000001,0.09233770000000001,0.106539,0.12120600000000001,0.135988,0.135988,0.158532,0.180523,0.159195,0.137679,0.159604,0.198976,0.198976,0.22922599999999999,0.20965599999999998,0.175285,0.149872,0.11579,0.0938824,0.0938824,0.114536,0.09732690000000001,0.0796801,0.0936144,0.106664,0.128403,0.128403,0.107771,0.0902783,0.0892958,0.0875099,0.0842701,0.0794713,0.0794713,0.104075,0.120412,0.131934,0.12694,0.0926725,0.102689,0.102689,0.125309,0.0944084,0.0902935,0.0737438,0.0914642],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var KS10= {
  x: xRange,
  y: [0.1,0.11626299999999999,0.100909,0.100909,0.117466,0.114567,0.114713,0.132571,0.148007,0.16817900000000002,0.16817900000000002,0.185025,0.204036,0.188386,0.215746,0.192444,0.15809299999999998,0.15809299999999998,0.139559,0.123867,0.147727,0.161126,0.17318599999999998,0.200444,0.200444,0.174971,0.21216200000000002,0.184399,0.212356,0.246125,0.2119,0.2119,0.171767,0.195663,0.23502299999999998,0.266613,0.29893200000000003,0.322671,0.322671,0.275088,0.325298,0.347622,0.329168,0.34738,0.319187,0.319187,0.29224700000000003,0.33149199999999995,0.315529,0.271187,0.317269],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataKS = [KS1, KS2, KS3, KS4, KS5, KS6, KS7, KS8, KS9, KS10]

var PO1= {
  x: xRange,
  y: [0.1,0.0957579,0.0866248,0.0866248,0.0968791,0.08671290000000001,0.093689,0.105001,0.0975317,0.108029,0.108029,0.115714,0.11574200000000001,0.09692719999999999,0.0848576,0.0761102,0.087207,0.087207,0.09606239999999999,0.08752389999999999,0.09925129999999999,0.111784,0.12628899999999998,0.139401,0.139401,0.14069600000000002,0.128126,0.11619600000000001,0.10347799999999999,0.0902204,0.100455,0.100455,0.112347,0.09608190000000001,0.0787206,0.0792117,0.0776138,0.0618637,0.0618637,0.0683805,0.058073,0.0484845,0.06405609999999999,0.0719094,0.0772574,0.0772574,0.0919173,0.104562,0.0888491,0.0731373,0.08291950000000001],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PO2= {
  x: xRange,
  y: [0.1,0.0813657,0.0909449,0.0909449,0.0848468,0.0854309,0.0836089,0.0751654,0.0657702,0.0738226,0.0738226,0.0817488,0.0702301,0.0794621,0.0712267,0.0794768,0.0684644,0.0684644,0.0745446,0.062782,0.0685404,0.0797714,0.0929418,0.0988507,0.0988507,0.0981277,0.10919799999999999,0.12015799999999999,0.129973,0.128748,0.135413,0.135413,0.14733200000000002,0.137246,0.13663,0.13777799999999998,0.140527,0.137305,0.137305,0.11925100000000001,0.131128,0.13864100000000001,0.130876,0.145228,0.16195299999999999,0.16195299999999999,0.170847,0.161354,0.175467,0.19009099999999998,0.17491700000000002],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PO3= {
  x: xRange,
  y: [0.1,0.08297270000000001,0.0908924,0.0908924,0.0980041,0.0970211,0.087404,0.0757906,0.0652629,0.056997,0.056997,0.049898000000000005,0.040404699999999995,0.050171400000000005,0.0584126,0.0485253,0.0553693,0.0553693,0.0636708,0.0725059,0.0625529,0.0538971,0.0456692,0.0368314,0.0368314,0.0351845,0.0413863,0.047716,0.0572279,0.0642931,0.0737356,0.0737356,0.060873199999999995,0.0508324,0.0658677,0.06546479999999999,0.0631553,0.06627899999999999,0.06627899999999999,0.076056,0.0652886,0.0532459,0.0665265,0.0559094,0.045003299999999996,0.045003299999999996,0.0351459,0.027312600000000003,0.0273966,0.0311459,0.023118899999999998],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PO4= {
  x: xRange,
  y: [0.1,0.102979,0.109694,0.109694,0.09721010000000001,0.106032,0.09680280000000001,0.08470280000000001,0.0743036,0.0621859,0.0621859,0.0556403,0.054554700000000005,0.067956,0.0791239,0.0896253,0.09584129999999999,0.09584129999999999,0.0846492,0.07301479999999999,0.0835842,0.07426229999999999,0.0653588,0.0549299,0.0549299,0.061757700000000006,0.0790391,0.0899337,0.0786352,0.07777,0.0664362,0.0664362,0.0779473,0.09020700000000001,0.0714151,0.0614639,0.051469799999999996,0.0432319,0.0432319,0.034636,0.0479203,0.0398491,0.0522404,0.062557,0.050395699999999995,0.050395699999999995,0.0382212,0.030815500000000003,0.035141900000000004,0.0262699,0.020908200000000002],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PO5= {
  x: xRange,
  y: [0.1,0.09092700000000001,0.0823872,0.0823872,0.07420439999999999,0.0736046,0.0839235,0.0719021,0.0615747,0.0511618,0.0511618,0.0584758,0.048555,0.0580578,0.0615024,0.0736498,0.0602733,0.0602733,0.047714,0.057281000000000006,0.045039499999999996,0.0386648,0.0317046,0.041608900000000004,0.041608900000000004,0.0400738,0.0336141,0.026034,0.0213023,0.0165796,0.012505,0.012505,0.008992759999999999,0.012348099999999999,0.0162894,0.0167683,0.0164262,0.0191663,0.0191663,0.013029500000000001,0.016737000000000002,0.018325499999999998,0.0262539,0.0198206,0.0204361,0.0204361,0.016313900000000003,0.018303399999999997,0.0133107,0.00987617,0.00932],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PO6= {
  x: xRange,
  y: [0.1,0.0914393,0.101875,0.101875,0.103639,0.100901,0.10256299999999999,0.09052729999999999,0.0979264,0.08907620000000001,0.08907620000000001,0.0753413,0.0842189,0.0698629,0.0592555,0.0490025,0.0415487,0.0415487,0.0356286,0.041310299999999994,0.0351746,0.0405705,0.0475756,0.05186060000000001,0.05186060000000001,0.041488699999999996,0.05186109999999999,0.062382299999999995,0.0724555,0.0843022,0.09890729999999999,0.09890729999999999,0.0871998,0.101515,0.10423700000000001,0.10130299999999999,0.10151299999999999,0.101241,0.101241,0.109765,0.0985182,0.0846485,0.07506159999999999,0.0612525,0.0488563,0.0488563,0.0612843,0.068504,0.0680298,0.0843297,0.0927601],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PO7= {
  x: xRange,
  y: [0.1,0.113878,0.104138,0.104138,0.102988,0.10409600000000001,0.103974,0.116405,0.126803,0.116949,0.116949,0.110389,0.0984689,0.11557,0.11446799999999999,0.10104,0.116747,0.116747,0.126786,0.140539,0.126991,0.113315,0.101505,0.11154,0.11154,0.100012,0.0826545,0.0734233,0.061812,0.0509125,0.04175,0.04175,0.0526233,0.0451958,0.0355933,0.0364858,0.037022,0.0289233,0.0289233,0.0196033,0.01621,0.0120567,0.0155767,0.0110667,0.007223920000000001,0.007223920000000001,0.00918858,0.0076033,0.00483928,0.00663383,0.00423],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PO8= {
  x: xRange,
  y: [0.1,0.0970445,0.107509,0.107509,0.11489700000000001,0.10777700000000001,0.120562,0.13004200000000002,0.13881,0.144647,0.144647,0.134106,0.142749,0.143407,0.155089,0.161962,0.150727,0.150727,0.141846,0.153926,0.166609,0.174701,0.184429,0.175226,0.175226,0.18333400000000002,0.17565599999999998,0.187567,0.177799,0.16518,0.150511,0.150511,0.163701,0.17474900000000002,0.18166400000000002,0.181521,0.182712,0.202804,0.202804,0.20318,0.19115200000000002,0.203813,0.190523,0.20694200000000001,0.218735,0.218735,0.20229599999999998,0.21696700000000002,0.22399400000000003,0.23204,0.22021900000000003],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PO9= {
  x: xRange,
  y: [0.1,0.11973,0.11023899999999999,0.11023899999999999,0.10330600000000001,0.11428,0.10433200000000001,0.114634,0.12578899999999998,0.138964,0.138964,0.151647,0.16377799999999998,0.151859,0.138573,0.150854,0.167415,0.167415,0.18326,0.17303900000000003,0.16142600000000001,0.15010600000000002,0.133149,0.113151,0.113151,0.131975,0.116561,0.10267899999999999,0.113328,0.125634,0.138371,0.138371,0.12282799999999999,0.111846,0.113704,0.112993,0.113854,0.112874,0.112874,0.134432,0.147938,0.16364,0.151562,0.130492,0.14674600000000002,0.14674600000000002,0.16006399999999998,0.14222100000000001,0.1365,0.119694,0.135206],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PO10= {
  x: xRange,
  y: [0.1,0.123906,0.11569600000000001,0.11569600000000001,0.124025,0.12414399999999999,0.123141,0.13583,0.146229,0.158168,0.158168,0.16703900000000002,0.18129900000000002,0.16672599999999999,0.17749099999999998,0.16975400000000002,0.156408,0.156408,0.145838,0.138079,0.150832,0.162928,0.171378,0.17660099999999998,0.17660099999999998,0.16735099999999997,0.18190299999999998,0.17391099999999998,0.183989,0.19636099999999998,0.181916,0.181916,0.166155,0.17997900000000003,0.19587900000000003,0.20701099999999997,0.215707,0.22631099999999998,0.22631099999999998,0.221667,0.227035,0.237297,0.227323,0.234822,0.22339299999999998,0.22339299999999998,0.214723,0.222358,0.22647099999999998,0.22678299999999998,0.23640099999999997],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataPO = [PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO10]

var SP1= {
  x: xRange,
  y: [0.1,0.104778,0.0973693,0.0973693,0.10618799999999999,0.10051600000000001,0.10424399999999999,0.11330899999999999,0.107413,0.118409,0.118409,0.120249,0.12279200000000001,0.111447,0.10160899999999999,0.0915035,0.10168700000000001,0.10168700000000001,0.111616,0.103437,0.111595,0.121708,0.130825,0.13085,0.13085,0.13048,0.12529,0.11903,0.11007,0.10051,0.10791,0.10791,0.11619,0.1037,0.0919,0.09186,0.09417,0.08114,0.08114,0.08988,0.07809,0.0707,0.08258,0.09369,0.10524,0.10524,0.11674,0.13069,0.11859,0.1062,0.11654700000000001],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var SP2= {
  x: xRange,
  y: [0.1,0.0933082,0.10074200000000001,0.10074200000000001,0.09535129999999999,0.09350370000000001,0.0939482,0.0862188,0.078697,0.0879513,0.0879513,0.0967098,0.0851475,0.0936283,0.0855708,0.0932558,0.08566629999999999,0.08566629999999999,0.0906748,0.0791322,0.0836705,0.0929485,0.105495,0.111916,0.111916,0.114637,0.121725,0.125147,0.132403,0.131187,0.132514,0.132514,0.138449,0.134936,0.138991,0.14223,0.140981,0.145038,0.145038,0.135666,0.140997,0.153748,0.141038,0.153918,0.160662,0.160662,0.15796,0.162667,0.16665400000000002,0.170323,0.16885799999999998],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var SP3= {
  x: xRange,
  y: [0.1,0.09182649999999999,0.09983030000000001,0.09983030000000001,0.10317799999999999,0.10362600000000001,0.09557620000000001,0.0891632,0.0806343,0.0719903,0.0719903,0.0657473,0.054588199999999996,0.0644325,0.0723998,0.06471479999999999,0.07251729999999999,0.07251729999999999,0.08030319999999999,0.08876350000000001,0.078299,0.0712487,0.061968999999999996,0.0524187,0.0524187,0.0508093,0.058776800000000004,0.066982,0.0744033,0.083448,0.0912365,0.0912365,0.07929699999999999,0.06871970000000001,0.0825635,0.0840365,0.0855932,0.0908375,0.0908375,0.100518,0.0901067,0.0805023,0.0917112,0.0805412,0.0689013,0.0689013,0.0548603,0.04567,0.0448108,0.053803199999999995,0.0410058],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var SP4= {
  x: xRange,
  y: [0.1,0.103281,0.109075,0.109075,0.100439,0.107575,0.099652,0.09212479999999999,0.0873067,0.0769092,0.0769092,0.0695153,0.071976,0.08082270000000001,0.0912858,0.0983383,0.10397200000000001,0.10397200000000001,0.0957755,0.0871115,0.09415549999999999,0.0878535,0.0808818,0.07329569999999999,0.07329569999999999,0.07974300000000001,0.09498530000000001,0.103866,0.0925733,0.0916685,0.0836033,0.0836033,0.09300979999999999,0.10391,0.09103399999999999,0.08155369999999999,0.072125,0.0638602,0.0638602,0.0563537,0.0715335,0.0646263,0.0740047,0.0898758,0.0767897,0.0767897,0.062301999999999996,0.0497458,0.059677299999999996,0.0473612,0.039725],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var SP5= {
  x: xRange,
  y: [0.1,0.0963277,0.08865719999999999,0.08865719999999999,0.08255620000000001,0.0808185,0.0900518,0.08015560000000001,0.0750693,0.06419,0.06419,0.0712731,0.064134,0.07272,0.07346,0.08425,0.07344,0.07344,0.06187,0.07101,0.06124,0.05277,0.04484,0.05412,0.05412,0.0531,0.04419,0.03882,0.03164,0.02619,0.02079,0.02079,0.01541,0.02076,0.0263,0.02641,0.02825,0.03202,0.03202,0.02356,0.02692,0.03205,0.04094,0.0331,0.035681700000000004,0.035681700000000004,0.02809,0.0321175,0.025356999999999998,0.0215548,0.01916],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var SP6= {
  x: xRange,
  y: [0.1,0.0934713,0.10167,0.10167,0.100735,0.10071,0.09998399999999999,0.0945604,0.10243100000000001,0.0970362,0.0970362,0.08851930000000001,0.09551879999999999,0.0816853,0.071369,0.0637037,0.0536187,0.0536187,0.0476625,0.0550098,0.0490638,0.055169499999999996,0.06324020000000001,0.0679982,0.0679982,0.0583737,0.06791130000000001,0.0792313,0.0880522,0.098925,0.109007,0.109007,0.0962885,0.112166,0.11314,0.11431,0.114571,0.12119799999999999,0.12119799999999999,0.128422,0.120723,0.110203,0.0953183,0.086759,0.07546180000000001,0.07546180000000001,0.0851592,0.0964067,0.0943565,0.11333399999999999,0.12196299999999999],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var SP7= {
  x: xRange,
  y: [0.1,0.106255,0.101476,0.101476,0.10038200000000001,0.10117799999999999,0.102434,0.109547,0.117955,0.113054,0.113054,0.11050299999999999,0.106419,0.11492,0.11476,0.10746,0.11495,0.11495,0.12285,0.12763,0.12157,0.11505,0.10789,0.11222700000000001,0.11222700000000001,0.108266,0.0932968,0.0851095,0.073976,0.0653653,0.0553537,0.0553537,0.0670522,0.0587317,0.050451800000000005,0.051924700000000004,0.050966000000000004,0.042678999999999995,0.042678999999999995,0.030611700000000002,0.0259437,0.021196700000000002,0.026207800000000003,0.019260799999999998,0.0137975,0.0137975,0.018136700000000002,0.014365,0.0120675,0.013943699999999998,0.00932333],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var SP8= {
  x: xRange,
  y: [0.1,0.09403270000000001,0.098979,0.098979,0.10556,0.0997692,0.108919,0.115183,0.120738,0.12402,0.12402,0.120256,0.13089,0.125794,0.13302799999999998,0.134722,0.132375,0.132375,0.127144,0.134195,0.138321,0.140292,0.142602,0.141572,0.141572,0.14124899999999999,0.14155299999999998,0.140512,0.142574,0.141646,0.135258,0.135258,0.13924799999999998,0.143739,0.144198,0.148322,0.153497,0.15694,0.15694,0.152779,0.159289,0.165685,0.160386,0.16184,0.161214,0.161214,0.16569,0.167041,0.16859900000000003,0.163364,0.17197700000000002],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var SP9= {
  x: xRange,
  y: [0.1,0.107444,0.10095299999999999,0.10095299999999999,0.0975853,0.10415799999999999,0.0972008,0.107114,0.110386,0.120794,0.120794,0.128275,0.135267,0.127086,0.125193,0.12996,0.134585,0.134585,0.136016,0.133781,0.134926,0.132328,0.126103,0.117348,0.117348,0.126363,0.11655299999999999,0.106754,0.115993,0.121477,0.128147,0.128147,0.121446,0.115298,0.118372,0.11716399999999999,0.11963299999999999,0.123389,0.123389,0.134625,0.14474700000000001,0.158774,0.145778,0.139844,0.146672,0.146672,0.153532,0.146178,0.149198,0.137207,0.151694],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var SP10= {
  x: xRange,
  y: [0.1,0.109276,0.10124799999999999,0.10124799999999999,0.108026,0.108145,0.107991,0.11262299999999999,0.11937,0.125647,0.125647,0.12895299999999998,0.133268,0.127464,0.131325,0.132093,0.127189,0.127189,0.126089,0.11993,0.127159,0.130632,0.136155,0.138255,0.138255,0.136979,0.13572,0.134549,0.138315,0.13958399999999999,0.136182,0.136182,0.133609,0.13804,0.14305,0.14219,0.140215,0.142899,0.142899,0.147585,0.141651,0.142515,0.142037,0.14117200000000002,0.15558,0.15558,0.15753,0.15512,0.16069,0.17291,0.159747],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataSP = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]

var WINS1= {
  x: xRange,
  y: [72.0,72.5943,72.0567,72.0567,72.6039,72.0263,72.4386,73.1751,72.7457,73.456,73.456,73.8306,73.8631,72.8179,71.9442,71.3597,72.1037,72.1037,72.6524,72.1426,72.811,73.5134,74.199,74.2186,74.2186,74.1963,73.5925,73.0646,72.495,71.8176,72.4652,72.4652,72.9836,72.1818,71.3445,71.3445,71.3421,70.5055,70.5055,71.0914,70.4576,69.9831,70.6571,71.2685,71.917,71.917,72.6395,73.3295,72.7168,72.0477,72.7799],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var WINS2= {
  x: xRange,
  y: [72.0,71.5899,72.1276,72.1276,71.7454,71.6684,71.6983,71.1049,70.5338,71.1118,71.1118,71.5823,70.9422,71.4994,70.8983,71.3969,70.7916,70.7916,71.2354,70.4346,70.8455,71.4446,72.1873,72.8021,72.8021,72.7765,73.3422,73.8522,74.4269,74.4188,74.9684,74.9684,75.6506,74.921,74.927,74.92,74.9144,74.8065,74.8065,74.145,74.6076,75.0343,74.5025,75.1802,75.8719,75.8719,76.5408,76.0097,76.648,77.276,76.549],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var WINS3= {
  x: xRange,
  y: [72.0,71.3643,71.8408,71.8408,72.283,72.3376,71.6533,70.997,70.4548,69.8589,69.8589,69.3198,68.632,69.2713,69.9093,69.2704,69.8304,69.8304,70.4097,71.0028,70.3774,69.7897,69.1259,68.5367,68.5367,68.5131,69.0892,69.6244,70.2489,70.8316,71.3871,71.3871,70.6977,70.0187,70.9487,70.9367,70.9299,70.9383,70.9383,71.725,71.1162,70.4422,71.119,70.5294,69.9045,69.9045,69.066,68.488,68.5085,69.1307,68.276],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var WINS4= {
  x: xRange,
  y: [72.0,72.4147,72.8869,72.8869,72.1905,72.678,72.0709,71.445,70.8552,70.1553,70.1553,69.6701,69.6816,70.4999,71.1419,71.7153,72.1631,72.1631,71.4903,70.8239,71.4858,70.968,70.4681,69.9261,69.9261,70.4425,71.4509,72.0216,71.4175,71.4269,70.8804,70.8804,71.5918,72.2313,71.2023,70.5902,70.024,69.4911,69.4911,69.0627,70.0826,69.5953,70.2063,71.0103,70.3902,70.3902,69.6308,68.9358,69.5727,68.7234,68.2638],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var WINS5= {
  x: xRange,
  y: [72.0,71.5852,71.1126,71.1126,70.5203,70.5765,71.1864,70.4324,69.8611,69.2154,69.2154,69.7555,69.1816,69.8115,69.9425,70.693,69.838,69.838,69.1596,69.7174,69.0045,68.4516,67.8477,68.4288,68.4288,68.3792,67.6434,67.0394,66.431,65.835,65.1626,65.1626,64.5196,65.2512,66.0763,66.078,66.0765,66.651,66.651,65.7406,66.2969,66.8794,67.6152,67.055,67.1198,67.1198,66.4905,67.0095,66.2873,65.7807,65.8115],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var WINS6= {
  x: xRange,
  y: [72.0,71.4449,72.0111,72.0111,72.0799,72.0444,72.0563,71.5033,72.0267,71.5584,71.5584,70.8669,71.3447,70.4432,69.6633,69.0272,68.3776,68.3776,67.7915,68.4703,67.9193,68.4354,69.0686,69.5916,69.5916,68.7816,69.6074,70.3262,70.976,71.7207,72.5171,72.5171,71.8323,72.6234,72.645,72.6371,72.6314,72.6604,72.6604,73.3377,72.7305,72.1364,71.3898,70.7621,70.142,70.142,70.9427,71.5346,71.5413,72.3894,72.9027],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var WINS7= {
  x: xRange,
  y: [72.0,72.4189,71.8868,71.8868,71.8524,71.8709,71.8873,72.5708,73.1724,72.7324,72.7324,72.3784,71.9241,72.7249,72.6708,72.024,72.7921,72.7921,73.3794,73.938,73.3051,72.6934,72.1309,72.2231,72.2231,71.7654,70.8262,70.2643,69.6264,68.9935,68.3622,68.3622,69.2149,68.642,67.9397,67.9478,67.9501,67.2909,67.2909,66.2985,65.8022,65.2019,65.6723,64.9095,64.2167,64.2167,65.0063,64.4193,63.8755,64.4649,63.6916],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var WINS8= {
  x: xRange,
  y: [72.0,71.3969,71.9283,71.9283,72.4143,71.9515,72.6458,73.2476,73.6861,73.9888,73.9888,73.5775,74.1269,73.9581,74.7053,75.2179,74.6342,74.6342,74.1532,74.6989,75.4088,75.9899,76.6187,76.0755,76.0755,76.6257,76.0145,76.5802,75.9972,75.3449,74.6404,74.6404,75.2982,75.9162,75.9256,75.9221,75.9183,76.743,76.743,77.2785,76.3889,76.9249,76.3379,77.0015,77.6353,77.6353,76.8099,77.3462,77.9146,78.4118,78.3233],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var WINS9= {
  x: xRange,
  y: [72.0,72.5129,72.0371,72.0371,71.5868,72.1815,71.7161,72.3047,72.8753,73.5019,73.5019,74.1441,74.8545,74.1438,73.6507,74.2607,75.1392,75.1392,75.8317,75.3299,74.7731,74.1719,73.4051,72.7465,72.7465,73.5088,72.761,72.0863,72.6548,73.1927,73.8239,73.8239,73.2507,72.7109,72.7076,72.7055,72.7022,72.7327,72.7327,73.7395,74.2349,74.8896,74.2921,73.553,74.1869,74.1869,74.7575,74.0712,74.0882,73.4676,74.3152],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var WINS10= {
  x: xRange,
  y: [72.0,72.5552,71.9893,71.9893,72.6008,72.5419,72.5243,73.0965,73.6663,74.2984,74.2984,74.7523,75.3268,74.7079,75.3518,74.9132,74.2087,74.2087,73.7757,73.3203,73.9485,74.4208,74.8271,75.3296,75.3296,74.8897,75.5507,75.0184,75.6037,76.2956,75.67,75.67,74.838,75.3809,76.1609,76.7956,77.3887,77.9358,77.9358,77.3368,78.038,78.6686,77.9631,78.4859,78.3714,78.3714,77.8722,78.6125,78.6037,78.0649,78.8447],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataWINS = [WINS1, WINS2, WINS3, WINS4, WINS5, WINS6, WINS7, WINS8, WINS9, WINS10]