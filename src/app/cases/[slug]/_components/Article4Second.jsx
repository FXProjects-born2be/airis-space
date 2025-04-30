"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const Article4Second = () => {
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
              EverBright Solar Solutions’ business success relied on fast,
              effective communication with homeowners interested in solar panel
              installations. However, manual follow-up processes were too slow
              and inconsistent:
            </p>
            <ul>
              <li>
                Lead response time averaged 2 days, causing warm prospects to
                lose interest.
              </li>
              <li>
                Appointment booking rates were low, with only 6% of leads
                converting into consultations.
              </li>
              <li>
                A high no-show rate further undermined sales efforts, leading to
                wasted time and lost opportunities.
              </li>
            </ul>
            <p>
              The company realized that to scale effectively and close more
              deals, they needed a faster, smarter lead engagement process
              without adding headcount.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Article4Second;
