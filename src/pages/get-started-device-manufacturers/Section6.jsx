/* eslint-disable no-unused-vars */
import React from "react";

function Section6() {
  return (
    <>
      <div className="mx-4 lg:mx-12 mt-10 lg:mt-0">
        <div id="developer-carousel">
          <div className="">
            <div className="swiper swiper-initialized swiper-horizontal mySwiper overflow-auto swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ width: "225px", marginRight: "50px" }}
                >
                  <div className="w-full h-[425px] bg-cover bg-[url('https://www.vyvo.com/backgrounds/device-card-1.png')] bg-right rounded-xl bg-no-repeat flex flex-wrap items-end">
                    <div className="w-full">
                      <div className="pb-10 px-7 flex justify-between items-end py-5">
                        <div className="flex flex-col">
                          <span className="block text-[36px] leading-[38px] text-[#FCFCFC] text-start">
                            inPersona
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
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{ width: "225px", marginRight: "50px" }}
                >
                  <div className="w-full h-[425px] bg-cover bg-[url('https://www.vyvo.com/backgrounds/device-card-2.png')] bg-right rounded-xl bg-no-repeat flex flex-wrap items-end">
                    <div className="w-full">
                      <div className="items-end pb-10 px-7 flex justify-between py-5">
                        <div className="flex flex-col">
                          <span className="block text-[36px] leading-[38px] text-[#FCFCFC] text-start">
                            Helo Health
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
                <div
                  className="swiper-slide"
                  style={{ width: "225px", marginRight: "50px" }}
                >
                  <div className="w-full h-[425px] bg-cover bg-[url('https://www.vyvo.com/backgrounds/nutralife_flipped.png')] bg-right rounded-xl bg-no-repeat flex flex-wrap items-end">
                    <div className="w-full">
                      <div className="items-end pb-10 px-7 flex justify-between py-5">
                        <div className="flex flex-col">
                          <span className="block text-[36px] leading-[38px] text-[#FCFCFC] text-start">
                            NutraLife AI
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
      </div>
    </>
  );
}

export default Section6;
