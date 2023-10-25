/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
// css
import "./section4.css";
import SvgHover from "../../components/SvgHover";

function Section4() {
  return (
    <>
      <div className="mx-4 lg:mx-0 grid grid-cols-12">
        <div className="hidden lg:block lg:col-span-5 z-[1]">
          <img
            alt="green-circle"
            loading="lazy"
            width="583"
            height="575"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            srcSet="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fdevice-man-card-good.png&amp;w=640&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fdevice-man-card-good.png&amp;w=1200&amp;q=75 2x"
            src="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fdevice-man-card-good.png&amp;w=1200&amp;q=75"
          />
        </div>
        <div className="col-span-12 lg:col-span-7 grid grid-cols-12 gap-y-8 mt-10 lg:mt-0 lg:gap-x-12 lg:gap-y-24 xl:pr-12 square-dots-right bg-cover">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-y-4 get-started-device">
              <div className="text-[21px] text-[#AFAFAF] opacity-50 leading-[30px] font-light block-title">
                <span className="mr-4">001</span>
                <span className="">Capitalise on Web3</span>
              </div>
              <div className="relative top-[-30px]">
                <SvgHover />
              </div>
              <span className="block-text text-base font-light leading-[22px] text-[#FCFCFC] opacity-50 relative top-[-30px]">
                Vyvo Smart Chain helps manufacturers integrate their physical
                devices into the new decentralised economy, enabling
                participation in the Web3 space.
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-y-4 get-started-device">
              <div className="text-[21px] text-[#AFAFAF] opacity-50 leading-[30px] font-light block-title">
                <span className="mr-4">002</span>
                <span className="">Leverage the Web3 Economy</span>
              </div>
              <div className="relative top-[-30px]">
                <SvgHover />
              </div>
              <span className="block-text text-base font-light leading-[22px] text-[#FCFCFC] opacity-50 relative top-[-30px]">
                VSC’s infrastructure allows any IoT device to bridge to the new
                decentralised economy.Manufacturers also receive 30% of device
                users rewards.
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-y-4 get-started-device">
              <div className="text-[21px] text-[#AFAFAF] opacity-50 leading-[30px] font-light block-title">
                <span className="mr-4">003</span>
                <span className="">Secure data with Web3</span>
              </div>
              <div className="relative top-[-30px]">
                <SvgHover />
              </div>
              <span className="block-text text-base font-light leading-[22px] text-[#FCFCFC] opacity-50 relative top-[-30px]">
                Vyvo Smart Chain`s proprietary PoSe Chip encrypts data directly
                from the IoT device, authenticating the data from the source.
                Other additional enhancements can be added, such as NFC
                payments.
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-y-4 get-started-device">
              <div className="text-[21px] text-[#AFAFAF] opacity-50 leading-[30px] font-light block-title">
                <span className="mr-4">004</span>
                <span className="">Agile Web3 Adoption</span>
              </div>
              <div className="relative top-[-30px]">
                {/* svg */}
                <SvgHover />
              </div>
              <span className="block-text text-base font-light leading-[22px] text-[#FCFCFC] opacity-50 relative top-[-30px]">
                Manufacturers can easily import an incentive program using
                white-label dApps through VSC developers, enhancing
                accessibility to the platform. Manufacturers can even add new
                products to their business and even create a proprietary token,
                if they wish.
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:hidden flex justify-center">
            <img
              alt="green-circle z-[9999]"
              loading="lazy"
              width="583"
              height="575"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fbackgrounds%2Fdevice-man-card-good.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fbackgrounds%2Fdevice-man-card-good.png&amp;w=1200&amp;q=75 2x"
              src="/_next/image?url=%2Fbackgrounds%2Fdevice-man-card-good.png&amp;w=1200&amp;q=75"
            />
          </div>
        </div>
        <div className="h-0.5  bg-white/25 rounded-sm w-full col-span-12 mt-8 lg:mt-16"></div>
        <div className="col-span-6">
          <p className="text-[#979797] font-light leading-[18px] mt-3 text-xs">
            DEVICE MANUFACTURERS
          </p>
        </div>
        <div className="col-span-6">
          <p className="text-[#979797] font-light leading-[18px] mt-3 text-right text-xs">
            VYVO SMART CHAIN
          </p>
        </div>
      </div>
    </>
  );
}

export default Section4;
