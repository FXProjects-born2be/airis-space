import React from "react";
import "@/styles/about.scss";
import AboutHero from "./_components/AboutHero";
import ContactUs from "@/components/ContactUs";
import AboutMarketSolutions from "./_components/AboutMarketSolutions";
import AboutHow from "./_components/AboutHow";
import AboutMission from "./_components/AboutMission";
import AboutSecond from "./_components/AboutSecond";

export const metadata = {
  title: "Airis Call Center Solutions | Airis",
  description:
    "Explore the Airis mission to transform call center operations with AI. Learn how we simplify outreach, reduce costs, and enhance lead engagement.",
  openGraph: {
    title: "Airis Call Center Solutions | Airis",
    description:
      "Explore the Airis mission to transform call center operations with AI. Learn how we simplify outreach, reduce costs, and enhance lead engagement.",
    images: "https://airis.space/images/meta.png",
  },
};

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <AboutSecond />
      <AboutMarketSolutions />
      <AboutHow />
      <AboutMission />
      <ContactUs image="/images/about/contact.png" />
    </>
  );
};

export default AboutUs;
