/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section1.css";
function Section1() {
  return (
    <>
      <div
        id="vsc-foundation"
        className="validators-bg lg:h-[640px] pt-[140px] lg:pt-0"
      >
        <div className="mx-4 lg:mx-12">
          <div className="grid grid-cols-12 lg:gap-x-16 gap-y-4 lg:relative lg:top-[280px]">
            <div className="col-span-12 lg:col-span-11 lg:mb-10">
              <span className="text-[#7C7C7C] text-[36px] lg:text-[2rem] lg:mr-20">
                {"//"}
              </span>
              <span className="text-[36px] leading-[36px] lg:text-[90px] lg:leading-[92px] font-light text-white">
                <span className="faded-pink-to-orange">Secure the</span>
                <br />
                Network Earn $VSC
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
            <div className="hidden lg:block lg:col-span-1">
              <img
                alt="nft"
                loading="lazy"
                width="37"
                height="38"
                decoding="async"
                data-nimg="1"
                className=""
                srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-square.png&amp;w=48&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-square.png&amp;w=96&amp;q=75 2x"
                src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-square.png&amp;w=96&amp;q=75"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="col-span-12 lg:hidden ml-8">
              <img
                alt="nft"
                loading="lazy"
                width="17"
                height="18"
                decoding="async"
                data-nimg="1"
                className=""
                srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-square.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-square.png&amp;w=48&amp;q=75 2x"
                src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-square.png&amp;w=48&amp;q=75"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <span className="text-white text-base font-light leading-[22px] ">
                <span className="faded-pink-to-orange ml-8">Validators</span>{" "}
                and <span className="faded-pink-to-orange">Delegators</span> are
                the foundation of the VSC Network. By processing transactions,
                each validator helps make Vyvo Smart Chain the first
                decentralised health data platform in the world.
              </span>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-6 h-full">
              <span className="faded-lilac-alt text-base font-light leading-[22px]">
                We aim to build the world`s first decentralised health data
                platform where users are the sole owners of their data and its
                value.
              </span>
              <div className="">
                <a className="flex justify-start" href="#">
                  <button
                    type="submit"
                    className="border-faded-tangerine border-faded-tangerine-hover text-base font-light leading-[22px] text-[#FCFCFC] px-8 py-4 lg:w-3/5 w-full flex justify-center items-center"
                  >
                    Start Staking
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
              <div className="flex justify-center lg:hidden">
                <img
                  alt="image"
                  loading="lazy"
                  width="640"
                  height="312"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  srcSet="https://www.vyvo.comhttps://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fvalidators-first-bg.png&amp;w=640&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fvalidators-first-bg.png&amp;w=1920&amp;q=75 2x"
                  src="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fvalidators-first-bg.png&amp;w=1920&amp;q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div className="h-0.5  bg-white/25 rounded-sm w-full col-span-12 lg:mt-16"></div>
            <div className="col-span-6 lg:col-span-4">
              <p className="text-[#979797] font-light leading-[18px] mt-3 text-xs">
                PROOF-OF-SENSING
              </p>
            </div>
            <div className="hidden lg:block col-span-5">
              <p className="text-[#979797] font-light leading-[18px] mt-3 text-xs">
                VSC
              </p>
            </div>
            <div className="col-span-6 lg:col-span-3">
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
