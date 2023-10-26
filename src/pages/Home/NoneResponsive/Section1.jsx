/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";

// css link
import "./section1.css";
// video
import worldStart1Video from "../../.././assets/videos/world-start1.mp4";
import worldLoop1Video from "../../.././assets/videos/world-loop1.mp4";
function Section1() {
  return (
    <>
      <div className="">
        {/* video starts here  */}
        <div
          className="absolute"
          data-aos="fade-up"
          data-aos-easing="linear"
          // data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          data-aos-delay="500"
        >
          <video
            // controls
            className="videoTag w-full"
            autoPlay
            playsInline
            src={worldLoop1Video}
            loop
          >
            <source src={worldStart1Video} type="video/mp4" />
          </video>
        </div>
        {/* video ends here  */}

        <div className="relative">
          {/* heading taxt  */}
          <div className="grid grid-cols-12 mx-12 pt-[270px]">
            <div className="col-span-12 text-white text-[120px] leading-tight overflow-hidden pt-20">
              <div className="relative">
                The
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
              of
              <span className="faded-purple"> Data</span>
            </div>
            {/* paragraph and cirle  */}
            <div className="col-span-3 col-start-1">
              <div className="flex flex-col gap-y-4 align-bottom ">
                <div className="relative py-2">
                  <div
                    className="absolute bg-transparent left-[36px] ease-in-out transition translate-x-[5px] duration-500"
                    style={{
                      opacity: 1,
                      transform: "translateX(5px) translateZ(0px)",
                    }}
                  >
                    <div
                      // data-aos="fade-right"
                      data-aos="zoom-in-left"
                      data-aos-once={false}
                      className="absolute w-[20px] h-[20px] z-10 transform-gpu bg-transparent border-[1.9px] rounded-full border-[#FCFCFC]"
                    ></div>
                  </div>

                  <div
                    className="absolute bg-transparent left-[36px] ease-in-out transition -translate-x-[5px] duration-500"
                    style={{
                      opacity: 1,
                      transform: "translateX(-5px) translateZ(0px)",
                    }}
                  >
                    <div
                      data-aos="zoom-in-right"
                      data-aos-once={false}
                      className="absolute w-[20px] h-[20px] transform-gpu bg-transparent border-[1.9px] rounded-full border-[#FCFCFC]"
                    ></div>
                  </div>
                </div>
                <span>
                  <span className="text-white text-right line-clamp-1">
                    Revolutionizing health data management
                  </span>
                  <span className="text-white">
                    "through blockchain technology. Vyvo Smart Chain offers a
                    secure and transparent platform that directly connects users
                    and researchers."
                  </span>
                </span>
              </div>
            </div>

            {/* section1 button  */}
            <div className="col-span-6 xl:col-span-5 flex items-end justify-center">
              <a href="#quick-start">
                <button className="mr-12 border-faded-purple px-10 py-4 flex justify-center items-center hover:border-faded-purple-pressed">
                  <span className="text-white">Start mining</span>
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
                  ></img>
                </button>
              </a>
            </div>

            <div className="h-0.5  bg-white/25 rounded-sm growing-line w-full col-span-12 mt-14"></div>
            <div className="col-span-12 grid grid-cols-12">
              <div
                className="col-span-6"
                style={{ opacity: 1, transform: "none" }}
              >
                <div>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-[#979797] font-light leading-[18px] mt-3 text-xs"
                  >
                    BUILD DATA-DRIVEN SOLUTIONS
                  </p>
                </div>
              </div>
              <div
                className="col-span-3"
                style={{ opacity: 1, transform: "none" }}
              >
                <div>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-[#979797] font-light leading-[18px] mt-3 text-xs"
                  >
                    BLOCKCHAIN
                  </p>
                </div>
              </div>
              <div
                className="col-span-3"
                style={{ opacity: 1, transform: "none" }}
              >
                <div>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-[#979797] font-light leading-[18px] mt-3 text-right text-xs"
                  >
                    VYVO SMART CHAIN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-bg relative">
          <div className="grid grid-cols-12 mt-[9px] relative home-bg-2 pb-[125px]">
            <div className="col-span-4  lg:mt-[124px]">
              <p className="text-[#979797] font-light leading-[18px] text-xs">
                ABOUT VYVO
              </p>
            </div>

            <div className="col-span-8 lg:mt-[124px] grid grid-cols-12 text-white gap-x-10 z-[9000] mr-12">
              <div
                className="col-span-12"
                style={{ opacity: 1, transform: "none" }}
              >
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-span-12 mb-12"
                >
                  <p className="text-5xl leading-[3.5rem] mb-2 font-light">
                    Vyvo Smart Chain is the <br />
                    first&nbsp;
                    <span className="faded-lilac font-light">
                      heartbeat-powered blockchain
                    </span>
                    .
                  </p>
                  <p className="text-5xl text-[#FCFCFC] leading-[3.5rem] opacity-60 font-light">
                    Designed to provide users with access to rewards
                    <span className="faded-lilac">
                      &nbsp;from the data&nbsp;
                    </span>
                    they generate through wearable device usage.
                  </p>
                </div>
              </div>
              {/* heart svg  */}
              <div className="col-span-6">
                <div></div>
              </div>

              {/* paragraph text  */}
              <div className="col-span-6">
                <div className="col-span-6 mr-8">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <p
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="font-light "
                    >
                      Vyvo Smart Chain (VSC)'s platform <br />
                      <span className="whitespace-nowrap">
                        anonymises users'
                        <br />
                      </span>
                    </p>
                  </div>
                  <div style={{ opacity: 1, transform: "none" }}>
                    <p data-aos="fade-up" data-aos-duration="1000" className="">
                      data in a decentralized digital <br />
                      <span className="whitespace-nowrap">
                        health (DDH) platform,
                      </span>
                    </p>
                  </div>
                  <div
                    className="mb-8 "
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <p
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                      className=""
                    >
                      fuelling medical research and scientific discoveries{" "}
                      <br /> to create better solutions for tomorrow.
                    </p>
                  </div>
                  <div style={{ opacity: 1, transform: "none" }}>
                    <a href="/get-started-vsc">
                      <button
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="mr-12 border-faded-purple px-10 py-3 flex justify-center items-center hover:border-faded-purple-pressed"
                      >
                        <span className="text-white">Learn More</span>
                        <img
                          alt="Arrow right"
                          loading="lazy"
                          width="4"
                          height="8"
                          decoding="async"
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
              {/* card 1 */}
              <div
                className="col-span-6 2xl:col-span-5"
                style={{ opacity: 1, transform: "none" }}
              >
                <div
                  data-aos="fade-up"
                  className="bg-[#121212] rounded-[4px] p-5 mt-[100px]"
                >
                  <div className="flex justify-between items-center">
                    <div className="relative h-10 w-full">
                      <img
                        alt="Total Heartbeats"
                        loading="lazy"
                        decoding="async"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          objectFit: "contain",
                          objectPosition: "left",
                          color: "transparent",
                        }}
                        src="https://www.vyvo.com/shapes/oval-circle-hexagon.svg"
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
                        // data-nimg="fill"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          objectFit: "contain",
                          objectPosition: "center",
                          color: "transparent",
                        }}
                        src="https://www.vyvo.com/shapes/heartbeat.svg"
                      />
                      <img
                        alt="Heart"
                        loading="lazy"
                        decoding="async"
                        // data-nimg="fill"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          objectFit: "contain",
                          objectPosition: "center",
                          color: "transparent",
                        }}
                        src="https://www.vyvo.com/shapes/heart.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-3 mt-6">
                    <span className="text-[16px] font-light leading-[21px] text-[#a3a3a3]">
                      Total Heartbeats Recorded
                    </span>
                    <div className="border  w-full"></div>
                    <span className="text-[30px] xl:text-[40px] leading-normal font-light faded-pink">
                      1,607,856,169,954
                    </span>
                  </div>
                </div>
              </div>
              {/* card2 */}
              <div
                className="col-span-6 2xl:col-span-5"
                style={{ opacity: 1, transform: "none" }}
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="bg-[#121212] rounded-[4px] mt-[100px]"
                >
                  <div className="px-5 pt-5 relative h-[270px] flex flex-col">
                    <div className="flex justify-between items-center">
                      <div className="relative h-10 w-full">
                        <img
                          alt="Data Blocks Validated"
                          loading="lazy"
                          decoding="async"
                          // data-nimg="fill"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            objectFit: "contain",
                            objectPosition: "left",
                            color: "transparent",
                          }}
                          src="https://www.vyvo.com/shapes/triple-diag-square.svg"
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
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: "contain",
                        objectPosition: "center",
                        color: "transparent",
                      }}
                      src="https://www.vyvo.com/shapes/block-grid.svg"
                    />
                    <img
                      alt="3D Blocks"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: "contain",
                        objectPosition: "center",
                        color: "transparent",
                      }}
                      src="https://www.vyvo.com/shapes/3d-blocks.svg"
                    />
                    <span className="text-[16px] font-light leading-[21px] text-[#a3a3a3] mt-[191px] z-10">
                      Data Blocks Validated
                    </span>
                  </div>
                  <div className="flex flex-col space-y-3 mt-3 px-5 pb-5">
                    <div className="border  w-full"></div>
                    <span className="text-[30px] xl:text-[40px] leading-normal font-light faded-light-blue">
                      73,796,813
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
