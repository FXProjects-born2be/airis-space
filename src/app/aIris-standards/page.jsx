import React from "react";
import "@/styles/standarts.scss";
import ContactUs from "@/components/ContactUs";
import StandartsHero from "./_components/StandartsHero";
import StandartsLoop from "./_components/StandartsLoop";

export const metadata = {
  title: "AI Call Center Standards | Airis",
  description:
    "Learn about our commitment to ethical AI, data privacy, and secure call center automation. Explore how we protect your business and customer data.",
  openGraph: {
    title: "AI Call Center Standards | Airis",
    description:
      "Learn about our commitment to ethical AI, data privacy, and secure call center automation. Explore how we protect your business and customer data.",
    //images: "",
  },
};

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
