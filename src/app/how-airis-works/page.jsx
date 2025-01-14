import React from "react";
import "@/styles/how-airis-works.scss";
import ContactUs from "@/components/ContactUs";
import HowWorksHero from "./_components/HowWorksHero";

const AboutUs = () => {
  return (
    <>
      <HowWorksHero />
      <ContactUs
        image="/images/how/contact.png"
        title="Discover how AIris can assist your business. <span>Contact us for more information!</span>"
      />
    </>
  );
};

export default AboutUs;
