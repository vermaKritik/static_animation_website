"use client";
// useDarkMode.ts
import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Theme = "light" | "dark";

type UseDarkModeHook = [Theme, Dispatch<SetStateAction<Theme>>];

function useDarkMode(): UseDarkModeHook {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      return (storedTheme as Theme) || "dark";
    } else {
      return "dark";
    }
  });

  const colorTheme: Theme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
