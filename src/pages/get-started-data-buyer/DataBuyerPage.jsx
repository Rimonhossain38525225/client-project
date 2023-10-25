/* eslint-disable no-unused-vars */
import React from "react";
// css
import "./databuyer.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
function DataBuyerPage() {
  return (
    <>
      <div className="2xl:max-w-[1920px] 2xl:mx-auto">
        <div className=" cursor-default pt-[140px] lg:pt-0">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
      </div>
    </>
  );
}

export default DataBuyerPage;
