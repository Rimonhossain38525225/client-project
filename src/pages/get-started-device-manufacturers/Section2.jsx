/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section2.css";
function Section2() {
  return (
    <>
      <div className="pt-10 lg:pt-0 device-manufacturers-circles-bg">
        <div className="mx-4 lg:mx-12">
          <div className="grid grid-cols-12 gap-y-8 lg:gap-x-16 lg:pt-32">
            <div className="col-span-12">
              <span className="text-[#7C7C7C] text-[30px] md:text-[36px] lg:text-[60px] 2xl:text-[2rem] lg:mr-20">
                {"//"}
              </span>
              <span className="text-[30px] md:text-[36px] leading-[36px] lg:text-[60px] lg:leading-[60px] 2xl:text-[90px] 2xl:leading-[92px] font-light text-white">
                Integration{" "}
                <span className="faded-pink-quaternary border-b-[1px] border-[#FFFFFFCC]">
                  Overview
                </span>
              </span>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:pt-[70px]">
              <div className="flex flex-col gap-y-4">
                <span className="text-[12px] text-[#AFAFAF] opacity-90 leading-[18px] font-light">
                  SEAMLESS INTEGRATION
                </span>
                <span className="text-base font-light leading-[22px] text-[#AFAFAF]">
                  Use VSC’s SDK to implement directly onto any device. As device
                  users receive rewards for participating, manufacturers take
                  part in revenue sharing with 30% per data reward.
                </span>
                <span className="text-white text-base font-light leading-[22px] flex flex-col gap-y-4">
                  <span className="">
                    There are two different types of integration:
                  </span>
                  <ul className="list-disc ml-4">
                    <li>
                      <span className="faded-green-secondary">Model 1</span>
                      <span className="text-[#AFAFAF] opacity-80">
                        &nbsp;- No hardware modification.
                      </span>
                    </li>
                    <li>
                      <span className="faded-green-secondary">Model 2</span>
                      <span className="text-[#AFAFAF] opacity-80">
                        &nbsp;- VSC-PoSe Chip integration to device hardware.
                      </span>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pt-[70px]">
              <div className="flex flex-col gap-y-4">
                <span className="text-[12px] text-[#AFAFAF] opacity-90 leading-[18px] font-light">
                  HARD INTEGRATION
                </span>
                <span className="faded-green-secondary text-base font-light leading-[22px] text-[#AFAFAF]">
                  Model 2 - VSC-PoSe chip Enabled
                </span>
                <span className="text-white text-base font-light leading-[22px]">
                  Wearable devices with Model 2 Integration enables data
                  security through the VSC-PoSe Chip via state-of-the-art 384bit
                  Elliptic Curve Cryptography (ECC) encryption.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
