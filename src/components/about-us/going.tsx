import React from "react";
import { MdArrowOutward } from "react-icons/md";
import object1 from "../../../public/Rectangle 39550.png";
import avatar1 from "../../../public/Ellipse 8.png";
import avatar2 from "../../../public/Ellipse 9.png";
import avatar3 from "../../../public/Ellipse 10.png";
import avatar4 from "../../../public/Ellipse 11.png";
import Image from "next/image";

type Props = {};

export default function Going({}: Props) {
  return (
    <div className="mx-auto my-40 flex max-w-[85%] flex-row-reverse justify-between gap-x-6 overflow-hidden font-righteous text-black dark:text-white max-2xl:max-w-[90%] max-xl:gap-y-8 max-md:flex-col max-sm:max-w-[95%]">
      <div className="flex w-6/12 flex-col gap-4 pr-6 max-xl:w-full max-xl:pr-0 max-sm:px-2 max-sm:pr-0">
        <div className="text-[60px] uppercase  leading-tight max-2xl:text-[55px] max-lg:text-[50px] max-sm:text-[40px]">
          How it started
        </div>
        <div className="text-[25px] max-2xl:text-[25px] max-lg:text-[18px] max-md:text-[20px] max-sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tortor
          mauris. Nullam gravida lectus orci, imperdiet fermentum massa
          vestibulum eu. Integer vel erat ipsum. Quisque rutrum lobortis sem,
          sed viverra lorem interdmagna,
        </div>
        <div className="text-[25px] max-2xl:text-[25px] max-lg:text-[18px] max-md:text-[20px] max-sm:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          asperiores praesentium, distinctio expedita magnam debitis magni modi
          amet doloremque nam, consectetur placeat atque natus quidem ipsum
          vero, reiciendis totam nulla!
        </div>
      </div>
      <div className="max-w-[641px] max-2xl:max-w-[600px] max-xl:max-w-[500px] max-lg:max-w-[450px] max-md:max-w-full">
        <div className="relative">
          <div className="max-lg:text=[15px] absolute bottom-[3rem] flex flex-row items-center justify-between gap-0 px-10 max-xl:bottom-[1.8rem] max-xl:px-6 max-lg:bottom-[1.2rem] max-lg:px-4 max-sm:bottom-[1.2rem] max-sm:px-4">
            <div className="w-5/6 text-xl text-white dark:text-black max-xl:text-[20px] max-xl:leading-none max-lg:text-[16px] max-md:text-[20px] max-sm:pl-2 max-xs:text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              tortor mauris. Nullam gravida lectus orci, imperdiet fermentum
              massa
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white max-xl:h-12 max-xl:w-12">
              <MdArrowOutward size={35} />
            </div>
          </div>
          <div>
            <img src={object1.src} className="max-xl:w-full" />
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-between gap-4 max-sm:mt-2 max-sm:flex-col max-sm:gap-2">
          <div className="flex w-6/12 flex-col items-start justify-between gap-4 rounded-[3rem] border-[9px] bg-[#7B5EA7] px-6 py-6 max-xl:rounded-[4rem] max-xl:p-6 max-lg:rounded-[3rem] max-lg:p-4 max-sm:w-[40%] max-sm:w-full max-sm:rounded-[2rem] max-sm:p-4">
            <div>
              <span className="-space-x-6 overflow-hidden max-xs:-space-x-5">
                <Image
                  alt="avatar"
                  src={avatar1}
                  className="inline-block w-16 rounded-full max-xl:w-12 max-lg:w-12 max-xs:w-10"
                />
                <Image
                  alt="avatar"
                  src={avatar2}
                  className="inline-block w-16 rounded-full max-xl:w-12 max-lg:w-12 max-xs:w-10"
                />
                <Image
                  alt="avatar"
                  src={avatar3}
                  className="inline-block w-16 rounded-full max-xl:w-12 max-lg:w-12 max-xs:w-10"
                />
                <Image
                  alt="avatar"
                  src={avatar4}
                  className="inline-block w-16 rounded-full max-xl:w-12 max-lg:w-12 max-xs:w-10"
                />
              </span>
            </div>
            <div className="rounded-full bg-white px-4 py-2 text-xl text-black max-xl:text-base max-lg:text-sm max-sm:text-base">
              4.75 %
            </div>
            <div className="text-xl max-xl:text-xl max-lg:text-sm max-sm:text-base">
              Lorem ipsum dolor sit amet, con
            </div>
          </div>
          <div className="flex w-6/12 flex-col gap-4 rounded-[3rem] border-[9px] bg-royalblue px-6 py-6 max-xl:rounded-[3rem] max-xl:p-6 max-lg:p-4 max-sm:w-[60%] max-sm:w-full max-sm:rounded-[2rem] max-sm:p-4">
            <div className="flex flex-row items-center justify-between">
              <div className="text-3xl uppercase max-lg:text-2xl max-sm:text-2xl">
                Design
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white max-xl:h-12 max-xl:w-12">
                <MdArrowOutward size={30} />
              </div>
            </div>
            <div className="text-xl leading-none max-xl:text-[15px] max-lg:text-[14px] max-sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              tortor mauris. Nullam gravida lectus orci, imperdiet fermentum
              massa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
