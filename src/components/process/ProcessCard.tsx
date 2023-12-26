"use client";
import React, { MouseEventHandler, useState } from "react";

interface Props {
  idx: string;
  onMouseOver: MouseEventHandler<HTMLDivElement>;
  active: boolean;
  data: {
    bg: string;
    c: string;
  };
}

const ProcessCard: React.FC<Props> = ({ idx, onMouseOver, active, data }) => {
  return (
    <div
      onMouseEnter={onMouseOver}
      className={`p-2 h-[500px] overflow-hidden text-black rounded-[20px] transition-[width] duration-[800ms] ease-[ease] group ${
        active
          ? "w-[400px] max-sm:max-w-[300px] bg-[url('/Rectangle23836.png')]"
          : `w-[100px] ${data.bg}`
      }`}
    >
      <div
        className={`h-full w-[400px] flex flex-col justify-between ${
          active ? "block" : "hidden"
        }`}
      >
        <div className="p-4">
          <p className="mt-12 text-2xl text-white">
            Lorem ipsum dolor sit amet
          </p>
          <p className="mt-12 text-1xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            purus finibus, egestas magna ac, facilisis enim. Sed erat odio,
            gravida sit amet pharetra sit amet,
          </p>
        </div>
        <div className="h-[80px] w-[80px] bg-white text-2xl text-black rounded-full flex justify-center items-center">
          {idx}
        </div>
      </div>
      <div
        className={`w-full h-full flex justify-between items-center flex-col ${
          active && "hidden"
        }`}
      >
        <div className="h-[calc(100%_-_80px)] flex justify-center items-center ">
          <div className={`${data.c} text-5xl uppercase rotate-90`}>
            research{" "}
          </div>
        </div>
        <div className="h-[80px] w-[80px] bg-black text-2xl text-white rounded-full flex justify-center items-center">
          {idx}
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
