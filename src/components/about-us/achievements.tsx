import React from "react";
import { MdArrowOutward } from "react-icons/md";

type Props = {};

export default function Achievements({}: Props) {
  return (
    <div className="flex flex-col items-center gap-y-12 justify-center my-40 max-w-[80%] max-xs:max-w-[90%] mx-auto">
      <div className="text-black dark:text-white font-righteous uppercase text-[60px] text-center max-sm:text-[40px]">
        Achievements to show off
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:justify-items-center max-sm:gap-y-20 max-lg:gap-y-32 justify-items-center gap-8 items-center w-full text-black dark:text-white">
        <div className="flex flex-row items-center gap-4 max-xs:gap-2">
          <div className="font-righteous uppercase">
            <div className="text-4xl max-sm:text-[45px] max-xs:text-[35px]">
              100+
            </div>
            <div className="max-sm:text-[15px] max-xs:text-[12px]">
              Employees
            </div>
          </div>
          <div className="bg-black dark:bg-white w-16 h-16 max-sm:h-12 max-sm:w-12 rounded-full flex items-center justify-center text-white dark:text-black">
            <MdArrowOutward size={35} className="max-sm:w-30" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 max-xs:gap-2">
          <div className="font-righteous uppercase">
            <div className="text-4xl max-sm:text-[45px] max-xs:text-[35px]">
              2014
            </div>
            <div className="max-sm:text-[15px] max-xs:text-[12px]">
              YEAR FOUNDED
            </div>
          </div>
          <div className="bg-black dark:bg-white w-16 h-16 max-sm:h-12 max-sm:w-12 rounded-full flex items-center justify-center text-white dark:text-black">
            <MdArrowOutward size={35} className="max-sm:w-30" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 max-xs:gap-2">
          <div className="font-righteous uppercase">
            <div className="text-4xl max-sm:text-[45px] max-xs:text-[35px]">
              300+
            </div>
            <div className="max-sm:text-[15px] max-xs:text-[12px]">
              Projects
            </div>
          </div>
          <div className="bg-black dark:bg-white w-16 h-16 max-sm:h-12 max-sm:w-12 rounded-full flex items-center justify-center text-white dark:text-black">
            <MdArrowOutward size={35} className="max-sm:w-30" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 max-xs:gap-2">
          <div className="font-righteous uppercase">
            <div className="text-4xl max-sm:text-[45px] max-xs:text-[35px]">
              60M+
            </div>
            <div className="max-sm:text-[15px] max-xs:text-[12px]">
              USERS WORLDWIDE
            </div>
          </div>
          <div className="bg-black dark:bg-white w-16 h-16 max-sm:h-12 max-sm:w-12 rounded-full flex items-center justify-center text-white dark:text-black">
            <MdArrowOutward size={35} className="max-sm:w-30" />
          </div>
        </div>
      </div>
    </div>
  );
}
