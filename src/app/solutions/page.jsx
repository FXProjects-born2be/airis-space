import "@/styles/solutions.scss";
import ContactUs from "@/components/ContactUs";
import React from "react";
import SolutionsHero from "./_components/SolutionsHero";
import SolutionsLoop from "./_components/SolutionsLoop";
import RequestPopup from "@/components/RequestPopup";
import SolutionsCta from "./_components/SolutionsCta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Solutions | AIris",
  description:
    "Explore AI-driven call center solutions that automate calls, filter leads, and optimize outreach. Discover the right plan for your business.",
  openGraph: {
    title: "Solutions | AIris",
    description:
      "Explore AI-driven call center solutions that automate calls, filter leads, and optimize outreach. Discover the right plan for your business.",
    images: "https://airis.space/images/meta.png",
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
      <Footer />
    </>
  );
};

export default Solutions;
