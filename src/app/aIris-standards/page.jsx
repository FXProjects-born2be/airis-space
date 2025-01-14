import React from "react";
import "@/styles/standarts.scss";
import ContactUs from "@/components/ContactUs";
import StandartsHero from "./_components/StandartsHero";

const Standarts = () => {
  return (
    <>
      <StandartsHero />
      <ContactUs
        image="/images/standarts/contact.png"
        title="<span>Have Questions?</span> Contact Us!"
      />
    </>
  );
};

export default Standarts;
