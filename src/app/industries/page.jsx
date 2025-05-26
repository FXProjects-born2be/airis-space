import React from "react";
import "@/styles/industries.scss";
import IndustriesHero from "./_components/IndustriesHero";
import ContactUs from "@/components/ContactUs";
import IndustriesLoop from "./_components/IndustriesLoop";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Industries We Serve | Airis",
  description:
    "Discover how AI-powered call center automation enhances efficiency across industries like finance, real estate, healthcare, and more.",
  openGraph: {
    title: "Industries We Serve | Airis",
    description:
      "Discover how AI-powered call center automation enhances efficiency across industries like finance, real estate, healthcare, and more.",
    images: "https://airis.space/images/meta.png",
  },
};

const Industries = () => {
  return (
    <main className="industries-page">
      <IndustriesHero />
      <IndustriesLoop />
      <ContactUs
        image="/images/industries/contact.png"
        title="Discover AIris solutions for your business!<span>Contact us today!</span>"
      />
      <Footer />
    </main>
  );
};

export default Industries;
