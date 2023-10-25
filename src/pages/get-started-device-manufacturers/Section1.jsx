/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section1.css";

function Section1() {
  return (
    <>
      <div className="device-manufacturers-bg 2xl:h-[740px] pt-[140px] lg:pt-0">
        <div className="mx-4 lg:mx-12">
          <div className="grid grid-cols-12 gap-y-6 lg:gap-y-2 lg:gap-x-16 relative 2xl:top-[280px]">
            <div className="col-span-12 lg:col-span-11 lg:mb-10">
              <span className="text-[#7C7C7C] text-[36px] lg:text-[2rem] lg:mr-20">
                {"//"}
              </span>
              <span className="text-[36px] leading-[36px] lg:text-[90px] lg:leading-[92px] font-light text-white">
                Unlock the <span className="faded-pink-quaternary">Web3</span>
                <br />
                <span className="faded-green-secondary">Economy</span>
              </span>
            </div>
            <div className="hidden lg:block lg:col-span-1 lg:col-start-12 vertical-text-right left-[100%]">
              <span className="text-xs leading-[18px] text-white">
                <span className="mr-6">[</span> SCROLL&nbsp;
                <span className="text-[#979797] leading-[18px] ml-2">
                  /&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/
                </span>
                <span className="ml-6">]</span>
              </span>
            </div>
            <div className="col-span-12 lg:col-span-2">
              <img
                alt="nft"
                loading="lazy"
                width="44"
                height="28"
                decoding="async"
                data-nimg="1"
                className="ml-20 mr-0"
                style={{ color: "transparent" }}
                srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-oval-purple-circle.png&amp;w=48&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-oval-purple-circle.png&amp;w=96&amp;q=75 2x"
                src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-oval-purple-circle.png&amp;w=96&amp;q=75"
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <span className="text-white text-base font-light leading-[22px]">
                <span className="faded-green-secondary">Manufacturers</span> of
                Internet of Things (IoT) devices can integrate Vyvo Smart Chain
                (VSC) into their products, adapting to the new decentralised
                market.
              </span>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <span className="text-white text-base font-light leading-[22px]">
                By integrating,{" "}
                <span className="faded-green-secondary">manufacturers</span> can
                incorporate Web3 capabilities into their IoT devices. This gives
                early adopters a competitive edge by providing their customers
                with enhanced offerings.
              </span>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <span className="text-white text-base font-light leading-[22px]">
                <span className="faded-green-secondary">Manufacturers</span> can
                even participate in partnerships with VSC, expanding revenue
                streams and strengthening their position in the IoT market.
              </span>
            </div>
            <div className="h-0.5  bg-white/25 rounded-sm w-full col-span-12 lg:mt-16"></div>
            <div className="col-span-6">
              <p className="text-[#979797] font-light leading-[18px] mt-3 text-xs">
                DATA-DRIVEN SOLUTIONS
              </p>
            </div>
            <div className="hidden lg:block col-span-3">
              <p className="text-[#979797] font-light leading-[18px] mt-3 text-xs">
                DEVICE MANUFACTURERS
              </p>
            </div>
            <div className="col-span-6 lg:col-span-3">
              <p className="text-[#979797] font-light leading-[18px] mt-3 text-right text-xs">
                VYVO SMART CHAIN
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
