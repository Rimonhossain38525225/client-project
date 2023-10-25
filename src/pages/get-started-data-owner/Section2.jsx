/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section2.css";
function Section2() {
  return (
    <>
      <div className="data-owner-bg-2">
        <div className="mx-4 lg:mx-12 lg:pt-[80px]">
          <div className="grid grid-cols-12 gap-y-4 pt-40">
            <div className="hidden lg:block lg:col-span-3">
              <span className="text-[12px] leading-[18px] font-light text-[#979797]">
                WHAT IS?
              </span>
            </div>
            <div className="col-span-12 lg:col-span-9 grid grid-cols-12 gap-y-4 lg:pb-28">
              <div className="col-span-12">
                <span className="text-[36px] lg:text-[90px] font-light text-white">
                  <span className="faded-light-blue">Why</span> join VSC?
                </span>
              </div>
              <div className="col-span-12 lg:col-span-6 flex flex-col lg:gap-y-8 lg:px-1">
                <span className="text-white font-light">
                  The advent of wearable tech has revolutionized data
                  collection. Digital health platforms track behaviours and
                  activities. Some are free, some charge small fees— all sell
                  data.
                </span>
                <span className="faded-light-blue font-light">
                  VSC aims to build the world`s first decentralized health data
                  platform where users are the sole owners of their data and its
                  value.
                </span>
              </div>
              <div className="col-span-12 lg:col-span-6 flex flex-col lg:gap-y-8 lg:px-1">
                <span className="text-white font-light">
                  Users unknowingly give away ownership of their data through
                  dense terms and conditions, essentially being farmed. Large
                  organizations collect user’s data, allowing third parties to
                  sell it.
                </span>
                <span className="faded-light-blue font-light">
                  Users often don`t realize that these platforms generate
                  astronomical revenues from their data.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
