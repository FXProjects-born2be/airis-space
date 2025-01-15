import React from "react";
import "@/styles/work-at-airis.scss";
import ContactUs from "@/components/ContactUs";
import WorkHero from "./_components/WorkHero";
import WorkLoop from "./_components/WorkLoop";
import WorkCta from "./_components/WorkCta";
import JobPopup from "@/components/JobPopup";

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
