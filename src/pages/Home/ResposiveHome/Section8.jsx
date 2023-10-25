/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section8.css";
function Section8() {
  return (
    <>
      <div className="mx-4 my-10">
        <div className="flex flex-col gap-y-8">
          <span className="text-white text-[36px] leading-[34px]">
            Developer <span className="faded-pink">Resources</span>
          </span>
          <div className="" style={{ opacity: 1, transform: "none" }}>
            <img
              alt="squares"
              loading="lazy"
              width="36"
              height="36"
              decoding="async"
              data-nimg="1"
              className="max-w-[36px] max-h-[36px] mr-8"
              srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2F3-diagonal-squares.png&amp;w=48&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2F3-diagonal-squares.png&amp;w=96&amp;q=75 2x"
              src="https://www.vyvo.com/_next/image?url=%2Fshapes%2F3-diagonal-squares.png&amp;w=96&amp;q=75"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="mb-8" style={{ opacity: 1, transform: "none" }}>
            <span className="text-[#FCFCFC] leading-[22px] font-light opacity-80 indent-8">
              A manual for joining the VSC Ecosystem.
              <br />
              By developers for developers.
            </span>
          </div>
        </div>
        <div id="developer-carousel">
          <div className="">
            <div className="swiper swiper-initialized swiper-horizontal mySwiper overflow-auto swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              ></div>
              <div
                className="swiper-scrollbar swiper-scrollbar-horizontal swiper-scrollbar-lock"
                style={{ display: "none" }}
              >
                <div
                  className="swiper-scrollbar-drag"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    width: "0px",
                  }}
                ></div>
              </div>
              <div className="h-[425px] bg-cover bg-[url('https://www.vyvo.com/backgrounds/buildingwatch.png')] mt-4 bg-right rounded-xl bg-no-repeat flex flex-wrap items-end mb-4">
                <div className="w-full">
                  <div className="pb-10 px-7 flex justify-between items-end py-5">
                    <div className="flex flex-col">
                      <span className="block text-[36px] leading-[38px] text-[#FCFCFC] text-start">
                        Starting building on VSC Network
                      </span>
                    </div>
                    <img
                      alt="plus"
                      loading="lazy"
                      width="25"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      className="ml-8"
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div className="h-[425px] bg-cover bg-[url('https://www.vyvo.com/backgrounds/expand-carousel-card2.png')] bg-right rounded-xl bg-no-repeat flex flex-wrap items-end mb-4">
                <div className="w-full">
                  <div className="items-end pb-10 px-7 flex justify-between py-5">
                    <div className="flex flex-col">
                      <span className="block text-[36px] leading-[38px] text-[#FCFCFC] text-start">
                        Developers Tools and Resources
                      </span>
                    </div>
                    <img
                      alt="plus"
                      loading="lazy"
                      width="25"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      className="ml-8"
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div className="h-[425px] bg-cover bg-[url('https://www.vyvo.com/backgrounds/nutralifeai-2-no-text.png')] bg-right rounded-xl bg-no-repeat flex flex-wrap items-end mb-4">
                <div className="w-full">
                  <div className="items-end pb-10 px-7 flex justify-between py-5">
                    <div className="flex flex-col">
                      <span className="block text-[36px] leading-[38px] text-[#FCFCFC] text-start">
                        Foundation Grant Program
                      </span>
                    </div>
                    <img
                      alt="plus"
                      loading="lazy"
                      width="25"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      className="ml-8"
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-8 gap-y-4">
          <span className="text-white text-[36px] font-light leading-[48px]">
            Successful Projects &amp; Partners
          </span>
          <a href="/get-started-device-manufacturers">
            <button className="border-faded-pink py-4 w-full flex justify-center items-center hover:border-faded-pink-pressed">
              <span className="text-white">Learn More</span>
              <img
                alt="Arrow right"
                loading="lazy"
                width="4"
                height="8"
                decoding="async"
                data-nimg="1"
                className="ml-4"
                src="https://www.vyvo.com/shapes/arrow-right.svg"
                style={{
                  color: "transparent",
                  objectFit: "contain",
                  objectPosition: "left center",
                }}
              />
            </button>
          </a>
        </div>
        <div className="border-[1px] border-[#FFFFFF] opacity-[25%]"></div>
        <div className="my-10" id="projects-carousel">
          <div className="card-container-mobile">
            <div className="w-[300px] sm:w-[422px] h-[526px] bg-[url('https://www.vyvo.com/backgrounds/inPersona.png')] bg-no-repeat rounded-xl pl-7 pt-7 flex flex-col card-mobile">
              <div className="flex space-x-[10px] z-10">
                <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                  001
                </div>
                <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                  DAPP
                </div>
              </div>
              <div className="mt-auto self-start text-4xl leading-[38px] text-[#FCFCFC] pb-[30px] z-10">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://inpersona.com/"
                >
                  inPersona
                </a>
              </div>
            </div>
            <div className="w-[422px] h-[526px] bg-[url('https://www.vyvo.com/backgrounds/watch_mockup.png')] bg-no-repeat rounded-xl pl-7 pt-7 flex flex-col bg-[#CBCBCB] card-mobile">
              <div className="flex space-x-[10px] z-10">
                <div className="text-gray-900 rounded-full border border-gray-900 font-light text-sm leading-4 py-1 px-3">
                  002
                </div>
                <div className="text-gray-900 rounded-full border border-gray-900 font-light text-sm leading-4 py-1 px-3">
                  IOT DEVICE
                </div>
              </div>
              <div className="mt-auto self-start text-4xl leading-[38px] text-[#FCFCFC] pb-[30px] z-10">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://helohealth.com/"
                >
                  Helo Health
                </a>
              </div>
            </div>
            <div className="w-[422px] h-[526px] bg-[url('https://www.vyvo.com/backgrounds/nutralife_flipped.png')] bg-no-repeat rounded-xl pl-7 pt-7 flex flex-col bg-cover card-mobile">
              <div className="flex space-x-[10px] z-10">
                <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                  003
                </div>
                <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                  IOT DEVICE
                </div>
              </div>
              <div className="mt-auto self-start text-4xl leading-[38px] text-[#FCFCFC] pb-[30px] z-10">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://nutralife.ai/"
                >
                  NutraLife AI
                </a>
              </div>
            </div>
            <div className="w-[422px] h-[526px] bg-[url('/backgrounds/odee-tablet-bg.png')] bg-no-repeat rounded-xl pl-7 pt-7 flex flex-col bg-cover card-mobile">
              <div className="flex space-x-[10px] z-10">
                <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                  003
                </div>
                <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                  DAPP
                </div>
              </div>
              <div className="mt-auto self-start text-4xl leading-[38px] text-[#FCFCFC] pb-[30px] z-10">
                <a target="_blank" rel="noreferrer" href="https://odee.cpm/">
                  Odee Digital
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-white text-[36px] leading-[36px] font-normal">
            FAQs
          </span>
        </div>
        <div className=" mt-10">
          <div className="chakra-accordion bg-transparent css-0">
            <div className="chakra-accordion__item css-mwf1ir">
              <h2>
                <button
                  className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 flex items-center css-1k491gn"
                  type="button"
                  id="accordion-button-:r6c:"
                  aria-expanded="false"
                  aria-controls="accordion-panel-:r6c:"
                  data-index="0"
                >
                  <span className="text-[14px] font-light opacity-40 text-[#FCFCFC] mr-10">
                    01.
                  </span>
                  <span className="text-[#FCFCFC]  opacity-40 text-[16px] leading-[44px] font-light py-4 css-1eziwv">
                    What is Vyvo Smart Chain Network?
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon chakra-accordion__icon css-186l2rg"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                className="chakra-collapse"
                style={{
                  overflow: "hidden",
                  display: "none",
                  opacity: 0,
                  height: "0px",
                }}
              >
                <div
                  role="region"
                  id="accordion-panel-:r6c:"
                  aria-labelledby="accordion-button-:r6c:"
                  className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light leading-[22px] text-[14px] css-1hb5ode"
                >
                  <span className="font-light opacity-40 text-[#FCFCFC] hidden">
                    02.
                  </span>
                  Vyvo Smart Chain Network is a Layer 1 Ethereum-compatible
                  blockchain network. It is the latest blockchain framework that
                  aims to ensure data security and decentralization through
                  hybrid Proof-of-Stake (PoS) and Proof-of-Sensing (PoSe)
                  validation protocols.
                </div>
              </div>
            </div>
            <div className="chakra-accordion__item css-1dy2maw">
              <h2>
                <button
                  className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 css-1k491gn"
                  type="button"
                  id="accordion-button-:r6e:"
                  aria-expanded="false"
                  aria-controls="accordion-panel-:r6e:"
                  data-index="1"
                >
                  <span className="text-[14px] font-light opacity-40 text-[#FCFCFC] mr-10">
                    02.
                  </span>
                  <span className="text-[#FCFCFC]  opacity-40 text-[16px] leading-[44px] font-light py-4 css-1eziwv">
                    What is Proof-of-Sensing?
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon chakra-accordion__icon css-186l2rg"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                className="chakra-collapse"
                style={{
                  overflow: "hidden",
                  display: "none",
                  opacity: 0,
                  height: "0px",
                }}
              >
                <div
                  role="region"
                  id="accordion-panel-:r6e:"
                  aria-labelledby="accordion-button-:r6e:"
                  className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light leading-[22px] text-[14px] flex  css-1hb5ode"
                >
                  <span className="font-light opacity-40 text-[#FCFCFC] hidden">
                    03.
                  </span>
                  Proof-of-Sensing (PoSe) is a validation protocol utilised by
                  Vyvo Smart Chain to authenticate health data generated by IoT
                  wearable devices. It verifies the authenticity of data and
                  ensures that it comes from real users.
                </div>
              </div>
            </div>
            <div className="chakra-accordion__item css-1dy2maw">
              <h2>
                <button
                  className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 flex items-center css-1k491gn"
                  type="button"
                  id="accordion-button-:r6g:"
                  aria-expanded="false"
                  aria-controls="accordion-panel-:r6g:"
                  data-index="2"
                >
                  <span className="text-[14px] font-light opacity-40 text-[#FCFCFC] mr-10">
                    03.
                  </span>
                  <span className="text-[#FCFCFC]  opacity-40 text-[16px] leading-[44px] font-light py-4 css-1eziwv">
                    What is Vyvo Coin $(VSC)?
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon chakra-accordion__icon css-186l2rg"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                className="chakra-collapse"
                style={{
                  overflow: "hidden",
                  display: "none",
                  opacity: 0,
                  height: "0px",
                }}
              >
                <div
                  role="region"
                  id="accordion-panel-:r6g:"
                  aria-labelledby="accordion-button-:r6g:"
                  className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light leading-[22px] text-[14px] flex  css-1hb5ode"
                >
                  <span className="font-light opacity-40 text-[#FCFCFC] hidden">
                    04.
                  </span>
                  Vyvo Coin ($VSC) is the native cryptocurrency of Vyvo Smart
                  Chain Network. It is used for various purposes within the
                  ecosystem, including staking and rewarding users for
                  contributions.
                </div>
              </div>
            </div>
            <div className="chakra-accordion__item css-1dy2maw">
              <h2>
                <button
                  className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 flex items-center css-1k491gn"
                  type="button"
                  id="accordion-button-:r6i:"
                  aria-expanded="false"
                  aria-controls="accordion-panel-:r6i:"
                  data-index="3"
                >
                  <span className="text-[14px] font-light opacity-40 text-[#FCFCFC] mr-10">
                    04.
                  </span>
                  <span className="text-[#FCFCFC]  opacity-40 text-[16px] leading-[44px] font-light py-4 css-1eziwv">
                    What is the Burn and Mint Mechanism?
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon chakra-accordion__icon css-186l2rg"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                className="chakra-collapse"
                style={{
                  overflow: "hidden",
                  display: "none",
                  opacity: 0,
                  height: "0px",
                }}
              >
                <div
                  role="region"
                  id="accordion-panel-:r6i:"
                  aria-labelledby="accordion-button-:r6i:"
                  className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light leading-[22px] text-[14px] flex  css-1hb5ode"
                >
                  <span className="font-light opacity-40 text-[#FCFCFC] hidden">
                    05.
                  </span>
                  The Burn-and-Mint Economics of $VSC to $VDC relationship is
                  designed to maintain a supply of $VSC that responds to data
                  purchase trends. This equilibrium ensures that the amount of
                  $VSC in circulation remains constant month-to-month, while the
                  amount of $VDC produced by burning $VSC will fluctuate based
                  on the USD price of $VSC.
                </div>
              </div>
            </div>
            <div className="chakra-accordion__item css-1dy2maw">
              <h2>
                <button
                  className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 flex items-center css-1k491gn"
                  type="button"
                  id="accordion-button-:r6k:"
                  aria-expanded="false"
                  aria-controls="accordion-panel-:r6k:"
                  data-index="4"
                >
                  <span className="text-[14px] font-light opacity-40 text-[#FCFCFC] mr-10">
                    05.
                  </span>
                  <span className="text-[#FCFCFC]  opacity-40 text-[16px] leading-[44px] font-light py-4 css-1eziwv">
                    What is the Decentralized Digital Health (DDH) Platform?
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon chakra-accordion__icon css-186l2rg"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                className="chakra-collapse"
                style={{
                  overflow: "hidden",
                  display: "none",
                  opacity: 0,
                  height: "0px",
                }}
              >
                <div
                  role="region"
                  id="accordion-panel-:r6k:"
                  aria-labelledby="accordion-button-:r6k:"
                  className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light leading-[22px] flex text-[14px] css-1hb5ode"
                >
                  <span className="font-light opacity-40 text-[#FCFCFC] hidden">
                    06.
                  </span>
                  The Decentralised Digital Health (DDH) is a platform within
                  the Vyvo Smart Chain ecosystem that enables researchers and
                  institutions to access authenticated health data generated by
                  IoT devices.
                </div>
              </div>
            </div>
            <div className="chakra-accordion__item css-1dy2maw">
              <h2>
                <button
                  className="chakra-accordion__button bg-black hover:bg-transparent border-t-0 flex items-center css-1k491gn"
                  type="button"
                  id="accordion-button-:r6m:"
                  aria-expanded="false"
                  aria-controls="accordion-panel-:r6m:"
                  data-index="5"
                >
                  <span className="text-[14px] font-light opacity-40 text-[#FCFCFC] mr-10">
                    06.
                  </span>
                  <span className="text-[#FCFCFC]  opacity-40 text-[16px] leading-[44px] font-light py-4 css-1eziwv">
                    Is my data safe?
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon chakra-accordion__icon css-186l2rg"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                className="chakra-collapse"
                style={{
                  overflow: "hidden",
                  display: "none",
                  opacity: 0,
                  height: "0px",
                }}
              >
                <div
                  role="region"
                  id="accordion-panel-:r6m:"
                  aria-labelledby="accordion-button-:r6m:"
                  className="chakra-accordion__panel opacity-50 text-[#F6F6F6] font-light leading-[22px] text-[14px] flex css-1hb5ode"
                >
                  <span className="font-light opacity-40 text-[#FCFCFC] hidden">
                    07.
                  </span>
                  Yes, Vyvo Smart Chain prioritises data security and privacy.
                  The use of the VSC-PoSe Encryption Chip ensures that data
                  generated by wearable devices is authenticated and kept
                  anonymous on the blockchain network, ensuring the security of
                  user data.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-10">
          <span className="text-[36px] font-light leading-[36px] text-white">
            Some of our partners
          </span>
        </div>
      </div>
    </>
  );
}

export default Section8;
