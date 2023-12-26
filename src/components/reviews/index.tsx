import Image from "next/image";
import avatar1 from "../../../public/ellipse-11@2x.png";
import avatar2 from "../../../public/ellipse-3@2x.png";
import avatar3 from "../../../public/ellipse-10@2x.png";
import FlowerSvg from "@/svg/flower";
import ObjectSvg from "@/svg/object";
import StarSVg from "@/svg/star";
import CommaSvg from "@/svg/comma";

export default function ReviewsSection() {
  return (
    <div className="max-w-[70%] max-2xl:max-w-[85%] max-md:max-w-[90%] mx-auto my-40">
      <div className="my-10 flex flex-col gap-16 place-items-end ">
        <div className="flex flex-row items-center gap-20 justify-between">
          <div className="max-sm:hidden">
            <FlowerSvg width={200} fill="white" />
          </div>
          <div>
            <div className="font-righteous uppercase leading-tight text-[70px] max-lg:text-[50px] text-right dark:text-white">
              People <br /> Name 
            </div>
            <div className="font-righteous mt-4 uppercase text-xl max-lg:text-lg text-right dark:text-white">
              Our company has built products for scale and can serve hundreds of
              millions of monthly users.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 font-righteous">
          <div className="grid gap-5">
            <div className="bg-royalblue dark:bg-white text-white dark:text-black p-10 rounded-3xl">
              <div className="mb-5 flex flex-row justify-between items-center gap-8 max-sm:gap-0">
                <div className="text-5xl">What our client say!</div>
                <ObjectSvg width={100} fill="blue" />
              </div>
              <div className="flex flex-row items-center justify-between">
                <StarSVg width={70} fill="black" />
                <div className="text-right">
                  Lorem ipsum dolor sit amet consectetur. ddfdft jkl io Diam
                  elementum ipsum sit lectus pellentesque vitae. Magna
                </div>
              </div>
            </div>
            <div className="bg-sunflower dark:text-white p-10 rounded-3xl flex flex-col justify-between gap-6">
              <div>
                <CommaSvg width={25} fill="black" />
              </div>
              <div className=" flex flex-row items-end">
                <div className="dark:text-black">
                  Lorem ipsum dolor sit amet consectetur. ddfdft jkl io Diam
                  elementum ipsum sit lectus pellentesque vitae. Magna lorum
                  ipsum dolar site amet consecteture
                </div>
                <div>
                  <Image alt="avatar" src={avatar1} width={150} />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 text-white">
            <div className="flex flex-col p-8 justify-between rounded-3xl gap-4 bg-royalblue dark:bg-white text-white dark:text-black">
              <div>
                <CommaSvg width={25} fill="black" />
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. ddfdft jkl io Diam
                elementum ipsum sit lectus pellentesque vitae. Magna
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="dark:text-royalblue text-sunflower">
                  Ollie Schneider
                </div>
                <div>
                  <Image alt="avatar" src={avatar2} width={40} />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 rounded-3xl gap-4 bg-royalblue dark:bg-white text-white dark:text-black">
              <div>
                <CommaSvg width={25} fill="black" />
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. ddfdft jkl io Diam
                elementum ipsum sit lectus pellentesque vitae. Magna
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="dark:text-royalblue text-sunflower">
                  Ollie Schneider
                </div>
                <div>
                  <Image alt="avatar" src={avatar3} width={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
