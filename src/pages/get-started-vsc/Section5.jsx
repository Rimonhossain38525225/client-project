/* eslint-disable no-unused-vars */
import React from "react";

import "./section5.css";
// pdf file
import fdf from "../../assets/pdf/NyotonNYTandNFTWhitePaper.pdf";
function Section5() {
  return (
    <>
      <div id="tokenomics" className="vsc-basics-bg-5">
        <div className="mx-4 lg:mx-12 relative lg:pt-[370px]">
          <div className="grid grid-cols-12 gap-y-4 lg:gap-x-8">
            <div className="col-span-12 lg:col-span-8 mb-10 lg:mb-0">
              <span className="text-[#7C7C7C] text-[36px] lg:text-[2rem] lg:mr-20">
                {"//"}
              </span>
              <span className="text-[36px] leading-[36px] lg:text-[90px] lg:leading-[92px] font-light text-white">
                Our <br />
                <span className="faded-lilac">Tokenomics</span>
              </span>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col gap-y-8">
                <img
                  alt="shape"
                  loading="lazy"
                  width="44"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  className="ml-10 hidden lg:block"
                  style={{ color: "transparent" }}
                  srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=48&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=96&amp;q=75 2x"
                  src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=96&amp;q=75"
                />
                <span className="faded-lilac-alt text-base font-light leading-[22px]">
                  Vyvo Coin is the native coin and the protocol token of the
                  Vyvo Smart Chain. The Vyvo Coin symbol is $VSC.
                </span>
                <div className="flex flex-col xl:flex-row gap-y-4 justify-between">
                  <a href={fdf}>
                    <button className="border-faded-pink py-4 px-8 w-full flex justify-center items-center hover:border-faded-pink-pressed">
                      <span className="text-white">Learn More</span>
                      <span className="sr-only">White Paper PDF</span>
                      <img
                        alt="Arrow right"
                        loading="lazy"
                        width="4"
                        height="8"
                        decoding="async"
                        data-nimg="1"
                        className="ml-4"
                        style={{
                          color: "transparent",
                          objectFit: "contain",
                          objectPosition: "left",
                        }}
                        src="https://www.vyvo.com/shapes/arrow-right.svg"
                      />
                    </button>
                  </a>
                  <a href="https://www.vyvo.org/statistics">
                    <button className="border-faded-pink py-4 px-8 w-full flex justify-center items-center hover:border-faded-pink-pressed">
                      <span className="text-white">Coin info</span>
                      <img
                        alt="Arrow right"
                        loading="lazy"
                        width="4"
                        height="8"
                        decoding="async"
                        data-nimg="1"
                        className="ml-4"
                        style={{
                          color: "transparent",
                          objectFit: "contain",
                          objectPosition: "left",
                        }}
                        src="https://www.vyvo.com/shapes/arrow-right.svg"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 grid grid-cols-12 mt-10 lg:mb-8 lg:mt-14">
              <div className="col-span-12 lg:col-span-7">
                <div className="flex flex-col w-[85%]">
                  <div className="block">
                    <span className="text-white opacity-40 text-[14px] pr-2">
                      High
                    </span>
                    <div className="border-dashed border-l-[1px] border-b-[1px] border-opacity-20 border-white h-[400px] lg:h-[500px] w-full">
                      <div
                        className="recharts-responsive-container"
                        width="656.46875"
                        height="498.875"
                        style={{
                          width: "100%",
                          height: "100%",
                          minWidth: "0px",
                        }}
                      >
                        <div
                          className="recharts-wrapper"
                          role="region"
                          style={{
                            position: "relative",
                            cursor: "default",
                            width: "656px",
                            height: "499px",
                          }}
                        >
                          <svg
                            className="recharts-surface"
                            width="656"
                            height="499"
                            viewBox="0 0 656 499"
                          >
                            <title></title>
                            <desc></desc>
                            <defs>
                              <clipPath id="recharts1-clip">
                                <rect
                                  x="20"
                                  y="10"
                                  height="469"
                                  width="636"
                                ></rect>
                              </clipPath>
                            </defs>
                            <defs>
                              <linearGradient
                                id="supplyColor"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="5%"
                                  stopColor="#7d3bce"
                                  stopOpacity="0.6"
                                ></stop>
                                <stop
                                  offset="90%"
                                  stopColor="#7d3bce"
                                  stopOpacity="0"
                                ></stop>
                              </linearGradient>
                              <linearGradient
                                id="demandColor"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="5%"
                                  stopColor="#555fe2"
                                  stopOpacity="0.6"
                                ></stop>
                                <stop
                                  offset="80%"
                                  stopColor="#555fe2"
                                  stopOpacity="0"
                                ></stop>
                              </linearGradient>
                            </defs>
                            <g className="recharts-layer recharts-area">
                              <g className="recharts-layer">
                                <defs>
                                  <clipPath id="animationClipPath-recharts-area-6">
                                    <rect
                                      x="20"
                                      y="0"
                                      width="636"
                                      height="482"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g
                                  className="recharts-layer"
                                  clipPath="url(#animationClipPath-recharts-area-6)"
                                >
                                  <g className="recharts-layer">
                                    <path
                                      strokeWidth="3"
                                      fill="url(#supplyColor)"
                                      fillOpacity="0.3"
                                      width="636"
                                      height="469"
                                      stroke="none"
                                      className="recharts-curve recharts-area-area"
                                      d="M20,273.813C46.5,273.813,73,273.813,99.5,273.813C126,273.813,152.5,273.813,179,273.813C205.5,273.813,232,279.675,258.5,285.538C285,291.4,311.5,295.308,338,308.987C364.5,322.667,391,343.185,417.5,367.612C444,392.04,470.5,451.642,497,455.55C523.5,459.458,550,461.413,576.5,461.413C603,461.413,629.5,461.413,656,461.413L656,479C629.5,479,603,479,576.5,479C550,479,523.5,479,497,479C470.5,479,444,479,417.5,479C391,479,364.5,479,338,479C311.5,479,285,479,258.5,479C232,479,205.5,479,179,479C152.5,479,126,479,99.5,479C73,479,46.5,479,20,479Z"
                                    ></path>
                                    <path
                                      stroke="#7d3bce"
                                      strokeWidth="3"
                                      fill="none"
                                      fillOpacity="0.3"
                                      width="636"
                                      height="469"
                                      className="recharts-curve recharts-area-curve"
                                      d="M20,273.813C46.5,273.813,73,273.813,99.5,273.813C126,273.813,152.5,273.813,179,273.813C205.5,273.813,232,279.675,258.5,285.538C285,291.4,311.5,295.308,338,308.987C364.5,322.667,391,343.185,417.5,367.612C444,392.04,470.5,451.642,497,455.55C523.5,459.458,550,461.413,576.5,461.413C603,461.413,629.5,461.413,656,461.413"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-layer recharts-area">
                              <g className="recharts-layer">
                                <defs>
                                  <clipPath id="animationClipPath-recharts-area-7">
                                    <rect
                                      x="20"
                                      y="0"
                                      width="636"
                                      height="482"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g
                                  className="recharts-layer"
                                  clipPath="url(#animationClipPath-recharts-area-7)"
                                >
                                  <g className="recharts-layer">
                                    <path
                                      strokeWidth="3"
                                      fill="url(#demandColor)"
                                      fillOpacity="0.3"
                                      width="636"
                                      height="469"
                                      stroke="none"
                                      className="recharts-curve recharts-area-area"
                                      d="M20,350.025C46.5,350.025,73,350.025,99.5,350.025C126,350.025,152.5,346.117,179,338.3C205.5,330.483,232,323.644,258.5,303.125C285,282.606,311.5,239.615,338,215.188C364.5,190.76,391,174.15,417.5,156.563C444,138.975,470.5,121.388,497,109.663C523.5,97.938,550,93.052,576.5,86.212C603,79.373,629.5,73.999,656,68.625L656,479C629.5,479,603,479,576.5,479C550,479,523.5,479,497,479C470.5,479,444,479,417.5,479C391,479,364.5,479,338,479C311.5,479,285,479,258.5,479C232,479,205.5,479,179,479C152.5,479,126,479,99.5,479C73,479,46.5,479,20,479Z"
                                    ></path>
                                    <path
                                      stroke="#555fe2"
                                      strokeWidth="3"
                                      fill="none"
                                      fillOpacity="0.3"
                                      width="636"
                                      height="469"
                                      className="recharts-curve recharts-area-curve"
                                      d="M20,350.025C46.5,350.025,73,350.025,99.5,350.025C126,350.025,152.5,346.117,179,338.3C205.5,330.483,232,323.644,258.5,303.125C285,282.606,311.5,239.615,338,215.188C364.5,190.76,391,174.15,417.5,156.563C444,138.975,470.5,121.388,497,109.663C523.5,97.938,550,93.052,576.5,86.212C603,79.373,629.5,73.999,656,68.625"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-layer recharts-area">
                              <g className="recharts-layer">
                                <defs>
                                  <clipPath id="animationClipPath-recharts-area-8">
                                    <rect
                                      x="20"
                                      y="0"
                                      width="636"
                                      height="480"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g
                                  className="recharts-layer"
                                  clipPath="url(#animationClipPath-recharts-area-8)"
                                >
                                  <g className="recharts-layer">
                                    <path
                                      fill="#7d3bce"
                                      fillOpacity="0"
                                      width="636"
                                      height="469"
                                      stroke="none"
                                      className="recharts-curve recharts-area-area"
                                      d="M20,273.813C46.5,273.813,73,273.813,99.5,273.813C126,273.813,152.5,273.813,179,273.813C205.5,273.813,232,279.675,258.5,285.538C285,291.4,311.5,295.308,338,308.987C364.5,322.667,391,343.185,417.5,367.612C444,392.04,470.5,451.642,497,455.55C523.5,459.458,550,461.413,576.5,461.413C603,461.413,629.5,461.413,656,461.413L656,479C629.5,479,603,479,576.5,479C550,479,523.5,479,497,479C470.5,479,444,479,417.5,479C391,479,364.5,479,338,479C311.5,479,285,479,258.5,479C232,479,205.5,479,179,479C152.5,479,126,479,99.5,479C73,479,46.5,479,20,479Z"
                                    ></path>
                                    <path
                                      stroke="#7d3bce"
                                      fill="none"
                                      fillOpacity="0"
                                      width="636"
                                      height="469"
                                      className="recharts-curve recharts-area-curve"
                                      d="M20,273.813C46.5,273.813,73,273.813,99.5,273.813C126,273.813,152.5,273.813,179,273.813C205.5,273.813,232,279.675,258.5,285.538C285,291.4,311.5,295.308,338,308.987C364.5,322.667,391,343.185,417.5,367.612C444,392.04,470.5,451.642,497,455.55C523.5,459.458,550,461.413,576.5,461.413C603,461.413,629.5,461.413,656,461.413"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-layer recharts-area">
                              <g className="recharts-layer">
                                <defs>
                                  <clipPath id="animationClipPath-recharts-area-9">
                                    <rect
                                      x="20"
                                      y="0"
                                      width="636"
                                      height="480"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g
                                  className="recharts-layer"
                                  clipPath="url(#animationClipPath-recharts-area-9)"
                                >
                                  <g className="recharts-layer">
                                    <path
                                      fill="#555fe2"
                                      fillOpacity="0"
                                      width="636"
                                      height="469"
                                      stroke="none"
                                      className="recharts-curve recharts-area-area"
                                      d="M20,350.025C46.5,350.025,73,350.025,99.5,350.025C126,350.025,152.5,346.117,179,338.3C205.5,330.483,232,323.644,258.5,303.125C285,282.606,311.5,239.615,338,215.188C364.5,190.76,391,174.15,417.5,156.563C444,138.975,470.5,121.388,497,109.663C523.5,97.938,550,93.052,576.5,86.212C603,79.373,629.5,73.999,656,68.625L656,479C629.5,479,603,479,576.5,479C550,479,523.5,479,497,479C470.5,479,444,479,417.5,479C391,479,364.5,479,338,479C311.5,479,285,479,258.5,479C232,479,205.5,479,179,479C152.5,479,126,479,99.5,479C73,479,46.5,479,20,479Z"
                                    ></path>
                                    <path
                                      stroke="#555fe2"
                                      fill="none"
                                      fillOpacity="0"
                                      width="636"
                                      height="469"
                                      className="recharts-curve recharts-area-curve"
                                      d="M20,350.025C46.5,350.025,73,350.025,99.5,350.025C126,350.025,152.5,346.117,179,338.3C205.5,330.483,232,323.644,258.5,303.125C285,282.606,311.5,239.615,338,215.188C364.5,190.76,391,174.15,417.5,156.563C444,138.975,470.5,121.388,497,109.663C523.5,97.938,550,93.052,576.5,86.212C603,79.373,629.5,73.999,656,68.625"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-white opacity-40 text-[14px] pr-2">
                      Low
                    </span>
                    <span className="text-white opacity-40 text-[14px] pr-2 text-right">
                      Time
                    </span>
                  </div>
                  <div className="flex gap-x-2 ml-12">
                    <div className="flex items-center gap-x-2">
                      <span className="rounded-full bg-[#555fe2] w-[13px] h-[13px]"></span>
                      <span className="text-white opacity-70 font-light">
                        Demand
                      </span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <span className="rounded-full bg-[#7d3bce] px-2 py-2"></span>
                      <span className="text-white opacity-70 font-light">
                        Supply
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 mt-8 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
                <span className="flex flex-col gap-y-8 lg:h-3/5">
                  <div className="flex flex-col">
                    <img
                      alt="nft"
                      loading="lazy"
                      width="35"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=48&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=96&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=96&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    <span className="text-[#DFDFDF] font-light text-[20px] lg:text-[24px] mt-12 indent-4 lg:indent-8">
                      Deflationary Measures
                      <ul>
                        <li className="opacity-30">- Burn/Mint </li>
                        <li className="opacity-30">
                          - Four Year Halving Schedule
                        </li>
                      </ul>
                    </span>
                    <span className="faded-lilac mt-8">$VSC Supply</span>
                  </div>
                  <div className="mt-10 lg:mt-0">
                    <div className="border-t-[1px] border-[#FFFFFF40]"></div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-6 flex flex-col">
                        <span className="faded-purple-to-orange-alt text-[30px] md:text-[36px] 2xl:text-[56px] font-light">
                          $ 10.0B
                        </span>
                        <span className="text-base font-light text-[#FCFCFC] opacity-50">
                          The initial supply of $VSC
                        </span>
                      </div>
                      <div className="col-span-6 flex flex-col">
                        <span className="faded-purple-to-orange-alt text-[30px] md:text-[36px] 2xl:text-[56px] font-light">
                          $ 20.014B
                        </span>
                        <span className="text-base font-light text-[#FCFCFC] opacity-50">
                          The total supply being capped
                        </span>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className="col-span-12 huge-dots-left-bottom mt-20 lg:mt-40 2xl:mt-60">
              <div className="mx-4 lg:mx-12">
                <div className="grid grid-cols-12 lg:gap-x-16 relative">
                  <div className="col-span-12 lg:col-span-5 mb-10 flex flex-col items-center justify-center lg:gap-y-10">
                    <span>
                      <span className="text-[#7C7C7C] text-[30px] md:text-[36px] 2xl:text-[2rem] lg:mr-20">
                        {"//"}
                      </span>
                      <span className="text-[30px] md:text-[36px] md:leading-[36px] lg:text-[50px] lg:leading-[50px] 2xl:text-[85px] 2xl:leading-[90px] font-light text-white">
                        Coin
                        <br className="hidden lg:block" />
                        &nbsp;Distribution
                      </span>
                    </span>
                    <span className="text-[16px] lg:text-[24px] font-light text-[#AFAFAF] indent-8 lg:indent-0">
                      Distribution for development of the Vyvo Smart Chain
                      Ecosystem.
                    </span>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <div className="resizable-orbital-lines flex justify-center lg:block">
                      <img
                        alt="pie chart"
                        loading="lazy"
                        width="700"
                        height="700"
                        decoding="async"
                        data-nimg="1"
                        className=""
                        style={{ color: "transparent" }}
                        src="https://www.vyvo.com/backgrounds/vsc_web_piechart_v2.svg"
                      />
                    </div>
                  </div>
                  <div className="hidden lg:block lg:col-span-1 lg:col-start-12 left-[100%]">
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
            <div className="col-span-12 lg:col-span-8 flex flex-col lg:mb-8 lg:mt-14 ">
              <div className="w-full mb-14">
                <span className="text-[#7C7C7C] text-[30px] md:text-[36px] 2xl:text-[2rem] lg:mr-20">
                  {"//"}
                </span>
                <span className="text-[#DFDFDF] font-light text-[30px] md:text-[36px] md:leading-[36px] lg:text-[50px] lg:leading-[50px] 2xl:text-[85px] 2xl:leading-[90px] mt-10 mb-4 lg:mt-20">
                  Vesting Schedule
                </span>
              </div>
              <img
                alt="chart"
                loading="lazy"
                width="960"
                height="474"
                decoding="async"
                data-nimg="1"
                className=""
                style={{ color: "transparent" }}
                src="https://www.vyvo.com/backgrounds/chart-new-label.svg"
              />
              <span className="text-[20px] text-[#DFDFDF] leading-[20px] mt-8">
                Time in Months
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5;
