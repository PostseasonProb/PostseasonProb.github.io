var xRange = ["2025-03-21", "2025-03-22", "2025-03-23", "2025-03-24", "2025-03-25", "2025-03-26", "2025-03-27", "2025-03-28", "2025-03-29", "2025-03-30", "2025-03-31", "2025-04-01", "2025-04-02", "2025-04-03", "2025-04-04", "2025-04-05", "2025-04-06", "2025-04-07", "2025-04-08", "2025-04-09", "2025-04-10", "2025-04-11", "2025-04-12", "2025-04-13"];
var PS1= {
  x: xRange,
  y: [0.4891813,0.45830160000000003,0.42646520000000004,0.42646520000000004,0.40204290000000004,0.43201449999999997,0.40651129999999996,0.4371524,0.3982696,0.36332919999999996,0.36332919999999996,0.36332919999999996,0.3844415,0.4154288,0.46821599999999997,0.425653,0.47086199999999995,0.47086199999999995,0.49619800000000003,0.456309,0.410332,0.373533,0.3352546,0.374128],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PS2= {
  x: xRange,
  y: [0.5194230000000001,0.48757,0.45798900000000003,0.45798900000000003,0.492559,0.46377300000000005,0.43906470000000003,0.39772949999999996,0.424564,0.42024550000000005,0.42024550000000005,0.42024550000000005,0.4455803,0.480289,0.43243,0.467069,0.426552,0.426552,0.3834763,0.3404647,0.3692588,0.41427800000000004,0.45431099999999996,0.41243199999999997],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PS3= {
  x: xRange,
  y: [0.514857,0.548426,0.577186,0.577186,0.609749,0.572704,0.537166,0.500709,0.537566,0.575446,0.575446,0.575446,0.6249359999999999,0.598496,0.638136,0.59898,0.638755,0.638755,0.6741630000000001,0.638922,0.675438,0.649162,0.649524,0.620389],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PS4= {
  x: xRange,
  y: [0.47967800000000005,0.45044979999999996,0.41959029999999997,0.41959029999999997,0.38908660000000006,0.42806690000000003,0.46038599999999996,0.494035,0.5269269999999999,0.490992,0.490992,0.490992,0.44966,0.4166871,0.451035,0.41606089999999996,0.37454580000000004,0.37454580000000004,0.33352020000000004,0.36378,0.3316468,0.2853508,0.3267439,0.2834854],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PS5= {
  x: xRange,
  y: [0.5029830000000001,0.5340469999999999,0.5039144999999999,0.5039144999999999,0.474208,0.4450729,0.41802290000000003,0.45948,0.491031,0.451406,0.451406,0.451406,0.40299,0.3608649,0.3252565,0.3634365,0.3282139,0.3282139,0.3017764,0.3302086,0.3672028,0.41205699999999995,0.368109,0.405126],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PS6= {
  x: xRange,
  y: [0.499135,0.526836,0.492709,0.492709,0.520158,0.48480599999999996,0.4447846,0.4122426,0.3852861,0.4178387,0.4178387,0.4178387,0.38927510000000004,0.42013900000000004,0.3861333,0.3889811,0.3550725,0.3550725,0.390441,0.425028,0.38934599999999997,0.3455089,0.35006089999999995,0.37757300000000005],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PS7= {
  x: xRange,
  y: [0.508087,0.47638300000000006,0.5067839,0.5067839,0.535596,0.498251,0.523567,0.562877,0.524564,0.529954,0.529954,0.529954,0.569723,0.5342652999999999,0.506051,0.5057065,0.467781,0.467781,0.5090392,0.542289,0.5006052000000001,0.5398378,0.5396647,0.576386],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PS8= {
  x: xRange,
  y: [0.48640809999999995,0.5183315000000001,0.5479067,0.5479067,0.579555,0.6074284,0.6386493,0.6752179,0.713657,0.7121429000000001,0.7121429000000001,0.7121429000000001,0.6918255,0.7265526,0.7538315,0.75768,0.7865738000000001,0.7865738000000001,0.8254115,0.8062279000000001,0.8405142999999999,0.8679528,0.8965705,0.8819721],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PS9= {
  x: xRange,
  y: [0.4868719,0.4582585,0.49236199999999997,0.49236199999999997,0.4609576,0.49982699999999997,0.537001,0.50654,0.475537,0.47805800000000004,0.47805800000000004,0.47805800000000004,0.46899,0.476226,0.44252300000000006,0.478829,0.5197478999999999,0.5197478999999999,0.493114,0.45882,0.50176,0.45144,0.413623,0.445225],
  mode: "lines",
  name: "NC",
  line: {color:"#af917b", width: 4}
};
var PS10= {
  x: xRange,
  y: [0.513375,0.541396,0.5750930000000001,0.5750930000000001,0.536089,0.568056,0.594848,0.554016,0.522599,0.560587,0.560587,0.560587,0.5725790000000001,0.571051,0.596386,0.597604,0.6318969999999999,0.6318969999999999,0.592861,0.637952,0.613897,0.660879,0.6661389999999999,0.623283],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPS = [PS1, PS2, PS3, PS4, PS5, PS6, PS7, PS8, PS9, PS10]

var KS1= {
  x: xRange,
  y: [0.09502469999999999,0.0814376,0.07121859999999999,0.07121859999999999,0.061549799999999995,0.0716916,0.0606493,0.0718,0.0581948,0.049177700000000005,0.049177700000000005,0.049177700000000005,0.0530951,0.061855299999999995,0.075666,0.0622258,0.0724461,0.0724461,0.0757761,0.0649116,0.0496218,0.0384916,0.0279325,0.0382977],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var KS2= {
  x: xRange,
  y: [0.107921,0.09467040000000002,0.08133069999999999,0.08133069999999999,0.0932583,0.08195469999999999,0.0719114,0.059892600000000004,0.0661349,0.0649904,0.0649904,0.0649904,0.0729933,0.08280370000000001,0.0653649,0.0773737,0.06024,0.06024,0.0471456,0.0386142,0.043706800000000004,0.0484829,0.0538012,0.0469741],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var KS3= {
  x: xRange,
  y: [0.10433,0.119921,0.132142,0.132142,0.148542,0.126662,0.10859100000000001,0.0963974,0.108462,0.124962,0.124962,0.124962,0.151587,0.136182,0.151032,0.12995600000000002,0.145465,0.145465,0.15934,0.142147,0.157763,0.130965,0.12420700000000001,0.114719],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var KS4= {
  x: xRange,
  y: [0.09222860000000001,0.0800605,0.0705817,0.0705817,0.0596825,0.0716885,0.0816736,0.0925276,0.10527700000000001,0.08968129999999999,0.08968129999999999,0.08968129999999999,0.0727707,0.0629256,0.0718816,0.0589842,0.0463499,0.0463499,0.034857,0.041088599999999996,0.0337181,0.0235656,0.0272277,0.0229639],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var KS5= {
  x: xRange,
  y: [0.0996667,0.11381,0.10160899999999999,0.10160899999999999,0.0866588,0.0775149,0.0673134,0.07837100000000001,0.0883602,0.0740279,0.0740279,0.0740279,0.059049700000000004,0.047013,0.0374455,0.0469692,0.036258,0.036258,0.0290771,0.0346639,0.041099,0.046750299999999995,0.0357463,0.044926],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var KS6= {
  x: xRange,
  y: [0.0995459,0.11125,0.0954482,0.0954482,0.105098,0.0916824,0.0764522,0.0639141,0.0556238,0.063959,0.063959,0.063959,0.055594399999999995,0.06286510000000001,0.051113599999999995,0.0533769,0.0414662,0.0414662,0.047831000000000005,0.0573168,0.0460645,0.0343804,0.032568400000000004,0.0401375],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var KS7= {
  x: xRange,
  y: [0.103647,0.0889055,0.0999789,0.0999789,0.11137299999999999,0.0966302,0.107699,0.123571,0.104812,0.106123,0.106123,0.106123,0.125796,0.107583,0.091391,0.09124950000000001,0.0747048,0.0747048,0.0829402,0.101668,0.0800642,0.0857218,0.0816287,0.10063],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var KS8= {
  x: xRange,
  y: [0.09526860000000001,0.106848,0.12089200000000001,0.12089200000000001,0.135413,0.15463200000000002,0.16915400000000003,0.196389,0.224461,0.221216,0.221216,0.221216,0.20318,0.233092,0.253767,0.261415,0.283651,0.283651,0.326673,0.304711,0.345599,0.389115,0.43428300000000003,0.41249],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var KS9= {
  x: xRange,
  y: [0.096484,0.0834286,0.0941123,0.0941123,0.0836144,0.098485,0.113463,0.098847,0.08434299999999999,0.0856177,0.0856177,0.0856177,0.0811468,0.08162130000000001,0.0704739,0.0825651,0.0916759,0.0916759,0.0765717,0.0686455,0.0787251,0.0585995,0.045826099999999995,0.05691],
  mode: "lines",
  name: "NC",
  line: {color:"#af917b", width: 4}
};
var KS10= {
  x: xRange,
  y: [0.10588399999999999,0.119669,0.132687,0.132687,0.11481100000000001,0.129059,0.143093,0.11829100000000001,0.10433,0.120246,0.120246,0.120246,0.12478600000000001,0.124059,0.131864,0.135885,0.14774299999999999,0.14774299999999999,0.11978799999999999,0.146233,0.123639,0.143928,0.13677899999999998,0.121952],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataKS = [KS1, KS2, KS3, KS4, KS5, KS6, KS7, KS8, KS9, KS10]

var PO1= {
  x: xRange,
  y: [0.09834530000000001,0.0886124,0.07966140000000001,0.07966140000000001,0.0732402,0.0802984,0.07467069999999999,0.08204,0.0732352,0.06445229999999999,0.06445229999999999,0.06445229999999999,0.0676249,0.0756647,0.088474,0.0779142,0.08795389999999999,0.08795389999999999,0.0957739,0.0829684,0.0727982,0.0621484,0.0531775,0.06269229999999999],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PO2= {
  x: xRange,
  y: [0.104159,0.0946996,0.0891793,0.0891793,0.09511170000000001,0.08989530000000001,0.0816086,0.0715874,0.0786251,0.0794896,0.0794896,0.0794896,0.0869067,0.09445629999999999,0.0808651,0.09042629999999999,0.07975,0.07975,0.0657744,0.0567058,0.0637732,0.0736571,0.0866588,0.0745459],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PO3= {
  x: xRange,
  y: [0.1044,0.112229,0.119558,0.119558,0.130598,0.11985799999999999,0.10947899999999999,0.0996426,0.108468,0.118698,0.118698,0.118698,0.135093,0.12531799999999998,0.139588,0.128964,0.140825,0.140825,0.15537,0.140043,0.153677,0.145785,0.14868299999999998,0.137541],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PO4= {
  x: xRange,
  y: [0.0938014,0.0871495,0.07824829999999999,0.07824829999999999,0.0697575,0.0801115,0.08928639999999999,0.0985624,0.10779299999999999,0.09783870000000001,0.09783870000000001,0.09783870000000001,0.0847093,0.0751544,0.0849084,0.0766558,0.0645801,0.0645801,0.054703,0.061461400000000006,0.053291899999999996,0.0431844,0.050962299999999995,0.042976099999999996],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PO5= {
  x: xRange,
  y: [0.0987633,0.1095,0.10071100000000001,0.10071100000000001,0.0917912,0.0853951,0.0793966,0.08818899999999999,0.0974698,0.0861521,0.0861521,0.0861521,0.07314029999999999,0.063197,0.053594499999999996,0.0634708,0.053572,0.053572,0.0472729,0.053396099999999995,0.061351,0.0725097,0.0613837,0.071634],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PO6= {
  x: xRange,
  y: [0.0989141,0.10688,0.0980018,0.0980018,0.10680200000000001,0.0952576,0.0846978,0.0773559,0.0702862,0.07705100000000001,0.07705100000000001,0.07705100000000001,0.06948560000000001,0.0783349,0.0689664,0.0693031,0.0599938,0.0599938,0.06777899999999999,0.0778232,0.0679155,0.0567796,0.0571516,0.0652225],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PO7= {
  x: xRange,
  y: [0.10263299999999999,0.09341450000000001,0.101761,0.101761,0.110267,0.0984898,0.104751,0.11499899999999999,0.10683799999999999,0.10949700000000001,0.10949700000000001,0.10949700000000001,0.120854,0.112527,0.102379,0.10126,0.09150520000000001,0.09150520000000001,0.10237,0.11281200000000001,0.100326,0.11424799999999999,0.11209100000000001,0.12535],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PO8= {
  x: xRange,
  y: [0.09631139999999999,0.106702,0.11334799999999999,0.11334799999999999,0.12310700000000001,0.132018,0.139046,0.14977100000000002,0.158929,0.158914,0.158914,0.158914,0.1526,0.163248,0.172073,0.171465,0.178959,0.178959,0.187807,0.18379900000000002,0.19417099999999998,0.195895,0.199447,0.19627],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PO9= {
  x: xRange,
  y: [0.097986,0.08990139999999999,0.09913770000000001,0.09913770000000001,0.09057559999999999,0.098665,0.109737,0.102003,0.09307700000000001,0.0936823,0.0936823,0.0936823,0.0909132,0.0930387,0.0831461,0.09367489999999999,0.104334,0.104334,0.0962083,0.08815450000000001,0.09782489999999999,0.08408049999999999,0.0731639,0.08229],
  mode: "lines",
  name: "NC",
  line: {color:"#af917b", width: 4}
};
var PO10= {
  x: xRange,
  y: [0.104686,0.11091100000000001,0.12039299999999999,0.12039299999999999,0.108749,0.120011,0.127327,0.115849,0.10528,0.11422399999999999,0.11422399999999999,0.11422399999999999,0.118674,0.119061,0.126006,0.126865,0.138527,0.138527,0.126942,0.14283700000000002,0.134871,0.151712,0.157281,0.141478],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPO = [PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO10]

var SP1= {
  x: xRange,
  y: [0.09855,0.09251,0.08623,0.08623,0.08192,0.08831,0.08438,0.0898,0.08211,0.07296,0.07296,0.07296,0.07897,0.08601,0.09759,0.08836,0.09798,0.09798,0.10382,0.09619,0.08567,0.07689,0.0694,0.07949],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var SP2= {
  x: xRange,
  y: [0.10312,0.09803,0.09148,0.09148,0.09935,0.09326,0.08869,0.0812,0.0882,0.08762,0.08762,0.08762,0.0916,0.09913,0.09055,0.09666,0.08834,0.08834,0.07952,0.07167,0.07757,0.09008,0.09894,0.08911],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var SP3= {
  x: xRange,
  y: [0.10231,0.10872,0.11502,0.11502,0.119,0.11283,0.10889,0.10235,0.10865,0.11407,0.11407,0.11407,0.12212,0.11828,0.1259,0.11904,0.12993,0.12993,0.13398,0.12953,0.13587,0.13639,0.13794,0.13066],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var SP4= {
  x: xRange,
  y: [0.09661,0.0912,0.08351,0.08351,0.08161,0.08601,0.09271,0.10009,0.10501,0.10019,0.10019,0.10019,0.09247,0.08549,0.09186,0.08554,0.07761,0.07761,0.06825,0.07404,0.06808,0.05811,0.06813,0.05946],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var SP5= {
  x: xRange,
  y: [0.10233,0.10694,0.10192,0.10192,0.09669,0.08973,0.0854,0.09375,0.10058,0.09195,0.09195,0.09195,0.08223,0.07484,0.06588,0.07547,0.06717,0.06717,0.06225,0.06677,0.07733,0.08893,0.07843,0.08566],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var SP6= {
  x: xRange,
  y: [0.09906,0.10533,0.10033,0.10033,0.10453,0.09852,0.09055,0.08336,0.07844,0.08674,0.08674,0.08674,0.07949,0.08556,0.07938,0.08037,0.07243,0.07243,0.08114,0.08846,0.08212,0.07262,0.0746,0.07955],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var SP7= {
  x: xRange,
  y: [0.10041,0.09509,0.1006,0.1006,0.10622,0.1007,0.10434,0.11314,0.10568,0.10792,0.10792,0.10792,0.114,0.10826,0.10505,0.10622,0.09824,0.09824,0.11108,0.11351,0.10637,0.11682,0.12003,0.12481],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var SP8= {
  x: xRange,
  y: [0.09777,0.1038,0.10865,0.10865,0.11231,0.1166,0.12254,0.124,0.13038,0.13028,0.13028,0.13028,0.12825,0.13055,0.13021,0.13176,0.13394,0.13394,0.13287,0.13456,0.1322,0.12616,0.1223,0.12592],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var SP9= {
  x: xRange,
  y: [0.09739,0.09044,0.09957,0.09957,0.09165,0.10198,0.10729,0.10107,0.09699,0.0959,0.0959,0.0959,0.09645,0.09751,0.09183,0.09739,0.10843,0.10843,0.10457,0.09535,0.10596,0.09639,0.08974,0.09481],
  mode: "lines",
  name: "NC",
  line: {color:"#af917b", width: 4}
};
var SP10= {
  x: xRange,
  y: [0.10245,0.10794,0.11269,0.11269,0.10672,0.11206,0.11521,0.11124,0.10396,0.11237,0.11237,0.11237,0.11442,0.11437,0.12175,0.11919,0.12593,0.12593,0.12252,0.12992,0.12883,0.13761,0.14049,0.13053],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataSP = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]

var WINS1= {
  x: xRange,
  y: [71.8196,71.3345,70.8573,70.8573,70.4447,70.9571,70.5214,71.0323,70.4166,69.8767,69.8767,69.8767,70.2224,70.7102,71.4844,70.8471,71.4939,71.4939,71.8403,71.2626,70.5483,70.0227,69.3728,70.0092],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var WINS2= {
  x: xRange,
  y: [72.2826,71.7809,71.3375,71.3375,71.8826,71.4436,71.0344,70.3966,70.8447,70.7707,70.7707,70.7707,71.1769,71.6596,70.941,71.4789,70.8475,70.8475,70.2076,69.5567,70.0306,70.6255,71.175,70.6251],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var WINS3= {
  x: xRange,
  y: [72.2393,72.7257,73.1474,73.1474,73.6549,73.0673,72.5219,72.0177,72.5271,73.0904,73.0904,73.0904,73.8661,73.4352,74.0107,73.4249,74.0178,74.0178,74.5541,73.983,74.5051,74.0343,74.0081,73.5863],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var WINS4= {
  x: xRange,
  y: [71.6694,71.2221,70.7728,70.7728,70.2928,70.8842,71.3921,71.9018,72.3775,71.871,71.871,71.871,71.2359,70.7261,71.2846,70.72,70.116,70.116,69.4197,69.9212,69.3901,68.6544,69.2893,68.6261],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var WINS5= {
  x: xRange,
  y: [72.0318,72.5404,72.0812,72.0812,71.6055,71.1691,70.7625,71.36,71.849,71.2599,71.2599,71.2599,70.5128,69.892,69.2879,69.9296,69.3268,69.3268,68.9151,69.3981,69.9668,70.6079,69.9293,70.4854],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var WINS6= {
  x: xRange,
  y: [71.978,72.425,71.9146,71.9146,72.3319,71.7603,71.1883,70.6714,70.2553,70.7697,70.7697,70.7697,70.3156,70.7707,70.2736,70.2907,69.7866,69.7866,70.3034,70.8401,70.2909,69.5931,69.615,70.0993],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var WINS7= {
  x: xRange,
  y: [72.1235,71.6228,72.1036,72.1036,72.5257,71.9636,72.3711,72.9184,72.3593,72.4242,72.4242,72.4242,73.0434,72.5057,72.0599,72.0379,71.5199,71.5199,72.072,72.6003,71.9435,72.4726,72.422,72.9679],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var WINS8= {
  x: xRange,
  y: [71.7958,72.2871,72.7378,72.7378,73.2305,73.6924,74.1525,74.7498,75.372,75.3418,75.3418,75.3418,74.9865,75.5912,76.0654,76.1435,76.681,76.681,77.4897,77.0381,77.7823,78.4851,79.2632,78.8067],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var WINS9= {
  x: xRange,
  y: [71.8327,71.3671,71.8829,71.8829,71.4292,72.0127,72.591,72.1157,71.6393,71.6693,71.6693,71.6693,71.5528,71.6349,71.1466,71.6736,72.254,72.254,71.8344,71.3615,71.9401,71.191,70.6048,71.0952],
  mode: "lines",
  name: "NC",
  line: {color:"#af917b", width: 4}
};
var WINS10= {
  x: xRange,
  y: [72.2272,72.6946,73.1648,73.1648,72.6021,73.0498,73.4648,72.8361,72.359,72.9263,72.9263,72.9263,73.0876,73.0744,73.446,73.4538,73.9565,73.9565,73.3637,74.0383,73.6023,74.3133,74.3205,73.6989],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataWINS = [WINS1, WINS2, WINS3, WINS4, WINS5, WINS6, WINS7, WINS8, WINS9, WINS10]