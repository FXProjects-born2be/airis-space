import React from "react";
import "@/styles/standarts.scss";
import ContactUs from "@/components/ContactUs";
import StandartsHero from "./_components/StandartsHero";
import StandartsLoop from "./_components/StandartsLoop";

const Standarts = () => {
  return (
    <>
      <StandartsHero />
      <StandartsLoop />
      <ContactUs
        image="/images/standarts/contact.png"
        title="<span>Have Questions?</span> Contact Us!"
      />
    </>
  );
};

export default Standarts;
