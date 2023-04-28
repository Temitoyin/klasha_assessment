import Layout from "@/components/Layout/Layout";
import Pagination from "@/components/Pagination/Pagination";
import Table from "@/components/Table/Table";
import Icon from "@/Icon/icon";
import React from "react";

const Transactions = () => {
  return (
    <Layout>
      <div className="border rounded-[8px]">
        <h1 className="pt-[16px] pb-[24px] pl-[16px] text-[18px] font-medium leading-[23px]  font-generalsans">
          Transaction History
        </h1>
        <header className="flex justify-between border-t-[1px] border-b-[1px] w-full h-[56px] py-[8px] px-[16px] mb-[32px]">
          <div className="items-center border rounded-[8px] pr-[6px] hidden sm:flex">
            <input
              type="text"
              placeholder="Search"
              className="outline-none pl-[10px] placeholder:text-[14px] placeholder:font-normal placeholder:text-gray4"
            />
            <Icon name="search" />
          </div>
          <div className="flex items-center w-[185px] justify-between">
            <div className="flex items-center border-black border rounded-[8px] h-full w-[94px] justify-center cursor-pointer">
              <p className="mr-[6px] font-semibold text-[12px]">Filter</p>
              <Icon name="filter" />
            </div>
            <div className="w-[79px] border border-black rounded-[8px] h-full flex justify-center items-center cursor-pointer">
              <p className="font-semibold text-[12px]">Export</p>
            </div>
          </div>
        </header>
        <div className="w-full overflow-x-hidden">
          <Table />
        </div>
        <div className="h-[71px] py-[16px] px-[16px] rounded-[5px] flex justify-end">
          <Pagination />
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
