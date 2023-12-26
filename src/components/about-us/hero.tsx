"use client"
import Image from "next/image";
import avatar1 from "../../../public/Ellipse 8.png";
import avatar2 from "../../../public/Ellipse 9.png";
import avatar3 from "../../../public/Ellipse 10.png";
import avatar4 from "../../../public/Ellipse 11.png";
import object1 from "../../../public/rectangle-4529@2x.png";
import object2 from "../../../public/Rectangle 39547.png";

import FlowerSvg from "@/svg/flower";
import CircleSvg from "@/svg/circle";
import InfiniteRotation from "../animations/InfiniteRotation";

type Props = {};

export default function AboutUsHero({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center max-w-[85%] max-lg:max-w-[95%] max-lg:px-10 max-md:px-6 px-20 py-10 mx-auto my-20 dark:bg-white rounded-3xl">
      <div className="text-[85px] max-lg:text-[65px] max-md:text-[55px] max-sm:text-[40px] max-xs:text-[35px] leading-tight text-center uppercase font-righteous">
        {/* <div className="relative">
        <div className="absolute right-0 top-[200px]">
          <CircleSvg width={156} fill="black" />
        </div>
      </div> */}
        <span className="inline">
          <span className="text-royalblue dark:text-black">We help our</span>{" "}
          <span className="text-black dark:text-candyOrange">clients</span>{" "}
          <span className="text-royalblue dark:text-black">to Grow their</span>{" "}
          <span className="text-black dark:text-candyOrange">Business</span>{" "}
          <span>
            <Image
              alt="object"
              className="inline-block max-lg:w-[150px] max-md:w-[120px]"
              src={object2}
              width={170}
            />
          </span>{" "}
          <span className="text-royalblue dark:text-black">with us</span>.
        </span>
      </div>

      <div className="mt-10 text-center font-righteous text-lg max-lg:text-base max-sm:text-sm">
        Lorem ipsum, dolor sit amet elit. Mollitia dolor ipsa velit? Placeat,
        magni omnis iusto dolores atque accusamus, obcaecati sequi natus quo ad
        sint nemo officiis veritatis eos ipsum reiciendis laborum commodi vero
        eveniet quibusdam perferendis illo? Perspiciatis temporibus officia
        veniam
      </div>

      <div className="flex flex-row justify-between w-full items-end mt-4">
        <div>
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
            />{" "}
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
          </span>
        </div>
        <div>
          <InfiniteRotation duration={6}>
            <FlowerSvg width={120} fill="black" />
          </InfiniteRotation>
        </div>
      </div>
    </div>
  );
}
