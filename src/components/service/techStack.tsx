"use client";
import React from "react";
import techStackImage from "../../../public/Group 1261154599.png";
import { FaCheck } from "react-icons/fa6";
import InfiniteRotation from "../animations/InfiniteRotation";

type Props = {};

export default function TechStack({}: Props) {
  return (
    <div className="mx-auto my-40 flex max-w-[85%] flex-col items-center max-sm:max-w-[90%]">
      <div className="flex flex-col gap-10 self-start">
        <div className="w-[70%] font-righteous text-[75px] uppercase leading-none text-black dark:text-white max-xl:w-[85%] max-lg:w-full max-lg:text-[65px] max-sm:text-[50px]">
          OFFERING BEST SERVICES WITH LATEST TECH STACK
        </div>
        <div className="flex w-[60%] flex-col items-start gap-8 font-righteous text-xl text-black dark:text-white max-xl:w-[75%] max-lg:w-full max-sm:text-lg">
          <div className="flex flex-row items-center gap-4">
            <div className="rounded-full bg-black p-1 dark:bg-white">
              <FaCheck className="text-white dark:text-black" />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              doloremque, animi quod eius autem hic est sint! Molestias, ab
              quidem.
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="rounded-full bg-black p-1 dark:bg-white">
              <FaCheck className="text-white dark:text-black" />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              doloremque, animi quod eius autem hic est sint! Molestias, ab
              quidem.
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="rounded-full bg-black p-1 dark:bg-white">
              <FaCheck className="text-white dark:text-black" />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              doloremque, animi quod eius autem hic est sint! Molestias, ab
              quidem.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40 w-[55%] max-xl:w-[75%] max-lg:w-[85%] max-sm:w-[95%]">
        <InfiniteRotation duration={50}>
          <img src={techStackImage.src} />
        </InfiniteRotation>
      </div>
    </div>
  );
}
