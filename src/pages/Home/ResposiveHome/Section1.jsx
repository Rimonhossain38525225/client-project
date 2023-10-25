/* eslint-disable no-unused-vars */
import React from "react";

// video
import worldStart1Video from "../../.././assets/videos/world-start1.mp4";
import worldLoop1Video from "../../.././assets/videos/world-loop1.mp4";
function Section1() {
  return (
    <>
      <div className="mx-4">
        <div className="grid grid-cols-12 gap-y-12">
          <div
            className="col-span-12 text-white
       leading-tight overflow-hidden text-[40px] sm:text-[80px] pt-20"
          >
            <div className="relative">
              The{" "}
              <div className="animation bg-black">
                <div className="animation-window">
                  <ul className="">
                    <li className="absolute word-item  prev faded-green ">
                      Value
                    </li>
                    <li className="absolute word-item active faded-light-blue  ">
                      Ownership
                    </li>
                    <li className="absolute word-item  ">Verification</li>
                    <li className="absolute word-item  ">Potential</li>
                    <li className="absolute word-item  ">Security</li>
                    <li className="absolute word-item  ">Validation</li>
                  </ul>
                </div>
              </div>
            </div>
            &nbsp;&nbsp;of<span className="faded-purple"> Data</span>
          </div>
        </div>
        <div className="col-span-12 mt-6">
          <div className="flex flex-col gap-y-4 align-bottom ">
            <img
              alt="circle image"
              loading="lazy"
              width="28"
              height="28"
              decoding="async"
              data-nimg="1"
              className="lg:ml-8"
              srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle.png&amp;w=64&amp;q=75 2x"
              src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle.png&amp;w=64&amp;q=75"
              style={{ color: "transparent" }}
            />
            <span>
              <span className="text-white text-right line-clamp-1 l">
                Revolutionizing health data management
              </span>
              <span className="text-white">
                through blockchain technology. Vyvo Smart Chain offers a secure
                and transparent platform that directly connects users and
                researchers.
              </span>
            </span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-between mt-8">
          <a href="#quick-start-mobile">
            <button className="border-faded-purple px-6 py-4 flex items-center hover:border-faded-purple-pressed">
              <span className="text-white font-light">Start mining</span>
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
        <div className="absolute">
          <video
            className="videoTag w-full"
            src={worldLoop1Video}
            autoPlay={true}
            playsInline={true}
            loop={true}
          >
            <source src={worldStart1Video} type="video/mp4" />
          </video>
        </div>
        <div className="grid grid-cols-12 relative mt-[50%] circle-bg bg-contain">
          <div className="h-0.5  bg-white/25 rounded-sm  w-full col-span-12"></div>
          <div className="col-span-6">
            <p className="text-[#979797] font-light text-[10px] mt-3">
              BUILD DATA-DRIVEN SOLUTIONS
            </p>
          </div>
          <div className="col-span-6">
            <p className="text-[#979797] font-light text-[10px] mt-3 text-right">
              VYVO SMART CHAIN
            </p>
          </div>
          <div className="col-span-12 mt-[60px] grid grid-cols-12 text-white z-[9000]">
            <div
              className="col-span-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="col-span-12 mb-12">
                <p className="text-[24px] leading-[30px] mb-2 font-light">
                  Vyvo Smart Chain is the first&nbsp;
                  <span className="faded-lilac font-light">
                    heartbeat-powered blockchain
                  </span>
                  .
                </p>
                <p className="text-[24px] text-[#FCFCFC] leading-[30px] opacity-60 font-light">
                  Designed to provide users with access to rewards
                  <span className="faded-lilac">&nbsp;from the data&nbsp;</span>
                  they generate through wearable device usage.
                </p>
              </div>
            </div>
            <div className="col-span-12 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 538 195"
                  width="538"
                  height="195"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(0px, 0px, 0px)",
                    contentVisibility: "visible",
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_1016">
                      <rect width="538" height="195" x="0" y="0"></rect>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_1016)">
                    <g
                      transform="matrix(1.3200000524520874,0,0,1.3200000524520874,268.93798828125,97.16999816894531)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity="0"
                          strokeMiterlimit="4"
                          stroke="rgb(115,115,115)"
                          strokeOpacity="1"
                          strokeWidth="2"
                          d=" M-172.9149932861328,0.02199999988079071 C-172.9149932861328,0.02199999988079071 -145.45700073242188,0.050999999046325684 -145.45700073242188,0.050999999046325684 C-145.24200439453125,0.050999999046325684 -145.0500030517578,-0.08699999749660492 -144.98199462890625,-0.29100000858306885 C-144.98199462890625,-0.29100000858306885 -140.2259979248047,-14.574999809265137 -140.2259979248047,-14.574999809265137 C-140.06399536132812,-15.062000274658203 -139.36199951171875,-15.017999649047852 -139.26199340820312,-14.515000343322754 C-139.26199340820312,-14.515000343322754 -131.7790069580078,22.940000534057617 -131.7790069580078,22.940000534057617 C-131.67999267578125,23.43400001525879 -130.9949951171875,23.48900032043457 -130.82000732421875,23.016000747680664 C-130.82000732421875,23.016000747680664 -118.26300048828125,-10.925000190734863 -118.26300048828125,-10.925000190734863 C-118.0989990234375,-11.368000030517578 -117.46800231933594,-11.357999801635742 -117.31900024414062,-10.90999984741211 C-117.31900024414062,-10.90999984741211 -113.78399658203125,-0.29100000858306885 -113.78399658203125,-0.29100000858306885 C-113.71600341796875,-0.08699999749660492 -113.52400207519531,0.050999999046325684 -113.30899810791016,0.050999999046325684 C-113.30899810791016,0.050999999046325684 -93.51799774169922,0.050999999046325684 -93.51799774169922,0.050999999046325684 C-93.31099700927734,0.050999999046325684 -93.125,-0.07699999958276749 -93.0510025024414,-0.27000001072883606 C-93.0510025024414,-0.27000001072883606 -86.87899780273438,-16.333999633789062 -86.87899780273438,-16.333999633789062 C-86.70700073242188,-16.781999588012695 -86.06400299072266,-16.753999710083008 -85.93199920654297,-16.29199981689453 C-85.93199920654297,-16.29199981689453 -75.97799682617188,18.583999633789062 -75.97799682617188,18.583999633789062 C-75.83399963378906,19.08799934387207 -75.11000061035156,19.05900001525879 -75.00700378417969,18.545000076293945 C-75.00700378417969,18.545000076293945 -71.39299774169922,0.453000009059906 -71.39299774169922,0.453000009059906 C-71.34600067138672,0.21899999678134918 -71.14099884033203,0.050999999046325684 -70.9020004272461,0.050999999046325684 C-70.9020004272461,0.050999999046325684 -52.974998474121094,0.004000000189989805 -52.974998474121094,0.004000000189989805 C-52.974998474121094,0.004000000189989805 -50.9379997253418,0 -50.9379997253418,0 C-50.9379997253418,0 -36.86199951171875,0.004000000189989805 -36.86199951171875,0.004000000189989805 C-36.652000427246094,0.004000000189989805 -36.4640007019043,0.13500000536441803 -36.391998291015625,0.3319999873638153 C-36.391998291015625,0.3319999873638153 -30.95800018310547,15.232999801635742 -30.95800018310547,15.232999801635742 C-30.784000396728516,15.708000183105469 -30.094999313354492,15.656000137329102 -29.996999740600586,15.159000396728516 C-29.996999740600586,15.159000396728516 -22.489999771118164,-22.93899917602539 -22.489999771118164,-22.93899917602539 C-22.392000198364258,-23.43600082397461 -21.702999114990234,-23.48900032043457 -21.52899932861328,-23.013999938964844 C-21.52899932861328,-23.013999938964844 -8.970999717712402,11.399999618530273 -8.970999717712402,11.399999618530273 C-8.807999610900879,11.845999717712402 -8.173999786376953,11.836000442504883 -8.026000022888184,11.385000228881836 C-8.026000022888184,11.385000228881836 -4.488999843597412,0.6150000095367432 -4.488999843597412,0.6150000095367432 C-4.421000003814697,0.4099999964237213 -4.230000019073486,0.2709999978542328 -4.013999938964844,0.2709999978542328 C-4.013999938964844,0.2709999978542328 15.779999732971191,0.2709999978542328 15.779999732971191,0.2709999978542328 C15.98799991607666,0.2709999978542328 16.173999786376953,0.4000000059604645 16.24799919128418,0.593999981880188 C16.24799919128418,0.593999981880188 22.42099952697754,16.885000228881836 22.42099952697754,16.885000228881836 C22.591999053955078,17.336000442504883 23.23900032043457,17.30699920654297 23.3700008392334,16.843000411987305 C23.3700008392334,16.843000411987305 33.32600021362305,-18.520000457763672 33.32600021362305,-18.520000457763672 C33.46799850463867,-19.025999069213867 34.19599914550781,-18.99799919128418 34.297000885009766,-18.48200035095215 C34.297000885009766,-18.48200035095215 37.91299819946289,-0.13199999928474426 37.91299819946289,-0.13199999928474426 C37.959999084472656,0.10199999809265137 38.165000915527344,0.2709999978542328 38.40399932861328,0.2709999978542328 C38.40399932861328,0.2709999978542328 54.487998962402344,0.2709999978542328 54.487998962402344,0.2709999978542328 C54.487998962402344,0.2709999978542328 54.79800033569336,0.2809999883174896 54.79800033569336,0.2809999883174896 C54.79800033569336,0.2809999883174896 70.9020004272461,0.29499998688697815 70.9020004272461,0.29499998688697815 C71.14099884033203,0.29499998688697815 71.34600067138672,0.12600000202655792 71.39199829101562,-0.1080000028014183 C71.39199829101562,-0.1080000028014183 75.00700378417969,-18.198999404907227 75.00700378417969,-18.198999404907227 C75.11000061035156,-18.71299934387207 75.83399963378906,-18.742000579833984 75.97799682617188,-18.238000869750977 C75.97799682617188,-18.238000869750977 85.93099975585938,16.63800048828125 85.93099975585938,16.63800048828125 C86.06300354003906,17.100000381469727 86.70700073242188,17.128000259399414 86.87899780273438,16.68000030517578 C86.87899780273438,16.68000030517578 87.27799987792969,15.640999794006348 87.8740005493164,14.090999603271484"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="matrix(1.3200000524520874,0,0,1.3200000524520874,268.93798828125,97.16999816894531)"
                      opacity="1"
                      style={{ display: "block" }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity="0"
                          strokeMiterlimit="4"
                          stroke="rgb(255,81,123)"
                          strokeOpacity="1"
                          strokeWidth="2"
                          d=" M-143.63499450683594,-4.335999965667725 C-142.22900390625,-8.559000015258789 -140.2259979248047,-14.574999809265137 -140.2259979248047,-14.574999809265137 C-140.06399536132812,-15.062000274658203 -139.36199951171875,-15.017999649047852 -139.26199340820312,-14.515000343322754 C-139.26199340820312,-14.515000343322754 -131.7790069580078,22.940000534057617 -131.7790069580078,22.940000534057617 C-131.67999267578125,23.43400001525879 -130.9949951171875,23.48900032043457 -130.82000732421875,23.016000747680664 C-130.82000732421875,23.016000747680664 -118.26300048828125,-10.925000190734863 -118.26300048828125,-10.925000190734863 C-118.0989990234375,-11.368000030517578 -117.46800231933594,-11.357999801635742 -117.31900024414062,-10.90999984741211 C-117.31900024414062,-10.90999984741211 -117.3030014038086,-10.862000465393066 -117.27300262451172,-10.772000312805176"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div
              className="col-span-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="col-span-12 mb-20">
                <p className="mb-8 text-[#AFAFAF] font-light indent-8">
                  Vyvo Smart Chain (VSC)&apos;s platform anonymises users&apos;
                  data in a decentralized digital health (DDH) platform,
                  fuelling medical research and scientific discoveries to create
                  better solutions for tomorrow.
                </p>
                <a href="/get-started-vsc">
                  <button className="border-faded-purple px-10 py-4 w-full flex justify-center items-center hover:border-faded-purple-pressed">
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
            <div
              className="col-span-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex justify-center">
                <div className="bg-[#121212] rounded-[4px] p-5 w-[320px]">
                  <div className="flex justify-between items-center">
                    <div className="relative h-10 w-full">
                      <img
                        alt="Total Heartbeats"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        src="https://www.vyvo.com/shapes/oval-circle-hexagon.svg"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          objectFit: "contain",
                          objectPosition: "left center",
                          color: "transparent",
                        }}
                      />
                    </div>
                    <span className="text-[21px] text-right text-[#777578] font-light leading-[24px]">
                      001
                    </span>
                  </div>
                  <div className="mt-[39px] h-[128px]">
                    <div className="h-full w-full relative">
                      <img
                        alt="Heartbeats"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        src="https://www.vyvo.com/shapes/heartbeat.svg"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          objectFit: "contain",
                          objectPosition: "center center",
                          color: "transparent",
                        }}
                      />
                      <img
                        alt="Heart"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        src="https://www.vyvo.com/shapes/heart.svg"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          objectFit: "contain",
                          objectPosition: "center center",
                          color: "transparent",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-3 mt-6">
                    <span className="text-[16px] font-light leading-[21px] text-[#a3a3a3]">
                      Total Heartbeats Recorded
                    </span>
                    <div className="border  w-full"></div>
                    <span className="text-[30px] 2xl:text-[64px] 2xl:leading-[64px] font-light faded-pink">
                      1,618,692,646,712
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-span-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex justify-center mt-4">
                <div className="bg-[#121212] rounded-[4px] p-5 w-[320px]">
                  <div className="px-5 pt-5 relative h-[270px] flex flex-col">
                    <div className="flex justify-between items-center">
                      <div className="relative h-10 w-full">
                        <img
                          alt="Data Blocks Validated"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          src="https://www.vyvo.com/shapes/triple-diag-square.svg"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            objectFit: "contain",
                            objectPosition: "left center",
                            color: "transparent",
                          }}
                        />
                      </div>
                      <span className="text-[21px] text-right text-[#777578] font-light leading-[24px]">
                        002
                      </span>
                    </div>
                    <img
                      alt="Blocks Grid"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      src="https://www.vyvo.com/shapes/block-grid.svg"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        objectPosition: "center center",
                        color: "transparent",
                      }}
                    />
                    <img
                      alt="3D Blocks"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      src="https://www.vyvo.com/shapes/3d-blocks.svg"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "contain",
                        objectPosition: "center center",
                        color: "transparent",
                      }}
                    />
                    <span className="text-[16px] font-light leading-[21px] text-[#a3a3a3] mt-[191px] z-10">
                      Data Blocks Validated
                    </span>
                  </div>
                  <div className="flex flex-col space-y-3 mt-3 px-5 pb-5">
                    <div className="border  w-full"></div>
                    <span className="text-[30px] 2xl:text-[64px] 2xl:leading-[64px] font-light faded-light-blue">
                      74,771,943
                    </span>
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

export default Section1;
