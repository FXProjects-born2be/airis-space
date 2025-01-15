import "@/styles/solutions.scss";
import ContactUs from "@/components/ContactUs";
import React from "react";
import SolutionsHero from "./_components/SolutionsHero";
import SolutionsLoop from "./_components/SolutionsLoop";
import RequestPopup from "@/components/RequestPopup";
import SolutionsCta from "./_components/SolutionsCta";

const Solutions = () => {
  return (
    <>
      <SolutionsHero />
      <SolutionsLoop />
      <SolutionsCta />
      <ContactUs
        image="/images/solutions/contact.png"
        title="<span>Have Questions?</span> Contact Us!"
      />
      <RequestPopup />
    </>
  );
};

export default Solutions;
