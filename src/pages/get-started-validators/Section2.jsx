/* eslint-disable no-unused-vars */
import React from "react";

function Section2() {
  return (
    <>
      <div className="lg:validators-ring-bg mt-10 lg:mt-20 2xl:mt-0 lg:h-[560px]">
        <div className="mx-4 lg:mx-12 lg:pt-[80px]">
          <div className="grid grid-cols-12 gap-y-8 lg:gap-y-16 lg:gap-x-16 lg:mt-24">
            <div className="col-span-12 lg:col-span-11">
              <span className="text-[#7C7C7C] text-[36px] lg:text-[2rem] lg:mr-20">
                {"//"}
              </span>
              <span className="text-[36px] leading-[36px] lg:text-[60px] lg:leading-[60px] 2xl:text-[90px] 2xl:leading-[92px] font-light text-white">
                Validators
                <br className="block lg:hidden" />
                <span className="text-[36px] leading-[36px] lg:text-[60px] lg:leading-[60px] 2xl:text-[90px] 2xl:leading-[92px] font-light faded-pink-to-orange lg:border-b-[1px] lg:border-[#FFFFFFCC] mx-4">
                  vs.
                </span>
                Delegators
              </span>
            </div>
            <div className="hidden lg:block lg:col-span-1 lg:col-start-12 vertical-text-right left-[100%]">
              <span className="text-xs leading-[18px] text-white">
                <span className="mr-6">[</span> VYVO&nbsp;
                <span className="text-[#979797] leading-[18px] ml-2">
                  /&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/
                </span>
                <span className="ml-6">]</span>
              </span>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-2 lg:gap-y-6">
              <span className="text-[12px] font-light opacity-90 text-[#AFAFAF]">
                VALIDATORS AND DELEGATORS
              </span>
              <span className="text-white text-base font-light leading-[22px] lg:pr-20">
                <span className="faded-pink-to-orange">Validators</span> and{" "}
                <span className="faded-pink-to-orange">Delegators</span> are the
                foundation of the VSC Network. By processing transactions, each
                validator helps make Vyvo Smart Chain the first decentralised
                health data platform in the world.
              </span>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-2 lg:gap-y-6">
              <span className="text-[12px] font-light opacity-90 text-[#AFAFAF]">
                VALIDATORS
              </span>
              <span className="text-white text-base font-light leading-[22px] lg:pr-20">
                <span className="faded-pink-to-orange">Validators</span> on Vyvo
                Smart Chain stake their Vyvo Coins as collateral using staking
                contracts to secure the network, and they receive rewards for
                their services. These rewards are distributed to all stakers
                based on their stake at each checkpoint, with an additional
                bonus for the proposer.
              </span>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-2 lg:gap-y-6">
              <span className="text-[12px] font-light opacity-90 text-[#AFAFAF]">
                DELEGATORS
              </span>
              <span className="text-white text-base font-light leading-[22px] lg:pr-20">
                <span className="faded-pink-to-orange">Delegators</span> are
                stake holders who do not want to run a
                <span className="faded-pink-to-orange">
                  &nbsp;validator&nbsp;
                </span>
                node themselves. Instead, they secure the network by delegating
                their stake to{" "}
                <span className="faded-pink-to-orange">validator nodes.</span>{" "}
                They play a critical role in the system, as they are responsible
                for choosing{" "}
                <span className="faded-pink-to-orange">Validators.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
