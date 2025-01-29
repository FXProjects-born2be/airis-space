import React from "react";
import "@/styles/agents.scss";
import ContactUs from "@/components/ContactUs";
import AgentsHero from "./_components/AgentsHero";
import AgentsLoop from "./_components/AgentsLoop";
import BusinessEthics from "./_components/BusinessEthics";

export const metadata = {
  title: "AI Sales Agents | Airis",
  description:
    "Discover how AI-powered sales agents from AIris revolutionize lead engagement. Communicate in any language, optimize sales processes, and maximize conversions with seamless automation and real-time lead handling.",
  openGraph: {
    title: "AI Sales Agents | Airis",
    description:
      "Discover how AI-powered sales agents from AIris revolutionize lead engagement. Communicate in any language, optimize sales processes, and maximize conversions with seamless automation and real-time lead handling.",
    images: "https://airis.space/images/meta.png",
  },
};

const page = () => {
  return (
    <>
      <AgentsHero />
      <AgentsLoop />
      <BusinessEthics />
      <ContactUs
        image="/images/agents/contact.png"
        title="<span>Have Questions?</span> Contact Us!"
      />
    </>
  );
};

export default page;
