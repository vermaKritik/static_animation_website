"use client";
import FlowerSvg from "@/svg/flower";
import React, { useRef } from "react";
import avatar1 from "../../../public/Rectangle 38.png";
import avatar2 from "../../../public/Rectangle 39.png";
import avatar3 from "../../../public/Rectangle 40.png";
import avatar4 from "../../../public/Rectangle 41.png";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import InfiniteRotation from "../animations/InfiniteRotation";
import { useScroll, motion, useTransform } from "framer-motion";

type TeamProps = {};

export default function Team({}: TeamProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-50%"]);

  return (
    <div className="flex flex-col items-center gap-y-12 justify-center py-36 max-w-[80%] max-xl:max-w-[90%] overflow-hidden mx-auto max-md:dark:bg-white max-md:rounded-t-[70px]">
      <div>
        <div className="max-md:hidden h-[100vh] relative dark:text-white flex justify-center items-center">
          <div className="">
            <div className="text-8xl max-lg:text-7xl font-bold font-righteous uppercase text-center flex flex-col justify-center items-center">
              <p>Meet our</p>
              <p>
                talented <span className="text-[#F1561B]">team </span>{" "}
              </p>
            </div>
            <p className="-ml-[5rem] mt-2 w-[500px] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              tortor mauris. Nullam gravida lectus orci, imperdiet fermentum
              massa vestibulum eu. Integer vel erat ipsum. Quisque rutrum
              lobortis sem, sed viverra lorem interdum sed.
            </p>
          </div>
          <motion.div
            className="absolute z-40 top-0 left-0 h-[100vh] w-full border-0 border-white border-solid"
            style={{ y }}
            ref={targetRef}
          >
            {[
              {
                y: "top-[100px]",
                x: "-left-[45px]",
                img: "/3rHZ0kmQw6qWsvqL6AY58WpofY.png",
              },
              {
                y: "-top-[160px]",
                x: "-right-[60px]",
                img: "/OEEpMtaH2fJq5kUjkrryeEOZQpY.png",
              },
              {
                y: "-top-[110px]",
                x: "left-[150px]",
                img: "/7HgDcYfDenGWzRCIdBnuhvRTJkU.jpg.png",
              },
              {
                y: "top-0",
                x: "left-[500px]",
                img: "/OEEpMtaH2fJq5kUjkrryeEOZQpY.png",
              },
              {
                y: "top-[250px]",
                x: "left-[850px]",
                img: "/7HgDcYfDenGWzRCIdBnuhvRTJkU.jpg.png",
              },
              {
                x: "left-[50px]",
                y: "-bottom-[100px]",
                img: "/7HgDcYfDenGWzRCIdBnuhvRTJkU.jpg.png",
              },
              // {
              //   y: "bottom-[255px]",
              //   x: "-left-[170px]",
              //   img: "/3rHZ0kmQw6qWsvqL6AY58WpofY.png",
              // },
              {
                x: "-right-[30px]",
                y: "-bottom-[30px]",
                img: "/OEEpMtaH2fJq5kUjkrryeEOZQpY.png",
              },
              {
                x: "right-[280px]",
                y: "-bottom-[200px]",
                img: "/3rHZ0kmQw6qWsvqL6AY58WpofY.png",
              },
            ].map((el, idx) => (
              <ParallaxScrollingImage key={idx} data={el} />
            ))}
          </motion.div>
        </div>
        <div className="hidden max-md:block">
          <div className="pt-10 px-10 max-md:px-6 max-md:pt-6 flex flex-row">
            <div className="font-righteous uppercase flex flex-col gap-4">
              <div className="text-[75px] max-lg:text-[65px] max-md:text-[55px] max-xs:text-[45px] leading-none">
                Meet our team
              </div>
              <div className="flex flex-row">
                <div className="w-[80%] max-md:w-[90%] text-xl max-lg:text-base max-md:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ut tortor mauris. Nullam gravida lectus orci, imperdiet
                  fermentum massa vestibulum eu. Integer vel erat ipsum. Quisque
                  rutrum lobortis sem, sed viverra lorem interdum sed.
                </div>
                <div className="bg-candyOrange dark:bg-candyOrange w-16 h-16 max-lg:w-14 max-lg:h-14 max-sm:h-12 max-sm:w-12 rounded-full flex items-center justify-center text-white dark:text-white">
                  <MdArrowOutward size={35} className="max-sm:w-30" />
                </div>
              </div>
            </div>
            <div className="max-xs:hidden">
              <InfiniteRotation duration={6}>
                <FlowerSvg
                  fill="black"
                  classNames="h-[250px] max-lg:h-[200px] max-md:h-[150px] max-md:h-[100px]"
                />
              </InfiniteRotation>
            </div>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 items-baseline w-full">
            <img src={avatar1.src} alt="avatar" />
            <img src={avatar2.src} alt="avatar" />
            <img src={avatar3.src} alt="avatar" />
            <img src={avatar4.src} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

type ParallaxScrollingImageProps = {
  data: {
    x: string;
    y: string;
    img: string;
  };
};

const ParallaxScrollingImage = ({ data }: ParallaxScrollingImageProps) => {
  return (
    <Image
      className={`absolute rounded-[10px] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] ${data.x} ${data.y}`}
      src={data.img}
      width={100}
      height={150}
      alt=""
    />
  );
};
