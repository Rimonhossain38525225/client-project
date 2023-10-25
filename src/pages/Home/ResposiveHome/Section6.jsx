/* eslint-disable no-unused-vars */
import React from "react";

function Section6() {
  return (
    <>
      <div className="mx-4 mt-8">
        <div className="grid grid-cols-12 gap-y-8">
          <div className="col-span-12">
            <span className="text-white text-[34px] leading-[36px] font-light">
              Stake <span className="faded-lilac">and</span> become a&nbsp;
              <span className="border-b-[1px] border-[#FFFFFFCC]">
                validator
              </span>
            </span>
          </div>
          <div
            className="col-span-12"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="">
              <div className="flex flex-col">
                <span className="text-[#FCFCFC] font-light leading-[21px] mb-4">
                  BUILD THE FUTURE
                </span>
                <p className="text-[#FCFCFC] font-light leading-[22px] opacity-50">
                  VSC PoSe + PoS is one of the most unique and fastest growing
                  protocols. By staking early, you help bridge health data and
                  Web3.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-span-12"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="col-span-12">
              <div className="flex flex-col">
                <span className="text-[#FCFCFC] font-light leading-[21px] mb-4">
                  STAKE EASILY
                </span>
                <p className="text-[#FCFCFC] font-light leading-[22px] opacity-50">
                  There&apos;s no need to use energy-intensive computers, which
                  lessens the environmental impact. Each node consumes only
                  546.07 kWh per year.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="flex flex-col">
              <div className="" style={{ opacity: 1, transform: "none" }}>
                <span className="text-[#FCFCFC] font-light leading-[21px] mb-4">
                  EARN REWARDS
                </span>
                <p className="text-[#FCFCFC] font-light leading-[22px] opacity-50">
                  25% of the available $VSC rewards is allocated to fun staking
                  rewards. You set your own commission for accepting delegations
                  to your node.
                </p>
              </div>
              <div style={{ opacity: 1, transform: "none" }}>
                <a href="/get-started-validators">
                  <button className="border-faded-pink mt-8 py-4 w-full flex items-center justify-center hover:border-faded-pink-pressed">
                    <span className="text-white">Start Staking</span>
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
        </div>
      </div>
    </>
  );
}

export default Section6;
