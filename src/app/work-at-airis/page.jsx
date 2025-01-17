import React from "react";
import "@/styles/work-at-airis.scss";
import ContactUs from "@/components/ContactUs";
import WorkHero from "./_components/WorkHero";
import WorkLoop from "./_components/WorkLoop";
import WorkCta from "./_components/WorkCta";
import JobPopup from "@/components/JobPopup";

export const metadata = {
  title: "Careers in AI Call Center Technology | Airis",
  description:
    "Join our team and help develop AI-driven call center solutions. Explore opportunities in AI development, marketing, and business innovation.",
  openGraph: {
    title: "Careers in AI Call Center Technology | Airis",
    description:
      "Join our team and help develop AI-driven call center solutions. Explore opportunities in AI development, marketing, and business innovation.",
    images: "https://airis.space/images/meta.png",
  },
};

const WorkAtAiris = () => {
  return (
    <>
      <WorkHero />
      <WorkLoop />
      <WorkCta />
      <ContactUs
        image="/images/work/contact.png"
        title="<span>Have Questions?</span> Contact Us!"
      />
      <JobPopup />
    </>
  );
};

export default WorkAtAiris;
