import React from "react";
import "@/styles/contact-us.scss";
import ContactHero from "./_components/ContactHero";
import ContactBlock from "./_components/ContactBlock";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | AIris",
  description:
    "Have questions or need assistance? Contact the AIris team via form, email, or phone. We’re here to help with AI-powered call center solutions.",
  openGraph: {
    title: "Contact Us | AIris",
    description:
      "Have questions or need assistance? Contact the AIris team via form, email, or phone. We’re here to help with AI-powered call center solutions.",
    images: "https://airis.space/images/meta.png",
  },
};

const ContactPage = () => {
  return (
    <main className="contact-us-page">
      <ContactBlock />
      <Footer />
    </main>
  );
};

export default ContactPage;
