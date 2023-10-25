/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// css
import "./header1.css";

// logo
import logo from "../../assets/images/logo.png";
const Header1 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="hidden md:pl-0 sticky top-0 w-full bg-black gap-2 lg:flex justify-between items-center z-[9999]">
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            loading="lazy"
            width="40"
            height="30"
            decoding="async"
            data-nimg="1"
            className="hidden lg:block ml-4 sm:ml-12"
            style={{ color: "transparent" }}
          />
        </NavLink>
        <nav>
          <div>
            <button
              type="button"
              className={
                toggle
                  ? "relative invisible flex-row items-center right-0 justify-center p-2 h-16 w-36 text-sm text-black focus:outline-none bg-white py-2 px-5"
                  : "relative flex flex-row items-center right-0 justify-center p-2 h-16 w-36 text-sm text-black focus:outline-none bg-white py-2 px-5"
              }
              onClick={() => setToggle(!toggle)}>
              <span className="sr-only">Open main menu</span>
              ++ MENU
            </button>

            {toggle && (
              <div className="hidden lg:block">
                <div className="absolute right-0 top-0 block animate-fade-left animate-duration-[300ms] animate-ease-in">
                  <div className="bg-[#292929D9] flex justify-between rounded-bl-lg rounded-br-lg w-full">
                    <button
                      type="button"
                      className="relative flex flex-row items-center right-0 justify-center ml-20 p-2 h-16 w-36 text-sm text-white focus:outline-none bg-transparent py-2 px-5 order-last"
                      onClick={() => setToggle(!toggle)}>
                      <span className="sr-only">Close main menu</span>-- CLOSE
                    </button>
                    <ul className="flex font-medium gap-x-10 p-8 text white text-xs py-4 text-white">
                      <li className="flex flex-col">
                        <NavLink
                          className="text white text-xs leading-[21px] tracking-[2px] py-4 font-medium opacity-90"
                          aria-current="page"
                          to="/">
                          HOME
                        </NavLink>
                      </li>
                      {/* <li className="flex flex-col">
                <span className="text white text-xs leading-[21px] tracking-[2px] py-4 font-medium opacity-90">
                  QUICK START
                </span>
                <a
                  className="block py-2 text-white font-normal"
                  aria-current="page"
                  href="/get-started-vsc"
                >
                  VSC Basics
                </a>
                <a
                  className="block py-2 text-white font-normal opacity-90"
                  aria-current="page"
                  href="/get-started-data-owner"
                >
                  For Data Owners
                </a>
                <a
                  className="block py-2 text-white font-normal opacity-90"
                  aria-current="page"
                  href="/mining-pools"
                >
                  For Mining Pools
                </a>
                <a
                  className="block py-2 text-white font-normal opacity-90"
                  aria-current="page"
                  href="/get-started-device-manufacturers"
                >
                  For Manufacturers
                </a>
                <a
                  className="block py-2 text-white font-normal opacity-90"
                  aria-current="page"
                  href="/get-started-data-buyer"
                >
                  For Data Services
                </a>
                <a
                  className="block py-2 text-white font-normal opacity-90"
                  aria-current="page"
                  href="/get-started-validators"
                >
                  For Staking
                </a>
              </li> */}
                      <li className="flex flex-col">
                        <span className="text white text-xs leading-[21px] tracking-[2px] py-4 font-medium">
                          ABOUT VSC
                        </span>
                        <a
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          href="/get-started-vsc#what-is-vsc">
                          What is VSC
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          href="/get-started-vsc#data-nfts">
                          Data-NFTs
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          href="/get-started-vsc#pose">
                          PoSe
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          href="/get-started-vsc#tokenomics">
                          Tokenomics
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          href="/get-started-vsc#ddh-platform">
                          DDH Platform
                        </a>
                        <a
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          target="_blank"
                          rel="noreferrer"
                          href="https://vyvo.org/">
                          VSC Foundation
                        </a>
                      </li>
                      <li className="flex flex-col">
                        <span className="text white text-xs leading-[21px] tracking-[2px] py-4 font-medium">
                          CONNECT
                        </span>
                        <a
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          target="_blank"
                          rel="noreferrer"
                          href="https://linktr.ee/vyvosmartchain">
                          Socials
                        </a>
                        <NavLink
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          to="/press">
                          Press
                        </NavLink>
                        <NavLink
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          to="/contact-us">
                          Contact
                        </NavLink>
                        <NavLink
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          to="/business-inquiries">
                          Business Inquiries
                        </NavLink>
                      </li>
                      <li className="flex flex-col">
                        <span className="text white text-xs leading-[21px] tracking-[2px] py-4 font-medium">
                          FUNCTIONS
                        </span>
                        <a
                          className="py-2 relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Wallet'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"></a>
                        <a
                          className="py-2 relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Bridge'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"></a>
                        <a
                          className="py-2 relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Stake'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"></a>
                        <a
                          className="py-2 relative text-white before:content-['Coming_Soon'] before:absolute before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:content-['Faucet'] after:duration-500 after:transition-opacity hover:after:opacity-0"
                          aria-current="page"
                          href="#"></a>
                      </li>
                      <li className="flex flex-col">
                        <span className="text white text-xs leading-[21px] tracking-[2px] py-4 font-medium uppercase">
                          Vyvo Backoffice <br /> (legacy users only)
                        </span>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="block py-2 text-white font-normal opacity-90"
                          aria-current="page"
                          href="https://masterrit.com/login">
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header1;
