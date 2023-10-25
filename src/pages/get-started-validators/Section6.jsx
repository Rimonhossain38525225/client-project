/* eslint-disable no-unused-vars */
import React from "react";
// css
import "./section6.css";

function Section6() {
  return (
    <>
      <div className="lg:square-dots-bg">
        <div className="mx-4 lg:mx-12">
          <div className="grid grid-cols-12">
            <div className="hidden lg:block lg:col-span-3 vertical-text-right">
              <span className="text-xs leading-[18px] text-white lg:relative lg:left-[450px]">
                <span className="mr-6">[</span> VYVO&nbsp;
                <span className="text-[#979797] leading-[18px] ml-2">
                  /&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/
                </span>
                <span className="ml-6">]</span>
              </span>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-12 pt-14 lg:pt-0 lg:gap-x-8 gap-4 lg:gap-y-10">
              <div className="col-span-12 pb-12 lg:pb-0">
                <span className="text-[#7C7C7C] text-[36px] lg:text-[2rem] lg:mr-20">
                  {"//"}
                </span>
                <span className="md:text-[36px] leading-[36px] lg:text-[62px] 2xl:text-[90px] lg:leading-[70px] 2xl:leading-[92px] font-light text-white">
                  How to join as a <br />
                  <span className="faded-pink-to-orange">
                    Validators &amp; Delegators
                  </span>
                </span>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="border-[1px] border-[#FCFCFC33] rounded-[12px] hover:border-white get-started-validators h-full">
                  <div className="p-6 h-full">
                    <div className="flex flex-col h-full justify-between">
                      <div className="">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="58"
                          height="58"
                          decoding="async"
                          data-nimg="1"
                          srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-circle-purple-square.png&amp;w=64&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-circle-purple-square.png&amp;w=128&amp;q=75 2x"
                          src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-circle-purple-square.png&amp;w=128&amp;q=75"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex flex-col gap-y-2 lg:gap-y-0 mt-16">
                        <span className="font-light text-base text-[#979797] opacity-60">
                          001
                        </span>
                        <span className="faded-lilac-alt text-[24px] lg:text-[36px] font-light block-title">
                          Become a Validator
                        </span>
                        <span className="text-base font-light text-[#AFAFAF] opacity-70 block-text">
                          This option assumes you have the full stake amount and
                          technical skills to set up and maintain a validator
                          node ideally using a virtual server provider (such as
                          AWS or Digital Ocean).
                        </span>
                        <span className="faded-tangerine mt-2">
                          Note: Running a validator node from a home internet
                          connection is not recommended.
                        </span>
                        <a target="_blank" href="#">
                          <button
                            type="submit"
                            className="border-[1px] border-[#FCFCFC26] rounded-[43px] text-base font-light leading-[22px] text-[#FCFCFC] px-8 py-4 lg:w-full 2xl:w-3/5 mt-10 flex justify-center items-center"
                          >
                            <span>Learn More</span>
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
              <div className="col-span-12 lg:col-span-6">
                <div className="border-[1px] border-[#FCFCFC33] rounded-[12px] hover:border-white get-started-validators h-full">
                  <div className="p-6 h-full">
                    <div className="flex flex-col h-full justify-between">
                      <div className="">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="58"
                          height="58"
                          decoding="async"
                          data-nimg="1"
                          srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2F2-diagonal-square-circle-middle.png&amp;w=64&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2F2-diagonal-square-circle-middle.png&amp;w=128&amp;q=75 2x"
                          src="https://www.vyvo.com/_next/image?url=%2Fshapes%2F2-diagonal-square-circle-middle.png&amp;w=128&amp;q=75"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="flex flex-col mt-16">
                        <span className="font-light text-base text-[#979797] opacity-60">
                          002
                        </span>
                        <span className="faded-lilac-alt text-[24px] lg:text-[36px] font-light block-title">
                          Become a Delegator
                        </span>
                        <span className="text-base font-light text-[#AFAFAF] opacity-70 block-text">
                          This option assumes you prefer not to handle the
                          technical tasks required to run and maintain a
                          validator node.
                        </span>
                        <span className="faded-tangerine mt-2">
                          Note: Validators are listed here, but please do your
                          own research as a listing does not equal endorsement
                          or recommendation.
                        </span>
                        <a target="_blank" href="#">
                          <button
                            type="submit"
                            className="border-[1px] border-[#FCFCFC26] rounded-[43px] text-base font-light leading-[22px] text-[#FCFCFC] px-8 py-4 lg:w-full 2xl:w-3/5 mt-10 flex justify-center items-center"
                          >
                            <span>Learn More</span>
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
            </div>
            <div className="hidden lg:block lg:col-span-1">
              <div className="flex text-white justify-between vertical-text-left gap-x-80 lg:relative lg:top-[200px]">
                <span className="text-xs text-[#979797] leading-[18px]">
                  DATA
                </span>
                <span className="text-xs text-[#979797] leading-[18px]">
                  VSC NETWORK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
