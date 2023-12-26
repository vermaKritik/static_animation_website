"use client";
import React, { useState } from "react";
import ProcessCard from "./ProcessCard";

const ProcessSection = () => {
  const [cards, setCards] = useState([
    { bg:"bg-[#efeeee]" ,c:"text-black"},
    { bg: "bg-[#F1561B]" ,c:"text-white"},
    { bg: "bg-[#1A63D0]" ,c:"text-white"},
    { bg: "bg-[#efeeee]" ,c:"text-black"},
    { bg: "bg-[#7B5EA7]" ,c:"text-white"},
  ]);
  const [active, setActive] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center my-32">
      <div className="text-5xl uppercase font-righteous text-black dark:text-white">
        how do we do it?
      </div>
      <div className="mt-16 gap-6 flex-wrap flex flex-row items-center justify-center">
        {cards.map((el, idx) => (
          <ProcessCard
            key={idx}
            data={el}
            active={active === idx}
            idx={`0${idx + 1}`}
            onMouseOver={() => {
              setActive(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
