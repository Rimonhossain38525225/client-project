/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section6.css";
function Section6() {
  return (
    <>
      {/* section  top  */}
      <div className="mx-4 lg:mx-0 mt-7 lg:mt-28">
        <div className="grid grid-cols-12">
          <div className="h-0.5  bg-white/25 rounded-sm w-full col-span-12 lg:mt-16"></div>
          <div className="col-span-6">
            <p className="text-[#979797] font-light leading-[18px] mt-3 text-xs">
              BUILD DATA-DRIVEN SOLUTIONS
            </p>
          </div>
          <div className="col-span-6">
            <p className="text-[#979797] font-light leading-[18px] mt-3 text-right text-xs">
              VYVO SMART CHAIN
            </p>
          </div>
        </div>
      </div>

      {/* second  fot*/}
      <div className="data-buyer-bg-3 pb-4 mt-9 lg:mt-0">
        <div className="mx-4 lg:mx-12 lg:pt-[80px]">
          <div className="grid grid-cols-12 gap-y-8 lg:gap-x-16 lg:mt-24">
            <div className="col-span-12 lg:col-span-8">
              <span className="text-[#7C7C7C] text-[36px] lg:text-[2rem] lg:mr-40">
                {"//"}
              </span>
              <span className="text-[36px] leading-[36px] lg:text-[90px] lg:leading-[92px] font-light text-white">
                How to <span className="faded-lilac">inquire</span>
              </span>
              <br />
              <span className="text-[36px] leading-[36px] lg:text-[90px] lg:leading-[92px] font-light text-white">
                about <span className="faded-lilac">data</span>
              </span>
            </div>
            <div className="hidden lg:col-span-2 lg:col-start-1 lg:flex items-end">
              <img
                alt="squares"
                loading="lazy"
                width="54"
                height="54"
                decoding="async"
                data-nimg="1"
                srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-square.png&amp;w=64&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-square.png&amp;w=128&amp;q=75 2x"
                src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-square.png&amp;w=128&amp;q=75"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-6">
              <div className="hidden lg:block h-0.5 bg-[#FFFFFFCC] rounded-sm w-full col-span-12 lg:mb-8"></div>
              <span className="text-base leading-[22px] font-light text-[#AFAFAF]">
                Learn about how blockchain can revolutionize your
                organization&apos;s data acquisition. Talk to one of our team
                members about agile solutions.
              </span>
              <form className="flex flex-col gap-y-10 mt-10 lg:mt-0">
                <input
                  placeholder="Your Name*"
                  className="bg-transparent text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-[#FFFFFFCC] focus:outline-none"
                  type="text"
                  name="name"
                />
                <input
                  placeholder="Your Organization"
                  className="bg-transparent text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-[#FFFFFFCC] focus:outline-none"
                  type="text"
                  name="org"
                  spellCheck={false}
                  data-ms-editor="true"
                />
                <input
                  placeholder="Your Email"
                  className="bg-transparent text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-[#FFFFFFCC] focus:outline-none"
                  type="email"
                  name="email"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="bg-transparent text-[20px] leading-[44px] font-light text-[#FFFFFFCC] pt-8 px-4 border-b-[1px] border-white focus:outline-none"
                  spellCheck={false}
                  data-ms-editor={true}
                ></textarea>
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="bg-transparent border-faded-pink text-base font-light leading-[22px] text-[#FCFCFC] px-8 py-4 w-full lg:w-2/5 flex justify-center items-center hover:border-faded-pink-pressed"
                  >
                    Submit
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
