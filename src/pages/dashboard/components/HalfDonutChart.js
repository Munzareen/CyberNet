import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function HalfDonutChart() {
  const data = {
    labels: ["Show", "Hide"],
    datasets: [
      {
        labels: "My First Dataset",
        data: [3, 6],
        backgroundColor: ["#3855F2", "#EAECF0"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const doughnutLabel = {
    id: "doughnutLabel",
    beforeDatasetsDraw(chart, args, options) {
      const { ctx, data } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.font = "bold 36px Inter";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("42", xCoor, yCoor - 23);
    },
  };
  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const plugins = [doughnutLabel];
  return (
    <div>
      <Doughnut data={data} options={options} plugins={plugins}></Doughnut>
    </div>
  );
}
