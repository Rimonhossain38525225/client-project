/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section5.css";
function Section5() {
  return (
    <>
      <div className="bg-white pb-36 px-4 mt-16">
        <div className="grid grid-cols-12 pt-12 gap-y-8">
          <div className="col-span-12 flex justify-between">
            <span className="text-[#979797] leading-[21px] text-[10px] font-light tracking-wider">
              VYVO ECOSYSTEM
            </span>
            <span className="text-[#979797] leading-[21px] text-[10px] font-light tracking-wider">
              VYVO ECOSYSTEM
            </span>
          </div>
          <div className="col-span-12 text-4xl">
            <span className="text-[#BABABA]">/</span>
            <span className="faded-lilac pl-8">Wearable</span>
          </div>
          <div
            className="col-span-12"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="col-span-12">
              <div className="band-watch-bg p-8 flex flex-col justify-between rounded-xl">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-xs leading-[21px] font-light text-[#FCFCFC]">
                      Encrypt user data
                    </span>
                    <span className="text-xs leading-[21px] font-light text-[#FCFCFC] text-right">
                      Authenticate Health Data
                    </span>
                    <a className="" href="/get-started-vsc#pose">
                      <button className="mt-[5px] border-white border-solid border-[1px] rounded-[55px] px-2 py-1">
                        <span className="text-white text-xs">
                          VSC-PoSe Chip
                        </span>
                      </button>
                    </a>
                  </div>
                  <div>
                    <img
                      alt="circle image"
                      loading="lazy"
                      width="48"
                      height="38"
                      decoding="async"
                      data-nimg="1"
                      className="min-w-[48px]"
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdifferent-circles.png&amp;w=48&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdifferent-circles.png&amp;w=96&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdifferent-circles.png&amp;w=96&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <a href="/business-inquiries">
                  <button className="faded-purple-bg x-10 rounded-[43px] px-10 py-4 flex justify-center items-center text-white hover:text-black">
                    <span className="">Become a Partner</span>
                    <svg
                      width="4"
                      height="8"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-4"
                    >
                      <path
                        d="M1 1L5 5L1 9"
                        stroke="#FCFCFC"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-10">
            <span className="faded-lilac text-4xl">
              <span className="pr-8">/</span> Technology Manufacturers
            </span>
          </div>
          <div className="col-span-12">
            <div className="grid grid-cols-12 lg:gap-x-10">
              <div className="col-span-12">
                <p className="text-base text-black opacity-40 leading-[24px]">
                  01.
                </p>
                <div className="border-t-2 text-white">
                  <div className="flex flex-col items-start gap-y-4 mb-4">
                    <p className="text-[36px] faded-pink leading-[38px] font-light pt-8 pb-4">
                      Differentiate from Competitors
                    </p>
                    <p className="text-[#0D0D0D] font-light leading-[22px]">
                      In the fast-changing space of IoT devices, it&apos;s
                      difficult to stand out. Web3 provides a way to give you an
                      extra advantage against your competitors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <p className="text-base text-black opacity-40 leading-[24px]">
                  02.
                </p>
                <div className="border-t-2 text-white">
                  <div className="flex flex-col items-start gap-y-4 mb-4">
                    <p className="text-[36px] faded-pink leading-[38px] font-light pt-8 pb-4">
                      Leverage Web3 on devices
                    </p>
                    <p className="text-[#0D0D0D] font-light leading-[22px]">
                      With VSC&apos;s infrastructure, almost any IoT device can
                      be bridged to the new decentralised economy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <p className="text-base text-black opacity-40 leading-[24px]">
                  03.
                </p>
                <div className="border-t-2 text-white">
                  <div className="flex flex-col items-start gap-y-4 mb-4 ">
                    <p className="text-[36px] faded-pink leading-[38px] font-light pt-8 pb-4">
                      Benefit your Users
                    </p>
                    <p className="text-[#0D0D0D] font-light leading-[22px]">
                      Our proprietary Proof-of-Sensing (PoSe) Chip encrypts data
                      from device hardware, providing data security for device
                      users and allowing them to monetise their data.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <p className="text-base text-black opacity-40 leading-[24px]">
                  04.
                </p>
                <div className="border-t-2 text-white">
                  <div className="flex flex-col items-start gap-y-4 mb-4 ">
                    <p className="text-[36px] faded-pink leading-[38px] font-light pt-8 pb-4">
                      Streamlining Adoption on VSC
                    </p>
                    <p className="text-[#0D0D0D] font-light leading-[22px]">
                      Quick-start on VSC by importing your incentive program
                      with white-label dApps through VSC developers.
                    </p>
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

export default Section5;
