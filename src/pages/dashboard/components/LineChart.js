import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);
export default function LineChart() {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 300, 300],
        borderColor: "#3855F2",
        borderWidth: 3,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
          gradientFill.addColorStop(0, "rgba(56, 85, 242, 0.8)");
          gradientFill.addColorStop(0.5, "rgba(56, 85, 242, 0.25)");
          gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");
          return gradientFill;
        },
        fill: true,
      },
    ],
  }; //   const gradientLine = {
  //     id: "customShadow",
  //   };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} />;
}
