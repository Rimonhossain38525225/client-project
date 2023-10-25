/* eslint-disable no-unused-vars */
import React from "react";

import "./section5.css";
function Section5() {
  return (
    <>
      <div id="quick-start" className="mx-12 my-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 vertical-lines-bg text-center flex  justify-center items-baseline gap-x-6 ">
            <div style={{ opacity: 1, transform: "none" }}>
              <span className="text-white text-[90px] leading-[92px]">
                Quick
              </span>
            </div>
            <img
              alt="arrow down"
              loading="lazy"
              width="67"
              height="67"
              decoding="async"
              //   data-nimg="1"
              className="max-h-[67px]"
              //   srcSet="/_next/image?url=%2Fshapes%2Fcircle-arrow-down.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fshapes%2Fcircle-arrow-down.png&amp;w=256&amp;q=75 2x"
              src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fcircle-arrow-down.png&amp;w=256&amp;q=75"
              style={{ color: "transparent" }}
            />
            <div style={{ opacity: 1, transform: "none" }}>
              <span className="text-white text-[90px] leading-[92px] font-light">
                Start
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* drag cursor  */}
      <div className="drag-cursor">
        <div className="">
          <div className="swiper swiper-initialized swiper-horizontal mySwiper overflow-auto swiper-backface-hidden">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide peer md:ml-12 swiper-slide-active"
                style={{ width: "225px", marginRight: "50px" }}
              >
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="">
                    <div className="h-[481px] w-[335px] bg-[#121212] px-10 py-10 group relative peer lg:hover:z-30">
                      <img
                        alt="Line"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="group-hover:opacity-0 transition-all duration-100 ease-in-out"
                        src="https://www.vyvo.com/shapes/dashed-border.svg"
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
                      <div className="relative h-[47px] w-full">
                        <img
                          alt="Card image"
                          loading="lazy"
                          decoding="async"
                          // data-nimg="fill"
                          src="https://www.vyvo.com/shapes/iot-device-card.svg"
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
                      <div className="flex flex-col mt-[84px] text-start">
                        <span className="text-[#979797]/60 uppercase text-[12px] font-light leading-[18px] tracking-[2%]">
                          manufacturers
                        </span>
                        <span className="h-[44px] mt-3 text-4xl font-light leading-[38px] tracking-[-2%] faded-green">
                          IoT Devices
                        </span>
                        <ul className="mt-2.5 list-disc list-inside">
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Integration Benefits</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Case Studies</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Technical Requirements</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Onboarding</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-10 flex justify-start relative z-[9000]">
                        <a href="/get-started-device-manufacturers">
                          <button className="text-[#FCFCFC] text-[16px] font-light leading-[22px] px-9 py-3.5 rounded-[43px] border border-[#fcfcfc]/[0.15] flex space-x-[18px] items-center hover:border-faded-green-lime">
                            <span>Learn More</span>
                            <div className="relative h-3 w-[6px]">
                              <img
                                alt="Arrow right"
                                loading="lazy"
                                decoding="async"
                                // data-nimg="fill"
                                src="https://www.vyvo.com/shapes/arrow-right.svg"
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
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-0 h-[481px] w-[335px] bg-cover bg-[url('https://www.vyvo.com/backgrounds/card-hover-bg.png')]  px-10 py-10  lg:peer-hover:-rotate-12 transition duration-700 ease-in-out lg:peer-hover:z-10 invisible lg:peer-hover:visible rounded-xl"></div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide peer peer-hover:z-30 swiper-slide-next"
                style={{ width: "225px", marginRight: "50px" }}
              >
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="">
                    <div className="h-[481px] w-[335px] bg-[#121212] px-10 py-10 group relative peer lg:hover:z-30">
                      <img
                        alt="Line"
                        loading="lazy"
                        decoding="async"
                        // data-nimg="fill"
                        className="group-hover:opacity-0 transition-all duration-100 ease-in-out"
                        src="https://www.vyvo.com/shapes/dashed-border.svg"
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
                      <div className="relative h-[47px] w-full">
                        <img
                          alt="Card image"
                          loading="lazy"
                          decoding="async"
                          // data-nimg="fill"
                          src="https://www.vyvo.com/shapes/data-owner-card.svg"
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
                      <div className="flex flex-col mt-[84px] text-start">
                        <span className="text-[#979797]/60 uppercase text-[12px] font-light leading-[18px] tracking-[2%]">
                          users
                        </span>
                        <span className="h-[44px] mt-3 text-4xl font-light leading-[38px] tracking-[-2%] faded-light-blue">
                          Data Owners
                        </span>
                        <ul className="mt-2.5 list-disc list-inside">
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Data-NFT &amp; Anonymity</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Device Compatibility</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Device Requirements</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Benefits &amp; Rewards</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-10 flex justify-start relative z-[9000]">
                        <a href="/get-started-data-owner">
                          <button className="text-[#FCFCFC] text-[16px] font-light leading-[22px] px-9 py-3.5 rounded-[43px] border border-[#fcfcfc]/[0.15] flex space-x-[18px] items-center hover:border-faded-light-blue">
                            <span>Start Owning</span>
                            <div className="relative h-3 w-[6px]">
                              <img
                                alt="Arrow right"
                                loading="lazy"
                                decoding="async"
                                // data-nimg="fill"
                                src="https://www.vyvo.com/shapes/arrow-right.svg"
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
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-0 h-[481px] w-[335px] bg-cover bg-[url('https://www.vyvo.com/backgrounds/card-hover-bg.png')]  px-10 py-10  lg:peer-hover:-rotate-12 transition duration-700 ease-in-out lg:peer-hover:z-10 invisible lg:peer-hover:visible rounded-xl"></div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide peer peer-hover:z-30"
                style={{ width: "225px", marginRight: "50px" }}
              >
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="">
                    <div className="h-[481px] w-[335px] bg-[#121212] px-10 py-10 group relative peer lg:hover:z-30">
                      <img
                        alt="Line"
                        loading="lazy"
                        decoding="async"
                        // data-nimg="fill"
                        className="group-hover:opacity-0 transition-all duration-100 ease-in-out"
                        src="https://www.vyvo.com/shapes/dashed-border.svg"
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
                      <div className="relative h-[47px] w-full">
                        <img
                          alt="Card image"
                          loading="lazy"
                          decoding="async"
                          // data-nimg="fill"
                          src="https://www.vyvo.com/shapes/staking-card.svg"
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
                      <div className="flex flex-col mt-[84px] text-start">
                        <span className="text-[#979797]/60 uppercase text-[12px] font-light leading-[18px] tracking-[2%]">
                          validators &amp; delegators
                        </span>
                        <span className="h-[44px] mt-3 text-4xl font-light leading-[38px] tracking-[-2%] faded-pink-to-orange">
                          Staking
                        </span>
                        <ul className="mt-2.5 list-disc list-inside">
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Validating &amp; Delegating</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Staking Rewards</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Node Requirements</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>How to Stake</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-10 flex justify-start relative z-[9000]">
                        <a href="/get-started-validators">
                          <button className="text-[#FCFCFC] text-[16px] font-light leading-[22px] px-9 py-3.5 rounded-[43px] border border-[#fcfcfc]/[0.15] flex space-x-[18px] items-center hover:border-faded-pink-to-orange">
                            <span>Start Staking</span>
                            <div className="relative h-3 w-[6px]">
                              <img
                                alt="Arrow right"
                                loading="lazy"
                                decoding="async"
                                // data-nimg="fill"
                                src="https://www.vyvo.com/shapes/arrow-right.svg"
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
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-0 h-[481px] w-[335px] bg-cover bg-[url('https://www.vyvo.com/backgrounds/card-hover-bg.png')]  px-10 py-10  lg:peer-hover:-rotate-12 transition duration-700 ease-in-out lg:peer-hover:z-10 invisible lg:peer-hover:visible rounded-xl"></div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide peer peer-hover:z-30"
                style={{ width: "225px", marginRight: "50px" }}
              >
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="">
                    <div className="h-[481px] w-[335px] bg-[#121212] px-10 py-10 group relative peer lg:hover:z-30">
                      <img
                        alt="Line"
                        loading="lazy"
                        decoding="async"
                        // data-nimg="fill"
                        className="group-hover:opacity-0 transition-all duration-100 ease-in-out"
                        src="https://www.vyvo.com/shapes/dashed-border.svg"
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
                      <div className="relative h-[47px] w-full">
                        <img
                          alt="Card image"
                          loading="lazy"
                          decoding="async"
                          // data-nimg="fill"
                          src="https://www.vyvo.com/shapes/data-services-card.svg"
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
                      <div className="flex flex-col mt-[84px] text-start">
                        <span className="text-[#979797]/60 uppercase text-[12px] font-light leading-[18px] tracking-[2%]">
                          researchers
                        </span>
                        <span className="h-[44px] mt-3 text-4xl font-light leading-[38px] tracking-[-2%] faded-tangerine">
                          Data Services
                        </span>
                        <ul className="mt-2.5 list-disc list-inside">
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Blockchain Solutions</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Data Collection</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Use Cases &amp; Testimonials</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>DDH Platform</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-10 flex justify-start relative z-[9000]">
                        <a href="/get-started-data-buyer">
                          <button className="text-[#FCFCFC] text-[16px] font-light leading-[22px] px-9 py-3.5 rounded-[43px] border border-[#fcfcfc]/[0.15] flex space-x-[18px] items-center hover:border-faded-tangerine">
                            <span>Learn More</span>
                            <div className="relative h-3 w-[6px]">
                              <img
                                alt="Arrow right"
                                loading="lazy"
                                decoding="async"
                                // data-nimg="fill"
                                src="https://www.vyvo.com/shapes/arrow-right.svg"
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
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-0 h-[481px] w-[335px] bg-cover bg-[url('https://www.vyvo.com/backgrounds/card-hover-bg.png')]  px-10 py-10  lg:peer-hover:-rotate-12 transition duration-700 ease-in-out lg:peer-hover:z-10 invisible lg:peer-hover:visible rounded-xl"></div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide peer peer-hover:z-30"
                style={{ width: "225px", marginRight: "50px" }}
              >
                <div
                  style={{
                    opacity: 0,
                    transform: "translateY(24px) translateZ(0px)",
                  }}
                >
                  <div className="">
                    <div className="h-[481px] w-[335px] bg-[#121212] px-10 py-10 group relative peer lg:hover:z-30">
                      <img
                        alt="Line"
                        loading="lazy"
                        decoding="async"
                        // data-nimg="fill"
                        className="group-hover:opacity-0 transition-all duration-100 ease-in-out"
                        src="https://www.vyvo.com/shapes/dashed-border.svg"
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
                      <div className="relative h-[47px] w-full">
                        <img
                          alt="Card image"
                          loading="lazy"
                          decoding="async"
                          // data-nimg="fill"
                          sizes="100vw"
                          // srcSet="/_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=3840&amp;q=75 3840w"
                          src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=3840&amp;q=75"
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
                      <div className="flex flex-col mt-[84px] text-start">
                        <span className="text-[#979797]/60 uppercase text-[12px] font-light leading-[18px] tracking-[2%]">
                          developers
                        </span>
                        <span className="h-[44px] mt-3 text-4xl font-light leading-[38px] tracking-[-2%] faded-pink">
                          Ecosystem
                        </span>
                        <ul className="mt-2.5 list-disc list-inside">
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Integration Benefits</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Case Studies</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Technical Requirements</span>
                          </li>
                          <li className=" text-[#7C7C7C] opacity-80 text-[16px] font-light leading-[22px]">
                            <span>Onboarding</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-10 flex justify-start relative z-[9000]"></div>
                    </div>
                    <div className="absolute top-0 h-[481px] w-[335px] bg-cover bg-[url('/backgrounds/card-hover-bg.png')]  px-10 py-10  lg:peer-hover:-rotate-12 transition duration-700 ease-in-out lg:peer-hover:z-10 invisible lg:peer-hover:visible rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-scrollbar swiper-scrollbar-horizontal">
              <div
                className="swiper-scrollbar-drag"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  width: "527.547px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5;
