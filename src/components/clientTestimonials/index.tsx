"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import avatar1 from "../../../public/Ewen.png";

const testimonials = [
  {
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Morbi in dictum magna. Nam sodales ut risus mollis
    ultricies. Morbi volutpat lacus lectus, sit amet suscipit
    tellus eleifend nec. Sed elementum`,
    author: "John Doe",
    designation: "Founder & CEO, Referwo",
    img: avatar1,
  },
  {
    content: "Next.js makes building React applications a breeze.",
    author: "John Doe",
    designation: "Founder & CEO, Referwo",
    img: avatar1,
  },
  {
    content: "Nam sodales ut risus mollisultricies. Morbi volutpat lacus lectus, sit amet suscipit tellus eleifend nec. Sed elementum",
    author: "John Doe",
    designation: "Founder & CEO, Referwo",
    img: avatar1,
  },
];

function ClientTestimonials() {
  const splideRef = useRef<Splide | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const splideOptions = {
    type: "slide",
    pagination: false,
    arrows: false,
    isNavigation: true,
    onInit: (splide: { index: React.SetStateAction<number>; }) => {
      setCurrentPage(splide.index);
    },
    onChange: (splide: { index: React.SetStateAction<number>; }) => {
      setCurrentPage(splide.index);
    },
  };
  const nextSlide = () => {
    splideRef?.current?.splide.go("+1");
    setCurrentPage(splideRef?.current?.splide.index);
  };

  const prevSlide = () => {
    splideRef?.current?.splide.go("-1");
    setCurrentPage(splideRef?.current?.splide.index);
  };

  useEffect(() => {
    splideRef.current.splide.go(1);
  }, []);

  return (
    <div className="max-w-[70%] max-2xl:max-w-[85%] max-md:max-w-[90%] mx-auto my-40">
      <p className="font-righteous dark:text-white text-black text-9xl max-lg:text-8xl max-sm:text-[50px] leading-tight">
        Client
      </p>
      <p className="ml-32 max-lg:ml-24 max-md:ml-16 max-sm:ml-2 text-[#7B5EA7] font-righteous text-9xl max-lg:text-8xl  max-sm:text-[50px] leading-tight">
        Testimonials
      </p>
      <p className="font-righteous dark:text-[#ffffff] text-[#000000] text-[24px] max-md:text-[18px] w-[95%] capitalize max-w-[60%] max-2xl:max-w-[65%] max-lg:max-w-[100%] max-sm:text-center ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam totam fugiat alias, 
      </p>
      <div className="mt-12 ">
        <div className="flex justify-center items-start">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`m-2 cursor-pointer w-[41px] h-[11px] ${
                currentPage === index ? "bg-[#d5d5d5]" : "bg-[#3c3c3c]"
              }`}
              onClick={() => {
                splideRef.current.splide.go(index);
                setCurrentPage(index);
              }}
            ></div>
          ))}
        </div>
        <Splide options={splideOptions} ref={splideRef}>
          {testimonials.map((el, index) => (
            <SplideSlide className="!border-0" key={index}>
              <div className="mt-12 h-full">
                <div className="flex justify-center items-start gap-4 ">
                  <div className="">
                    <svg
                      className="max-md:w-[65px] max-sm:w-[60px] h-[43px] max-md:h-[35px] max-sm:h-[32px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 53"
                      fill="black"
                    >
                      <mask
                        id="mask0_362_943"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="100"
                        height="53"
                      >
                        <path
                          d="M100 0.0444336H0V52.0444H100V0.0444336Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_362_943)">
                        <path
                          d="M63.7234 30.4067C63.6138 24.6556 62.812 18.9209 61.3134 13.2109C60.494 10.0889 59.4993 6.97512 58.531 3.86132C58.325 3.202 57.9175 2.57349 58.4828 1.89773C59.1401 1.11107 60.2967 0.609907 62.0144 0.447644C63.2195 0.334677 64.4769 0.301813 65.7126 0.289489C74.9056 0.201169 84.1028 0.127227 93.2957 0.049177C93.8785 0.0450691 94.4656 0.0409612 95.0483 0.049177C98.3565 0.096418 100.486 1.20761 99.9034 2.73986C98.6765 5.97279 97.3489 9.19544 95.9379 12.412C94.952 14.6549 93.8477 16.8875 92.6428 19.1058C91.3063 21.5726 89.8822 24.0312 88.3356 26.4733C86.7932 28.9134 85.1544 31.3432 83.3799 33.7505C79.6816 38.7662 75.3306 43.6546 69.8622 48.311C68.5826 49.3996 67.1542 50.4532 65.6381 51.472C64.8583 51.9958 63.5481 52.1766 62.1985 51.9444C60.9277 51.7268 60.402 51.2132 60.2924 50.6155C60.2356 50.2951 60.2618 49.9644 60.3626 49.644C61.252 46.7849 62.3299 43.9381 63.0179 41.0688C63.513 39.0168 63.5612 36.9382 63.6971 34.8699C63.7979 33.3828 63.7146 31.8937 63.7146 30.4046L63.7234 30.4067Z"
                          fill="white"
                        />
                        <path
                          d="M17.0391 0.246089C23.6643 0.178309 30.0878 0.100258 36.5116 0.0489094C40.3455 0.0181001 42.4488 1.2402 41.7214 3.0025C40.5427 5.87393 39.5743 8.76795 38.181 11.6168C36.0514 15.9835 33.7159 20.3277 31.3235 24.6635C28.9837 28.9028 25.9253 33.0416 22.6171 37.1351C20.0055 40.3661 17.1004 43.5414 13.6607 46.5977C12.0264 48.0478 10.2649 49.4671 8.51659 50.8884C8.1792 51.1616 7.66653 51.3999 7.15826 51.6155C6.22494 52.0119 5.10759 52.166 3.92014 51.9133C2.75022 51.6648 2.11049 51.1637 2.15429 50.5947C2.21565 49.8142 2.53551 49.0378 2.78965 48.2635C3.26288 46.8092 3.83251 45.3633 4.25316 43.9071C5.56329 39.3514 5.86563 34.7669 5.70351 30.1804C5.60273 27.309 5.35298 24.4294 4.80525 21.5703C3.91576 16.9386 2.76775 12.3151 1.63726 7.69373C1.26481 6.16353 0.629459 4.64977 0.0817413 3.13395C-0.422159 1.73726 1.44446 0.521319 4.55549 0.404244C7.64463 0.289222 10.7513 0.289222 13.8492 0.248143C14.9796 0.233766 16.1145 0.246089 17.0391 0.246089Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="">
                    <p className="font-righteous text-[#000000] dark:text-white text-[30px] max-md:text-[20px] leading-tight ">
                      {el.content}
                    </p>
                  </div>
                </div>
                <div className="ml-32 max-md:ml-16 max-sm:ml-2 mt-12 flex justify-start">
                  <div className="flex justify-center pr-4 items-center gap-4  border-r-2 border-r-[#B5C0C9] border-solid">
                    <Image
                      src={avatar1}
                      alt="Landscape picture"
                      width={60}
                      height={60}
                    />
                    <div className="dark:text-white text-[15.125px] font-righteous leading-6">
                      <p>{el.author}</p>
                      <p>{el.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <div className=" justify-end flex gap-2">
          <div
            className={`cursor-pointer ${
              currentPage === 0 && "opacity-30 cursor-not-allowed"
            }`}
            onClick={prevSlide}
          >
            <svg
              className="w-[80px] max-md:w-[70px] max-sm:w-[60px] h-[80px] max-md:h-[70px] max-sm:h-[60px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 126 127"
              fill="none"
            >
              <rect
                className="fill-black dark:fill-white"
                y="0.0444336"
                width="126"
                height="126"
                rx="63"
              />
              <path
                className="stroke-white dark:stroke-black"
                d="M83.2603 63.3784L38.9997 63.3784"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className="stroke-white dark:stroke-black"
                d="M57.1064 82.7119L38.9998 63.378L57.1064 44.0442"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            className={`cursor-pointer ${
              testimonials.length - 1 === currentPage &&
              "opacity-30 cursor-not-allowed"
            }`}
            onClick={nextSlide}
          >
            <svg
              className="w-[80px] max-md:w-[65px] max-sm:w-[60px] h-[80px] max-md:h-[65px] max-sm:h-[60px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 126 127"
              fill="none"
            >
              <rect
                className="fill-black dark:fill-white"
                y="0.0444336"
                width="126"
                height="126"
                rx="63"
              />
              <path
                className="stroke-white dark:stroke-black"
                d="M41 63.3779H85.2606"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className="stroke-white dark:stroke-black"
                d="M67.1538 44.0444L85.2604 63.3783L67.1538 82.7122"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonials;
