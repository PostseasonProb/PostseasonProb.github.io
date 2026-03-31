var xRange = ["2026-03-27", "2026-03-28", "2026-03-29", "2026-03-30"];

var dataPS = {
  labels: xRange,
  datasets: [
    {
      label: "두산",
      data: [0.49445199999999995, 0.46359900000000004, 0.504835, 0.504835],
      borderColor: "#000080",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "롯데",
      data: [0.49795300000000003, 0.535662, 0.575678, 0.575678],
      borderColor: "#87ceeb",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "삼성",
      data: [0.50914, 0.4751862, 0.43747660000000005, 0.43747660000000005],
      borderColor: "#074ca1",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "키움",
      data: [0.49857729999999995, 0.4696861, 0.43948489999999996, 0.43948489999999996],
      borderColor: "#820024",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "한화",
      data: [0.4963756, 0.521716, 0.550693, 0.550693],
      borderColor: "#ff6600",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "KIA",
      data: [0.506685, 0.47778699999999996, 0.4480255, 0.4480255],
      borderColor: "#ea0029",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "KT",
      data: [0.4952948, 0.532737, 0.5706559999999999, 0.5706559999999999],
      borderColor: "#000000",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "LG",
      data: [0.5026119, 0.46722589999999997, 0.4268072, 0.4268072],
      borderColor: "#c30452",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "NC",
      data: [0.5019106, 0.5306171, 0.4919162, 0.4919162],
      borderColor: "#af917b",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "SSG",
      data: [0.497, 0.525784, 0.554427, 0.554427],
      borderColor: "#ffb81c",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    }
  ]
};

var dataKS = {
  labels: xRange,
  datasets: [
    {
      label: "두산",
      data: [0.0968006, 0.08567780000000001, 0.09967909999999999, 0.09967909999999999],
      borderColor: "#000080",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "롯데",
      data: [0.0986613, 0.112706, 0.130811, 0.130811],
      borderColor: "#87ceeb",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "삼성",
      data: [0.10171200000000001, 0.0881629, 0.0734793, 0.0734793],
      borderColor: "#074ca1",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "키움",
      data: [0.100393, 0.0881324, 0.0764499, 0.0764499],
      borderColor: "#820024",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "한화",
      data: [0.09865600000000001, 0.107239, 0.121175, 0.121175],
      borderColor: "#ff6600",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "KIA",
      data: [0.103013, 0.09130780000000001, 0.0776573, 0.0776573],
      borderColor: "#ea0029",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "KT",
      data: [0.09920540000000001, 0.11281799999999999, 0.1302, 0.1302],
      borderColor: "#000000",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "LG",
      data: [0.10094600000000001, 0.08716280000000001, 0.0709839, 0.0709839],
      borderColor: "#c30452",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "NC",
      data: [0.101885, 0.113705, 0.0966704, 0.0966704],
      borderColor: "#af917b",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "SSG",
      data: [0.0987266, 0.113088, 0.12289299999999999, 0.12289299999999999],
      borderColor: "#ffb81c",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    }
  ]
};

var dataPO = {
  labels: xRange,
  datasets: [
    {
      label: "두산",
      data: [0.09793940000000001, 0.0896622, 0.0999509, 0.0999509],
      borderColor: "#000080",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "롯데",
      data: [0.09820870000000001, 0.109094, 0.11989899999999999, 0.11989899999999999],
      borderColor: "#87ceeb",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "삼성",
      data: [0.104448, 0.0925771, 0.0826807, 0.0826807],
      borderColor: "#074ca1",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "키움",
      data: [0.100167, 0.0909576, 0.0847801, 0.0847801],
      borderColor: "#820024",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "한화",
      data: [0.098644, 0.105461, 0.112535, 0.112535],
      borderColor: "#ff6600",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "KIA",
      data: [0.101567, 0.09372219999999999, 0.0869027, 0.0869027],
      borderColor: "#ea0029",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "KT",
      data: [0.09780459999999999, 0.10809200000000001, 0.12049, 0.12049],
      borderColor: "#000000",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "LG",
      data: [0.102364, 0.0919672, 0.08109609999999999, 0.08109609999999999],
      borderColor: "#c30452",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "NC",
      data: [0.100655, 0.111215, 0.09793959999999999, 0.09793959999999999],
      borderColor: "#af917b",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "SSG",
      data: [0.0982034, 0.10725200000000001, 0.11372700000000001, 0.11372700000000001],
      borderColor: "#ffb81c",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    }
  ]
};

var dataSP = {
  labels: xRange,
  datasets: [
    {
      label: "두산",
      data: [0.09902, 0.09292, 0.10067, 0.10067],
      borderColor: "#000080",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "롯데",
      data: [0.10066, 0.10612, 0.11427, 0.11427],
      borderColor: "#87ceeb",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "삼성",
      data: [0.102, 0.09577, 0.08906, 0.08906],
      borderColor: "#074ca1",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "키움",
      data: [0.09918, 0.09449, 0.08956, 0.08956],
      borderColor: "#820024",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "한화",
      data: [0.0981, 0.10572, 0.10931, 0.10931],
      borderColor: "#ff6600",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "KIA",
      data: [0.1012, 0.09428, 0.09091, 0.09091],
      borderColor: "#ea0029",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "KT",
      data: [0.09895, 0.1071, 0.11127, 0.11127],
      borderColor: "#000000",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "LG",
      data: [0.09884, 0.0949, 0.08721, 0.08721],
      borderColor: "#c30452",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "NC",
      data: [0.10205, 0.10575, 0.09838, 0.09838],
      borderColor: "#af917b",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "SSG",
      data: [0.1, 0.10295, 0.10936, 0.10936],
      borderColor: "#ffb81c",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    }
  ]
};

var dataWINS = {
  labels: xRange,
  datasets: [
    {
      label: "두산",
      data: [71.8747, 71.4299, 72.0385, 72.0385],
      borderColor: "#000080",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "롯데",
      data: [71.9664, 72.5266, 73.1167, 73.1167],
      borderColor: "#87ceeb",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "삼성",
      data: [72.1328, 71.5947, 71.025, 71.025],
      borderColor: "#074ca1",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "키움",
      data: [71.9839, 71.5459, 71.1004, 71.1004],
      borderColor: "#820024",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "한화",
      data: [71.9267, 72.3253, 72.7565, 72.7565],
      borderColor: "#ff6600",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "KIA",
      data: [72.0957, 71.6547, 71.2144, 71.2144],
      borderColor: "#ea0029",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "KT",
      data: [71.9474, 72.4927, 73.0889, 73.0889],
      borderColor: "#000000",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "LG",
      data: [72.059, 71.5126, 70.9109, 70.9109],
      borderColor: "#c30452",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "NC",
      data: [72.0427, 72.4947, 71.9114, 71.9114],
      borderColor: "#af917b",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    },
    {
      label: "SSG",
      data: [71.9706, 72.4228, 72.8372, 72.8372],
      borderColor: "#ffb81c",
      fill: false,
      borderWidth: 4,
      tension: 0.1
    }
  ]
};

