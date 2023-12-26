"use client";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "../../../public/rectangle-30@2x.png";
import image2 from "../../../public/rectangle-31@2x.png";
import image3 from "../../../public/rectangle-32@2x.png";
import image4 from "../../../public/rectangle-33@2x.png";
import image5 from "../../../public/Ellipse 10.png";
import image6 from "../../../public/Ellipse 9.png";

type Props = {};

const servicesData = [
  {
    title: "App Development",
    img: image1.src,
  },
  {
    title: "Development",
    img: image2.src,
  },
  {
    title: "Web design",
    img: image3.src,
  },
  {
    title: "UI UX Design",
    img: image4.src,
  },
  {
    title: "Product Design",
    img: image5.src,
  },
  {
    title: "Website Development",
    img: image6.src,
  },
];

export default function Services({}: Props) {
  return (
    <div className="mx-auto mb-40 flex max-w-[80%] flex-col items-center max-md:max-w-[95%] max-sm:max-w-[85%]">
      <div className="text-center font-righteous text-black dark:text-white">
        <div className="text-[50px] uppercase max-sm:text-[40px]">
          Our services
        </div>
        <div className="mx-auto w-[65%] text-[18px] max-sm:w-full max-sm:text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          tellus nec nisi rutrum vehicula. In eu molestie augue. Cras posuere
          tincidunt lectus, sed iaculis mauris varius at.
        </div>
      </div>

      <div className=" relative mx-auto mt-14 flex w-[85%] cursor-pointer flex-col gap-1 self-start font-righteous text-[30px] uppercase max-sm:hidden">
        {servicesData.map((el, idx) => (
          <div
            key={idx}
            className="p-6 relative  dark:text-[#5B5B5B] hover:bg-[#5b5b5b73] transition-all duration-200 ease-in group"
          >
            <div className="group-hover:text-white transition-all duration-200 ease-in">
              {el.title}
            </div>

            <div className="absolute top-[-25%] left-[45%] max-xl:left-[70%] max-md:left-[70%] opacity-0 transition-all duration-300 ease-in group-hover:opacity-100">
              <Image
                width={150}
                height={100}
                src={el.img}
                alt="Hovered Image"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 hidden items-center font-righteous text-[30px] font-normal uppercase max-sm:block max-sm:w-full">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-black dark:text-white">Strategy</div>
          <div className="text-[18px] capitalize text-slate-500">
            <div>Strategy</div>
            <div>Discovery & Research</div>
            <div>User Experience</div>
            <div>Content Strategy</div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <div className="text-black dark:text-white">Design</div>
          <div className="text-[18px] capitalize text-slate-500">
            <div>Brand Development & Rebranding</div>
            <div>Logo & ID Systems</div>
            <div>Brand Style Guides</div>
            <div>Collateral, Print & Packaging</div>
            <div>User Interface</div>
            <div>Website Design</div>
            <div>UX/UI</div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <div className="text-black dark:text-white">Development</div>
          <div className="text-[18px] capitalize text-slate-500">
            <div>Website Design & Development</div>
            <div>Web Applications</div>
            <div>Android Applications</div>
            <div>Blockchain Development</div>
            <div>Ecommerce</div>
          </div>
        </div>
      </div>
    </div>
  );
}
