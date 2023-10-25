/* eslint-disable no-unused-vars */
import React from "react";
// css
import "./section2.css";
function Section2() {
  return (
    <>
      <div className="purple-circles-2 lg:h-[400px] mt-10 lg:mt-0">
        <div className="mx-4 lg:mx-12 lg:pt-[80px]">
          <div className="grid grid-cols-12 gap-y-8 lg:gap-y-16 lg:gap-x-16 lg:mt-24">
            <div className="col-span-12">
              <span className="text-[#7C7C7C] text-[30px] md:text-[36px] lg:hidden mr-6 lg:mr-20">
                {"//"}
              </span>
              <span className="text-[30px] md:text-[36px] leading-[36px] lg:text-[90px] lg:leading-[92px] font-light text-white">
                Why&nbsp;
              </span>
              <span className="text-[30px] md:text-[36px] leading-[36px] lg:text-[90px] lg:leading-[92px] font-light faded-lilac border-b-[1px] border-[#FFFFFFCC]">
                Blockchain?
              </span>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-3">
              <span className="faded-lilac text-base font-light leading-[22px]">
                Blockchain technology not only provides researchers with the
                datasets needed to accomplish their goals,but also the ability
                to scale their studies by magnitudes.
              </span>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <span className="text-[#FCFCFC] text-base font-light leading-[22px] opacity-50">
                Grow the ecosystem by supporting solutions that lead to more
                data accessibility through rewarding users.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
