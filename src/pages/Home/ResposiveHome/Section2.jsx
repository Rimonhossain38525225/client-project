/* eslint-disable no-unused-vars */
import React from "react";

function Section2() {
  return (
    <>
      <div className="square-dots-bg mt-20">
        <div className="mx-4">
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="grid grid-cols-12">
              <div className="col-span-12 grid grid-cols-12">
                <div className="col-span-12">
                  <div className="flex text-[36px] text-white font-light">
                    <span className="">
                      <span className="text-[#7C7C7C] text-[2.5rem] lg:mr-20">
                        {"//"}
                      </span>
                      <span className="faded-light-blue leading-[36px] tracking-[-2%]">
                        How&nbsp;
                      </span>
                      VSC
                    </span>
                  </div>
                  <div className="flex text-[36px] text-white font-light leading-[36px] tracking-[-2%]">
                    <span className="faded-light-blue">Gathers </span>{" "}
                    &nbsp;Data
                  </div>
                </div>
                <div className="col-span-12 my-12">
                  <div className="flex flex-col gap-y-4 align-bottom ">
                    <img
                      alt="circle image"
                      loading="lazy"
                      width="28"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      className="lg:ml-8"
                      srcSet="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=32&amp;q=75 1x, https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=64&amp;q=75 2x"
                      src="https://www.vyvo.com/_next/image?url=%2Fshapes%2Fdouble-circle-alt.png&amp;w=64&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    <p className="opacity-80  leading-[22px]">
                      <span className="text-white text-right line-clamp-1">
                        A Data NFT is bound to an IoT device
                      </span>
                      <span className="text-white">
                        to ensure ownership and privacy of the health data
                        gathered, securely encrypting the data and rewarding the
                        owner.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-span-12">
                  <a href="/get-started-data-owner">
                    <button className="border-faded-green px-10 py-4 w-full flex justify-center items-center hover:border-faded-green-hover">
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
              <div className="col-span-12 lg:block">
                <video
                  className="videoTag w-full lg:w-[737px] xl:w-[720px]"
                  autoPlay={true}
                  playsInline={true}
                  src="https://www.vyvo.com/videos/atom-loop.mp4"
                  loop={true}
                >
                  <source
                    src="https://www.vyvo.com/videos/atom-first2.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
