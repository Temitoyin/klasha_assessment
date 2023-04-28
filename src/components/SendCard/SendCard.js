import React from "react";
import Image from "../../assets/images/lines.svg";
function SendCard() {
  return (
    <div
      className="h-[284px] w-full bg-primary rounded-[8px]  p-[24px]"
      style={{ backgroundImage: `url(${Image.src})` }}
    >
      <h1 className="text-[16px] lg:text-[20px] max-w-[198px] text-white mb-[92px] font-generalsans font-medium ">
        KlashaWire - send money to businesses globally from Africa
      </h1>
      <div className="rounded-[8px] bg-black h-[48px] text-white w-[130px] flex items-center justify-center font-inter">
        Send a Wire
      </div>
    </div>
  );
}

export default SendCard;
