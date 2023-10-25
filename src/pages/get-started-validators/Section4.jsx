/* eslint-disable no-unused-vars */
import React from "react";
// css
import "./section4.css";
function Section4() {
  return (
    <>
      <div className="mx-4 lg:mx-12 mt-10 lg:mt-40">
        <div className="grid grid-cols-12 gap-y-4 lg:gap-y-0 lg:gap-x-8">
          <div className="col-span-12 vertical-lines-purple text-center flex  justify-center items-baseline gap-x-6 lg:mb-36">
            <span className="text-white text-[28px] leading-[36px] lg:text-[90px] lg:leading-[92px]">
              Rewards for <br />{" "}
              <span className="faded-pink-to-orange">
                Validators &amp; Delegators
              </span>
            </span>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="border-[1px] border-[#FCFCFC33] rounded-[12px] hover:border-white get-started-validators h-full 2xl:h-[470px]">
              <div className="p-6 h-full">
                <div className="flex flex-col gap-8 xl:gap-y-12 h-full">
                  <div className="">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="58"
                      height="58"
                      decoding="async"
                      data-nimg="1"
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=64&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=128&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fcircle-hexagon-inside.png&amp;w=128&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-light text-base text-[#979797] opacity-60">
                      001
                    </span>
                    <span className="faded-lilac-alt text-[36px] font-light block-title">
                      Validator Allocation
                    </span>
                    <span className="text-base font-light text-[#AFAFAF] opacity-70 block-text">
                      To support the initial growth and stability of the
                      network, VSC has allocated 25% of rewards available (2.5
                      billion coins) to be distributed to validators.
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="border-[1px] border-[#FCFCFC33] rounded-[12px] hover:border-white get-started-validators h-full 2xl:h-[470px]">
              <div className="p-6 h-full">
                <div className="flex flex-col gap-8 xl:gap-y-12 h-full">
                  <div className="">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="58"
                      height="58"
                      decoding="async"
                      data-nimg="1"
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-circle-square-inside.png&amp;w=64&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-circle-square-inside.png&amp;w=128&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-circle-square-inside.png&amp;w=128&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-light text-base text-[#979797] opacity-60">
                      002
                    </span>
                    <span className="faded-lilac-alt text-[36px] font-light block-title">
                      Delegation Rewards
                    </span>
                    <span className="text-base font-light text-[#AFAFAF] opacity-70 block-text">
                      <span className="faded-tangerine">Delegators</span> are
                      able to view the commission rate of each
                      <span className="faded-tangerine">
                        &nbsp; validator
                      </span>{" "}
                      to understand each validator`s reward distribution and a
                      relative rate of return on their stake.
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="border-[1px] border-[#FCFCFC33] rounded-[12px] hover:border-white get-started-validators h-full 2xl:h-[470px]">
              <div className="p-6 h-full">
                <div className="flex flex-col gap-8 xl:gap-y-12 h-full">
                  <div className="">
                    <img
                      alt="icon"
                      loading="lazy"
                      width="58"
                      height="58"
                      decoding="async"
                      data-nimg="1"
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2F2-diagonal-circle-square-middle.png&amp;w=64&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2F2-diagonal-circle-square-middle.png&amp;w=128&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fshapes%2F2-diagonal-circle-square-middle.png&amp;w=128&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-light text-base text-[#979797] opacity-60">
                      003
                    </span>
                    <span className="faded-lilac-alt text-[36px] font-light block-title">
                      Transaction Fees
                    </span>
                    <span className="text-base font-light text-[#AFAFAF] opacity-70 block-text">
                      <span className="faded-tangerine">Transaction fees</span>{" "}
                      on Vyvo Smart Chain are incurred by users when making
                      transactions on the network. Validators, who secure the
                      network and validate transactions, typically receive a
                      portion of these fees as rewards.
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0.5  bg-white/25 rounded-sm w-full col-span-12 mt-10 lg:mt-16"></div>
          <div className="col-span-6">
            <p className="text-[#979797] font-light leading-[18px] mt-3 text-xs">
              NODE REQUIREMENTS
            </p>
          </div>
          <div className="col-span-6">
            <p className="text-[#979797] font-light leading-[18px] mt-3 text-xs text-right">
              VYVO SMART CHAIN
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
