import React from "react";
import "@/styles/about.scss";
import AboutHero from "./_components/AboutHero";
import ContactUs from "@/components/ContactUs";
import AboutMarketSolutions from "./_components/AboutMarketSolutions";
import AboutHow from "./_components/AboutHow";
import AboutMission from "./_components/AboutMission";

export const metadata = {
  title: "AIris Call Center Solutions",
  description:
    "Explore the AIris mission to transform call center operations with AI. Learn how we simplify outreach, reduce costs, and enhance lead engagement.",
  openGraph: {
    title: "AIris Call Center Solutions",
    description:
      "Explore the AIris mission to transform call center operations with AI. Learn how we simplify outreach, reduce costs, and enhance lead engagement.",
    //images: "",
  },
};

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
