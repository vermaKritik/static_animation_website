"use client";
import React, { useState } from "react";
import { Variants, motion } from "framer-motion";

export default function GetInTouchSection() {
  const [serviceButton, setServiceButton] = useState("");

  return (
    <div className="flex flex-wrap flex-col items-center justify-center my-40 max-w-[50%] max-xl:max-w-[75%] max-md:max-w-[90%] mx-auto">
      <div className="font-righteous uppercase text-[70px] text-center leading-tight dark:text-white max-lg:text-[50px] max-md:text-[35px]">
        Get in touch with our friendly team.
      </div>

      <div className="w-full mt-6">
        <p className="dark:text-white text-[40px] font-righteous leading-tight uppercase ">
          Service
        </p>

        <div className="mt-2 flex flex-wrap gap-2 font-righteous dark:text-white">
          {[
            "Web development",
            "UI UX",
            "Product design",
            "Mobile application Development",
            "Other",
          ].map((el, idx) => (
            <div
              key={idx}
              onClick={() => setServiceButton(el)}
              className={`px-3 py-2 bg-[#f0eded] transition-all duration-[400ms] ease-[ease] dark:bg-[#111214] dark:text-white font-righteous border-2 border-solid  dark:hover:border-[#F1561B] hover:border-black cursor-pointer rounded-[10px] ${
                serviceButton === el
                  ? "border-black dark:border-[#F1561B]"
                  : "border-transparent"
              }`}
            >
              {el}
            </div>
          ))}
        </div>
        {/* <div className="mt-8 flex gap-2 font-righteous dark:text-white">
          {[
            { title: "Web development", w: 200, h: 60 },
            { title: "UI UX", w: 200, h: 60 },
            // { title: "Product design", w: 200, h: 60 },
            { title: "Other", w: 200, h: 60 },
            // "UI UX",
            // "Product design",
            // "Mobile application Development",
            // "Other",
          ].map((el, idx) => (
            <div
              key={idx}
              className={`w-[${el.w + 5}px] h-[65px] rounded-[10px] relative border-0 border-solid border-[red] overflow-hidden`}
            >
              <motion.div
                className={`absolute  top-[-50%] left-[-50%] translate-x-[5%] translate-y-[5%] w-[400px] h-[400px] bg-gradient-to-br from-purple-500 to-[#F1561B]`}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              ></motion.div>
              <div
                className={`absolute rounded-[10px] -translate-x-2/4 flex justify-center items-center -translate-y-2/4 w-[${el.w}px] h-[60px] bg-black left-2/4 top-2/4 text-white1`}
              >
                {el.title}
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <div className="flex flex-col gap-y-3 mt-10 w-full font-righteous">
        <div className="flex flex-row max-lg:flex-col justify-between gap-4">
          <input
            className="flex-grow border-solid dark:text-white border-black dark:border-white dark:bg-black border-4 rounded-full px-6 py-4"
            placeholder="Firstname"
          />
          <input
            className="flex-grow border-solid dark:text-white border-black dark:border-white dark:bg-black border-4 rounded-full px-6 py-4"
            placeholder="Lastname"
          />
        </div>
        <div className="flex flex-row max-lg:flex-col gap-4">
          <input
            className="flex-grow border-solid dark:text-white border-black dark:border-white dark:bg-black border-4 rounded-full px-6 py-4"
            placeholder="Email"
          />
          <input
            className="flex-grow border-solid dark:text-white border-black dark:border-white dark:bg-black border-4 rounded-full px-6 py-4"
            placeholder="Phone number"
          />
        </div>
        <textarea
          className="border-solid border-black dark:text-white dark:border-white dark:bg-black border-4 rounded-full max-lg:rounded-3xl px-6 py-4"
          placeholder="Message"
        ></textarea>
        <button className="bg-black dark:bg-white dark:text-black text-white rounded-full px-6 py-4 text-center">
          Send Us a Message
        </button>
      </div>
    </div>
  );
}
