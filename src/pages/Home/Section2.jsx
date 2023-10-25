/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from "react";

import "./section2.css";
function Section2() {
  return (
    <>
      <div className="square-dots-bg mt-20 mb-56">
        <div className="lg:mx-12">
          <div className="grid grid-cols-12">
            {/* main col 5  */}
            <div
              className="col-span-5"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="grid grid-cols-12  pt-[178px]">
                <div className="col-span-12 lg:col-span-5">
                  <div className="flex text-[60px] 2xl:text-[90px] text-white font-light">
                    <span className="">
                      <span className="text-[#7C7C7C] 2xl:text-[90px] lg:mr-10 2xl:mr-20">
                        //
                      </span>
                      <span className="faded-light-blue leading-[92px] tracking-[-2%]">
                        How&nbsp;
                      </span>
                    </span>
                    VSC
                  </div>
                  <div className="flex text-[60px] 2xl:text-[90px] text-white font-light leading-[92px] tracking-[-2%]">
                    <span className="faded-light-blue">Gathers </span>&nbsp;Data
                  </div>
                </div>
                {/* paragraph  */}
                <div className="col-span-8 lg:col-start-1 mb-12">
                  <div className="flex flex-col gap-y-4 align-bottom ">
                    <div className="relative py-2">
                      <div
                        className="absolute bg-transparent left-[36px] ease-in-out transition translate-x-[5px] duration-500"
                        style={{ opacity: 1, transform: "translateX(5px)" }}
                      >
                        <div className="absolute w-[20px] h-[20px] z-10 transform-gpu bg-transparent border-[1.9px] rounded-full border-[#FCFCFC]"></div>
                      </div>
                      <div
                        className="absolute bg-transparent left-[36px] ease-in-out transition -translate-x-[5px] duration-500"
                        style={{ opacity: 1, transform: "translateX(-5px)" }}
                      >
                        <div className="absolute w-[20px] h-[20px] transform-gpu bg-transparent border-[1.9px] rounded-full border-[#7C7C7C]"></div>
                      </div>
                    </div>
                    <p className="opacity-80  leading-[22px]">
                      <span className="text-white text-right line-clamp-1">
                        A Data NFT is bound to an IoT device
                      </span>
                      <span className="text-white">
                        to ensure ownership and privacy of the health data
                        gathered, securely encrypting the data and rewarding the
                        owner.
                      </span>
                    </p>
                  </div>
                </div>
                {/* button  */}
                <div className="col-span-8 col-start-1">
                  <a className="" href="/get-started-data-owner">
                    <button className="border-faded-green px-10 py-4 flex justify-center items-center hover:border-faded-green-hover">
                      <span className="text-white">Learn More</span>
                      <img
                        alt="Arrow right"
                        loading="lazy"
                        width="4"
                        height="8"
                        decoding="async"
                        data-nimg="1"
                        className="ml-4"
                        src="https://www.vyvo.com/shapes/arrow-right.svg"
                        style={{
                          color: "transparent",
                          objectFit: "contain",
                          objectPosition: "left center",
                        }}
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* main col 6 */}
            <div
              className="col-span-6"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="col-span-12 lg:block">
                <video
                  className="videoTag w-full lg:w-[737px] xl:w-[720px]"
                  autoPlay={true}
                  playsInline={true}
                  src="https://www.vyvo.com/videos/atom-loop.mp4"
                  loop={true}
                >
                  <source
                    src="https://www.vyvo.com/videos/atom-first2.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            {/* main col 1 */}
            <div
              className="col-span-1"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="">
                <div className="flex text-white justify-between vertical-text-left gap-x-20">
                  <span className="text-xs text-[#979797] leading-[18px]">
                    DATA OWNERS
                  </span>
                  <span className="text-xs leading-[18px]">
                    <span className="mr-6">[</span> VSC&nbsp; NETWORK
                    <span className="text-[#979797] leading-[18px] ml-2">
                      /&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/
                    </span>
                    <span className="ml-6">]</span>
                  </span>
                  <span className="text-xs text-[#979797] leading-[18px]">
                    GATHERING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
