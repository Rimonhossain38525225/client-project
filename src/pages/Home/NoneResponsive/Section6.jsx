/* eslint-disable no-unused-vars */
import React from "react";
import "./section6.css";

function Section6() {
  return (
    <>
      <div className="bg-white mt-10 pb-36">
        <div className="lg:mx-12">
          <div className="grid grid-cols-12 pt-12 lg:gap-x-20 gap-y-8">
            {/* top  */}
            <div className="col-span-12">
              <span className="text-[#979797] leading-[21px] text-base font-light tracking-wider">
                VYVO ECOSYSTEM
              </span>
            </div>

            <div className="col-span-12 lg:col-span-5 text-[50px] 2xl:text-[90px]">
              <span className="text-[#BABABA] lg:mr-20">/</span>
              <span className="faded-lilac">Wearable</span>
            </div>

            <div className="col-span-12 lg:col-span-6 text-[50px] 2xl:text-[90px] xl:leading-[92px]">
              <div style={{ opacity: 1, transform: "none" }}>
                <span className="faded-lilac">
                  Technology Manufacturers <span className="lg:ml-20">/</span>
                </span>
              </div>
            </div>
            {/* left image and become a parter */}
            <div className="col-span-4 col-start-1">
              <div style={{ opacity: 1, transform: "none" }}>
                <div className="band-bg rounded-xl flex flex-col justify-between items-start p-8">
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex flex-col">
                      <span className="text-base leading-[21px] font-light text-[#FCFCFC]">
                        Encrypt user data
                      </span>
                      <span className="text-base leading-[21px] font-light text-[#FCFCFC] text-right">
                        Authenticate Health Data
                      </span>
                    </div>
                    <div className="col-span-6 col-start-11">
                      <img
                        alt="circle image"
                        loading="lazy"
                        width="74"
                        height="47"
                        decoding="async"
                        data-nimg="1"
                        className=""
                        style={{ color: "transparent" }}
                        // srcSet="/_next/image?url=%2Fshapes%2Fdifferent-circles.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2Fshapes%2Fdifferent-circles.png&amp;w=256&amp;q=75 2x"
                        src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdifferent-circles.png&amp;w=256&amp;q=75"
                      />
                    </div>
                    <a
                      className="col-span-8 xl:col-span-6 col-start-1"
                      href="/get-started-vsc#pose"
                    >
                      <button className="mt-4 border-white border-solid border-[1px] rounded-[55px] px-4 py-2 w-full">
                        <span className="text-white">VSC-PoSe Chip</span>
                      </button>
                    </a>
                  </div>
                  <a href="/business-inquiries">
                    <button className="faded-purple-bg x-10 rounded-[43px] px-10 py-4 flex justify-center items-center text-white hover:text-black">
                      <span className="">Become a Partner</span>
                      <svg
                        width="4"
                        height="8"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-4"
                        style={{ color: "black" }}
                      >
                        <path
                          d="M1 1L5 5L1 9"
                          stroke="#FCFCFC"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-8 ">
              <div className="grid grid-cols-12 gap-x-10">
                {/* right side 1 */}
                <div className="col-span-6">
                  <div className="relative top-[-10%] heart-hover-text z-[90]">
                    <div style={{ height: "200px" }}>{/* svg insert */}</div>
                  </div>
                  <div className="flex flex-col items-start gap-y-4 mb-4 relative top-[-30%]">
                    <p
                      id="heart-text"
                      className="text-[36px] text-black opacity-40 hover:faded-pink hover:opacity-100 leading-[38px] font-light pt-8 pb-4"
                    >
                      Differentiate from Competitors
                    </p>
                    <p className="text-[#0D0D0D] font-light leading-[22px]">
                      In the fast-changing space of IoT devices, it&apos;s
                      difficult to stand out. Web3 provides a way to give you an
                      extra advantage against your competitors.
                    </p>
                    <p className="text-[21px] text-black opacity-40 leading-[24px]">
                      003
                    </p>
                  </div>
                </div>
                {/* right side 2 */}
                <div className="col-span-6">
                  <div className="relative top-[-10%] heart-hover-text z-[90]">
                    <div style={{ height: "200px" }}>{/* svg insert */}</div>
                  </div>
                  <div className="flex flex-col items-start gap-y-4 mb-4 relative top-[-30%]">
                    <p
                      id="heart-text"
                      className="text-[36px] text-black opacity-40 hover:faded-pink hover:opacity-100 leading-[38px] font-light pt-8 pb-4"
                    >
                      Leverage Web3 on devices
                    </p>
                    <p className="text-[#0D0D0D] font-light leading-[22px]">
                      With VSC&apos;s infrastructure, almost any IoT device can
                      be bridged to the new decentralised economy.
                    </p>
                    <p className="text-[21px] text-black opacity-40 leading-[24px]">
                      004
                    </p>
                  </div>
                </div>
                {/* right side 3 */}
                <div className="col-span-6 border-b-2 border-[#0000004D]">
                  <div className="relative top-[-10%] heart-hover-text z-[90]">
                    <div style={{ height: "200px" }}>{/* svg insert */}</div>
                  </div>

                  <div className="flex flex-col items-start gap-y-4 mb-4 relative top-[-30%]">
                    <p
                      id="heart-text"
                      className="text-[36px] text-black opacity-40 hover:faded-pink hover:opacity-100 leading-[38px] font-light pt-8 pb-4"
                    >
                      Benefit your Users
                    </p>
                    <p className="text-[#0D0D0D] font-light leading-[22px]">
                      Our proprietary Proof-of-Sensing (PoSe) Chip encrypts data
                      from device hardware, providing data security for device
                      users and allowing them to monetise their data.
                    </p>
                    <p className="text-[21px] text-black opacity-40 leading-[24px]">
                      005
                    </p>
                  </div>
                </div>
                {/* right side 4  */}
                <div className="col-span-6 border-b-2 border-[#0000004D]">
                  <div className="relative top-[-10%] heart-hover-text z-[90]">
                    <div style={{ height: "200px" }}>{/* svg insert */}</div>
                  </div>
                  <div className="flex flex-col items-start gap-y-4 mb-4 relative top-[-30%]">
                    <p
                      id="heart-text"
                      className="text-[36px] text-black opacity-40 hover:faded-pink hover:opacity-100 leading-[38px] font-light pt-8 pb-4"
                    >
                      Streamlining Adoption on VSC
                    </p>
                    <p className="text-[#0D0D0D] font-light leading-[22px]">
                      Quick-start on VSC by importing your incentive program
                      with white-label dApps through VSC developers.
                    </p>
                    <p className="text-[21px] text-black opacity-40 leading-[24px]">
                      006
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
