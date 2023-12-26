"use client";
import React, { useEffect, useState } from "react";
import useDarkMode from "@/app/DarkMode";
import { themeActions } from "@/store/themeSlice";
import Link from "next/link";
import { FaXRay } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function NavbarSection() {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Services", path: "/services" },
    { title: "About", path: "/about-us" },
    // { title: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    dispatch(themeActions.setTheme(colorTheme === "dark" ? "light" : "dark"));
  }, [colorTheme, dispatch]);

  return (
    <>
      {state && (
        <div className="fixed z-20 flex h-[100vh] w-full bg-white dark:bg-black">
          <div
            className="absolute right-3 top-2 flex cursor-pointer items-center justify-center p-4 text-[25px] font-medium lg:hidden"
            onClick={() => setState(false)}
          >
            <FaXRay />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <ul className="flex w-full list-none flex-col items-center justify-center gap-6 text-3xl uppercase">
              {navigation.map((item, index) => (
                <Link
                  onClick={() => setState(false)}
                  href={item.path}
                  key={index}
                  className="flex w-full items-center justify-center font-righteous text-black dark:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="sticky top-6 z-50 mx-auto flex  h-[70px] max-w-[85%] flex-row items-center justify-between rounded-full border-2 bg-royalblue px-8 shadow-xl dark:bg-white max-lg:top-4 max-lg:h-[60px] max-lg:max-w-[95%]">
        <Link href="/">
          <div className="font-dmSans text-2xl font-bold text-white dark:text-black">
            LOGO
          </div>
        </Link>
        <div className="text-md font-dmSans flex flex-row gap-x-8 font-normal text-white dark:text-black">
          {navigation.map((item, index) => (
            <Link href={item.path} key={index}>
              <div className="hidden md:block">{item.title}</div>
            </Link>
          ))}
        </div>
        <div className="flex items-center text-white dark:text-black">
          <button className="">
            {colorTheme == "light" ? (
              <IoSunny size={20} onClick={() => setTheme("light")} />
            ) : (
              <MdDarkMode size={20} onClick={() => setTheme("dark")} />
            )}
          </button>
          <div className="md:hidden">
            <button
              className=" rounded-md p-2 outline-none"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
