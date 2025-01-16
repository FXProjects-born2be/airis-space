import "@/styles/solutions.scss";
import ContactUs from "@/components/ContactUs";
import React from "react";
import SolutionsHero from "./_components/SolutionsHero";
import SolutionsLoop from "./_components/SolutionsLoop";
import RequestPopup from "@/components/RequestPopup";
import SolutionsCta from "./_components/SolutionsCta";

export const metadata = {
  title: "Solutions | Airis",
  description:
    "Explore AI-driven call center solutions that automate calls, filter leads, and optimize outreach. Discover the right plan for your business.",
  openGraph: {
    title: "Solutions | Airis",
    description:
      "Explore AI-driven call center solutions that automate calls, filter leads, and optimize outreach. Discover the right plan for your business.",
    //images: "",
  },
};

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
