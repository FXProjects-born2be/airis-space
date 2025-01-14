import React from "react";
import "@/styles/about.scss";
import AboutHero from "./_components/AboutHero";
import ContactUs from "@/components/ContactUs";

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <ContactUs image="/images/about/contact.png" />
    </>
  );
};

export default AboutUs;
