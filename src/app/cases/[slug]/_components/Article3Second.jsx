"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const Article3Second = () => {
  return (
    <section className="article-second">
      <div className="_container">
        <div className="article-second__body even">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="item"
          >
            <h2>Background</h2>
            <p>
              Skywave Telecom, a mid-sized telecommunications company ran a
              traditional call center with over 40 human operators. Despite
              ongoing training and performance reviews, they consistently
              struggled with high labor costs, agent burnout, and missed
              opportunities in lead follow-ups.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="item"
          >
            <h2>Key Pain Points</h2>
            <ul>
              <li>
                High Operational Costs: Salaries, benefits, and continuous
                training for 40+ agents.
              </li>
              <li>
                Inconsistent Performance: Some agents excelled, but others
                lagged, leading to varied customer experiences.
              </li>
              <li>
                Limited Scalability: Meeting high-volume demands required hiring
                and onboarding more agents.
              </li>
              <li>
                Missed Follow-Ups: Busy agents often fail to keep track of
                callbacks and potential upsell opportunities.
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="item"
          >
            <h2>Objective</h2>
            <p>
              To compare the efficiency and return on investment (ROI) of the
              existing human-operated call center with Airis, an AI-driven call
              center solution that automates outreach and lead engagement.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="item"
          >
            <h2>Industry</h2>
            <h4>Telecommunications</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Article3Second;
