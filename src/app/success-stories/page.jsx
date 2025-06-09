import React from "react";
import "@/styles/stories.scss";
import ContactUs from "@/components/ContactUs";
import AgentsHero from "./_components/AgentsHero";
import AgentsLoop from "./_components/StoriesLoop";
import BusinessEthics from "./_components/BusinessEthics";
import StoriesLoop from "./_components/StoriesLoop";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Success Stories | AIris",
  description:
    "See how AIris helps businesses boost conversions, recover lost leads, and optimize sales. Explore real success stories from e-commerce, SaaS, and real estate.",
  openGraph: {
    title: "Success Stories | AIris",
    description:
      "See how AIris helps businesses boost conversions, recover lost leads, and optimize sales. Explore real success stories from e-commerce, SaaS, and real estate.",
    images: "https://airis.space/images/meta.png",
  },
};

const page = () => {
  return (
    <main className="stories-page">
      <AgentsHero />
      <StoriesLoop />
      <ContactUs
        image="/images/stories/contact.webp"
        title="<span>Have Questions?</span> Contact Us!"
      />
      <Footer />
    </main>
  );
};

export default page;
