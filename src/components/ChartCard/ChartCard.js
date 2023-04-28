import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const ChartCard = ({ title, type, variant, chartData }) => {
  const fontColor = type === "dark" ? "text-white" : "text-black";
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: { display: false },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: { display: false },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const labels = [
    "20 Aug",
    "21 Aug",
    "22 Aug",
    "23 Aug",
    "24 Aug",
    "25 Aug",
    "26 Aug",
    "27 Aug",
    "28 Aug",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: chartData,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, "rgb(239,44,90, 0.2)");
          gradient.addColorStop(1, "rgba(239, 44, 90, 0)");
          return gradient;
        },
        fill: true,
        borderColor: "#EF2C5A",
        borderWidth: 1,
        pointBorderWidth: 0,
      },
    ],
  };
  return (
    <div
      className={`${
        type === "dark" ? "bg-black" : "bg-white"
      } border rounded-[8px] h-[200px] lg:h-[240px] w-full border-black p-[12px] lg:p-[24px]`}
    >
      {variant === "a" ? (
        <>
          <p
            className={`${fontColor} font-inter text-[12px] md:text-[14px] font-normal`}
          >
            24 Aug - 01 Sep 21
          </p>
          <div className="h-[77px] mt-[19px] mb-[18px] ">
            <Line data={data} options={options} />
          </div>
        </>
      ) : null}
      <div>
        <p className={`${fontColor} font-inter text-[12px] lg:text-[14px]`}>
          {title}
        </p>
        <p className={`${fontColor} text-[16px] lg:text-[20px]`}>₦1,652.50</p>
      </div>
    </div>
  );
};

export default ChartCard;
