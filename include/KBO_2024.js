var xRange = ["2024-03-22", "2024-03-23", "2024-03-24", "2024-03-25", "2024-03-26", "2024-03-27", "2024-03-28", "2024-03-29", "2024-03-30", "2024-03-31", "2024-04-01", "2024-04-02", "2024-04-03", "2024-04-04", "2024-04-05", "2024-04-06", "2024-04-07", "2024-04-08", "2024-04-09", "2024-04-10", "2024-04-11", "2024-04-12", "2024-04-13", "2024-04-14", "2024-04-15", "2024-04-16", "2024-04-17", "2024-04-18", "2024-04-19", "2024-04-20", "2024-04-21", "2024-04-22", "2024-04-23", "2024-04-24", "2024-04-25", "2024-04-26", "2024-04-27"];
var PS1= {
  x: xRange,
  y: [0.48431199999999996,0.4494075,0.482648,0.482648,0.519439,0.5439740000000001,0.523873,0.490568,0.5159703,0.49385199999999996,0.49385199999999996,0.462139,0.43162900000000004,0.391582,0.432275,0.394012,0.35940120000000003,0.35940120000000003,0.40966400000000003,0.433846,0.40099300000000004,0.3569275,0.39553800000000006,0.440495,0.440495,0.39794,0.357527,0.36156,0.389363,0.390476,0.379135,0.379135,0.41135900000000003,0.379773,0.409523,0.446407,0.41100699999999996],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PS2= {
  x: xRange,
  y: [0.515479,0.48265699999999995,0.4535907,0.4535907,0.42358559999999995,0.3834186,0.3970865,0.427127,0.38374620000000004,0.35814870000000004,0.35814870000000004,0.38842410000000005,0.3902937,0.3515208,0.3179648,0.3511145,0.380025,0.380025,0.346815,0.3095021,0.2722625,0.21713290000000002,0.1895811,0.16374662,0.16374662,0.13529549999999999,0.11673814,0.1777458,0.1969477,0.19839489999999999,0.2132287,0.2132287,0.2155043,0.1866244,0.2095818,0.1866352,0.16434099000000002],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PS3= {
  x: xRange,
  y: [0.514274,0.545312,0.5826709999999999,0.5826709999999999,0.552881,0.5434831999999999,0.5232758000000001,0.4909761,0.4444218,0.41459589999999996,0.41459589999999996,0.3752129,0.3733778,0.321316,0.28820819999999997,0.3162378,0.3494761,0.3494761,0.4117711,0.449925,0.48420599999999997,0.42230300000000004,0.386777,0.42453199999999996,0.42453199999999996,0.44987699999999997,0.49516800000000005,0.5457282000000001,0.511686,0.5552845000000001,0.593893,0.593893,0.626814,0.6595660000000001,0.625905,0.6583680000000001,0.694535],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PS4= {
  x: xRange,
  y: [0.488779,0.4562565,0.4556171,0.4556171,0.42665949999999997,0.39013169999999997,0.3996602,0.3615699,0.3850124,0.419474,0.419474,0.45486800000000005,0.45612699999999995,0.505042,0.536011,0.570627,0.605361,0.605361,0.547666,0.5208655999999999,0.56179,0.618931,0.651901,0.6818310000000001,0.6818310000000001,0.7370289999999999,0.701248,0.629929,0.605132,0.60212,0.6132730000000001,0.6132730000000001,0.5782069999999999,0.540025,0.507379,0.462711,0.424981],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PS5= {
  x: xRange,
  y: [0.5013699,0.469708,0.5054248,0.5054248,0.535591,0.565516,0.610168,0.6412019999999999,0.6615911999999999,0.6971395,0.6971395,0.662805,0.660258,0.699513,0.6722539999999999,0.644005,0.621525,0.621525,0.583279,0.553951,0.5950369999999999,0.570201,0.5317280999999999,0.48648199999999997,0.48648199999999997,0.530591,0.5003369999999999,0.485541,0.520786,0.478661,0.44006199999999995,0.44006199999999995,0.41134,0.379834,0.35018800000000005,0.3133851,0.342256],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PS6= {
  x: xRange,
  y: [0.4886834,0.5207419999999999,0.52057,0.52057,0.548742,0.588901,0.578721,0.613966,0.591321,0.6212759999999999,0.6212759999999999,0.5941219999999999,0.6298480000000001,0.6654019999999999,0.69422,0.658735,0.61609,0.61609,0.657393,0.685088,0.708032,0.7625808000000001,0.7938082000000001,0.8257760000000001,0.8257760000000001,0.8004975999999999,0.8367275999999999,0.7919279000000001,0.8119558,0.8311466000000001,0.8067080999999999,0.8067080999999999,0.8321801,0.8598703,0.8816828999999999,0.863999,0.8468789999999999],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PS7= {
  x: xRange,
  y: [0.516698,0.4866608,0.450484,0.450484,0.4181647,0.3898691,0.4069656,0.37705089999999997,0.35562800000000006,0.3197306,0.3197306,0.34617879999999995,0.3152595,0.2616535,0.2940614,0.2597122,0.22705010000000003,0.22705010000000003,0.2858009,0.2595446,0.23229049999999998,0.2351456,0.20047790000000001,0.1638723,0.1638723,0.11768226999999999,0.13662542000000003,0.1973483,0.1743598,0.1779081,0.15544023,0.15544023,0.178636,0.19876619999999998,0.2260207,0.19611260000000003,0.2214841],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PS8= {
  x: xRange,
  y: [0.47913120000000003,0.5110844,0.4767435,0.4767435,0.510355,0.5130256,0.5383325,0.5706706,0.5465897,0.5007566,0.5007566,0.46940709999999997,0.499395,0.548231,0.5056116,0.542695,0.576694,0.576694,0.515638,0.488199,0.457007,0.521956,0.480105,0.429644,0.429644,0.45940800000000004,0.493875,0.417453,0.461937,0.464132,0.5103519999999999,0.5103519999999999,0.479903,0.44867,0.497615,0.5241702,0.561774],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PS9= {
  x: xRange,
  y: [0.49928419999999996,0.5324519999999999,0.4970294,0.4970294,0.527355,0.566966,0.555269,0.524669,0.5686559999999999,0.600116,0.600116,0.637482,0.608356,0.590552,0.623362,0.661863,0.698915,0.698915,0.628346,0.6564160000000001,0.682161,0.7524069999999999,0.7860906,0.7560939999999999,0.7560939999999999,0.7195539999999999,0.75292,0.719862,0.6940639999999999,0.6699269999999999,0.705038,0.705038,0.678408,0.7187830000000001,0.69318,0.720376,0.744258],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PS10= {
  x: xRange,
  y: [0.5119882,0.54572,0.57522,0.57522,0.537228,0.514715,0.46664910000000004,0.5022002999999999,0.547064,0.57491,0.57491,0.6093609999999999,0.635456,0.665187,0.6360319999999999,0.600998,0.565463,0.565463,0.6136269999999999,0.642663,0.6062219999999999,0.5424142000000001,0.583993,0.627527,0.627527,0.652126,0.608834,0.672905,0.633768,0.631951,0.58287,0.58287,0.5876480000000001,0.628089,0.598924,0.627836,0.5884845],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPS = [PS1, PS2, PS3, PS4, PS5, PS6, PS7, PS8, PS9, PS10]

var KS1= {
  x: xRange,
  y: [0.0928626,0.07922520000000001,0.090339,0.090339,0.10817399999999999,0.11600799999999999,0.105135,0.08838270000000001,0.09823530000000001,0.0875243,0.0875243,0.0752029,0.0648767,0.0506713,0.0620017,0.053026000000000004,0.044376599999999995,0.044376599999999995,0.059159899999999994,0.0645125,0.0526227,0.0390532,0.043538400000000005,0.051643299999999996,0.051643299999999996,0.0424075,0.0334791,0.037514,0.0439086,0.0435725,0.0406026,0.0406026,0.0471141,0.0365022,0.042680600000000006,0.050648500000000006,0.0431025],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var KS2= {
  x: xRange,
  y: [0.10574,0.09048129999999999,0.0789236,0.0789236,0.07022,0.0563468,0.060453,0.0679316,0.0550264,0.0460098,0.0460098,0.054281899999999994,0.0543871,0.0431349,0.035448600000000004,0.0429408,0.0492271,0.0492271,0.044272799999999994,0.033928,0.027076399999999997,0.0162304,0.012088199999999999,0.009228819999999999,0.009228819999999999,0.0072446,0.00497224,0.011444600000000001,0.0134447,0.0134109,0.0164281,0.0164281,0.0159072,0.011890399999999999,0.013775299999999999,0.010986,0.00897939],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var KS3= {
  x: xRange,
  y: [0.104503,0.119893,0.138191,0.138191,0.120294,0.116309,0.108202,0.09387209999999999,0.07479569999999999,0.0623606,0.0623606,0.0526132,0.0510412,0.0374671,0.0304438,0.037616500000000004,0.0436436,0.0436436,0.0624738,0.0713713,0.0804231,0.056473800000000005,0.043329700000000006,0.050141899999999996,0.050141899999999996,0.0552003,0.0660555,0.0917042,0.0800746,0.09479950000000001,0.111203,0.111203,0.124883,0.133252,0.114607,0.13025799999999998,0.154977],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var KS4= {
  x: xRange,
  y: [0.09560479999999999,0.0824847,0.0825663,0.0825663,0.0728003,0.0574997,0.061538999999999996,0.050496400000000004,0.056263900000000006,0.0635522,0.0635522,0.0760137,0.0750612,0.0877781,0.10062700000000001,0.11379,0.134502,0.134502,0.11101899999999999,0.0965866,0.111264,0.126562,0.13602,0.149787,0.149787,0.189405,0.15541,0.127252,0.116621,0.114012,0.119481,0.119481,0.101009,0.07846399999999999,0.0662271,0.0550695,0.0465928],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var KS5= {
  x: xRange,
  y: [0.09932110000000001,0.08647,0.0997988,0.0997988,0.112761,0.124655,0.14999700000000002,0.166646,0.180578,0.199414,0.199414,0.177171,0.17344299999999999,0.192804,0.172701,0.158656,0.14085899999999998,0.14085899999999998,0.12793,0.10934799999999999,0.126051,0.10261100000000001,0.08122109999999999,0.0635325,0.0635325,0.0785521,0.06619270000000001,0.0690946,0.0831334,0.0673802,0.0564431,0.0564431,0.0478866,0.0384855,0.0320669,0.025970700000000003,0.032839],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var KS6= {
  x: xRange,
  y: [0.0958408,0.10921299999999999,0.10799700000000001,0.10799700000000001,0.121059,0.137665,0.133484,0.150025,0.136251,0.150143,0.150143,0.13469299999999998,0.157287,0.16857599999999998,0.19363,0.165499,0.141488,0.141488,0.172044,0.18825599999999998,0.202222,0.237719,0.260145,0.292643,0.292643,0.256278,0.302117,0.261918,0.287577,0.315026,0.279882,0.279882,0.320023,0.344256,0.391583,0.352021,0.318404],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var KS7= {
  x: xRange,
  y: [0.107269,0.0937641,0.0790199,0.0790199,0.0666085,0.056706599999999996,0.06324600000000001,0.0540337,0.0474008,0.037706500000000004,0.037706500000000004,0.043886400000000006,0.0367882,0.0245002,0.030071,0.0242512,0.0190833,0.0190833,0.0311585,0.0253133,0.019844300000000002,0.0177991,0.0124271,0.0083781,0.0083781,0.00523827,0.00611732,0.012799300000000001,0.0108391,0.010335599999999999,0.00953253,0.00953253,0.0110537,0.0125822,0.014787699999999999,0.0118294,0.0143986],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var KS8= {
  x: xRange,
  y: [0.09262129999999999,0.105428,0.09006,0.09006,0.101747,0.106005,0.114596,0.129768,0.11587399999999999,0.0954667,0.0954667,0.08203370000000001,0.0910103,0.10595299999999999,0.08830260000000001,0.104177,0.1209,0.1209,0.096783,0.0848432,0.0725851,0.086741,0.0645368,0.050983,0.050983,0.0600099,0.0661495,0.0524733,0.0641255,0.0642422,0.0805995,0.0805995,0.06985380000000001,0.05569229999999999,0.06934560000000001,0.0775502,0.089052],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var KS9= {
  x: xRange,
  y: [0.100121,0.11413200000000001,0.09853790000000001,0.09853790000000001,0.111886,0.12687700000000002,0.120851,0.10457899999999999,0.12190899999999999,0.135361,0.135361,0.16227,0.14076,0.122544,0.138881,0.16908,0.19312700000000002,0.19312700000000002,0.1513,0.16786700000000002,0.17962,0.224675,0.245548,0.206077,0.206077,0.17582299999999998,0.195142,0.188119,0.17109400000000002,0.149011,0.178065,0.178065,0.155364,0.171932,0.151685,0.170036,0.19203],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var KS10= {
  x: xRange,
  y: [0.106117,0.118909,0.134566,0.134566,0.11445,0.10192899999999999,0.0824965,0.09426530000000001,0.113667,0.122462,0.122462,0.141834,0.155346,0.166572,0.147893,0.130963,0.11279399999999999,0.11279399999999999,0.143859,0.157974,0.12829100000000002,0.0921352,0.101146,0.117585,0.117585,0.129842,0.104365,0.147681,0.12918200000000002,0.12821,0.107763,0.107763,0.106906,0.11694299999999999,0.103241,0.11563,0.09962549999999999],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataKS = [KS1, KS2, KS3, KS4, KS5, KS6, KS7, KS8, KS9, KS10]

var PO1= {
  x: xRange,
  y: [0.0954574,0.08579479999999999,0.094761,0.094761,0.105876,0.109922,0.107165,0.09696729999999999,0.103305,0.0974257,0.0974257,0.0887471,0.0804133,0.0672287,0.0779183,0.06883399999999999,0.0611034,0.0611034,0.07398010000000001,0.0805675,0.06947729999999999,0.0593068,0.0649116,0.0763467,0.0763467,0.0651025,0.0541909,0.058056,0.0646814,0.0664475,0.0628074,0.0628074,0.0686059,0.0606678,0.0692994,0.0757515,0.0671375],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PO2= {
  x: xRange,
  y: [0.10567,0.09350870000000001,0.08720639999999999,0.08720639999999999,0.07929,0.0683232,0.071127,0.0788284,0.0670636,0.060640200000000005,0.060640200000000005,0.0683281,0.0674229,0.0570951,0.050801400000000003,0.0588292,0.0638929,0.0638929,0.0581172,0.048972,0.0416936,0.0290696,0.022881799999999997,0.0194212,0.0194212,0.0143654,0.011367799999999999,0.0214954,0.024875300000000003,0.024619099999999998,0.0278019,0.0278019,0.0294528,0.0233296,0.0272847,0.022394,0.0194206],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PO3= {
  x: xRange,
  y: [0.10229700000000001,0.11111700000000001,0.123469,0.123469,0.11425600000000001,0.11367100000000001,0.10818799999999999,0.0981679,0.0848743,0.0766794,0.0766794,0.0669768,0.0662988,0.0540229,0.0450762,0.051813500000000005,0.060136400000000007,0.060136400000000007,0.0767962,0.0844787,0.09470690000000001,0.0746662,0.06430029999999999,0.07407810000000001,0.07407810000000001,0.0792597,0.09051450000000001,0.107436,0.09986540000000001,0.111191,0.12280700000000001,0.12280700000000001,0.13547700000000001,0.14576799999999998,0.13711299999999998,0.146212,0.157653],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PO4= {
  x: xRange,
  y: [0.0969352,0.0901753,0.08863370000000001,0.08863370000000001,0.0801097,0.07049029999999999,0.07225100000000001,0.0625236,0.0685761,0.0767778,0.0767778,0.08598629999999999,0.08680879999999999,0.0967819,0.106403,0.11748,0.126878,0.126878,0.109721,0.102503,0.114826,0.131068,0.14318,0.150523,0.150523,0.165335,0.15474,0.132968,0.125029,0.12592799999999998,0.125959,0.125959,0.115311,0.103946,0.09432290000000002,0.0793705,0.0687272],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PO5= {
  x: xRange,
  y: [0.101259,0.09111,0.101381,0.101381,0.109059,0.117475,0.129793,0.13794399999999998,0.146032,0.158016,0.158016,0.147589,0.145457,0.157196,0.148719,0.139424,0.132631,0.132631,0.12233,0.11389200000000001,0.122609,0.114409,0.101419,0.0874375,0.0874375,0.09888790000000001,0.0908373,0.08740540000000001,0.0991966,0.0875398,0.0766369,0.0766369,0.0699834,0.0609845,0.053953100000000004,0.046309300000000005,0.051851],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PO6= {
  x: xRange,
  y: [0.0960292,0.106767,0.106693,0.106693,0.114021,0.125165,0.121376,0.131495,0.123359,0.132907,0.132907,0.124617,0.13464299999999998,0.146564,0.15355,0.142521,0.13198200000000002,0.13198200000000002,0.144126,0.152064,0.15781799999999999,0.176341,0.184445,0.19281700000000002,0.19281700000000002,0.184422,0.197733,0.182142,0.188253,0.192314,0.18653799999999998,0.18653799999999998,0.190687,0.20054400000000003,0.20100700000000002,0.198939,0.199766],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PO7= {
  x: xRange,
  y: [0.104231,0.0959359,0.0860201,0.0860201,0.0769015,0.0716634,0.074224,0.0654763,0.0635092,0.0521435,0.0521435,0.058073599999999996,0.0520518,0.0388998,0.044349,0.0389288,0.032566700000000004,0.032566700000000004,0.045051499999999994,0.0394467,0.0333257,0.0324309,0.0250229,0.018921900000000002,0.018921900000000002,0.0112817,0.0146227,0.0246407,0.021680900000000003,0.0216044,0.0181975,0.0181975,0.0221563,0.0239578,0.030702300000000002,0.0245606,0.027791399999999997],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PO8= {
  x: xRange,
  y: [0.0948987,0.10375200000000001,0.09408,0.09408,0.10252299999999999,0.104805,0.111374,0.12162200000000001,0.112956,0.0997833,0.0997833,0.09195629999999999,0.09997969999999999,0.11404700000000001,0.10069700000000001,0.11157299999999999,0.1208,0.1208,0.10573700000000001,0.0975268,0.0884649,0.103529,0.0904632,0.07417699999999999,0.07417699999999999,0.08146010000000001,0.08956049999999999,0.0730867,0.08757450000000001,0.0856678,0.09907049999999999,0.09907049999999999,0.09246620000000001,0.0819477,0.0960444,0.10157,0.11481799999999999],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PO9= {
  x: xRange,
  y: [0.100039,0.10883799999999999,0.09806209999999999,0.09806209999999999,0.107844,0.11620299999999999,0.114869,0.10608100000000001,0.119551,0.127699,0.127699,0.1388,0.12795,0.122286,0.134439,0.14568,0.156603,0.156603,0.13528,0.141953,0.15094,0.172615,0.186192,0.17563299999999998,0.17563299999999998,0.161387,0.174808,0.16433099999999998,0.155366,0.148789,0.158845,0.158845,0.15293600000000002,0.164138,0.162295,0.167974,0.17331],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PO10= {
  x: xRange,
  y: [0.103183,0.113001,0.119694,0.119694,0.11012,0.102281,0.0896335,0.100895,0.110773,0.11792799999999999,0.11792799999999999,0.128926,0.138974,0.14587799999999998,0.138047,0.12491700000000001,0.113406,0.113406,0.128861,0.138596,0.126139,0.106565,0.117184,0.130645,0.130645,0.13849799999999998,0.121625,0.148439,0.13347799999999999,0.1359,0.121337,0.121337,0.12292399999999999,0.134717,0.127979,0.13692,0.11952399999999999],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPO = [PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO10]

var SP1= {
  x: xRange,
  y: [0.0974,0.08999,0.09807,0.09807,0.10443,0.108,0.10454,0.09926,0.1039,0.09947,0.09947,0.09499,0.08855,0.08106,0.08789,0.0798,0.0738,0.0738,0.08301,0.08912,0.08391,0.0737,0.0816,0.09211,0.09211,0.08118,0.0734,0.07281,0.08146,0.08092,0.07625,0.07625,0.0836,0.07785,0.0855,0.09293,0.08458],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var SP2= {
  x: xRange,
  y: [0.10221,0.09771,0.091,0.091,0.08525,0.07666,0.07946,0.08676,0.07847,0.07258,0.07258,0.07969,0.08066,0.07105,0.06444,0.07117,0.07886,0.07886,0.0704,0.06157,0.05337,0.04299,0.03611,0.03011,0.03011,0.02401,0.01997,0.03256,0.03692,0.03794,0.04134,0.04134,0.04249,0.03564,0.04134,0.03617,0.03159],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var SP3= {
  x: xRange,
  y: [0.10189,0.10943,0.11252,0.11252,0.1092,0.10935,0.10544,0.09955,0.09148,0.08662,0.08662,0.07825,0.07613,0.06598,0.05964,0.06539,0.0705,0.0705,0.08467,0.09343,0.10118,0.08821,0.08114,0.08918,0.08918,0.09364,0.10481,0.11586,0.10664,0.11765,0.12356,0.12356,0.1305,0.14086,0.13465,0.14081,0.14265],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var SP4= {
  x: xRange,
  y: [0.09851,0.09109,0.09209,0.09209,0.08667,0.08119,0.08028,0.07351,0.07829,0.08367,0.08367,0.09284,0.09245,0.10358,0.11006,0.11701,0.12,0.12,0.10969,0.10621,0.11455,0.12698,0.13535,0.14041,0.14041,0.14578,0.14409,0.13139,0.12557,0.12419,0.12694,0.12694,0.1217,0.11362,0.1081,0.09629,0.08911],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var SP5= {
  x: xRange,
  y: [0.10095,0.09327,0.10084,0.10084,0.10612,0.11144,0.11856,0.12335,0.12496,0.13223,0.13223,0.12633,0.12636,0.13314,0.12989,0.12654,0.12348,0.12348,0.11585,0.11272,0.11859,0.11938,0.11222,0.1023,0.1023,0.11118,0.1043,0.10132,0.10858,0.10113,0.09162,0.09162,0.08563,0.07773,0.07032,0.06127,0.0696],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var SP6= {
  x: xRange,
  y: [0.10082,0.10312,0.10283,0.10283,0.10778,0.11536,0.1137,0.12015,0.1171,0.12205,0.12205,0.11837,0.12193,0.12991,0.1311,0.12813,0.12174,0.12174,0.12689,0.13089,0.13384,0.13845,0.14434,0.14425,0.14425,0.14738,0.14306,0.14219,0.14148,0.13924,0.14123,0.14123,0.13788,0.13897,0.13149,0.13783,0.14222],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var SP7= {
  x: xRange,
  y: [0.10064,0.09937,0.09098,0.09098,0.08401,0.07832,0.0837,0.07671,0.07098,0.06402,0.06402,0.07037,0.06355,0.0525,0.05947,0.05128,0.04496,0.04496,0.0569,0.05047,0.04523,0.04576,0.03805,0.03057,0.03057,0.02041,0.02424,0.0382,0.03249,0.03313,0.02946,0.02946,0.03383,0.03859,0.04475,0.03691,0.04358],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var SP8= {
  x: xRange,
  y: [0.09713,0.10237,0.09821,0.09821,0.10315,0.10448,0.10931,0.11329,0.10922,0.10482,0.10482,0.09677,0.10481,0.11254,0.10462,0.11188,0.11835,0.11835,0.10583,0.10001,0.09472,0.11068,0.10364,0.09113,0.09113,0.09667,0.10562,0.08738,0.09702,0.09821,0.10969,0.10969,0.10332,0.09711,0.11042,0.11629,0.12216],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var SP9= {
  x: xRange,
  y: [0.09958,0.10577,0.10107,0.10107,0.10542,0.1123,0.10878,0.10514,0.11461,0.11926,0.11926,0.12218,0.12177,0.1203,0.12515,0.12836,0.13279,0.13279,0.12412,0.12877,0.13174,0.14028,0.14436,0.14852,0.14852,0.14319,0.15065,0.13929,0.13797,0.13618,0.13851,0.13851,0.13774,0.14562,0.1451,0.14709,0.14828],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var SP10= {
  x: xRange,
  y: [0.10087,0.10788,0.11239,0.11239,0.10797,0.1029,0.09623,0.10228,0.11099,0.11528,0.11528,0.12021,0.12379,0.12994,0.12774,0.12044,0.11552,0.11552,0.12264,0.12681,0.12287,0.11357,0.12319,0.13142,0.13142,0.13656,0.12986,0.139,0.13187,0.13141,0.1214,0.1214,0.12331,0.13401,0.12833,0.13441,0.12623],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataSP = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]

var WINS1= {
  x: xRange,
  y: [71.7203,71.1726,71.7195,71.7195,72.2875,72.6565,72.3505,71.8523,72.2257,71.8873,71.8873,71.4148,70.9566,70.3774,70.9855,70.4212,69.9306,69.9306,70.6818,71.0482,70.5555,69.9031,70.4851,71.196,71.196,70.7017,70.072,70.0475,70.4712,70.4917,70.3313,70.3313,70.7583,70.2624,70.6762,71.2347,70.7551],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var WINS2= {
  x: xRange,
  y: [72.2325,71.6974,71.2524,71.2524,70.8388,70.1884,70.385,70.8755,70.2238,69.7837,69.7837,70.2928,70.3131,69.7486,69.2037,69.7695,70.2322,70.2322,69.6803,69.0728,68.5095,67.4757,66.8866,66.3808,66.3808,65.7681,65.1967,66.7326,67.1849,67.1918,67.603,67.603,67.5742,66.9941,67.4347,67.0158,66.5687],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var WINS3= {
  x: xRange,
  y: [72.1953,72.691,73.2621,73.2621,72.7694,72.6703,72.3479,71.8591,71.1606,70.7107,70.7107,70.084,70.0643,69.2571,68.7221,69.2111,69.7629,69.7629,70.6943,71.2683,71.8031,70.8777,70.3655,70.9827,70.9827,71.4336,72.0768,72.6839,72.2054,72.7976,73.3338,73.3338,73.7771,74.2279,73.6757,74.1875,74.7454],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var WINS4= {
  x: xRange,
  y: [71.8397,71.3336,71.3206,71.3206,70.8656,70.2873,70.4314,69.8591,70.2575,70.766,70.766,71.3197,71.3462,72.0664,72.5446,73.0391,73.5894,73.5894,72.7118,72.3306,72.9465,73.7472,74.2647,74.7602,74.7602,75.7455,75.0886,73.9141,73.542,73.4883,73.6584,73.6584,73.0957,72.5298,72.0061,71.4511,70.9535],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var WINS5= {
  x: xRange,
  y: [72.0226,71.5324,72.074,72.074,72.5368,73.0073,73.6946,74.1691,74.5217,75.0782,75.0782,74.5057,74.4654,75.1032,74.6415,74.2301,73.8391,73.8391,73.2416,72.8073,73.3826,73.0194,72.436,71.8564,71.8564,72.5917,72.1373,71.8331,72.3222,71.7392,71.205,71.205,70.7554,70.2846,69.8025,69.3172,69.7959],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var WINS6= {
  x: xRange,
  y: [71.8246,72.3496,72.3284,72.3284,72.75,73.3746,73.223,73.7221,73.374,73.8493,73.8493,73.3921,73.9847,74.5275,75.0296,74.4009,73.7729,73.7729,74.3765,74.808,75.2127,76.1551,76.7912,77.4404,77.4404,76.9581,77.7653,76.6742,77.0534,77.481,76.9245,76.9245,77.494,78.0616,78.5933,78.1473,77.6805],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var WINS7= {
  x: xRange,
  y: [72.2785,71.8119,71.2483,71.2483,70.7343,70.3115,70.608,70.1261,69.7913,69.2269,69.2269,69.6413,69.1525,68.2565,68.8255,68.2245,67.6271,67.6271,68.7053,68.2707,67.8131,67.8317,67.2027,66.4356,66.4356,65.354,65.9291,67.2612,66.7955,66.83,66.4123,66.4123,66.9014,67.3639,67.8099,67.3155,67.8394],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var WINS8= {
  x: xRange,
  y: [71.6738,72.1952,71.6528,71.6528,72.151,72.2426,72.556,73.0904,72.6949,72.0624,72.0624,71.5562,71.9964,72.745,72.0886,72.6483,73.1677,73.1677,72.258,71.866,71.4204,72.3462,71.7353,71.0479,71.0479,71.6057,72.0685,70.9291,71.5369,71.5348,72.1972,72.1972,71.765,71.2863,71.9299,72.3529,72.8338],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var WINS9= {
  x: xRange,
  y: [72.0056,72.5091,71.9798,71.9798,72.4665,73.0301,72.871,72.3618,73.0316,73.5022,73.5022,74.1349,73.641,73.359,73.8702,74.4998,75.0804,75.0804,73.93,74.3578,74.783,75.9733,76.5967,75.9965,75.9965,75.4456,75.9848,75.3509,74.9266,74.5053,75.094,75.094,74.6344,75.2055,74.7579,75.2057,75.6166],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var WINS10= {
  x: xRange,
  y: [72.207,72.7073,73.162,73.162,72.6,72.2314,71.5328,72.0845,72.719,73.1333,73.1333,73.6584,74.0798,74.5595,74.0886,73.5554,72.9978,72.9978,73.7204,74.1702,73.5736,72.6705,73.2362,73.9034,73.9034,74.3959,73.6808,74.5736,73.9618,73.9402,73.2404,73.2404,73.2445,73.784,73.3138,73.772,73.2111],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataWINS = [WINS1, WINS2, WINS3, WINS4, WINS5, WINS6, WINS7, WINS8, WINS9, WINS10]