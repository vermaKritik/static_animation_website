import Stat from "@/components/portfolioPage/Stat";
import ClientMap from "@/components/portfolioPage/clientMap";
import FAQ from "@/components/portfolioPage/faq";
import PortfolioHero from "@/components/portfolioPage/hero";
import Projects from "@/components/portfolioPage/projects";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="dark:text-white text-center">
      <PortfolioHero />
      <Stat />
      <ClientMap />
      <Projects />
      <FAQ />
    </div>
  );
}
