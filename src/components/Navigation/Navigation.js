import Icon from "@/Icon/icon";
import React from "react";

const Navigation = () => {
  return (
    <div className=" border-b-[1px] border-gray93 bg-white w-full h-full flex justify-end items-center pr-[38px]">
      <div className="flex items-center mr-[22px] cursor-pointer">
        <Icon className=" mr-[12px] " name="profile" />
        <Icon name="vector-down" />
      </div>
      <div className="flex items-center cursor-pointer">
        <p className="mr-[12px] font-inter font-semibold text--[14px] text-black2">
          En
        </p>
        <Icon name="vector-down" />
      </div>
    </div>
  );
};

export default Navigation;
