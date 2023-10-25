/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section3.css";

function Section3() {
  return (
    <>
      <div className="device-manufacturers-bg3">
        <div className="mx-4 lg:mx-12">
          <div className="grid grid-cols-12 lg:gap-x-16 relative pt-[80px] lg:pt-0 lg:top-[280px]">
            <div className="col-span-12 lg:col-span-11 lg:mb-10">
              <div className="relative lg:top-[60px]">
                <span className="text-[#7C7C7C] text-[36px] lg:text-[60px] 2xl:text-[2rem] lg:mr-20">
                  {"//"}
                </span>
                <span className="text-[36px] leading-[36px] lg:text-[60px] lg:leading-[60px] 2xl:text-[90px] 2xl:leading-[92px] font-light text-white">
                  <span className="faded-green-secondary">Benefits</span> of
                  integrating
                  <br />
                  with
                  <span className="faded-pink-quaternary">
                    Vyvo Smart Chain
                  </span>
                </span>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-1 lg:col-start-12 vertical-text-right left-[100%]">
              <span className="text-xs leading-[18px] text-white">
                <span className="mr-6">[</span> VYVO&nbsp;
                <span className="text-[#979797] leading-[18px] ml-2">
                  /&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/
                </span>
                <span className="ml-6">]</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
