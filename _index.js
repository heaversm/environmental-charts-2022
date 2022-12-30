//https://www.chartjs.org/docs/latest/charts/bar.html
//https://www.chartjs.org/docs/latest/samples/bar/stacked-groups.html

const ctx = document.getElementById("chart-personal-reduction-measures");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Donate effectively",
      "Have one fewer child",
      "All Other Measures",
    ],
    datasets: [
      {
        label: "Have one less child",
        data: [60],
        borderWidth: 1,
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        stack: "Stack 0",
      },
      {
        label: "Donate effectively",
        data: [100],
        borderWidth: 1,
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        stack: "Stack 1",
      },
      {
        label: "All other measures",
        data: [12.4, 2, 1.6, 1.6, 1.4, 1.4],
        borderWidth: 1,
        backgroundColor: [
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        stack: "Stack 2",
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Affect of Lifestyle Changes on Climate (tons CO2e)",
      },
      legend: {
        display: false,
      },
    },
  },
});
