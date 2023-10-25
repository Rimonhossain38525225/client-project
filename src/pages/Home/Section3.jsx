/* eslint-disable no-unused-vars */
import React from "react";
import "./section3.css";
function Section3() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div style={{ transform: "none", transformOrigin: "500px 500px 0px" }}>
          <div className="h-[667px]  w-full flex flex-col justify-end text-xs text-white leading-[25.5px]">
            <div className="-z-10">
              <img
                alt="VyvoWatchBG"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                src="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvyvo-watch_grey_01.12f8bb34.png&w=3840&q=100"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  objectPosition: "center center",
                  color: "transparent",
                }}
              />
            </div>
            <div className="mx-12 flex flex-col justify-end space-y-7 mb-2">
              <div style={{ opacity: 1, transform: "none" }}>
                <div className="text-xs text-white leading-[25.5px]">
                  VALUES
                </div>
                <span className="text-white text-[90px] leading-[92px] font-light">
                  Verifying health
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
