/* eslint-disable no-unused-vars */
import React from "react";

// import all section home
import Section1 from "./NoneResponsive/Section1";
import Section2 from "./NoneResponsive/Section2";
import Section3 from "./NoneResponsive/Section3";
import Section4 from "./NoneResponsive/Section4";
import Section5 from "./NoneResponsive/Section5";
import Section6 from "./NoneResponsive/Section6";
import Section7 from "./NoneResponsive/Section7";
import Section8 from "./NoneResponsive/Section8";
import Section9 from "./NoneResponsive/Section9";
import Section10 from "./NoneResponsive/Section10";
import Section11 from "./NoneResponsive/Section11";
import Section12 from "./NoneResponsive/Section12";
import Section13 from "./NoneResponsive/Section13";
import Section14 from "./NoneResponsive/Section14";
import Marquee from "../../components/Marquee";
import ResposiveHome from "./ResposiveHome/ResposiveHome";

function Home() {
  return (
    <>
      <div className="hidden lg:block">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
        <Section13 />
        <Section14 />
        <Marquee />
      </div>
      <ResposiveHome />
    </>
  );
}

export default Home;
