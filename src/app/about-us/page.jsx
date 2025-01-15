import React from "react";
import "@/styles/about.scss";
import AboutHero from "./_components/AboutHero";
import ContactUs from "@/components/ContactUs";
import AboutMarketSolutions from "./_components/AboutMarketSolutions";
import AboutHow from "./_components/AboutHow";

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <AboutMarketSolutions />
      <AboutHow />
      <ContactUs image="/images/about/contact.png" />
    </>
  );
};

export default AboutUs;
