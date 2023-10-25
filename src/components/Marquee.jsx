/* eslint-disable no-unused-vars */
import React from "react";
import "./marquee.css";
function Marquee() {
  return (
    <>
      <div className="pb-10">
        <div className="overflow-hidden w-full  h-[200px] my-28 relative ">
          <div className="h-[200px] whitespace-nowrap safari-slider">
            <span className="text-[180px]  font-light pre-footer-gradient-purple pl-[100%] inline-block line-clamp-1 h-full">
              First Heartbeat-Powered Blockchain &nbsp;
            </span>
          </div>
          <div className="h-[200px] whitespace-nowrap safari-slider safari-slider-2">
            <span className="text-[180px] font-light pre-footer-gradient-purple pl-[100%] inline-block line-clamp-1 h-full">
              First Heartbeat-Powered Blockchain &nbsp;
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marquee;
