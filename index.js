//https://www.chartjs.org/docs/latest/charts/bar.html

const ctx = document.getElementById("chart-personal-reduction-measures");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Have one fewer child",
      "Donate effectively",
      "All Other Measures",
    ],
    datasets: [
      {
        label: "Have one less child",
        data: [60, 0, 0],
        borderWidth: 1,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        stack: "Stack 0",
      },
      {
        label: "Donate effectively",
        data: [0, 100, 0],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        stack: "Stack 1",
      },
      {
        label: "Switch to Green Heating",
        data: [0, 0, 2],
        borderWidth: 1,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        stack: "Stack 2",
      },
      {
        label: "Avoid one transatlantic flight",
        data: [0, 0, 2],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        stack: "Stack 2",
      },
      {
        label: "Deep energy retrofit",
        data: [0, 0, 1.6],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        stack: "Stack 2",
      },
      {
        label: "Buy green electricity",
        data: [0, 0, 1.4],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        stack: "Stack 2",
      },
      {
        label: "Switch to electric car",
        data: [0, 0, 1.4],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        stack: "Stack 2",
      },
      {
        label: "Plant based diet",
        data: [0, 0, 0.4],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        stack: "Stack 2",
      },
      {
        label: "European flight",
        data: [0, 0, 0.2],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        stack: "Stack 2",
      },
      {
        label: "Recycle",
        data: [0, 0, 0.2],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        stack: "Stack 2",
      },
      {
        label: "Buy LEDs",
        data: [0, 0, 0.03],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        stack: "Stack 2",
      },
      {
        label: "Reuse plastic bag 1000X",
        data: [0, 0, 0.01],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        stack: "Stack 2",
      },
    ],
  },
  options: {
    //indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Affect of Lifestyle Changes on Climate (tons CO2)",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
          type: "linear",
        },
      ],
    },
  },
});
