/* eslint-disable no-unused-vars */
import React from "react";

function Section3() {
  return (
    <>
      {/* watch image  */}
      <div className="bg-[url('https://www.vyvo.com/backgrounds/vyvo-watch_grey_01.png')] h-[347px] sm:h-[550px] w-full bg-bottom bg-cover bg-no-repeat flex flex-col justify-end text-xs text-white leading-[25.5px]">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="mx-4 flex flex-col justify-end space-y-3 mb-1">
            <div className="text-xs text-white leading-[25.5px]">VALUES</div>
            <span className="text-white text-[34px] leading-[36px] font-light">
              Verifying health
            </span>
          </div>
        </div>
      </div>

      <div className="mx-4">
        <div className="">
          <div className="grid grid-cols-12">
            <div
              className="col-span-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="col-span-12">
                <span className="text-white text-[34px] leading-[36px] font-light">
                  data integrity{" "}
                  <span className="faded-purple-vertical">
                    through <br />
                  </span>{" "}
                  decentralization.
                </span>
              </div>
            </div>
            <div
              className="col-span-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex items-end justify-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className=""
                  href="https://m.inpersona.com/auth/login"
                >
                  <button className="mb-12 border-faded-pink px-10 py-4 w-full mt-10 flex justify-center items-center hover:border-faded-pink-pressed">
                    <span className="text-white">Start Now</span>
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
            <div
              className="col-span-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex flex-col items-center justify-center">
                <div
                  className="mb-12"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div style={{ opacity: 1, transform: "none" }}>
                    <img
                      alt="ice"
                      loading="lazy"
                      width="320"
                      height="202"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fice.png&amp;w=384&amp;q=100 1x, https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fice.png&amp;w=640&amp;q=100 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fice.png&amp;w=640&amp;q=100"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="text-[#FCFCFC] font-light text-base leading-[22px]">
                  <div style={{ opacity: 1, transform: "none" }}>
                    Merging Proof-of-Stake (PoS) with our own IoT data
                    validation protocol, Proof-of-Sensing (PoSe), we seamlessly
                    bring blockchain technology to real-world applications.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 ">
              <div className="font-light mt-4">
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="border-b-2 border-white/25 hover:text-white text-[#E6E6E6]">
                    <div className="flex items-center my-4">
                      <p className="text-[20px] opacity-40 leading-6">01.</p>
                      <p className="ml-[24px] text-[20px]   opacity-20  leading-[28px] tracking-tight font-light">
                        IoT&nbsp;&nbsp;Devices
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className=" flex flex-col hover:text-white text-[#E6E6E6] justify-center border-b-2 border-white/25">
                    <div className="flex items-center my-4">
                      <p className="text-[20px] false leading-6">02.</p>
                      <p className="ml-[24px] text-[20px]   faded-orange  leading-[28px] tracking-tight font-light">
                        Hybrid Consensus PoS + PoSe
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="flex flex-col hover:text-white text-[#E6E6E6] justify-center border-b-2 border-white/25">
                    <div className="flex items-center my-4">
                      <p className="text-[20px] opacity-40 leading-6">03.</p>
                      <p className="ml-[24px] text-[20px]  opacity-20 leading-[28px] tracking-tight font-light">
                        DDH Platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
