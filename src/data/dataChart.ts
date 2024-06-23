import { ChartData, ChartOptions } from "@xefi/xui/chart";

export const optionsBarGrouped: ChartOptions<"bar"> = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
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
  elements: {
    bar: {
      borderRadius: 10,
    },
  },
};

// scatter
export const dataScatter: ChartData<"scatter"> = {
  datasets: [
    {
      label: "A dataset",
      data: [
        { x: 1, y: 2 },
        { x: 0, y: 1 },
        { x: 10, y: 5 },
        { x: -1, y: 5 },
        { x: 4.3, y: 3 },
        { x: 6.2, y: 4 },
        { x: -1, y: 7 },
        { x: 2.5, y: 5.8 },
      ],
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

// Bar
export const dataBar: ChartData<"bar"> = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [600, 1108, 1200, 1098, 967, 800, 30],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [680, 1108, 1200, 1098, 967, 800, 600],
      backgroundColor: ["rgba(53, 162, 235, 0.5)"],
    },
  ],
};

// Area
export const dataArea: ChartData<"polarArea"> = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};
// Doughnut
export const dataDoughnut: ChartData<"doughnut"> = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
