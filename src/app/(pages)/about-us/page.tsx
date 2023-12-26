import Achievements from "@components/about-us/achievements";
import Going from "@components/about-us/going";
import AboutUsHero from "@components/about-us/hero";
import Started from "@components/about-us/started";
import Team from "@components/about-us/team";
import NavbarSection from "@components/navbar";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <AboutUsHero />
      <Achievements />
      <Team />
      <Started />
      <Going />
    </>
  );
}
