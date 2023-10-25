/* eslint-disable no-unused-vars */
import React from "react";

// css
import "./section11.css";

function Section11() {
  return (
    <>
      <div className="lg:ml-12 mb-20" id="projects-carousel">
        <div className="">
          <div className="swiper swiper-initialized swiper-horizontal mySwiper overflow-auto swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(-825px, 0px, 0px)",
              }}
            >
              <div
                className="swiper-slide"
                id="swiperslide-dev-1"
                style={{ width: "225px", marginRight: "50px" }}
              >
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="w-[422px] h-[526px] rounded-xl pl-7 pt-7 flex flex-col ol">
                    <img
                      alt="InPersona"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      sizes="30vw"
                      // srcSet="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinPersona.2af22c5b.png&amp;w=256&amp;q=100 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinPersona.2af22c5b.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinPersona.2af22c5b.png&amp;w=640&amp;q=100 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinPersona.2af22c5b.png&amp;w=750&amp;q=100 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinPersona.2af22c5b.png&amp;w=828&amp;q=100 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinPersona.2af22c5b.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinPersona.2af22c5b.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinPersona.2af22c5b.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinPersona.2af22c5b.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinPersona.2af22c5b.png&amp;w=3840&amp;q=100 3840w"
                      src="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinPersona.2af22c5b.png&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                    <div className="flex space-x-[10px] z-10">
                      <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                        001
                      </div>
                      <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                        DAPP
                      </div>
                    </div>
                    <a
                      className="mt-auto self-start z-10"
                      href="https://www.inpersona.com/"
                    >
                      <div className=" text-4xl leading-[38px] text-[#FCFCFC] pb-[30px]">
                        inPersona
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "225px", marginRight: "50px" }}
              >
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="w-[422px] h-[526px] rounded-xl pl-7 pt-7 flex flex-col ol bg-[#CBCBCB] ">
                    <img
                      alt="HeloHealth"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      sizes="30vw"
                      // srcSet="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch_mockup.228decf1.png&amp;w=256&amp;q=100 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch_mockup.228decf1.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch_mockup.228decf1.png&amp;w=640&amp;q=100 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch_mockup.228decf1.png&amp;w=750&amp;q=100 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch_mockup.228decf1.png&amp;w=828&amp;q=100 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch_mockup.228decf1.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch_mockup.228decf1.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch_mockup.228decf1.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch_mockup.228decf1.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch_mockup.228decf1.png&amp;w=3840&amp;q=100 3840w"
                      src="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch_mockup.228decf1.png&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                    <div className="flex space-x-[10px] z-10">
                      <div className="text-gray-900 rounded-full border border-gray-900 font-light text-sm leading-4 py-1 px-3">
                        002
                      </div>
                      <div className="text-gray-900 rounded-full border border-gray-900 font-light text-sm leading-4 py-1 px-3">
                        IOT DEVICE
                      </div>
                    </div>
                    <a
                      className="mt-auto self-start z-10"
                      href="https://helohealth.com/"
                    >
                      <div className="text-4xl leading-[38px] text-[#FCFCFC] pb-[30px]">
                        Helo Health
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-prev"
                style={{ width: "225px", marginRight: "50px" }}
              >
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="w-[422px] h-[526px] rounded-xl pl-7 pt-7 flex flex-col ol bg-cover ">
                    <img
                      alt="Odee"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      sizes="30vw"
                      // srcSet="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fodee-tablet-bg.df06e494.png&amp;w=256&amp;q=100 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fodee-tablet-bg.df06e494.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fodee-tablet-bg.df06e494.png&amp;w=640&amp;q=100 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fodee-tablet-bg.df06e494.png&amp;w=750&amp;q=100 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fodee-tablet-bg.df06e494.png&amp;w=828&amp;q=100 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fodee-tablet-bg.df06e494.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fodee-tablet-bg.df06e494.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fodee-tablet-bg.df06e494.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fodee-tablet-bg.df06e494.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fodee-tablet-bg.df06e494.png&amp;w=3840&amp;q=100 3840w"
                      src="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fodee-tablet-bg.df06e494.png&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                    <div className="flex space-x-[10px] z-10">
                      <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                        003
                      </div>
                      <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                        DAPP
                      </div>
                    </div>
                    <a
                      className="mt-auto self-start z-10"
                      href="https://odee.com/"
                    >
                      <div className="text-4xl leading-[38px] text-[#FCFCFC] pb-[30px]">
                        Odee Digital
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                style={{ width: "225px", marginRight: "50px" }}
              >
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="w-[422px] h-[526px] rounded-xl pl-7 pt-7 flex flex-col ol bg-cover ">
                    <img
                      alt="NutraLife"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      sizes="30vw"
                      // srcSet="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralife_flipped.809783f6.png&amp;w=256&amp;q=100 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralife_flipped.809783f6.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralife_flipped.809783f6.png&amp;w=640&amp;q=100 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralife_flipped.809783f6.png&amp;w=750&amp;q=100 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralife_flipped.809783f6.png&amp;w=828&amp;q=100 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralife_flipped.809783f6.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralife_flipped.809783f6.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralife_flipped.809783f6.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralife_flipped.809783f6.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralife_flipped.809783f6.png&amp;w=3840&amp;q=100 3840w"
                      src="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnutralife_flipped.809783f6.png&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                    <div className="flex space-x-[10px] z-10">
                      <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                        004
                      </div>
                      <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                        IOT DEVICE
                      </div>
                    </div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto self-start z-10"
                      href="https://nutralife.ai/"
                    >
                      <div className="text-4xl leading-[38px] text-[#FCFCFC] pb-[30px]">
                        NutraLife AI
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                id="swiperslide-dev-1"
                style={{ width: "225px", marginRight: "50px" }}
              >
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="w-[422px] h-[526px] rounded-xl pl-7 pt-7 flex flex-col ol">
                    <img
                      alt="Thryve"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      sizes="30vw"
                      // srcSet="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-watch.5949c696.png&amp;w=256&amp;q=100 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-watch.5949c696.png&amp;w=384&amp;q=100 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-watch.5949c696.png&amp;w=640&amp;q=100 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-watch.5949c696.png&amp;w=750&amp;q=100 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-watch.5949c696.png&amp;w=828&amp;q=100 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-watch.5949c696.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-watch.5949c696.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-watch.5949c696.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-watch.5949c696.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-watch.5949c696.png&amp;w=3840&amp;q=100 3840w"
                      src="https://www.vyvo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple-watch.5949c696.png&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        color: "transparent",
                      }}
                    />
                    <div className="flex space-x-[10px] z-10">
                      <div className="text-[#FCFCFC]  rounded-full border font-light text-sm leading-4 py-1 px-3">
                        005
                      </div>
                      <div className="text-[#FCFCFC] rounded-full border font-light text-sm leading-4 py-1 px-3">
                        DAPP
                      </div>
                    </div>
                    <a
                      className="mt-auto self-start z-10"
                      href="https://thryve.health/"
                    >
                      <div className="text-4xl leading-[38px] text-[#FCFCFC] pb-[30px]">
                        Thryve
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-scrollbar swiper-scrollbar-horizontal">
              <div
                className="swiper-scrollbar-drag"
                style={{
                  transform: "translate3d(841.189px, 0px, 0px)",
                  width: "509.811px",
                  transitionDuration: "0ms",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section11;
