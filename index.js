//BAR CHART: https://www.chartjs.org/docs/latest/charts/bar.html
//STACKED BAR CHART: https://www.chartjs.org/docs/latest/samples/bar/stacked-groups.html
//COLOR SCALES: https://hihayk.github.io/scale/#4/6/50/80/-51/67/20/14/009481/0/148/130/white

//SOURCES:
//PERSONAL REDUCTION MEASURES: https://docs.google.com/spreadsheets/d/1a5hAVLQhdumSk87SF-mM2W2GmjTvAtErpcCwr9ndxSo
//CO2 by device type: https://www.ifi.uzh.ch/dam/jcr:066776d8-d2b0-4c7c-b75d-6b7283cb5791/Study_Digitalization_Climate_Protection_Oct2017.pdf
//TRAVEL CO2: https://tnmt.com/infographics/carbon-emissions-by-transport-type/

import dataTemperature from "./dataTemperature.js";

const ctxTemperature = document.getElementById("chart-temperature");
const ctxForestLoss = document.getElementById("chart-forest-loss");
const ctxCountryCarbon = document.getElementById("chart-co2-by-country");
const ctxPersonal = document.getElementById(
  "chart-personal-reduction-measures"
);
const ctxPersonalOther = document.getElementById(
  "chart-personal-reduction-other"
);
const ctxProduct = document.getElementById("chart-product");
const ctxTravel = document.getElementById("chart-travel");
const ctxSectorEmissions = document.getElementById("chart-sector-emissions");

const colorsTemp = [];

for (const [key, value] of Object.entries(dataTemperature)) {
  if (value > 0) {
    colorsTemp.push("#FF3C90");
  } else {
    colorsTemp.push("#39A96B");
  }
}

new Chart(ctxTemperature, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "degrees (•C) from average",
        data: dataTemperature,
        borderWidth: 0,
        // backgroundColor: ["#0A2F51", "#FF3C90"],
        backgroundColor: colorsTemp,
      },
    ],
  },
  options: {
    responsive: true,
    // indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Global surface temperature anomalies (in degrees •C)",
      },
      legend: {
        display: false,
      },
    },
  },
});

const forestLossTooltip = function (tooltipItems) {
  const curItem = tooltipItems[0];
  if (curItem.label === "2010" && curItem.dataset.label === "Temperate") {
    return "Gained 6M ha, an area the size of Belgium";
  }

  if (curItem.label === "2010" && curItem.dataset.label === "Tropical") {
    return "Lost 51M ha, an area the size of Sweden";
  }
  if (curItem.label === "1980") {
    return "Peak loss of 151M ha, an area the size of India";
  }
  if (curItem.label === "1900" || curItem.label === "1910") {
    return "30M ha, an area the size of Italy";
  }
  if (curItem.label === "1980") {
    return "Peak loss of 151M ha, an area the size of India";
  }
};

new Chart(ctxForestLoss, {
  type: "bar",
  data: {
    labels: [
      "1900",
      "1910",
      "1920",
      "1930",
      "1940",
      "1950",
      "1960",
      "1970",
      "1980",
      "1990",
      "2000",
      "2010",
    ],
    datasets: [
      {
        label: "Temperate",
        data: [-20, -20, -46, -46, -46, -7.25, -7.25, -7.25, -6, 4, 20, 6],
        borderWidth: 1,
        backgroundColor: "#0E4D64",
      },
      {
        label: "Tropical",
        data: [
          -10, -10, -69, -69, -69, -108.75, -108.75, -108.75, -145, -82, -71,
          -53,
        ],
        borderWidth: 1,
        backgroundColor: "#39A96B",
      },
    ],
  },
  options: {
    // indexAxis: "y",

    plugins: {
      title: {
        display: true,
        text: "(in millions of hectares, 1 ha = 2.47 acres)",
      },
      tooltip: {
        callbacks: {
          footer: forestLossTooltip,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        grid: {
          lineWidth: ({ tick }) => (tick.value == 0 ? 2 : 1),
          color: (context) => context.tick.value == 0 && "#885FF6",
        },
      },
    },
  },
});

new Chart(ctxCountryCarbon, {
  type: "line",
  data: {
    labels: [
      "1900",
      "1910",
      "1920",
      "1930",
      "1940",
      "1950",
      "1960",
      "1970",
      "1980",
      "1990",
      "2000",
      "2010",
      "2020",
    ],
    datasets: [
      {
        label: "Africa",
        data: [
          0.016785726, 0.120769635, 0.18576485, 0.1980702, 0.25652325,
          0.41071245, 0.5510557, 0.8291303, 1.1143764, 1.0334152, 1.08272,
          1.151617, 1.0189453,
        ],
        borderColor: "#006837",
        backgroundColor: "#006837",
      },
      {
        label: "Australia",
        data: [
          2.7529166, 4.0278487, 4.8786554, 3.47846, 4.1672964, 6.6940837,
          8.566338, 11.709354, 14.995692, 16.315939, 18.384481, 18.39776,
          15.579326,
        ],
        borderColor: "#a50026",
        backgroundColor: "#a50026",
      },
      {
        label: "Canada",
        data: [
          3.8118708, 7.3761024, 9.851199, 9.264357, 9.490556, 11.215383,
          10.760641, 15.91714, 18.066893, 16.567774, 18.46901, 16.387062,
          14.11671,
        ],
        borderColor: "#d73027",
        backgroundColor: "#d73027",
      },
      {
        label: "Denmark",
        data: [
          2.0065193, 2.5463908, 2.2186491, 3.8937695, 3.8547907, 5.1521387,
          6.493076, 12.6020155, 11.774394, 10.415695, 10.168425, 8.86417,
          4.854752,
        ],
        borderColor: "#5e4fa2",
        backgroundColor: "#5e4fa2",
      },
      {
        label: "EU",
        data: [
          2.755688, 3.4776783, 3.0678773, 3.7054973, 4.0927653, 3.8810596,
          5.900023, 8.674833, 10.052364, 9.235778, 8.443824, 7.803361,
          5.8878336,
        ],
        borderColor: "#3288bd",
        backgroundColor: "#3288bd",
      },
      {
        label: "India",
        data: [
          0.04085763, 0.07582119, 0.11003004, 0.12183239, 0.13277362, 0.1711457,
          0.24963345, 0.32595944, 0.4186273, 0.66401875, 0.92305845, 1.3513434,
          1.7509557,
        ],
        borderColor: "#1a9850",
        backgroundColor: "#1a9850",
      },
      {
        label: "Japan",
        data: [
          0.4431342, 0.8028053, 1.3434047, 1.3574424, 2.1213558, 1.2156167,
          2.4612293, 7.2850137, 8.032944, 9.36344, 9.972839, 9.484828, 8.321498,
        ],
        borderColor: "#66c2a5",
        backgroundColor: "#66c2a5",
      },
      {
        label: "Russia",
        data: [
          0.7080547, 0.82887, 0.2437654, 1.1191744, 3.1758204, 4.0459523,
          7.3883486, 11.074223, 15.401191, 17.126806, 10.066303, 11.352681,
          11.154039,
        ],
        borderColor: "#c51b7d",
        backgroundColor: "#c51b7d",
      },
      {
        label: "S. America",
        data: [
          0.07648257, 0.34059373, 0.23772043, 0.3874169, 0.56068635, 0.9917064,
          1.3346725, 1.7501765, 2.1010349, 2.0188978, 2.3488324, 2.7538428,
          2.2737656,
        ],
        borderColor: "#66bd63",
        backgroundColor: "#66bd63",
      },
      {
        label: "USA",
        data: [
          8.414262, 13.264477, 15.621684, 13.61946, 13.527884, 17.139591,
          16.444399, 21.662867, 21.549343, 20.648254, 21.304466, 18.257408,
          14.037217,
        ],
        borderColor: "#f46d43",
        backgroundColor: "#f46d43",
      },
      {
        label: "World",
        data: [
          1.185021, 1.6917303, 1.8279673, 1.8700589, 2.0859094, 2.4019601,
          3.1092887, 4.031703, 4.388215, 4.280799, 4.1395416, 4.7761583,
          4.4974236,
        ],
        borderColor: "#0A2F51",
        backgroundColor: "#0A2F51",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "(in tons of CO2e per person per year from fossil fuels & industry)",
      },
    },
  },
});

new Chart(ctxPersonal, {
  type: "bar",
  data: {
    labels: [
      "Have one fewer child",
      "Donate $1000 to best charity",
      "All Other Measures",
    ],
    datasets: [
      {
        label: "tons CO2",
        data: [60, 0, 0],
        borderWidth: 1,
        backgroundColor: "#0A2F51",
      },
      {
        label: "tons CO2",
        data: [0, 100, 0],
        borderWidth: 1,
        backgroundColor: "#0E4D64",
      },
      {
        label: "Switch to Green Heating",
        data: [0, 0, 2],
        borderWidth: 1,
        backgroundColor: "#137177",
      },
      {
        label: "Avoid one transatlantic flight",
        data: [0, 0, 2],
        borderWidth: 1,
        backgroundColor: "#188977",
      },
      {
        label: "Deep energy retrofit",
        data: [0, 0, 1.6],
        borderWidth: 1,
        backgroundColor: "#1D9A6C",
      },
      {
        label: "Buy green electricity",
        data: [0, 0, 1.4],
        borderWidth: 1,
        backgroundColor: "#39A96B",
      },
      {
        label: "Switch to electric car",
        data: [0, 0, 1.4],
        borderWidth: 1,
        backgroundColor: "#56B870",
      },
      {
        label: "Plant based diet",
        data: [0, 0, 0.4],
        borderWidth: 1,
        backgroundColor: "#74C67A",
      },
      {
        label: "European flight",
        data: [0, 0, 0.2],
        borderWidth: 1,
        backgroundColor: "#99D492",
      },
      {
        label: "Recycle",
        data: [0, 0, 0.2],
        borderWidth: 1,
        backgroundColor: "#BFE1B0",
      },
      {
        label: "Reuse plastic bag 1000X",
        data: [0, 0, 0.01],
        borderWidth: 1,
        backgroundColor: "#D2EDCC",
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Effect of Lifestyle Changes on Carbon Reduction (in tons CO2)",
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
});

const lifestyleTooltip = function (tooltipItems) {
  const curItem = tooltipItems[0];
  if (curItem.label === "Avoid one transatlantic flight") {
    return "Singular action (others require routine behavior)";
  }
};

new Chart(ctxPersonalOther, {
  type: "bar",
  data: {
    labels: [
      "Live car-free",
      "Switch to green heating",
      "Avoid one transatlantic flight",
      "Deep retrofit of house",
      "Buy green electricity",
      "Switch to electric car",
      "Plant based diet",
      "European flight",
      "Recycle",
      "Buy LEDs",
      "Reuse plastic bag 1000X",
    ],
    datasets: [
      {
        label: "tons CO2",
        data: [2.4, 2, 1.6, 1.6, 1.4, 1.4, 0.4, 0.2, 0.2, 0.03, 0.01],
        borderWidth: 1,
        backgroundColor: [
          "#0A2F51",
          "#0E4D64",
          "#FF3C90",
          "#188977",
          "#1D9A6C",
          "#39A96B",
          "#56B870",
          "#74C67A",
          "#99D492",
          "#BFE1B0",
          "#DEEDCF",
          "#D2EDCC",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Effect of Lifestyle Changes Excluding Children (in tons of CO2)",
      },
      tooltip: {
        callbacks: {
          footer: lifestyleTooltip,
        },
      },
      legend: {
        display: false,
      },
    },
  },
});

new Chart(ctxTravel, {
  type: "bar",
  data: {
    labels: [
      "Bike",
      "Light Rail",
      "E-Bike",
      "Bus",
      "Gas Scooter",
      "Train",
      "Electric Car",
      "Motorcycle",
      "Gas Car",
    ],
    datasets: [
      {
        label: "Energy",
        data: [0, 1.1, 1.5, 5.5, 13.5, 74.3, 10.1, 21.2, 33.4],
        borderWidth: 1,
        backgroundColor: "#137177",
      },
      {
        label: "Use",
        data: [0, 0.2, 0, 28.4, 67.5, 15, 3.3, 83, 128.4],
        borderWidth: 1,
        backgroundColor: "#0E4D64",
      },
      {
        label: "Maintenance",
        data: [1.2, 1.6, 3.6, 0.6, 3.7, 1, 4.4, 0.9, 4.3],
        borderWidth: 1,
        backgroundColor: "#1D9A6C",
      },
      {
        label: "Manufacture",
        data: [5.9, 2, 12.8, 1.2, 5.4, 1.2, 71, 23.9, 35.4],
        borderWidth: 1,
        backgroundColor: "#56B870",
      },
      {
        label: "Roadway",
        data: [0.5, 6.1, 0.5, 2.4, 0.7, 6.7, 10.6, 8.3, 8.4],
        borderWidth: 1,
        backgroundColor: "#99D492",
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Carbon Emission by Transport Type (in grams of CO2 per kilometer traveled)",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
});

new Chart(ctxProduct, {
  type: "bar",
  data: {
    labels: ["Desktop", "Laptop", "Tablet", "Smartphone", "Printer", "TV"],
    datasets: [
      {
        label: "Production",
        data: [102, 90, 23, 7.5, 22, 228],
        borderWidth: 1,
        backgroundColor: "#0E4D64",
      },
      {
        label: "Use",
        data: [30, 5, 2, 0.5, 6, 25],
        borderWidth: 1,
        backgroundColor: "#39A96B",
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Lifecycle Carbon Output by Device Type (in kilograms of CO2e)",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
});

const sectorEmissionsLabels = [
  ["Energy", "Industry", "Waste", "Agriculture & Land Use"],
  [
    "Energy Use in Industry",
    "Transport",
    "Energy use in Buildings",
    "Other Fuel Combustion",
    "Fugitive Emissions from Production",
    "Energy in Fishing & Ag",
    "Cement",
    "Chemicals",
    "Landfills",
    "Wastewater",
    "Livestock & Manure",
    "Soils",
    "Crop burn",
    "Deforestation",
    "Crop land",
    "Rice cultivation",
  ],
];

const sectorTooltip = function (tooltipItem) {
  // console.log(tooltipItem);
  const tooltipLabel =
    sectorEmissionsLabels[tooltipItem.datasetIndex][tooltipItem.dataIndex];
  return tooltipLabel;
};

new Chart(ctxSectorEmissions, {
  type: "pie",
  data: {
    datasets: [
      {
        backgroundColor: ["#0A2F51", "#7a5195", "#ef5675", "#ffa600"],
        data: [73.2, 5.2, 3.2, 18.4],
      },
      {
        backgroundColor: [
          "#0E4D64",
          "#137177",
          "#188977",
          "#1D9A6C",
          "#39A96B",
          "#74C67A",
          "#6e016b",
          "#88419d",
          "#ae017e",
          "#e7298a",
          "#fed976",
          "#feb24c",
          "#fd8d3c",
          "#fc4e2a",
          "#fe9929",
          "#ec7014",
        ],
        data: [
          24.2, 16.2, 17.5, 7.8, 5.8, 1.7, 3, 2.2, 1.9, 1.3, 5.8, 4.1, 3.5, 2.2,
          1.5, 1.3,
        ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "% Global GHG emissions by sector (~50 billion tons in 2016)",
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: sectorTooltip,
        },
      },
    },
  },
});


