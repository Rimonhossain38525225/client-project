/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import "./section6.css";
function Section6() {
  return (
    <>
      <div id="mobile-timeline" className="mx-4 lg:mx-12 mt-10 lg:mt-0">
        <div className="grid grid-cols-12">
          <div className="hidden lg:col-span-3 lg:flex flex-col justify-center">
            <span className="text-[12px] font-light text-[#979797]">
              OUR
              <br /> ROADMAP
            </span>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <span className="flex flex-col items-center text-[40px] lg:text-[60px] 2xl:text-[90px] 2xl:leading-[92px] text-white">
              Our <br />
              <span className="faded-lilac-alt">[ &nbsp; Roadmap &nbsp; ]</span>
            </span>
          </div>
          <div className="hidden lg:col-span-3 lg:flex flex-col justify-center items-end">
            <span className="text-[12px] font-light text-[#979797] text-right">
              OUR
              <br /> ROADMAP
            </span>
          </div>
          <div className="col-span-12 lg:hidden my-10">
            <div className="grid grid-cols-12 gap-y-4">
              <div className="col-span-1 flex flex-col items-center">
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
                <span className="h-full w-0.5 rounded-2xl bg-[#626CFF]"></span>
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
              </div>
              <div className="col-span-11">
                <div className="flex flex-col gap-y-4 ">
                  <span className="text-white text-[14px]">01</span>
                  <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-20%">
                    2022
                  </span>
                  <ul className=" ml-4 mb-10">
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Deployment of the Vyvo Smart Chain.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Whitepaper 1.0 published.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Genesis block minted and first issuance of $VSC.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Installation of 21 validation nodes.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
                <span className="h-full w-0.5 rounded-2xl bg-[#626CFF]"></span>
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
              </div>
              <div className="col-span-11">
                <div className="flex flex-col gap-y-4 ">
                  <span className="text-white text-[14px]">02</span>
                  <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-45% sm:to-35% md:to-20%">
                    Q1-2023
                  </span>
                  <ul className="  ml-4 mb-10">
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Initial Distribution of $VSC
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Onboarding of the first Layer 2 dApp, inPersona.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ 500,000 existing Members with connected devices enabled.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ $VSC Private Sale - Exclusive to Community
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Initializazion of Proof-of-Sensing validation protocol.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Fintech partnership adds first On-ramp solution to VSC
                      Ecosystem
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
                <span className="h-full w-0.5 rounded-2xl bg-[#626CFF]"></span>
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
              </div>
              <div className="col-span-11">
                <div className="flex gap-y-4 flex-col">
                  <span className="text-white text-[14px]">03</span>
                  <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]  to-45% sm:to-35% md:to-20%">
                    Q2-2023
                  </span>
                  <ul className=" ml-4 mb-10">
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ $VSC Burn Mechanism Initialization
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ $VSC Mining Rewards
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ $VSC redemption at fixed price
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
                <span className="h-full w-0.5 rounded-2xl bg-[#626CFF]"></span>
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
              </div>
              <div className="col-span-11">
                <div className="flex gap-y-4 flex-col">
                  <span className="text-white text-[14px]">04</span>
                  <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-45% sm:to-35% md:to-20%">
                    Q3-2023
                  </span>
                  <ul className=" ml-4 mb-10">
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Staking capability available for users
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ List of 300+ devices compatible with VSC.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Exchange Listing Application begins.&nbsp;
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Opportunity for community members to become PoS + PoSe
                      Delegators.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Open Validation Nodes to Community.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      ✓ Expected Public Listing.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
                <span className="h-full w-0.5 rounded-2xl bg-[#626CFF]"></span>
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
              </div>
              <div className="col-span-11">
                <div className="flex gap-y-4 flex-col">
                  <span className="text-white text-[14px]">05</span>
                  <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-45% sm:to-35% md:to-20%">
                    Q4-2023
                  </span>
                  <ul className=" list-disc ml-4 mb-10">
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      Expected Milestone: scaling of the user base to 1,000,000
                      users.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      Expected Milestone: 200 Nodes migrating to Mainnet.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      Adding a level of support for Fitbit, Apple Watch, Garmin
                      and 300+ others into the network.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
                <span className="h-full w-0.5 rounded-2xl bg-[#626CFF]"></span>
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
              </div>
              <div className="col-span-11">
                <div className="flex gap-y-4 flex-col">
                  <span className="text-white text-[14px]">06</span>
                  <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-45% sm:to-35% md:to-20%">
                    Q2-2024
                  </span>
                  <ul className="list-disc ml-4 mb-10">
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      DDH Platform Initialization.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      Transactions on the DDH start.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      API &amp; SDK Open Data Stream Deployment.
                    </li>
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      Institutional DDH Onboarding&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
                <span className="h-full w-0.5 rounded-2xl bg-[#626CFF]"></span>
                <span className="h-1 rounded-full bg-[#626CFF] px-1 py-1"></span>
              </div>
              <div className="col-span-11">
                <div className="flex gap-y-4 flex-col">
                  <span className="text-white text-[14px]">07</span>
                  <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-45% sm:to-35% md:to-20%">
                    Q4-2024
                  </span>
                  <ul className="list-disc ml-4 mb-10">
                    <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                      Open Data Stream capability for Data Buyers with the
                      deployment of API and SDK to pull data from the DDH
                      Platform.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:col-span-12 lg:flex lg:justify-center">
            <div className="grid grid-cols-3 my-20">
              <div className="col-span-1 flex flex-col gap-y-40 mt-32">
                <div
                  className="mb-16"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="">
                    <div className="flex flex-col items-end gap-y-4 ml-4">
                      <span className="text-white text-[14px]">02</span>
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-45% sm:to-35% md:to-20%">
                        Q1-2023
                      </span>
                      <ul dir="rtl" className=" mb-10 pr-4">
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            Initial Distribution of $VSC ✓
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr", unicodeBidi: "embed" }}>
                            Onboarding of the first Layer 2 dApp, inPersona.✓
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            500,000 existing Members with connected devices
                            enabled.✓
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            $VSC Private Sale - Exclusive to Community ✓
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            Initializazion of Proof-of-Sensing validation
                            protocol. ✓
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            Fintech partnership adds first On-ramp solution to
                            VSC Ecosystem ✓
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-16"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="">
                    <div className="flex gap-y-4 flex-col items-end">
                      <span className="text-white text-[14px]">04</span>
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-45% sm:to-35% md:to-20%">
                        Q3-2023
                      </span>
                      <ul dir="rtl" className=" mb-10 pr-4 text-rig ">
                        <li className=" text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            Staking capability available for users ✓
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            List of 300+ devices compatible with VSC.✓
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            Exchange Listing Application begins.&nbsp; ✓
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p sstyle={{ direction: "ltr" }}>
                            Opportunity for community members to become PoS +
                            PoSe Delegators. ✓
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            Open Validation Nodes to Community. ✓
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            Expected Public Listing. ✓
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-16"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="">
                    <div className="flex gap-y-4 flex-col items-end">
                      <span className="text-white text-[14px]">06</span>
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-45% sm:to-35% md:to-20%">
                        Q2-2024
                      </span>
                      <ul dir="rtl" className="list-disc mb-10 pr-4">
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            DDH Platform Initialization.
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            Transactions on the DDH start.
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            API &amp; SDK Open Data Stream Deployment.
                          </p>
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          <p style={{ direction: "ltr" }}>
                            Institutional DDH Onboarding.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="relative ">
                  <div style={{ height: "1500px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 300 1900"
                      width="300"
                      height="1900"
                      preserveAspectRatio="xMidYMid meet"
                      style={{
                        width: "100%",
                        height: "100%",
                        transform: "translate3d(0px, 0px, 0px)",
                        contentVisibility: "visible",
                      }}
                    >
                      <defs>
                        <clipPath id="__lottie_element_2">
                          <rect width="300" height="1900" x="0" y="0"></rect>
                        </clipPath>
                        <g id="__lottie_element_3">
                          <g
                            transform="matrix(-0.017688896507024765,2.77667236328125,-0.9999797344207764,-0.006370408460497856,-1151.660400390625,995.3905029296875)"
                            opacity="1"
                            style={{ display: "block" }}
                          >
                            <g
                              opacity="1"
                              transform="matrix(1,0,0,1,-71.1719970703125,-1274.991943359375)"
                            >
                              <path
                                fill="rgb(255,0,0)"
                                fillOpacity="1"
                                d=" M352.8280029296875,-323.00799560546875 C352.8280029296875,-323.00799560546875 -352.8280029296875,-323.00799560546875 -352.8280029296875,-323.00799560546875 C-352.8280029296875,-323.00799560546875 -352.8280029296875,323.00799560546875 -352.8280029296875,323.00799560546875 C-352.8280029296875,323.00799560546875 352.8280029296875,323.00799560546875 352.8280029296875,323.00799560546875 C352.8280029296875,323.00799560546875 352.8280029296875,-323.00799560546875 352.8280029296875,-323.00799560546875z"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <linearGradient
                          id="__lottie_element_9"
                          spreadMethod="pad"
                          gradientUnits="userSpaceOnUse"
                          x1="110.01399993896484"
                          y1="-1636.2879638671875"
                          x2="118.15499877929688"
                          y2="1647.677978515625"
                        >
                          <stop offset="0%" stopColor="rgb(0,0,0)"></stop>
                          <stop offset="4%" stopColor="rgb(114,81,32)"></stop>
                          <stop offset="8%" stopColor="rgb(228,163,65)"></stop>
                          <stop offset="51%" stopColor="rgb(189,81,157)"></stop>
                          <stop offset="94%" stopColor="rgb(150,0,249)"></stop>
                          <stop offset="97%" stopColor="rgb(75,0,124)"></stop>
                          <stop offset="100%" stopColor="rgb(0,0,0)"></stop>
                        </linearGradient>
                        <mask id="__lottie_element_3_1" mask-type="alpha">
                          <use xlinkHref="#__lottie_element_3"></use>
                        </mask>
                        <g id="__lottie_element_10">
                          <g
                            transform="matrix(-0.0175361055880785,2.752688407897949,-0.9999797344207764,-0.006370408460497856,-1151.6002197265625,985.9451904296875)"
                            opacity="1"
                            style={{ display: "block" }}
                          >
                            <g
                              opacity="1"
                              transform="matrix(1,0,0,1,-71.1719970703125,-1274.991943359375)"
                            >
                              <path
                                fill="rgb(255,0,0)"
                                fillOpacity="1"
                                d=" M352.8280029296875,-323.00799560546875 C352.8280029296875,-323.00799560546875 -352.8280029296875,-323.00799560546875 -352.8280029296875,-323.00799560546875 C-352.8280029296875,-323.00799560546875 -352.8280029296875,323.00799560546875 -352.8280029296875,323.00799560546875 C-352.8280029296875,323.00799560546875 352.8280029296875,323.00799560546875 352.8280029296875,323.00799560546875 C352.8280029296875,323.00799560546875 352.8280029296875,-323.00799560546875 352.8280029296875,-323.00799560546875z"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <linearGradient
                          id="__lottie_element_16"
                          spreadMethod="pad"
                          gradientUnits="userSpaceOnUse"
                          x1="28.266000747680664"
                          y1="951.4769897460938"
                          x2="4.031000137329102"
                          y2="-949.4840087890625"
                        >
                          <stop offset="0%" stopColor="rgb(0,0,0)"></stop>
                          <stop
                            offset="16%"
                            stopColor="rgb(128,128,128)"
                          ></stop>
                          <stop
                            offset="32%"
                            stopColor="rgb(255,255,255)"
                          ></stop>
                          <stop
                            offset="50%"
                            stopColor="rgb(255,255,255)"
                          ></stop>
                          <stop
                            offset="69%"
                            stopColor="rgb(255,255,255)"
                          ></stop>
                          <stop
                            offset="85%"
                            stopColor="rgb(128,128,128)"
                          ></stop>
                          <stop offset="100%" stopColor="rgb(0,0,0)"></stop>
                        </linearGradient>
                        <mask id="__lottie_element_10_1" mask-type="alpha">
                          <use xlinkHref="#__lottie_element_10"></use>
                        </mask>
                        <g id="__lottie_element_17">
                          <g
                            transform="matrix(-0.01761835627257824,2.765599489212036,-0.9999797344207764,-0.006370408460497856,-1151.632568359375,991.02978515625)"
                            opacity="1"
                            style={{ display: "block" }}
                          >
                            <g
                              opacity="1"
                              transform="matrix(1,0,0,1,-71.1719970703125,-1274.991943359375)"
                            >
                              <path
                                fill="rgb(255,0,0)"
                                fillOpacity="1"
                                d=" M352.8280029296875,-323.00799560546875 C352.8280029296875,-323.00799560546875 -352.8280029296875,-323.00799560546875 -352.8280029296875,-323.00799560546875 C-352.8280029296875,-323.00799560546875 -352.8280029296875,323.00799560546875 -352.8280029296875,323.00799560546875 C-352.8280029296875,323.00799560546875 352.8280029296875,323.00799560546875 352.8280029296875,323.00799560546875 C352.8280029296875,323.00799560546875 352.8280029296875,-323.00799560546875 352.8280029296875,-323.00799560546875z"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <linearGradient
                          id="__lottie_element_23"
                          spreadMethod="pad"
                          gradientUnits="userSpaceOnUse"
                          x1="28.266000747680664"
                          y1="951.4769897460938"
                          x2="4.031000137329102"
                          y2="-949.4840087890625"
                        >
                          <stop offset="0%" stopColor="rgb(0,0,0)"></stop>
                          <stop
                            offset="16%"
                            stopColor="rgb(128,128,128)"
                          ></stop>
                          <stop
                            offset="32%"
                            stopColor="rgb(255,255,255)"
                          ></stop>
                          <stop
                            offset="50%"
                            stopColor="rgb(255,255,255)"
                          ></stop>
                          <stop
                            offset="69%"
                            stopColor="rgb(255,255,255)"
                          ></stop>
                          <stop
                            offset="85%"
                            stopColor="rgb(128,128,128)"
                          ></stop>
                          <stop offset="100%" stopColor="rgb(0,0,0)"></stop>
                        </linearGradient>
                        <mask id="__lottie_element_17_1" maskType="alpha">
                          <use xlinkHref="#__lottie_element_17"></use>
                        </mask>
                      </defs>
                      <g clipPath="url(#__lottie_element_2)">
                        <g
                          mask="url(#__lottie_element_17_1)"
                          style={{ display: "block" }}
                        >
                          <g transform="matrix(1,0,0,1,150,950)" opacity="0.15">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path
                                stroke="url(#__lottie_element_23)"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="5"
                                d=" M-20,-940 C-20,-940 77.30699920654297,-895.8359985351562 80,-776 C84,-598 -43.435001373291016,-615.9520263671875 -70,-430 C-92,-276 72,-212 104,-16 C129.81300354003906,142.10699462890625 82,242 40,310 C-20.054000854492188,407.22900390625 -60.54399871826172,442.0329895019531 -90,498 C-130,574 -139.22900390625,657.3259887695312 -104,734 C-70,808 18,804 34,858 C51.279998779296875,916.322021484375 3.5,948.5 3.5,948.5"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g
                          mask="url(#__lottie_element_10_1)"
                          style={{ display: "block" }}
                        >
                          <g transform="matrix(1,0,0,1,150,950)" opacity="0.25">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path
                                stroke="url(#__lottie_element_16)"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="5"
                                d=" M-20,-940 C-20,-940 -48,-902 4,-794 C56,-686 118,-622 64,-490 C10,-358 -86,-272 -78,-112 C-70,48 46,160 86,256 C126,352 98,438 70,496 C42,554 -60,644 -68,728 C-76,812 -12,866 2,906 C16,946 9.5,948.5 9.5,948.5"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g
                          mask="url(#__lottie_element_3_1)"
                          style={{ display: "block" }}
                        >
                          <g
                            transform="matrix(0.41429001092910767,0,0,0.5826699733734131,108,950)"
                            opacity="1"
                          >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path
                                stroke="url(#__lottie_element_9)"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="10"
                                d=" M41.189998626708984,-1637.301025390625 C41.189998626708984,-1637.301025390625 37.757999420166016,-1572.0830078125 76.99099731445312,-1543.885009765625 C159.2899932861328,-1484.7330322265625 450.0740051269531,-1512.0069580078125 451.37298583984375,-1387.5849609375 C453.7829895019531,-1156.7509765625 -229.30499267578125,-1259.7259521484375 -232.22999572753906,-1028.8900146484375 C-235.24200439453125,-791.2080078125 441.7139892578125,-837.5289916992188 437.64300537109375,-608.4110107421875 C433.4779968261719,-374.0429992675781 -243.70700073242188,-501.1449890136719 -235.98399353027344,-233.41099548339844 C-229.1510009765625,3.4600000381469727 441.7149963378906,-102.9749984741211 441.2409973144531,99.54399871826172 C440.6400146484375,356.1210021972656 -243.78799438476562,217.96400451660156 -232.39100646972656,453.94500732421875 C-222.0399932861328,668.2550048828125 437.6619873046875,562.9039916992188 440.2179870605469,793.7659912109375 C442.7919921875,1026.3160400390625 -15.98900032043457,1093.2530517578125 -14.23900032043457,1253.7230224609375 C-13.274999618530273,1342.10595703125 69.3499984741211,1360.469970703125 107.29299926757812,1393.592041015625 C154.47900390625,1434.782958984375 155.32000732421875,1507.987060546875 155.32000732421875,1538.616943359375 C155.32000732421875,1573.7989501953125 154.46200561523438,1627.0030517578125 154.46200561523438,1627.0030517578125"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex flex-col gap-y-40 col-start-3">
                <div
                  className="mb-16"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="">
                    <div className="flex flex-col gap-y-4 ml-4">
                      <span className="text-white text-[14px]">01</span>
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-20%">
                        2022
                      </span>
                      <ul className=" ml-4 mb-10">
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          ✓ Deployment of the Vyvo Smart Chain.
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          ✓ Whitepaper 1.0 published.
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          ✓ Genesis block minted and first issuance of $VSC.
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          ✓ Installation of 21 validation nodes.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-16"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="">
                    <div className="flex gap-y-4 flex-col">
                      <span className="text-white text-[14px]">03</span>
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542]  to-45% sm:to-35% md:to-20%">
                        Q2-2023
                      </span>
                      <ul className="ml-4 mb-10">
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          ✓ $VSC Burn Mechanism Initialization
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          ✓ $VSC Mining Rewards
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          ✓ $VSC redemption at fixed price
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-16"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="">
                    <div className="flex gap-y-4 flex-col">
                      <span className="text-white text-[14px]">05</span>
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-45% sm:to-35% md:to-20%">
                        Q4-2023
                      </span>
                      <ul className="list-disc ml-4 mb-10">
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          Expected Milestone: scaling of the user base to
                          1,000,000 users.
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          Expected Milestone: 200 Nodes migrating to Mainnet.
                        </li>
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          Adding a level of support for Fitbit, Apple Watch,
                          Garmin and 300+ others into the network.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="mb-16"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="">
                    <div className="flex gap-y-4 flex-col">
                      <span className="text-white text-[14px]">07</span>
                      <span className="text-[36px] leading-[44px] font-normal bg-gradient-to-r text-transparent bg-clip-text from-[#8D42E7] via-[#E7429B] to-[#E7A542] to-45% sm:to-35% md:to-20%">
                        Q4-2024
                      </span>
                      <ul className="list-disc ml-4 mb-10">
                        <li className="text-[14px] text-[#7C7C7C] font-light opacity-80">
                          Open Data Stream capability for Data Buyers with the
                          deployment of API and SDK to pull data from the DDH
                          Platform.
                        </li>
                      </ul>
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

export default Section6;
