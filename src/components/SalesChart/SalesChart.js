import Icon from "@/Icon/icon";
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
const SalesChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: { display: true },
      },
      y: {
        grid: {
          color: "#DBDEE5",
        },
        ticks: {
          stepSize: 1000,
        },
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
        label: "Sales",
        data: [2100, 1800, 3990, 2600, 2800, 2900, 2330, 3000, 3500],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgb(239,44,90, 0.2)");
          gradient.addColorStop(1, "rgba(239, 44, 90, 0)");
          return gradient;
        },
        fill: true,
        borderColor: "#EF2C5A",
        borderWidth: 1,
        borderColor: "#FF5403",
        pointBorderWidth: 0,
        pointHitRadius: 0,
      },
    ],
  };
  return (
    <div className=" w-full">
      <div className="flex h-[40px] items-center justify-between mb-[6px]">
        <div className="pr-[10px] border-r-[1px]">
          <h1 className="text-[16px] lg:text-[20px] font-generalsans font-medium leading-[32px]">
            Sales
          </h1>
        </div>
        <div className="flex items-center w-[45%] lg:!w-max">
          <p className=" ml-[6px] lg:ml-[12px] mr-[12px] lg:mr-[24px] font-inter text-[10px] lg:text-[14px] font-semibold text-primary md:whitespace-nowrap cursor-pointer">
            7 days
          </p>
          <p className="mr-[12px] lg:mr-[25px] text-[10px] lg:text-[14px] font-inter font-semibold md:whitespace-nowrap cursor-pointer">
            30 days
          </p>
        </div>
        <div className="flex items-center w-[91px] justify-center border border-black2 rounded-[6px] h-full mr-[8px] px-[6px] cursor-pointer">
          <p className="mr-[10px] text-[10px] lg:text-[14px] font-inter">USD</p>
          <Icon name="vector-down" />
        </div>
        <div className="flex items-center border border-gray6 rounded-[6px] h-full px-[14px] w-[283px] 2xl:w-full justify-between cursor-pointer">
          <p className="text-[10px] lg:text-[14px] text-gray7 font-inter">
            Email
          </p>
          <Icon name="vector-down" />
        </div>
        <div className="flex items-center w-[148px] h-full rounded-[6px] border border-black2 px-[10px] jusify-center ml-[8px] sm:ml-[13px] cursor-pointer">
          <Icon name="arrow-down" />
          <p className="ml-[10px] text-[10px] lg:text-[12px] font-semibold align-center md:whitespace-nowrap font-inter">
            Download report
          </p>
        </div>
      </div>
      <div className="border border-black2 h-[284px] rounded-[8px] py-[32px] pl-[32px] pr-[12px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;
