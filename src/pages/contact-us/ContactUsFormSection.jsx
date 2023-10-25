/* eslint-disable no-unused-vars */
import React from "react";

function ContactUsFormSection() {
  return (
    <>
      <div className="mx-4 md:mx-0 flex flex-col justify-center items-center gap-y-12 mb-16 pt-[140px] lg:pt-0">
        <span className="text-[36px] leading-[36px] md:text-[90px] md:leading-[92px] text-white font-light">
          Contact Us
        </span>
        <span className="text-base text-[#DFDFDF] leading-[22px] font-light opacity-80">
          Complete the form below and we will get back to you shortly.
        </span>
        <form className="flex flex-col w-full md:w-2/4 gap-y-8">
          <div data-headlessui-state="">
            <div className="relative mt-1">
              <button
                className="relative w-full cursor-default text-[20px] leading-[44px] font-light bg-black text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit text-left"
                placeholder="Choose Category"
                id="headlessui-listbox-button-:R33lmmiuja:"
                type="button"
                aria-haspopup="listbox"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span className="block truncate">Manufacturers</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div data-headlessui-state="">
            <div className="relative mt-1">
              <button
                className="relative w-full cursor-default text-[20px] leading-[44px] font-light bg-black text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit text-left"
                id="headlessui-listbox-button-:R37lmmiuja:"
                type="button"
                aria-haspopup="listbox"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span className="block truncate">Case Studies</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="opacity-100">
            <input
              placeholder="Your Name"
              className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] placeholder-inherit w-full mb-8 border-b-[#FFFFFFCC]"
              type="text"
              name="name"
            />
            <input
              placeholder="Your Email"
              className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit w-full mb-8"
              type="email"
              name="email"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit mb-8 w-full"
              spellCheck="false"
              data-ms-editor="true"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border-faded-pink text-[#FCFCFC] hover:border-faded-pink-pressed text-base font-light leading-[22px] px-8 py-4 md:w-2/5 w-full flex justify-center items-center"
            >
              Submit
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
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactUsFormSection;
