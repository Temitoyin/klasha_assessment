import React from "react";
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";

/**
 * Render Layout component
 * @param {null} children the children
 * @returns {React.Component} renders button component
 */
const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="flex relative h-screen w-screen ">
        <div className="mr-[0px] lg:mr-[280px]">
          <SideBar />
        </div>
        <div className="w-full ">
          <div className="h-[64px] flex items-center mb-[24px] w-full xl:w-[calc(100vw-280px)] fixed  z-[1000]">
            <Navigation />
          </div>
          <div className="pt-[100px] lg:pt-[171px] pb-[30px] px-[32px] sm:px-[32px] xl:px-[32px] overflow-scroll z-[999] relative ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
