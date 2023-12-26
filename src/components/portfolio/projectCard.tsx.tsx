import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectCardProps {
  image: string | StaticImageData;
  name: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, tags }) => {
  return (
    <div className="relative group">
      <div className="cursor-pointer transition-all duration-[500ms] ease-[ease] w-[350px] px-2 pb-2 pt-6 rounded-[30px] border-[5px] border-black dark:border-white group-hover:bg-[#5A56EB]  group-hover:rounded-bl-[60%] overflow-hidden">
        <p className=" dark:text-white text-[28px] font-righteous leading-[35px] uppercase group-hover:text-[#ffff]">
          Creative Design Agency Landing Page
        </p>
        <p className="mt-2 dark:text-[#AFAFAF] text-xs font-righteous leading-[19px] uppercase group-hover:text-[#ffff]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          venenatis sem a pellentesque aliquam. Nullam et vestibulum leo. In sit
          amet luctus nibh, at eleifend augue
        </p>
        <div className="mt-4">
          <Image
            className="rounded-[30px] rounded-bl-[0px]"
            src={image}
            alt="fas"
          />
        </div>
      </div>

      <div className="absolute cursor-pointer opacity-0 left-[15px] bottom-[20px] transition-all duration-[800ms] ease-[ease] group-hover:opacity-100 group-hover:left-[30px]  group-hover:bottom-[40px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          viewBox="0 0 164 164"
          fill="none"
        >
          <rect
            x="3.5"
            y="3.5"
            width="157"
            height="157"
            rx="78.5"
            fill="#E7E51E"
          />
          <rect
            className="dark:stroke-white stroke-black"
            x="3.5"
            y="3.5"
            width="157"
            height="157"
            rx="78.5"
            stroke-width="7"
          />
          <path
            d="M61.8018 102.802L102.537 62.0664"
            stroke="#0F0F0F"
            stroke-width="9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M68.0791 60.9371L102.538 62.0667L103.667 96.5254"
            stroke="#0F0F0F"
            stroke-width="9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProjectCard;
