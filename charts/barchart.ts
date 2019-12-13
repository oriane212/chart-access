// config for bar chart with 2 datasets, 1 label

let hot = "rgba(140, 127, 114, 0.4)";
let iced = "rgba(112, 91, 58, 0.4)";

export const coffeeChart = {
  type: "bar",

  data: {
    labels: ["April"],
    datasets: [
      { label: "Hot", data: [9], backgroundColor: hot },
      { label: "Iced", data: [21], backgroundColor: iced }
    ]
  },

  options: {
    title: {
      display: true,
      text: 'Coffees Consumed by Month'
    },

    scales: {
      xAxes: [
        {
          maxBarThickness: 40
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
}