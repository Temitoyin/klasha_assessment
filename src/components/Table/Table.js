import React from "react";
import { tableHeadData, tableData } from "./data.js";
const Table = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="h-[40px]">
            {tableHeadData &&
              tableHeadData.map((e, i) => (
                <th
                  className={`${
                    i === 0 && "pl-[16px]"
                  } font-medium text-[12px] xl:text-[16px] text-gray1 text-left font-generalsans`}
                  key={e}
                >
                  {e}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map((e, i) => (
              <tr
                key={i}
                className={`h-[66px] border-b-[1px] border-gray3 ${
                  e.status === "Successful" && "bg-gray50"
                }`}
              >
                <td className="pl-[16px] font-inter pr-[8px]font-normal text-[12px] xl:text-[14px] text-gray2 ">
                  {e.transactionId}
                </td>
                <td className="font-normal font-inter px-[8px] text-[14px] text-gray2">
                  {e.source}
                </td>
                <td className="font-normal font-inter px-[8px] text-[14px] text-gray2">
                  {e.name}
                </td>
                <td className="font-normal font-inter px-[8px] text-[14px] text-gray2">
                  {e.email}
                </td>
                <td className="font-normal font-inter px-[8px] text-[14px] text-gray2">
                  {e.amount}
                </td>
                <td className="font-normal font-inter px-[8px]  text-[14px] text-gray2">
                  {e.requestDate}
                </td>
                <td className="font-normal font-inter px-[8px] text-[14px] text-gray2">
                  {e.status}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
