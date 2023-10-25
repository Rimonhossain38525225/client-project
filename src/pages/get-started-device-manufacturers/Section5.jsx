/* eslint-disable no-unused-vars */
import React from "react";

function Section5() {
  return (
    <>
      <div className="purple-circles-2 lg:h-[400px] lg:translate-y-[-150px]">
        <div className="mx-4 lg:mx-12 lg:pt-[200px]">
          <div className="grid grid-cols-12 gap-y-8 lg:gap-x-16 pt-12 lg:pt-0 lg:mt-24">
            <div className="col-span-12 lg:col-span-8">
              <span className="text-[#7C7C7C] text-[36px] lg:-text-[60px] 2xl:text-[2rem] lg:mr-40">
                {"//"}
              </span>
              <span className="text-[36px] lg:text-[60px] lg:leading-[60px] 2xl:text-[90px] 2xl:leading-[92px] font-light faded-lilac">
                Success stories
              </span>
              <br />
              <span className="text-[36px] leading-[36px] lg:text-[60px] lg:leading-[60px] 2xl:text-[90px] 2xl:leading-[92px] font-light text-white">
                and case studies
              </span>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col gap-y-8">
                <div className="flex ml-4 lg:ml-0 justify-start lg:justify-center">
                  <img
                    alt="shape"
                    loading="lazy"
                    width="44"
                    height="28"
                    decoding="async"
                    data-nimg="1"
                    srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-oval-gray-circle.png&amp;w=48&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-oval-gray-circle.png&amp;w=96&amp;q=75 2x"
                    src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-oval-gray-circle.png&amp;w=96&amp;q=75"
                    style={{ color: "transparent" }}
                  />
                </div>
                <span className="faded-green-secondary text-base font-light leading-[22px] indent-6 lg:indent-0">
                  Vyvo Smart Chain has already empowered IoT device
                  manufacturers by bridging their physical devices to the
                  decentralised economy.
                </span>
                <a href="/business-inquiries">
                  <button className="border-faded-pink py-4 px-8 w-full 2xl:w-3/5 flex justify-center items-center hover:border-faded-pink-pressed">
                    <span className="text-white">Request a Demo</span>
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
    </>
  );
}

export default Section5;
