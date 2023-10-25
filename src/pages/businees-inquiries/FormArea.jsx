/* eslint-disable no-unused-vars */
import React from "react";

function FormArea() {
  return (
    <>
      <div className="mx-4 md:mx-0 flex flex-col justify-center items-center gap-y-12 mb-16 pt-[140px] lg:pt-0">
        <span className="text-[36px] leading-[36px] md:text-[90px] md:leading-[92px] text-white font-light">
          Partner on <span className="faded-green">Web3</span>
        </span>
        <span className="text-base text-[#DFDFDF] leading-[22px] font-light opacity-80">
          Interested in learning more? Fill out this form to have an team member
          reach out.
        </span>
        <form
          className="flex flex-col md:w-2/4 gap-y-8 w-full"
          data-gtm-form-interact-id="0"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit"
            name="name"
            data-gtm-form-interact-field-id="0"
          />
          <input
            type="text"
            placeholder="Your Organization"
            className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit"
            name="organization"
            spellCheck="false"
            data-ms-editor="true"
            data-gtm-form-interact-field-id="1"
          />
          <div className="opacity-100">
            <input
              placeholder="Your Email"
              className="bg-black text-[20px] leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit w-full mb-8"
              type="email"
              name="email"
            />
            <div data-headlessui-state="">
              <div className="relative mt-1">
                <button
                  className="relative w-full cursor-default text-[20px] leading-[44px] font-light bg-black text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit text-left"
                  placeholder="Choose Country"
                  id="headlessui-listbox-button-:r0:"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <span className="block truncate">Choose a Country</span>
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
              <div className="relative mt-8">
                <button
                  className="relative w-full cursor-default text-[20px] leading-[44px] font-light bg-black text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit text-left"
                  placeholder="I want to..."
                  id="headlessui-listbox-button-:r1:"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <span className="block truncate">I want to...</span>
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
            <textarea
              name="message"
              placeholder="Message"
              className="bg-black text-[20px] mt-8 leading-[44px] font-light text-[#FFFFFFCC] py-2 px-4 border-b-[1px] border-b-[#FFFFFFCC] placeholder-inherit w-full mb-8"
              spellCheck="false"
              data-ms-editor="true"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border-faded-green-lime text-[#FCFCFC] hover:border-faded-green-lime-hover text-base font-light leading-[22px]  px-8 py-4 md:w-2/5 w-full flex justify-center items-center"
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

export default FormArea;
