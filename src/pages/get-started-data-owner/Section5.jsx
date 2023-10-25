/* eslint-disable no-unused-vars */
import React from "react";
// css
import "./section5.css";
function Section5() {
  return (
    <>
      <div className="data-buyer-bg-3">
        <div className="mx-4 lg:mx-12 lg:py-[100px]">
          <div className="grid grid-cols-12 gap-y-8 lg:gap-x-16 lg:mt-24">
            <div className="col-span-12 lg:col-span-8">
              <span className="text-[#7C7C7C] text-[36px] lg:text-[60xp] 2xl:text-[2rem] lg:mr-40">
                {"//"}
              </span>
              <span className="text-[36px] leading-[36px] lg:text-[60px] lg:leading-[60px] 2xl:text-[90px] 2xl:leading-[92px] font-light text-white">
                <span className="faded-light-blue">How to</span>&nbsp;join VSC
                <br />
                <span className="faded-light-blue">to receive&nbsp;</span>
                Rewards
              </span>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="flex flex-col gap-y-8">
                <div className="flex justify-start lg:justify-center">
                  <img
                    alt="shape"
                    loading="lazy"
                    width="22"
                    height="28"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=48&amp;q=75 2x"
                    src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=48&amp;q=75"
                  />
                </div>
                <span className="faded-purple text-base font-light leading-[22px] indent-8 lg:indent-0">
                  Data Owners on Vyvo Smart Chain can follow these steps to
                  begin receiving rewards
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
            <div className="col-span-11 lg:col-span-12 grid grid-cols-12 lg:mt-40">
              <div className="col-span-1 flex flex-col lg:hidden items-center h-full">
                <span className="h-1 rounded-full bg-green-400 px-1 py-1"></span>
                <span className="h-full w-0.5 rounded-2xl bg-green-400"></span>
              </div>
              <div className="col-span-11 lg:col-span-4 flex flex-col lg:gap-y-4 mb-2 lg:mb-0">
                <div className="flex justify-between items-center lg:px-2">
                  <span className="faded-light-blue text-[24px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-light">
                    VSC-Compatible Wearable Device
                  </span>
                  <img
                    alt="plus"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-[20px]"
                    style={{ color: "transparent" }}
                    srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fplus.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fplus.png&amp;w=48&amp;q=75 2x"
                    src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fplus.png&amp;w=48&amp;q=75"
                  />
                </div>
                <div className="hidden lg:flex h-24 items-center">
                  <span className="h-1 rounded-full bg-green-400 px-1 py-1"></span>
                  <span className="h-0.5 w-full rounded-2xl bg-green-400"></span>
                </div>
                <span className="text-base font-light text-white leading-[22px] lg:pr-4">
                  Data Owners must possess wearable devices that are compatible
                  with Vyvo Smart Chain&apos;s ecosystem and can measure health
                  data.
                </span>
              </div>
              <div className="col-span-1 flex flex-col lg:hidden items-center h-full mb-2 lg:mb-0">
                <span className="h-1 rounded-full bg-green-400 px-1 py-1"></span>
                <span className="h-full w-0.5 rounded-2xl bg-green-400"></span>
              </div>
              <div className="col-span-11 lg:col-span-4 flex flex-col lg:gap-y-4">
                <div className="flex justify-between items-center lg:px-2">
                  <span className="faded-light-blue text-[24px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-light">
                    Data-NFT Binding
                  </span>
                  <img
                    alt="plus"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="h-[20px]"
                    style={{ color: "transparent" }}
                    srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fequals.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fequals.png&amp;w=48&amp;q=75 2x"
                    src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fequals.png&amp;w=48&amp;q=75"
                  />
                </div>
                <div className="hidden lg:flex h-24 items-center">
                  <span className="h-1 rounded-full bg-green-400 px-1 py-1"></span>
                  <span className="h-0.5 w-full rounded-2xl bg-green-400"></span>
                </div>
                <span className="text-base font-light text-white leading-[22px] lg:pr-4">
                  Using a VSC-compatible application (dApp), Data Owners must
                  link their Data-NFT to their wearable device. This anonymously
                  associates the health data generated with the Data-NFT, and
                  alerts the blockchain where to send rewards.
                </span>
              </div>
              <div className="col-span-1 flex flex-col lg:hidden items-center h-full">
                <span className="h-1 rounded-full bg-green-400 px-1 py-1"></span>
                <span className="h-full w-0.5 rounded-2xl  bg-gradient-to-b from-teal-500 via-emerald-900 to-60% to-transparent"></span>
              </div>
              <div className="col-span-11 lg:col-span-4 flex flex-col lg:gap-y-4">
                <span className="faded-light-blue text-[24px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] font-light">
                  Receive
                </span>
                <div className="hidden lg:flex h-24 items-center">
                  <span className="h-1 rounded-full bg-green-400 px-1 py-1"></span>
                  <span className="h-0.5 w-full rounded-2xl  bg-gradient-to-r from-teal-500 via-emerald-900 to-transparent"></span>
                </div>
                <span className="text-base font-light text-white leading-[22px]">
                  Once the user&apos;s device is bound to the Data-NFT via the
                  VSC-compatible dApp and the wearable device has begun
                  measuring health data, the user will start receiving rewards
                  in $VSC.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5;
