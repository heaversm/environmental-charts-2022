//BAR CHART: https://www.chartjs.org/docs/latest/charts/bar.html
//STACKED BAR CHART: https://www.chartjs.org/docs/latest/samples/bar/stacked-groups.html
//COLOR SCALES: https://hihayk.github.io/scale/#4/6/50/80/-51/67/20/14/009481/0/148/130/white

//SOURCES:
//PERSONAL REDUCTION MEASURES: https://docs.google.com/spreadsheets/d/1a5hAVLQhdumSk87SF-mM2W2GmjTvAtErpcCwr9ndxSo
//CO2 by device type: https://www.ifi.uzh.ch/dam/jcr:066776d8-d2b0-4c7c-b75d-6b7283cb5791/Study_Digitalization_Climate_Protection_Oct2017.pdf
//TRAVEL CO2: https://tnmt.com/infographics/carbon-emissions-by-transport-type/

const ctxPersonal = document.getElementById(
  "chart-personal-reduction-measures"
);
const ctxPersonalOther = document.getElementById(
  "chart-personal-reduction-other"
);
const ctxProduct = document.getElementById("chart-product");
const ctxTravel = document.getElementById("chart-travel");
const ctxForestLoss = document.getElementById("chart-forest-loss");

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
        text: "(in tons CO2)",
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
        text: "(in tons of CO2)",
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
        text: "(in kilograms of CO2e)",
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
        text: "(in grams of CO2 per kilometer traveled)",
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

const forestLossTooltip = function (tooltipItems) {
  const curItem = tooltipItems[0];
  if (curItem.label === "2010" && curItem.dataset.label === "Temperate") {
    return "Gained 6M ha, an area the size of Belgium";
  }

  if (curItem.label === "2010" && curItem.dataset.label === "Tropical") {
    return "Lost 47M ha, an area the size of Sweden";
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
        data: [-20, -20, -46, -46, -46, -7.25, -7.25, -7.25, -6, 6, 20, 8],
        borderWidth: 1,
        backgroundColor: "#0E4D64",
      },
      {
        label: "Tropical",
        data: [
          -10, -10, -69, -69, -69, -108.75, -108.75, -108.75, -145, -78, -51,
          -47,
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