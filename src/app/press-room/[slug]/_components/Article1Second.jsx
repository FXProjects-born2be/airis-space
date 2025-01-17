"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const Article1Second = () => {
  return (
    <section className="article-second">
      <div className="_container">
        <div className="article-second__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="item full"
          >
            <h2>Challenge</h2>
            <p>
              A growing financial services firm faced rising operational costs
              due to a manually operated call center. Their agents spent hours
              each day calling leads who were often uninterested, leading to low
              productivity and high burnout rates. The firm also struggled with
              missed follow-ups, as it was challenging to manually track all
              potential callbacks.
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
              <li>Excessive agent workload due to repetitive calls</li>
              <li>Limited visibility into lead quality and status</li>
              <li>Missed callback opportunities due to manual scheduling</li>
              <li>High turnover rates linked to agent burnout</li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="item"
          >
            <h2>Industry</h2>
            <h4>Financial Services</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Article1Second;
