import ChartCard from "@/components/ChartCard/ChartCard";
import Layout from "@/components/Layout/Layout";
import SalesChart from "@/components/SalesChart/SalesChart";
import SendCard from "@/components/SendCard/SendCard";
import React from "react";

const Dashboard = () => {
  return (
    <Layout>
      <h1 className="text-black3 text-[20px] font-medium font-generalsans">
        Sales overview
      </h1>
      <div className="flex sm:flex-row  flex-wrap justify-between mt-[24px]">
        <div className=" w-[49%] mb-[10px] md:mb-[0px] md:w-[23.3%]">
          <ChartCard variant="b" title="Today's sales" />
        </div>
        <div className="w-[49%] mb-[10px] md:mb-[0px]  md:w-[23.3%]">
          <ChartCard
            variant="a"
            type="dark"
            title="This week"
            chartData={[1000, 2809, 1242, 2434, 1233, 1313, 2432, 3636, 2131]}
          />
        </div>
        <div className="w-[49%] md:w-[23.3%]">
          <ChartCard
            variant="a"
            title="This month"
            chartData={[890, 2829, 3242, 2134, 1233, 1113, 2402, 3626, 4001]}
          />
        </div>
        <div className="w-[49%] md:w-[23.3%]">
          <ChartCard
            variant="a"
            title="Last month"
            chartData={[1000, 1809, 3242, 1434, 3233, 1313, 3432, 2636, 1131]}
          />
        </div>
      </div>
      <div className="flex mt-[32px] justify-between">
        <div className=" w-[100%] sm:w-[70.2%]">
          <SalesChart />
        </div>
        <div
          className=" hidden md:block sm:w-[27.8%] self-end
        "
        >
          <SendCard />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
