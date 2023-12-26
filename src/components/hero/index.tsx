import avatar1 from "../../../public/Ellipse 8.png";
import avatar2 from "../../../public/Ellipse 9.png";
import avatar3 from "../../../public/Ellipse 10.png";
import avatar4 from "../../../public/Ellipse 11.png";
import object1 from "../../../public/rectangle-4529@2x.png";
import object2 from "../../../public/rectangle-4528@2x.png";

import Image from "next/image";
import FlowerSvg from "@/svg/flower";
import CircleSvg from "@/svg/circle";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[85%] max-lg:max-w-[95%] max-lg:px-10 max-md:px-0 px-20 py-10 mx-auto my-20 dark:bg-white rounded-3xl">
      <div className="text-[85px] max-lg:text-[65px] max-md:text-[55px] max-sm:text-[40px] max-xs:text-[35px] leading-tight text-center uppercase font-righteous">
        {/* <div className="relative">
          <div className="absolute right-0 top-[200px]">
            <CircleSvg width={156} fill="black" />
          </div>
        </div> */}
        <span className="inline">
          <span className="-space-x-6 max-xs:-space-x-5 overflow-hidden">
            <Image
              alt="avatar"
              src={avatar1}
              className="inline-block w-16 max-lg:w-14 max-md:w-12 max-xs:w-10 rounded-full"
            />
            <Image
              alt="avatar"
              src={avatar2}
              className="inline-block w-16 max-lg:w-14 max-md:w-12 max-xs:w-10 rounded-full"
            />
            <Image
              alt="avatar"
              src={avatar3}
              className="inline-block w-16 max-lg:w-14 max-md:w-12 max-xs:w-10 rounded-full"
            />
            <Image
              alt="avatar"
              src={avatar4}
              className="inline-block w-16 max-lg:w-14 max-md:w-12 max-xs:w-10 rounded-full"
            />
          </span>{" "}
          <span className="text-royalblue dark:text-candyOrange">Crafting</span>{" "}
          <span>
            <Image
              alt="object"
              className="inline-block max-lg:w-[150px] max-md:w-[120px]"
              src={object1}
              width={200}
            />
          </span>{" "}
          exceptional{" "}
          <span className="inline-block max-sm:hidden">
            <FlowerSvg width={60} fill="black" />
          </span>{" "}
          <span className="text-royalblue dark:text-candyOrange">digital</span>{" "}
          <span className="text-royalblue dark:text-candyOrange">
            experiences
          </span>{" "}
          for you and{" "}
          <span>
            <Image
              alt="object"
              className="inline-block max-lg:w-[150px] max-md:w-[120px]"
              src={object2}
              width={170}
            />
          </span>{" "}
          your{" "}
          <span className="text-royalblue dark:text-candyOrange">audience</span>
          .
        </span>
      </div>

      <div className="mt-20 max-md:mt-10 mx-6 max-lg:mx-0 flex flex-row max-md:flex-col max-md:items-center max-md:gap-y-10 max-md:px-6 items-center justify-between">
        <div className="w-6/12 max-md:w-full max-lg:w-7/12 font-righteous text-lg max-md:text-base max-md:text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          voluptatem corrupti nemo tenetur illum delectus hic eligendi ex
          perferendis tempore.
        </div>
        <div className="flex flex-row items-center justify-center text-white text-3xl max-lg:text-xl max-md:text-lg max-md:px-6 max-md:py-3 font-righteous uppercase rounded-full px-8 py-4 bg-royalblue dark:bg-candyOrange gap-3">
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
      </div>
    </div>
  );
}
