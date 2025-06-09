import React from "react";
import "@/styles/how-airis-works.scss";
import ContactUs from "@/components/ContactUs";
import HowWorksHero from "./_components/HowWorksHero";
import HowWorkflow from "./_components/HowWorkflow";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How Call Center AI Works | AIris",
  description:
    "Discover how AI-driven call center automation works. Explore the process from data upload to lead filtering and actionable reports.",
  openGraph: {
    title: "How Call Center AI Works | AIris",
    description:
      "Discover how AI-driven call center automation works. Explore the process from data upload to lead filtering and actionable reports.",
    images: "https://airis.space/images/meta.png",
  },
};

const HowWorks = () => {
  return (
    <main className="how-airis-works-page">
      <HowWorksHero />
      <HowWorkflow />
      <ContactUs
        image="/images/how/contact.png"
        title="Discover how AIris can assist your business. <span>Contact us for more information!</span>"
      />
      <Footer />
    </main>
  );
};

export default HowWorks;
