import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useTranslation } from "react-i18next";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
export default function StackedBarChart() {
  const { t, i18n } = useTranslation();

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: t("compliance"),
        data: [5, 19, 3, 5, 2, 3, 10],
        backgroundColor: "#3855F2",
      },
      {
        label: t("assessments"),
        data: [2, 3, 20, 5, 1, 4, 10],
        backgroundColor: "#7A89F7",
      },
      {
        label: t("targets"),
        data: [3, 10, 13, 15, 22, 30, 40],
        backgroundColor: "#CECCFC",
      },
    ],
  };
  const options = {
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
    barThickness: 40,
  };
  return <Bar data={data} options={options} />;
}
