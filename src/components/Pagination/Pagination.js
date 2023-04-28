import Icon from "@/Icon/icon";
import React from "react";
import { paginationData } from "./data";
const Pagination = () => {
  return (
    <div className="h-full border w-full sm:w-[375px] flex items-center">
      <div className="w-[42px] flex-shrink-0 flex justify-center h-full items-center">
        <Icon name="arrow-left" />
      </div>

      <div className="flex justify-between w-full sm:w-autoh-full">
        {paginationData.map((e, i) => (
          <div
            key={i}
            className="  sm:w-[41px] flex justify-center h-full items-center"
          >
            <span
              className={`${
                i === 0 ? "rounded-full bg-gray3 " : "text-gray5"
              } text-[14px] w-[25px] h-[25px] flex items-center justify-center cursor-pointer hover:rounded-full hover:bg-gray3 hover:text-black2`}
            >
              {e}
            </span>
          </div>
        ))}
      </div>
      <div className="w-[42px] flex justify-center flex-shrink-0  h-full items-center">
        <Icon name="arrow-right" />
      </div>
    </div>
  );
};

export default Pagination;
