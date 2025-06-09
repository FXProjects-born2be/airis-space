import React from "react";
import "@/styles/standarts.scss";
import ContactUs from "@/components/ContactUs";
import StandartsHero from "./_components/StandartsHero";
import StandartsLoop from "./_components/StandartsLoop";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI Call Center Standards | AIris",
  description:
    "Learn about our commitment to ethical AI, data privacy, and secure call center automation. Explore how we protect your business and customer data.",
  openGraph: {
    title: "AI Call Center Standards | AIris",
    description:
      "Learn about our commitment to ethical AI, data privacy, and secure call center automation. Explore how we protect your business and customer data.",
    images: "https://airis.space/images/meta.png",
  },
};

const Standarts = () => {
  return (
    <main className="standarts-page">
      <StandartsHero />
      <StandartsLoop />
      <ContactUs
        image="/images/standarts/contact.png"
        title="<span>Have Questions?</span> Contact Us!"
      />
      <Footer />
    </main>
  );
};

export default Standarts;
