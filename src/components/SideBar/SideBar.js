import Icon from "@/Icon/icon";
import Link from "next/link";
import React from "react";
import { sideBarData } from "./data";
import { useRouter } from "next/router";

/**
 * Render SideBar component
 * @returns {React.Component} renders button component
 */
const SideBar = () => {
  const router = useRouter();
  return (
    <div className="hidden lg:block fixed bg-seashell pl-[48px] pr-[52px] w-[280px] h-full ">
      <div className="pt-[30px] pb-[18px]">
        <Icon name="logo" />
      </div>
      <div>
        {sideBarData.map((data, index) => (
          <div key={data.title}>
            {data.header ? (
              <p className="mt-[34px] mb-[16px] text-[16px] text-gray0 font-generalsans font-medium">
                {data.header}
              </p>
            ) : (
              <Link href={data.link}>
                <div className="flex h-[24px] items-center mb-[20px] cursor-pointer">
                  <div className="w-[20px] ">
                    <Icon
                      name={
                        router.pathname === data.link
                          ? data.iconActive
                          : data.icon
                      }
                    />
                  </div>

                  <p
                    className={`ml-[8px] font-normal font-inter ${
                      router.pathname === data.link
                        ? "text-primary font-semibold"
                        : "text-gray400"
                    }`}
                  >
                    {data.title}
                  </p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="fixed bottom-[60px] left-[48px] ">
        <div className="rounded-[39px] bg-primary flex items-center h-[40px] px-[8px] mb-[18px] cursor-pointer">
          <Icon name="support" />
          <p className="text-white text-[12px] font-inter font-semibold ml-[18px] ">
            Support
          </p>
        </div>
        <div className="border border-black2 rounded-[8px] w-[120px] h-[40px] flex items-center px-[12px] cursor-pointer">
          <Icon name="arrow-left-drk" />
          <p className="text-[12px] font-inter font-semibold text-black2 ml-[8px]">
            Hide Panel
          </p>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
