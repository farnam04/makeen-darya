"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function PBnewuser() {
  const currentYear = new Date().getFullYear();
  const pastYears = [currentYear - 2, currentYear - 1, currentYear];

  const data = {
    labels: pastYears, 
    datasets: [
      {
        label: "Sales",
        data: [400, 500, 600], 
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Sales Data (Past 3 Years)",
      },
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-end">
      <div className="w-[600px] h-[270px] border-[1px] border-[#b4b7b6] rounded-md bg-white ">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
