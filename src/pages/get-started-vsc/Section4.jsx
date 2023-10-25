/* eslint-disable no-unused-vars */
import React from "react";

import "./section4.css";
function Section4() {
  return (
    <>
      <div id="data-nfts" className="vsc-basics-bg-4 mt-10">
        <div className="mx-4 lg:mx-12 lg:pt-0">
          <div className="grid grid-cols-12 lg:gap-x-16 relative">
            <div className="col-span-12 mb-5 lg:mb-10">
              <span className="text-[36px] leading-[36px] lg:text-[90px] lg:leading-[92px] font-light text-white">
                $VSC <span className="faded-purple-vertical">and </span>{" "}
                <span className="border-b-[1px] border-[#FFFFFFCC]">
                  Data-NFTs
                </span>
              </span>
            </div>
            <div className="hidden lg:block col-span-4">
              <div className="flex flex-col h-full justify-between">
                <span className="font-light text-base text-[#FCFCFC] opacity-90">
                  How it works?
                </span>
                <img
                  alt="nft"
                  loading="lazy"
                  width="37"
                  height="38"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-dot-purple-square.png&amp;w=48&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-dot-purple-square.png&amp;w=96&amp;q=75 2x"
                  src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fwhite-square-purple-dot-purple-square.png&amp;w=96&amp;q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col">
              <span className="text-white text-base font-light leading-[22px]">
                <span className="faded-tangerine">Vyvo Coin ($VSC)</span> is the
                native currency of{" "}
                <span className="faded-lilac-alt">
                  Vyvo Smart Chain (VSC Network)
                </span>
                .<br /> $VSC a digital asset that runs on the VSC Network and
                serves as a medium of exchange within the ecosystem. $VSC can be
                used for various purposes, such as staking and participating in
                decentralised applications (dApps).
              </span>
              <span className="text-white text-base font-light leading-[22px] mt-10">
                $VSC`s main use is rewarding users who contribute health data
                through their VSC-compatible IoT devices, building the network`s
                <span className="faded-pink-tertiary">
                  &nbsp;Decentralised Data Health (DDH){" "}
                </span>{" "}
                Platform.
              </span>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col">
              <span className="text-white text-base font-light leading-[22px]">
                A user`s <span className="faded-orange">Data-NFT</span> is a
                ERC-721 token and a main component of PoSe, the Data-NFT must be
                stored in the user`s wallet to anonymously identify the user.
                The Data-NFT is linked to their IoT device as it collects data,
                acting as an anonymous shield between the health data and
                private user information.
              </span>
              <span className="faded-tangerine mt-10">
                This allows the user to be rewarded for their data.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
