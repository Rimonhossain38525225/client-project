/* eslint-disable no-unused-vars */
import React from "react";

import "./section1.css";
function Section1() {
  return (
    <>
      <div className="vsc-basics-bg lg:h-[710px] pt-[140px] lg:pt-0">
        <div id="what-is-vsc" className="mx-4 lg:mx-12">
          <div className="grid grid-cols-12 lg:gap-x-16 relative lg:top-[280px]">
            <div className="col-span-12 lg:col-span-11 lg:mb-10">
              <span className="text-[#7C7C7C] text-[36px] lg:text-[2rem] lg:mr-20">
                {"//"}
              </span>
              <span className="text-[36px] leading-[36px] lg:text-[90px] lg:leading-[92px] font-light text-white">
                What is <br />
                <span className="faded-lilac-alt">Vyvo Smart Chain?</span>
              </span>
            </div>
            <div className="hidden lg:block lg:col-span-1 lg:col-start-12 vertical-text-right left-[100%]">
              <span className="text-xs leading-[18px] text-white">
                <span className="mr-6">[</span> SCROLL&nbsp;
                <span className="text-[#979797] leading-[18px] ml-2">
                  /&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/
                </span>
                <span className="ml-6">]</span>
              </span>
            </div>
            <div className="col-span-12 lg:col-span-1 mb-4 mt-4 lg:mt-0 lg:mb-0">
              <img
                alt="nft"
                loading="lazy"
                width="35"
                height="24"
                decoding="async"
                data-nimg="1"
                className=""
                srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=48&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=96&amp;q=75 2x"
                src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=96&amp;q=75"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="col-span-12 lg:col-span-4 mb-4 lg:mb-0">
              <span className="text-white text-base font-light leading-[22px]">
                <span className="faded-pink-tertiary">Vyvo Smart Chain</span>{" "}
                (VSC Network) is a comprehensive blockchain infrastructure that
                bridges IoT device users and institutions, letting users regain
                ownership of their data.
              </span>
            </div>
            <div className="col-span-12 lg:col-span-3 mb-4 lg:mb-0">
              <span className="text-white text-base font-light leading-[22px]">
                VSC Network aims to solve key problems related to data
                ownership, privacy, and monetization.
              </span>
            </div>
            <div className="h-0.5  bg-white/25 rounded-sm w-full col-span-12 lg:mt-16"></div>
            <div className="col-span-6">
              <p className="text-[#979797] font-light leading-[18px] mt-3 text-xs">
                DATA-DRIVEN SOLUTIONS
              </p>
            </div>
            <div className="col-span-6">
              <p className="text-[#979797] font-light leading-[18px] mt-3 text-right text-xs">
                VYVO SMART CHAIN
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section dots  */}
      <div className="vsc-huge-dots"></div>
    </>
  );
}

export default Section1;
