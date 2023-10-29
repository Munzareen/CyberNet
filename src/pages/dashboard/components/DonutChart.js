import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function DonutChart() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        labels: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["#3855F2", "#7A89F7", "#A8AEFA"],
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
      ctx.fillText("42", xCoor, yCoor);
    },
  };
  const options = {
    cutout: "70%",
  };
  const plugins = [doughnutLabel];
  return (
    <div>
      <Doughnut data={data} options={options} plugins={plugins}></Doughnut>
    </div>
  );
}
