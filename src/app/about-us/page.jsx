import React from "react";
import "@/styles/about.scss";
import AboutHero from "./_components/AboutHero";
import ContactUs from "@/components/ContactUs";
import AboutMarketSolutions from "./_components/AboutMarketSolutions";
import AboutHow from "./_components/AboutHow";
import AboutMission from "./_components/AboutMission";
import AboutSecond from "./_components/AboutSecond";
import Footer from "@/components/Footer";
import AIrisInHeadlines from "../(home)/components/AIrisInHeadlines";

export const metadata = {
  title: "AIris Call Center Solutions | AIris",
  description:
    "Explore the AIris mission to transform call center operations with AI. Learn how we simplify outreach, reduce costs, and enhance lead engagement.",
  openGraph: {
    title: "AIris Call Center Solutions | AIris",
    description:
      "Explore the AIris mission to transform call center operations with AI. Learn how we simplify outreach, reduce costs, and enhance lead engagement.",
    images: "https://airis.space/images/meta.png",
  },
};

const AboutUs = () => {
  return (
    <main className="about-us-page">
      <AboutHero />
      <AboutSecond />
      <AboutMarketSolutions />
      <AboutHow />
      <AboutMission />
      <AIrisInHeadlines />
      <ContactUs image="/images/about/contact.png" />
      <Footer />
    </main>
  );
};

export default AboutUs;
