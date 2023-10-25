/* eslint-disable no-unused-vars */
import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function PressPage() {
  return (
    <>
      <div className="2xl:max-w-[1920px] 2xl:mx-auto">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
}
