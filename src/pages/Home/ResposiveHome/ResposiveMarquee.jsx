/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./responsivmar.css";

function ResposiveMarquee() {
  return (
    <>
      <div className="py-10">
        <div className="overflow-hidden w-full  h-[92px] my-10 relative ">
          <div className="h-[200px] whitespace-nowrap safari-slider">
            <span className="text-[72px]  font-light pre-footer-gradient-purple pl-[100%] inline-block line-clamp-1 h-full">
              First Heartbeat-Powered Blockchain &nbsp;
            </span>
          </div>
          <div className="h-[200px] whitespace-nowrap safari-slider safari-slider-2">
            <span
              style={{ fontSize: "72px !importe" }}
              className="text-[72px] font-light pre-footer-gradient-purple pl-[100%] inline-block line-clamp-1 h-full"
            >
              First Heartbeat-Powered Blockchain &nbsp;
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResposiveMarquee;
