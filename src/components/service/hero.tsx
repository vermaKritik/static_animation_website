"use client";
import FlowerSvg from "@/svg/flower";
import React from "react";
import InfiniteRotation from "../animations/InfiniteRotation";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="mx-auto my-20 flex max-w-[85%] flex-col items-center rounded-3xl bg-[#F5F5F5] px-20 py-10 max-lg:max-w-[95%] max-lg:px-10">
      <div className="text-center font-righteous text-[85px] uppercase leading-tight max-lg:text-[65px] max-md:text-[55px] max-sm:text-[40px] max-xs:text-[35px]">
        <span className="inline">
          <span className=" text-royalblue dark:text-black">
            Build{" "}
            <span className="inline-block align-middle">
              <InfiniteRotation duration={6}>
                <FlowerSvg classNames="w-[80px] max-lg:w-[65px] max-md:w-[55px] max-sm:w-[40px] max-xs:w-[35px] fill-current text-candyOrange" />
              </InfiniteRotation>
            </span>{" "}
            improve
          </span>{" "}
          <span className="text-black dark:text-candyOrange">&</span>{" "}
          <span className="text-royalblue dark:text-black">market</span>{" "}
          <span className="text-black dark:text-candyOrange">
            your digital product with a one-stop
          </span>{" "}
          <span className="text-royalblue dark:text-black">team</span>.
        </span>
      </div>
      <div className="mt-20 flex flex-col items-center gap-12 max-md:mt-16">
        <div className="w-[60%] text-center font-righteous text-lg max-md:w-[85%] max-sm:w-[95%] max-sm:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          voluptatem corrupti nemo tenetur illum delectus hic eligendi ex
          perferendis tempore.
        </div>
        <div className="flex flex-row items-center justify-center gap-3 rounded-full bg-royalblue px-8 py-4 font-righteous text-3xl uppercase text-white dark:bg-candyOrange max-lg:text-xl max-md:px-6 max-md:py-3 max-md:text-lg">
          Contact us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
