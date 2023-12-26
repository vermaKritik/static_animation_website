import Image, { StaticImageData } from "next/image";
import React from "react";

interface OldProjectCardProps {
  image: string | StaticImageData;
  name: string;
  tags: string[];
}

const OldProjectCard: React.FC<OldProjectCardProps> = ({ image, name, tags }) => {
  return (
    <div className="flex flex-col gap-4 max-sm:gap-2">
      <div>
        <Image src={image} alt="fas" />
      </div>
      <div className="font-righteous uppercase text-3xl max-md:text-2xl max-sm:text-xl dark:text-white">
        {name}
      </div>
      <div className="flex flex-row flex-wrap gap-4 max-md:text-sm uppercase font-righteous text-white">
        {tags.map((item, index) =>
          index === 0 ? (
            <div
              className="bg-royalblue dark:bg-candyOrange py-1 px-3 rounded-full"
              key={index}
            >
              {item}
            </div>
          ) : (
            <div
              className="bg-black dark:bg-white dark:text-black py-1 px-3 rounded-full"
              key={index}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OldProjectCard;
