/* eslint-disable no-unused-vars */
import React from "react";

function Section1() {
  return (
    <>
      <div className="press-bg">
        <div className="mx-4 lg:mx-12 pt-[140px] lg:pt-0">
          <div className="grid grid-cols-12 gap-y-4 md:gap-y-8">
            <div className="col-span-12">
              <span className="text-[36px] md:text-[90px] font-light text-white">
                <span className="faded-lilac">News</span>
                <span className="border-b-[1px] border-[#FFFFFFCC]">room</span>
              </span>
            </div>
            <div className="hidden md:block md:col-span-1 md:col-start-12 vertical-text-right left-[100%]">
              <span className="text-xs leading-[18px] text-white">
                <span className="mr-6">[</span> SCROLL&nbsp;
                <span className="text-[#979797] leading-[18px] ml-2">
                  /&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/
                </span>
                <span className="ml-6">]</span>
              </span>
            </div>
            <div className="col-span-12 md:col-span-3 flex flex-col md:gap-y-6">
              <span className="text-base font-light opacity-50 text-[#FCFCFC]">
                VSC Press KIT
              </span>
              <span className="text-base font-light faded-lilac">
                Vyvo Smart Chain establishes specific rules and guidelines for
                our brand. The Media Kit contains our brand book and assets.
              </span>
              <a
                className="mt-8 w-full"
                target="_blank"
                href="/files/VSC_BrandBook.pdf"
              >
                <button className="border-faded-pink py-4 px-4 w-full lg:w-3/5 flex justify-center items-center hover:border-faded-pink-pressed">
                  <span className="text-white">Press Kit</span>
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
            <div className="col-span-12 md:col-span-3 md:col-start-6 flex flex-col md:gap-y-6">
              <span className="text-base font-light opacity-50 text-[#FCFCFC]">
                Latest from VSC
              </span>
              <span className="text-base font-light faded-lilac">
                If you`re a member of the media and would like to submit an
                inquiry, please direct your questions to press@vyvo.com
              </span>
              <a className="mt-8 w-full" href="mailto:press@vyvo.com">
                <button className="border-faded-pink py-4 px-4 w-full lg:w-3/5 flex justify-center items-center hover:border-faded-pink-pressed">
                  <span className="text-white">Contact</span>
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
    </>
  );
}

export default Section1;
