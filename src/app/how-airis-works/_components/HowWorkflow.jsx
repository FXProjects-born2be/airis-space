"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HowWorkflow = () => {
  const features = [
    {
      index: 1,
      title: "Lead Database Integration",
      description:
        "Airis seamlessly integrates your lead database, categorized by geography or other parameters, for efficient processing.",
      imageSrc: "/images/how/feature1.svg",
    },
    {
      index: 2,
      title: "Custom Script Creation",
      description:
        "Airis designs fully customized scripts tailored to your business goals and target audience, ensuring effective engagement.",
      imageSrc: "/images/how/feature2.svg",
    },
    {
      index: 3,
      title: "AI-Powered Calling ＆Outreach",
      description:
        "Airis uses NLP for human-like conversations, collecting responses and ensuring continuous lead engagement.",
      imageSrc: "/images/how/feature3.svg",
    },
    {
      index: 4,
      title: "Lead Filtering",
      description:
        "Leads are classified into categories: Interested, Not Interested, No Answer, Do Not Call, and Wrong Number, making it easy to prioritize follow-ups.",
      imageSrc: "/images/how/feature4.svg",
    },
    {
      index: 5,
      title: "Callback Scheduling",
      description:
        "Airis records and schedules callbacks for interested leads, ensuring timely follow-ups based on their preferences.",
      imageSrc: "/images/how/feature5.svg",
    },
    {
      index: 6,
      title: "Live Call Transfers",
      description:
        "The system can transfer calls to a manager in real time for high-priority leads, ensuring seamless handoffs.",
      imageSrc: "/images/how/feature6.svg",
    },
    {
      index: 7,
      title: "Detailed Reporting",
      description:
        "Receive clear and actionable reports, including call outcomes, lead classifications, and callback details, to inform your next steps.",
      imageSrc: "/images/how/feature7.svg",
    },
    {
      index: 8,
      title: "Data Security",
      description:
        "Airis ensures your data is handled securely and used only for the agreed services, adhering to strict privacy standards.",
      imageSrc: "/images/how/feature8.svg",
    },
  ];

  return (
    <section className="how-workflow">
      <img src="/images/home/ellipse2.png" />
      <img src="/images/home/ellipse3.png" />
      <div className="_container">
        <div className="how-workflow__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Airis Workflow and Specific Features
          </motion.h2>
          <div className="row">
            {features.map((feature) => (
              <div className="item" key={feature.index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <img src={feature.imageSrc} />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorkflow;
