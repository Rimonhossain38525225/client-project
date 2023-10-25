/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section1.css";
function Section1() {
  return (
    <>
      <div className="data-owner-bg pt-[140px] lg:pt-0">
        <div className="mx-4 lg:mx-12">
          <div className="grid grid-cols-12 lg:gap-x-16 relative lg:top-[280px]">
            <div className="col-span-12 lg:col-span-7 lg:mb-10 grid grid-cols-12 gap-y-4">
              <div className="col-span-12">
                <span className="text-[#7C7C7C] text-[50px] lg:text-[60px] 2xl:text-[2rem] mr-10 lg:mr-20">
                  {"//"}
                </span>
                <span className="text-[50px] leading-[36px] lg:text-[60px] lg:leading-[60px] 2xl:text-[90px] 2xl:leading-[92px] font-light text-white indent-8">
                  Who are
                  <br />
                  <span className="faded-light-blue">Data Owners?</span>
                </span>
              </div>
              <div className="col-span-12 lg:hidden mt-2 lg:mt-0">
                <img
                  alt="icon"
                  loading="lazy"
                  width="12"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  srcSet="https://www.vyvo.com//_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=16&amp;q=75 1x, https://www.vyvo.com//_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=32&amp;q=75 2x"
                  src="https://www.vyvo.com//_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=32&amp;q=75"
                />
              </div>
              <div className="hidden lg:block lg:col-span-1">
                <img
                  alt="icon"
                  loading="lazy"
                  width="30"
                  height="37"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  srcSet="https://www.vyvo.com//_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com//_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=64&amp;q=75 2x"
                  src="https://www.vyvo.com//_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=64&amp;q=75"
                />
              </div>
              <div className="col-span-11 lg:col-start-2 flex flex-col lg:gap-y-6">
                <span className="text-white text-base font-light leading-[22px]">
                  You, IoT device user, are the{" "}
                  <span className="faded-light-blue">Data Owner.</span>
                </span>
                <span className="text-white text-base font-light leading-[22px]">
                  VSC empowers Data Owners with decentralization to allow data
                  ownership, privacy, and the ability to monetise their health
                  data.
                </span>
              </div>
            </div>
            <div className="hidden lg:col-span-4 lg:flex justify-center">
              <img
                alt="card"
                loading="lazy"
                width="344"
                height="500"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="https://www.vyvo.com//_next/image?url=%2Fbackgrounds%2Fdata-owner-first-card-better.png&amp;w=384&amp;q=75 1x, https://www.vyvo.com//_next/image?url=%2Fbackgrounds%2Fdata-owner-first-card-better.png&amp;w=750&amp;q=75 2x"
                src="https://www.vyvo.com//_next/image?url=%2Fbackgrounds%2Fdata-owner-first-card-better.png&amp;w=750&amp;q=75"
              />
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
            <div className="col-span-12 flex justify-center lg:hidden">
              <img
                alt="card"
                loading="lazy"
                width="344"
                height="500"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="https://www.vyvo.com//_next/image?url=%2Fbackgrounds%2Fdata-owner-card.png&amp;w=384&amp;q=75 1x, https://www.vyvo.com//_next/image?url=%2Fbackgrounds%2Fdata-owner-card.png&amp;w=750&amp;q=75 2x"
                src="https://www.vyvo.com//_next/image?url=%2Fbackgrounds%2Fdata-owner-card.png&amp;w=750&amp;q=75"
              />
            </div>
            <div className="h-0.5 bg-white/25 rounded-sm w-full col-span-12 mt-10 lg:mt-16"></div>
            <div className="col-span-6">
              <p className="text-[#979797] font-light leading-[18px] mt-3 text-xs">
                PRIVACY-DRIVEN SOLUTIONS
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
    </>
  );
}

export default Section1;
