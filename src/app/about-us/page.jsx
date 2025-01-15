import React from "react";
import "@/styles/about.scss";
import AboutHero from "./_components/AboutHero";
import ContactUs from "@/components/ContactUs";
import AboutMarketSolutions from "./_components/AboutMarketSolutions";
import AboutHow from "./_components/AboutHow";
import AboutMission from "./_components/AboutMission";

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <AboutMarketSolutions />
      <AboutHow />
      <AboutMission />
      <ContactUs image="/images/about/contact.png" />
    </>
  );
};

export default AboutUs;
