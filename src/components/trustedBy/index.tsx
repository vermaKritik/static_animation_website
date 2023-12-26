import Image from "next/image";
import logo1 from "../../../public/image-17@2x.png";

export default function TrustedBySection() {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="text-gray-300 dark:text-mistygray font-righteous text-center text-[140px] max-lg:text-[100px] max-md:text-[70px] max-sm:text-[50px] leading-[130.5px] uppercase flex items-center ">
        Trusted By
      </div>
      <div className="flex flex-row items-center justify-center max-lg:max-w-[80%] max-md:max-w-[90%] max-md:gap-8 max-sm:gap-4 gap-16 relative -top-12 dark:invert">
        <div>
          <Image src={logo1} alt="company logos" width={200} />
        </div>
        <div>
          <Image src={logo1} alt="company logos" width={200} />
        </div>
        <div>
          <Image src={logo1} alt="company logos" width={200} />
        </div>
        <div>
          <Image src={logo1} alt="company logos" width={200} />
        </div>
      </div>
    </div>
  );
}
