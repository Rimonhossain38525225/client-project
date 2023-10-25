/* eslint-disable no-unused-vars */
import React from "react";

import "./section10.css";

const syleDiv = {
  opacity: 1,
  transform: "none",
};
function Section10() {
  return (
    <>
      {/* section top  */}
      <div className="mx-12 my-36">
        <div className="flex justify-between">
          <span className="text-white text-[50px] xl:text-[60px] 2xl:text-[70px] leading-[76px] w-[30%]">
            Developer <span className="faded-pink">Resources</span>
          </span>
          <div>
            <div className="flex">
              <div style={syleDiv}>
                <img
                  alt="squares"
                  loading="lazy"
                  width="36"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="max-w-[36px] max-h-[36px] mr-8"
                  // srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2F3-diagonal-squares.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fshapes%2F3-diagonal-squares.png&amp;w=96&amp;q=75 2x"
                  src="https://www.vyvo.com/_next/image?url=%2Fshapes%2F3-diagonal-squares.png&amp;w=96&amp;q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div style={syleDiv}>
                <div className="flex flex-col">
                  <span className="text-[#FCFCFC] leading-[22px] font-light opacity-80">
                    A manual for joining the VSC Ecosystem.
                    <br />
                    By developers for developers.
                  </span>
                  <div
                    className="w-full flex justify-center"
                    style={syleDiv}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="developer-carousel">
          <div className="">
            <div className="swiper swiper-initialized swiper-horizontal mySwiper overflow-auto swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{
                    justifyContent: "center",
                    width: "225px",
                    marginRight: "50px",
                  }}
                >
                  <div style={syleDiv}>
                    <div
                      className="h-[425px] bg-cover bg-right rounded-xl bg-no-repeat flex flex-wrap items-end $"
                      style={{ backgroundPpositionY: "0px" }}
                    >
                      <div className="-z-10">
                        <img
                          alt="BuildingWatch"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          sizes="30vw"
                          // srcSet="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuildingwatch.19c5e121.png&amp;w=256&amp;q=100 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuildingwatch.19c5e121.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuildingwatch.19c5e121.png&amp;w=640&amp;q=100 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuildingwatch.19c5e121.png&amp;w=750&amp;q=100 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuildingwatch.19c5e121.png&amp;w=828&amp;q=100 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuildingwatch.19c5e121.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuildingwatch.19c5e121.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuildingwatch.19c5e121.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuildingwatch.19c5e121.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuildingwatch.19c5e121.png&amp;w=3840&amp;q=100 3840w"
                          src="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuildingwatch.19c5e121.png&amp;w=3840&amp;q=100"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            objectFit: "cover",
                            objectPosition: "right center",
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <div className="items-end flex justify-between px-9 pt-14 pb-10">
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
                            // srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75 2x"
                            src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{
                    justifyContent: "center",
                    width: " 225px",
                    marginRight: "50px",
                  }}
                >
                  <div style={syleDiv}>
                    <div
                      className="h-[425px] bg-cover bg-right rounded-xl bg-no-repeat flex flex-wrap items-end $"
                      style={{ backgroundPositionY: "0px" }}
                    >
                      <div className="-z-10">
                        <img
                          alt="ExpandCarouselCard2"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          sizes="30vw"
                          // srcSet="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpand-carousel-card2.f3ae5ede.png&amp;w=256&amp;q=100 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpand-carousel-card2.f3ae5ede.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpand-carousel-card2.f3ae5ede.png&amp;w=640&amp;q=100 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpand-carousel-card2.f3ae5ede.png&amp;w=750&amp;q=100 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpand-carousel-card2.f3ae5ede.png&amp;w=828&amp;q=100 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpand-carousel-card2.f3ae5ede.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpand-carousel-card2.f3ae5ede.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpand-carousel-card2.f3ae5ede.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpand-carousel-card2.f3ae5ede.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpand-carousel-card2.f3ae5ede.png&amp;w=3840&amp;q=100 3840w"
                          src="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpand-carousel-card2.f3ae5ede.png&amp;w=3840&amp;q=100"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            objectFit: "cover",
                            objectPosition: "right center",
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <div className="items-end flex justify-between  px-9 pt-14 pb-10">
                          <div className="flex flex-col">
                            <span className="text-[36px] leading-[38px] text-[#FCFCFC] text-start flex">
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
                            // srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75 2x"
                            src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{
                    justifyContent: "start",
                    width: "225px",
                    marginRight: "50px",
                  }}
                >
                  <div style={syleDiv}>
                    <div
                      className="h-[425px] bg-cover bg-right rounded-xl bg-no-repeat flex flex-wrap items-end $"
                      style={{ backgroundPositionY: "10%" }}
                    >
                      <div className="-z-10">
                        <img
                          alt="NutralifeAI"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          sizes="30vw"
                          // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralifeai-2-no-text.76592da3.png&amp;w=256&amp;q=100 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralifeai-2-no-text.76592da3.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralifeai-2-no-text.76592da3.png&amp;w=640&amp;q=100 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralifeai-2-no-text.76592da3.png&amp;w=750&amp;q=100 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralifeai-2-no-text.76592da3.png&amp;w=828&amp;q=100 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralifeai-2-no-text.76592da3.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralifeai-2-no-text.76592da3.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralifeai-2-no-text.76592da3.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralifeai-2-no-text.76592da3.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralifeai-2-no-text.76592da3.png&amp;w=3840&amp;q=100 3840w"
                          src="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralifeai-2-no-text.76592da3.png&amp;w=3840&amp;q=100"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            objectFit: "cover",
                            objectPosition: "right center",
                            color: "transparent",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <div className="items-end flex justify-between  px-9 pt-14 pb-10">
                          <div className="flex flex-col">
                            <span className="text-[36px] leading-[38px] text-[#FCFCFC] text-start flex">
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
                            // srcSet="/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75 2x"
                            src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fnew-plus.png&amp;w=64&amp;q=75"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-scrollbar swiper-scrollbar-horizontal">
                <div
                  className="swiper-scrollbar-drag"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    width: "841.29px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-t-0 rounded-b-md opacity-40 border-white h-4"></div>
      </div>

      {/* section bottom  */}
      <div className="mx-12 mb-20">
        <div className="flex flex-row justify-between items-center mb-8">
          <span className="text-white text-[48px] font-light leading-[48px]">
            Successful Projects &amp; Partners
          </span>
          <div className="flex justify-end" style={syleDiv}>
            <a href="/get-started-device-manufacturers">
              <button className="border-faded-pink py-3 w-full px-8 flex justify-center items-center hover:border-faded-pink-pressed">
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
        </div>
        <div className="border-[1px] border-[#FFFFFF] opacity-[25%]"></div>
      </div>
    </>
  );
}

export default Section10;
