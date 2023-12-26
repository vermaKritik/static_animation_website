"use client";
import Image from "next/image";
import FlowerSvg from "@/svg/flower";
import InfiniteRotation from "../animations/InfiniteRotation";

export default function PortfolioHero() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[85%] max-lg:max-w-[95%] max-lg:px-10 max-md:px-0 px-24 py-10 mx-auto my-20 dark:bg-white rounded-3xl">
      <div className="text-[85px] max-lg:text-[65px] max-md:text-[55px] max-sm:text-[35px] max-xs:text-[30px] leading-tight text-center uppercase font-righteous">
        <span className="inline leading-[1.3] max-md:leading-[1.6]">
          <span className=" text-black">See</span>{" "}
          <span className="bg-[#5A56EB] my-1 text-white px-5 mx-2 rounded-tl-[30px] rounded-br-[30px]">
            projects
          </span>{" "}
          <span className=" text-black">that</span>{" "}
          <span className=" text-black">we’ve</span>{" "}
          <span>
            <Image
              alt="object"
              className="inline-block  max-sm:w-[70px] max-xs:w-[50px] max-sm:h-[70px] max-xs:h-[50px]"
              src="/Rectangle39584.svg"
              width={100}
              height={100}
            />
          </span>{" "}
          <span className=" text-black">done,and</span>{" "}
          <span className="bg-candyOrange my-1 text-white px-5 mx-2 rounded-tl-[30px] rounded-br-[30px]">
            companies
          </span>{" "}
          <span className=" text-black">we’ve help</span>.
        </span>
      </div>
      <div>
        <p className="text-center mt-6 from-neutral-400 font-righteous leading-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
          justo ipsum. Vestibulum non feugiat arcu. Ut mauris arcu, vulputate at
          nunc sed, congue auctor augue. Aliquam auctor commodo ex quis blandit.
          Sed nec mauris a erat malesuada posuere vitae convallis nunc. Proin at
          suscipit velit. Suspendisse quam ligula, tincidunt sit amet arcu at,
          ullamcorper tempus urna.
        </p>
      </div>
      <div className="relative flex justify-center items-center w-full mt-10 mx-6 max-lg:mx-0">
        <div className="w-fit cursor-pointer flex flex-row items-center justify-center text-white text-3xl max-lg:text-xl max-md:text-lg max-md:px-6 max-md:py-3 font-righteous uppercase rounded-full px-8 py-4 bg-royalblue dark:bg-candyOrange gap-3">
          Contact us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>

        <div className="max-sm:hidden absolute bottom-1 right-3">
          <InfiniteRotation duration={6}>
            <FlowerSvg
              width={100}
              classNames="fill-royalblue dark:fill-candyOrange"
            />
          </InfiniteRotation>
        </div>
      </div>
    </div>
  );
}
