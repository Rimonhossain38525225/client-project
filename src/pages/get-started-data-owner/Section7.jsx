/* eslint-disable no-unused-vars */
import React from "react";
// css
import "./section7.css";
function Section7() {
  return (
    <>
      <div className="mt-10 lg:mt-0">
        <div className="mx-4 lg:mx-12">
          <div className="grid grid-cols-12 gap-y-4">
            <div className="col-span-6 lg:pt-[160px]">
              <p className="text-[#979797] font-light leading-[18px] mt-3 text-xs">
                WHAT IS INPERSONA?
              </p>
            </div>
            <div className="col-span-6">
              <p className="text-[#979797] font-light leading-[18px] mt-3 text-right text-xs">
                VYVO SMART CHAIN
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:grid grid-cols-12">
              <div className="col-span-12">
                <span className="text-[36px] leading-[36px] lg:text-[90px] lg:leading-[92px] font-light text-white">
                  The First VSC
                  <br />
                  <span className="text-[#7C7C7C] text-[36px] lg:text-[2rem] lg:mr-40">
                    {"//"}
                  </span>
                  <span className="faded-light-blue">dApp inPersona</span>
                </span>
              </div>
              <div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0">
                <div className="flex flex-col gap-y-8">
                  <div className="flex justify-start">
                    <img
                      alt="shape"
                      loading="lazy"
                      width="22"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      className="lg:ml-20"
                      style={{ color: "transparent" }}
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=48&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fhourglass.png&amp;w=48&amp;q=75"
                    />
                  </div>
                  <span className="text-[#AFAFAF] text-base font-light leading-[22px]">
                    A decentralized application that incentivizes positive
                    health and lifestyle behavior.
                  </span>
                  <a href="https://www.inpersona.com/">
                    <button className="border-faded-green py-4 px-8 w-full lg:w-full 2xl:w-3/5 flex justify-center items-center hover:border-faded-green-hover">
                      <span className="text-white">Learn More</span>
                      <img
                        alt="Arrow right"
                        loading="lazy"
                        width="4"
                        height="8"
                        decoding="async"
                        data-nimg="1"
                        className="ml-4"
                        style={{
                          color: "transparent",
                          objectFit: "contain",
                          objectPosition: "left",
                        }}
                        src="https://www.vyvo.com/shapes/arrow-right.svg"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-4">
              <img
                alt="phone"
                loading="lazy"
                width="766"
                height="419"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fonly-phone.png&amp;w=828&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fonly-phone.png&amp;w=1920&amp;q=75 2x"
                src="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fonly-phone.png&amp;w=1920&amp;q=75"
              />
              <div className="border-faded-light-blue-store relative top-[-15%] right-[22%]">
                <div className="flex flex-col p-5">
                  <div className="flex items-center">
                    <img
                      alt="logo"
                      loading="lazy"
                      width="33"
                      height="29"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      srcSet="https://www.vyvo.com/_next/image?url=%2Flogos%2Finpersona-heart.png&amp;w=48&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Flogos%2Finpersona-heart.png&amp;w=96&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Flogos%2Finpersona-heart.png&amp;w=96&amp;q=75"
                    />
                    <span className="pl-2 faded-light-blue text-base font-light leading-[21px]">
                      Available for
                    </span>
                  </div>
                  <div className="grid grid-cols-3 mt-6">
                    <div className="col-span-1">
                      <a href="https://apps.apple.com/us/app/inpersona/id1661515831">
                        <img
                          alt="apple store"
                          loading="lazy"
                          width="140"
                          height="41"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="https://www.vyvo.com/_next/image?url=%2Flogos%2Fapplestore.png&amp;w=256&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Flogos%2Fapplestore.png&amp;w=384&amp;q=75 2x"
                          src="https://www.vyvo.com/_next/image?url=%2Flogos%2Fapplestore.png&amp;w=384&amp;q=75"
                        />
                      </a>
                    </div>
                    <div className="col-span-1 mr-2">
                      <a href="https://play.google.com/store/apps/details?id=com.inpersona.web3">
                        <img
                          alt="google store"
                          loading="lazy"
                          width="140"
                          height="41"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="https://www.vyvo.com/_next/image?url=%2Flogos%2Fgooglestore.png&amp;w=256&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Flogos%2Fgooglestore.png&amp;w=384&amp;q=75 2x"
                          src="https://www.vyvo.com/_next/image?url=%2Flogos%2Fgooglestore.png&amp;w=384&amp;q=75"
                        />
                      </a>
                    </div>
                    <div className="col-span-1">
                      <a href="https://expo.dev/artifacts/eas/5oWFQA3v3ncfFHgSpxcUom.apk">
                        <img
                          alt="android apk"
                          loading="lazy"
                          width="140"
                          height="41"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="https://www.vyvo.com/_next/image?url=%2Flogos%2Fandroid.png&amp;w=256&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Flogos%2Fandroid.png&amp;w=384&amp;q=75 2x"
                          src="https://www.vyvo.com/_next/image?url=%2Flogos%2Fandroid.png&amp;w=384&amp;q=75"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:hidden flex justify-center">
              <img
                alt="phone"
                loading="lazy"
                width="358"
                height="411"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fonly-phone-mobile.png&amp;w=384&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fonly-phone-mobile.png&amp;w=750&amp;q=75 2x"
                src="https://www.vyvo.com/_next/image?url=%2Fbackgrounds%2Fonly-phone-mobile.png&amp;w=750&amp;q=75"
              />
            </div>
            <div className="col-span-12 lg:hidden relative top-[-16px]">
              <div className="border-faded-light-blue-store">
                <div className="flex flex-col p-5">
                  <div className="flex items-center">
                    <img
                      alt="logo"
                      loading="lazy"
                      width="33"
                      height="29"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      srcSet="https://www.vyvo.com/_next/image?url=%2Flogos%2Finpersona-heart.png&amp;w=48&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Flogos%2Finpersona-heart.png&amp;w=96&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Flogos%2Finpersona-heart.png&amp;w=96&amp;q=75"
                    />
                    <span className="pl-2 faded-light-blue text-base font-light leading-[21px]">
                      Available for
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-x-1 mt-6">
                    <div className="col-span-1">
                      <a href="https://apps.apple.com/us/app/inpersona/id1661515831">
                        <img
                          alt="apple store"
                          loading="lazy"
                          width="140"
                          height="41"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="https://www.vyvo.com/_next/image?url=%2Flogos%2Fapplestore.png&amp;w=256&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Flogos%2Fapplestore.png&amp;w=384&amp;q=75 2x"
                          src="https://www.vyvo.com/_next/image?url=%2Flogos%2Fapplestore.png&amp;w=384&amp;q=75"
                        />
                      </a>
                    </div>
                    <div className="col-span-1">
                      <a href="https://play.google.com/store/apps/details?id=com.inpersona.web3">
                        <img
                          alt="google store"
                          loading="lazy"
                          width="140"
                          height="41"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="https://www.vyvo.com/_next/image?url=%2Flogos%2Fgooglestore.png&amp;w=256&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Flogos%2Fgooglestore.png&amp;w=384&amp;q=75 2x"
                          src="https://www.vyvo.com/_next/image?url=%2Flogos%2Fgooglestore.png&amp;w=384&amp;q=75"
                        />
                      </a>
                    </div>
                    <div className="col-span-1">
                      <a href="https://expo.dev/artifacts/eas/5oWFQA3v3ncfFHgSpxcUom.apk">
                        <img
                          alt="android apk"
                          loading="lazy"
                          width="140"
                          height="41"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          srcSet="https://www.vyvo.com/_next/image?url=%2Flogos%2Fandroid.png&amp;w=256&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Flogos%2Fandroid.png&amp;w=384&amp;q=75 2x"
                          src="https://www.vyvo.com/_next/image?url=%2Flogos%2Fandroid.png&amp;w=384&amp;q=75"
                        />
                      </a>
                    </div>
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

export default Section7;
