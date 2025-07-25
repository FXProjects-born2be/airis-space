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
        "AIris seamlessly integrates your lead database, categorized by geography or other parameters, for efficient processing.",
      imageSrc: "/images/how/feature1.svg",
    },
    {
      index: 2,
      title: "Custom Script Creation",
      description:
        "AIris designs fully customized scripts tailored to your business goals and target audience, ensuring effective engagement.",
      imageSrc: "/images/how/feature2.svg",
    },
    {
      index: 3,
      title: "Callback Scheduling",
      description:
        "AIris records and schedules callbacks for interested leads, ensuring timely follow-ups based on their preferences.",
      imageSrc: "/images/how/feature5.svg",
    },
    {
      index: 4,
      title: "Live Call Transfers",
      description:
        "The system can transfer calls to a manager in real time for high-priority leads, ensuring seamless handoffs.",
      imageSrc: "/images/how/feature6.svg",
    },
    {
      index: 5,
      title: "Data Security",
      description:
        "AIris ensures your data is handled securely and used only for the agreed services, adhering to strict privacy standards.",
      imageSrc: "/images/how/feature8.svg",
    },
    {
      index: 6,
      title: "Detailed Reporting",
      description:
        "Receive clear and actionable reports, including call outcomes, lead classifications, and callback details, to inform your next steps.",
      imageSrc: "/images/how/feature7.svg",
    },
    {
      index: 7,
      title: "AI-Powered Calling ＆Outreach",
      description:
        "AIris uses NLP for human-like conversations, collecting responses and ensuring continuous lead engagement.",
      imageSrc: "/images/how/feature3.svg",
    },
    {
      index: 8,
      title: "Live Transfer and Lead Categorization",
      description:
        "High-intent leads are instantly transferred to your sales team for immediate action. <br/><br/>Leads are categorized as Interested, Not Interested, No Answer, Do Not Call, or Wrong Number, ensuring your team focuses on the most promising prospects.",
      imageSrc: "/images/how/feature4.svg",
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
            AIris Workflow and Specific Features
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
                  <p dangerouslySetInnerHTML={{__html: feature.description}} />
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
