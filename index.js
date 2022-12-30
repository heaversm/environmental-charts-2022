//https://www.chartjs.org/docs/latest/charts/bar.html

const ctx = document.getElementById("chart-personal-reduction-measures");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Donate effectively",
      "Have one fewer child",
      "Live car-free",
      "Switch to green heating",
      "Avoid one transatlantic flight",
      "Deep retrofit of house",
      "Buy green electricity",
      "Switch to electric car",
    ],
    datasets: [
      {
        label: "tons CO2",
        data: [100, 60, 2.4, 2, 1.6, 1.6, 1.4, 1.4],
        borderWidth: 1,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Affect of Lifestyle Changes on Climate (tons CO2)",
      },
      legend: {
        display: false,
      },
    },
  },
});
