/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
const Header2 = () => {
  const [toggle, setToggle] = useState(true);
  const [opneColaps1, setOpneColaps1] = useState(false);
  const [opneColaps2, setOpneColaps2] = useState(false);
  const [opneColaps3, setOpneColaps3] = useState(false);
  const [opneColaps4, setOpneColaps4] = useState(false);
  const [opneColaps5, setOpneColaps5] = useState(false);
  return (
    <>
      <header
        className={
          toggle
            ? "flex md:pl-0 fixed mt-0 pt-0 top-0 w-full bg-[#292929E6] lg:hidden justify-between items-center z-[9999]"
            : "flex md:pl-0 fixed mt-0 pt-0 top-0 w-full bg-black lg:hidden justify-between items-center z-[9999]"
        }
      >
        <a href="/">
          <img
            alt="logo"
            loading="lazy"
            width="50"
            height="29"
            decoding="async"
            data-nimg="1"
            className="ml-4 sm:ml-12"
            src={logo}
            style={{ color: "transparent" }}
          />
        </a>
        <nav className="">
          <div className="">
            <button
              type="button"
              className={
                toggle
                  ? "relative flex flex-row items-center right-0 justify-center p-2 h-16 w-36 text-sm text-black focus:outline-none bg-white py-2 px-5"
                  : "relative invisible flex-row items-center right-0 justify-center p-2 h-16 w-36 text-sm text-black focus:outline-none bg-white py-2 px-5"
              }
              onClick={() => setToggle(!toggle)}
            >
              <span className="sr-only">Open main menu</span>++ MENU
            </button>
            <div className={toggle ? "hidden" : "block"}>
              <div className="w-full absolute right-0 top-0 block animate-fade-left animate-duration-[300ms] animate-ease-in">
                <div className="bg-[#292929CC] flex justify-between items-center">
                  <a href="/">
                    <img
                      alt="logo"
                      loading="lazy"
                      width="50"
                      height="29"
                      decoding="async"
                      data-nimg="1"
                      className="ml-4 sm:ml-12"
                      // src="/_next/static/media/header-logo-bigger.0826e469.svg"
                      src={logo}
                      style={{ color: "transparent" }}
                    />
                  </a>
                  <button
                    type="button"
                    className="relative flex flex-row items-center right-0 justify-center ml-20 p-2 h-16 w-36 text-sm text-white focus:outline-none bg-transparent py-2 px-5 order-last"
                    onClick={() => setToggle(!toggle)}
                  >
                    <span className="sr-only">Close main menu</span>-- CLOSE
                  </button>
                </div>
                <div className="chakra-accordion bg-[#292929CC] css-0">
                  {/* <div
                    className="chakra-accordion__item css-1kobvuv"
                    onClick={() => setOpneColaps1(!opneColaps1)}>
                    <h2>
                      <button
                        className="chakra-accordion__button bg-[#292929CC] hover:bg-[#292929CC] border-t-0 flex items-center css-1k491gn"
                        type="button"
                        id="accordion-button-:r20:"
                        aria-expanded="false"
                        aria-controls="accordion-panel-:r20:"
                        data-index="0">
                        <span className="faded-lilac text-[16px] leading-[44px] font-light py-4 css-1eziwv">
                          Quick Start
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon chakra-accordion__icon css-186l2rg"
                          aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      className="chakra-collapse block animate-fade-left animate-duration-[200ms] animate-ease-in"
                      style={
                        opneColaps1
                          ? {
                              overflow: "hidden",
                              display: "block",
                              opacity: "1",
                              height: "auto",
                            }
                          : {
                              overflow: "hidden",
                              display: "none",
                              opacity: 0,
                              height: "0px",
                            }
                      }>
                      <div
                        role="region"
                        id="accordion-panel-:r20:"
                        aria-labelledby="accordion-button-:r20:"
                        className="chakra-accordion__panel bg-[#292929CC] text-[#F6F6F6] font-light leading-[22px] text-[14px] grid grid-cols-12 css-1hb5ode ml-4">
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/get-started-vsc">
                          VSC Basics
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/get-started-data-owner">
                          For Data Owners
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/mining-pools">
                          For Mining Pools
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/get-started-device-manufacturers">
                          For Manufactures
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/get-started-data-buyer">
                          For Data Services
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/get-started-validators">
                          For Staking
                        </a>
                      </div>
                    </div>
                  </div> */}
                  <div
                    className="chakra-accordion__item css-1dy2maw"
                    onClick={() => setOpneColaps2(!opneColaps2)}
                  >
                    <h2>
                      <button
                        className="chakra-accordion__button bg-[#292929CC] hover:bg-[#292929CC] border-t-0 flex items-center css-1k491gn"
                        type="button"
                        id="accordion-button-:r22:"
                        aria-expanded="false"
                        aria-controls="accordion-panel-:r22:"
                        data-index="1"
                      >
                        <span className="faded-lilac text-[16px] leading-[44px] font-light py-4 css-1eziwv">
                          About VSC
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
                      className="chakra-collapse block animate-fade-left animate-duration-[200ms] animate-ease-in"
                      style={
                        opneColaps2
                          ? {
                              overflow: "hidden",
                              display: "block",
                              opacity: "1",
                              height: "auto",
                            }
                          : {
                              overflow: "hidden",
                              display: "none",
                              opacity: 0,
                              height: "0px",
                            }
                      }
                    >
                      <div
                        role="region"
                        id="accordion-panel-:r22:"
                        aria-labelledby="accordion-button-:r22:"
                        className="chakra-accordion__panel bg-[#292929CC] text-[#F6F6F6] font-light leading-[22px] text-[14px] grid grid-cols-12 css-1hb5ode ml-4"
                      >
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/get-started-vsc#what-is-vsc"
                        >
                          What is VSC
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/get-started-vsc#mobile-timeline"
                        >
                          Roadmap
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/get-started-vsc#data-nfts"
                        >
                          Data-NFTs
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          target="_blank"
                          rel="noreferrer"
                          href="https://vyvo.org/"
                        >
                          VSC Foundation
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/get-started-vsc#pose"
                        >
                          PoSe
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/get-started-vsc#ddh-platform"
                        >
                          DDH Platform
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/get-started-vsc#tokenomics"
                        >
                          Tokenomics
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="chakra-accordion__item css-1dy2maw"
                    onClick={() => setOpneColaps3(!opneColaps3)}
                  >
                    <h2>
                      <button
                        className="chakra-accordion__button bg-[#292929CC] hover:bg-[#292929CC] border-t-0 css-1k491gn"
                        type="button"
                        id="accordion-button-:r24:"
                        aria-expanded="false"
                        aria-controls="accordion-panel-:r24:"
                        data-index="2"
                      >
                        <span className="faded-lilac text-[16px] leading-[44px] font-light py-4 css-1eziwv">
                          Connect
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
                      className="chakra-collapse block  animate-fade-left animate-duration-[200ms] animate-ease-in"
                      style={
                        opneColaps3
                          ? {
                              overflow: "hidden",
                              display: "block",
                              opacity: "1",
                              height: "auto",
                            }
                          : {
                              overflow: "hidden",
                              display: "none",
                              opacity: 0,
                              height: "0px",
                            }
                      }
                    >
                      <div
                        role="region"
                        id="accordion-panel-:r24:"
                        aria-labelledby="accordion-button-:r24:"
                        className="chakra-accordion__panel ml-4 bg-[#292929CC] text-[#F6F6F6] font-light leading-[22px] text-[14px] grid grid-cols-12 css-1hb5ode"
                      >
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          target="_blank"
                          rel="noreferrer"
                          href="https://linktr.ee/vyvosmartchain"
                        >
                          Socials
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/contact-us"
                        >
                          Contact
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/press"
                        >
                          Press
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="/business-inquiries"
                        >
                          Business Inquiries
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="chakra-accordion__item css-1dy2maw"
                    onClick={() => setOpneColaps4(!opneColaps4)}
                  >
                    <h2>
                      <button
                        className="chakra-accordion__button bg-[#292929CC] hover:bg-[#292929CC] border-t-0 flex items-center css-1k491gn"
                        type="button"
                        id="accordion-button-:r26:"
                        aria-expanded="false"
                        aria-controls="accordion-panel-:r26:"
                        data-index="3"
                      >
                        <span className="faded-lilac text-[16px] leading-[44px] font-light py-4 css-1eziwv">
                          Functions
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
                      className="chakra-collapse block animate-fade-left animate-duration-[200ms] animate-ease-in"
                      style={
                        opneColaps4
                          ? {
                              overflow: "hidden",
                              display: "block",
                              opacity: "1",
                              height: "auto",
                            }
                          : {
                              overflow: "hidden",
                              display: "none",
                              opacity: 0,
                              height: "0px",
                            }
                      }
                    >
                      <div
                        role="region"
                        id="accordion-panel-:r26:"
                        aria-labelledby="accordion-button-:r26:"
                        className="chakra-accordion__panel ml-4 bg-[#292929CC] text-[#F6F6F6] font-light leading-[22px] text-[14px] grid grid-cols-12 css-1hb5ode"
                      >
                        <a
                          className="col-span-6 py-2 block relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Wallet'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"
                        ></a>
                        <a
                          className="col-span-6 py-2 relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Bridge'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"
                        ></a>
                        <a
                          className="col-span-6 py-2 relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Faucet'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"
                        ></a>
                        <a
                          className="col-span-6 py-2 relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Stake'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="chakra-accordion__item css-1dy2maw"
                    onClick={() => setOpneColaps5(!opneColaps5)}
                  >
                    <h2>
                      <button
                        className="chakra-accordion__button bg-[#292929CC] hover:bg-[#292929CC] border-t-0 flex items-center css-1k491gn"
                        type="button"
                        id="accordion-button-:r28:"
                        aria-expanded="false"
                        aria-controls="accordion-panel-:r28:"
                        data-index="4"
                      >
                        <span className="faded-lilac text-[16px] leading-[44px] font-light py-4 css-1eziwv">
                          Vyvo Backoffice (legacy users only)
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
                      className="chakra-collapse block animate-fade-left animate-duration-[200ms] animate-ease-in"
                      style={
                        opneColaps5
                          ? {
                              overflow: "hidden",
                              display: "block",
                              opacity: "1",
                              height: "auto",
                            }
                          : {
                              overflow: "hidden",
                              display: "none",
                              opacity: 0,
                              height: "0px",
                            }
                      }
                    >
                      <div
                        role="region"
                        id="accordion-panel-:r28:"
                        aria-labelledby="accordion-button-:r28:"
                        className="chakra-accordion__panel ml-4 bg-[#292929CC] text-[#F6F6F6] font-light leading-[22px] text-[14px] grid grid-cols-12 css-1hb5ode"
                      >
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="block py-2 text-white font-normal opacity-90 col-span-6"
                          aria-current="page"
                          href="https://my.vyvo.com/login"
                        >
                          Login
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header2;
