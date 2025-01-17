import React from "react";
import "@/styles/how-airis-works.scss";
import ContactUs from "@/components/ContactUs";
import HowWorksHero from "./_components/HowWorksHero";
import HowWorkflow from "./_components/HowWorkflow";

export const metadata = {
  title: "How Call Center AI Works | Airis",
  description:
    "Discover how AI-driven call center automation works. Explore the process from data upload to lead filtering and actionable reports.",
  openGraph: {
    title: "How Call Center AI Works | Airis",
    description:
      "Discover how AI-driven call center automation works. Explore the process from data upload to lead filtering and actionable reports.",
    images: "https://airis.space/images/meta.png",
  },
};

const HowWorks = () => {
  return (
    <>
      <HowWorksHero />
      <HowWorkflow />
      <ContactUs
        image="/images/how/contact.png"
        title="Discover how Airis can assist your business. <span>Contact us for more information!</span>"
      />
    </>
  );
};

export default HowWorks;
