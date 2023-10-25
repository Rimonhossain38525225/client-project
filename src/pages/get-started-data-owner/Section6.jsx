/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section6.css";

function Section6() {
  return (
    <>
      <div className="purple-circles-2 mt-20 lg:mt-0">
        <div className="mx-4 lg:mx-12 lg:py-[40px]">
          <div className="grid grid-cols-12 gap-y-8 lg:gap-x-16">
            <div className="hidden lg:block col-span-12 text-right ">
              <span className="text-[14px] font-light text-[#979797]">
                DATA
                <br /> OWNERS
              </span>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <span className="text-[#7C7C7C] text-[36px] 2xl:text-[2rem] lg:mr-40">
                {"//"}
              </span>
              <span className="text-[36px] leading-[36px] lg:text-[60px] lg:leading-[60px] 2xl:text-[90px] 2xl:leading-[92px] font-light text-white">
                Compatible <span className="faded-light-blue">IoT</span>
                <br />
                <span className="faded-light-blue">Wearable Devices</span>
              </span>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col gap-y-8">
                <div className="flex justify-start">
                  <img
                    alt="shape"
                    loading="lazy"
                    width="22"
                    height="28"
                    decoding="async"
                    data-nimg="1"
                    className="lg:ml-20"
                    style={{ color: "transparent" }}
                    srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=48&amp;q=75 2x"
                    src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=48&amp;q=75"
                  />
                </div>
                <span className="text-[#AFAFAF] text-base font-light leading-[22px] indent-8 lg:indent-0">
                  VSC is compatible with any of the following major device
                  manufacturers (VSC-PoSe Encryption Chip not included)
                </span>
                <a href="/files/FullDevicesList.pdf">
                  <button className="border-faded-pink py-4 px-8 w-full lg:w-full 2xl:w-3/5 flex justify-center items-center hover:border-faded-pink-pressed">
                    <span className="text-white">Full Device List</span>
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
                      src="/shapes/arrow-right.svg"
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="col-span-12 grid grid-cols-12 items-center">
              <div className="hidden lg:block col-span-5">
                <img
                  alt="card"
                  loading="lazy"
                  width="344"
                  height="501"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  srcSet="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fdata-owner-second-card-better.png&amp;w=384&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fdata-owner-second-card-better.png&amp;w=750&amp;q=75 2x"
                  src="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fdata-owner-second-card-better.png&amp;w=750&amp;q=75"
                />
              </div>
              <div className="col-span-12 lg:col-span-7 grid grid-cols-12 lg:gap-x-8 gap-4">
                <div className="col-span-6 lg:col-span-4">
                  <div className="border-[1px] rounded-xl border-[#FCFCFC33] flex justify-center lg:justify-start items-center h-[112px]">
                    <span className="flex flex-col items-center lg:items-start p-4 lg:gap-y-4">
                      <img
                        alt="Helo"
                        loading="lazy"
                        width="95"
                        height="10"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        srcSet="https://www.vyvo.com/_next/image?url=%2Flogos%2Fhelo.png&amp;w=96&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Flogos%2Fhelo.png&amp;w=256&amp;q=75 2x"
                        src="https://www.vyvo.com/_next/image?url=%2Flogos%2Fhelo.png&amp;w=256&amp;q=75"
                      />
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://helohealth.com/"
                      >
                        <span className="text-[14px] font-light text-[#979797]">
                          Visit Store
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4">
                  <div className="border-[1px] rounded-xl border-[#FCFCFC33] flex justify-center lg:justify-start items-center h-[112px]">
                    <span className="flex flex-col items-center lg:items-start p-4 lg:gap-y-4">
                      <img
                        alt="Apple"
                        loading="lazy"
                        width="50"
                        height="5"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        srcSet="https://www.vyvo.com/_next/image?url=%2Flogos%2Fapple.png&amp;w=64&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Flogos%2Fapple.png&amp;w=128&amp;q=75 2x"
                        src="https://www.vyvo.com/_next/image?url=%2Flogos%2Fapple.png&amp;w=128&amp;q=75"
                      />
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.apple.com/"
                      >
                        <span className="text-[14px] font-light text-[#979797]">
                          Visit Store
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:hidden col-span-12 flex justify-center">
                <img
                  alt="card"
                  loading="lazy"
                  width="344"
                  height="501"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  srcSet="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fdata-owner-card-2.png&amp;w=384&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fdata-owner-card-2.png&amp;w=750&amp;q=75 2x"
                  src="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fdata-owner-card-2.png&amp;w=750&amp;q=75"
                />
              </div>
            </div>
            <div className="hidden lg:block col-span-12">
              <div className="flex justify-end">
                <img
                  alt="wifi icon"
                  loading="lazy"
                  width="69"
                  height="79"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwifi-illustration.png&amp;w=96&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwifi-illustration.png&amp;w=256&amp;q=75 2x"
                  src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwifi-illustration.png&amp;w=256&amp;q=75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
