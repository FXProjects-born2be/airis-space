"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const Article1Results = () => {
  return (
    <section className="article-results">
      <div className="_container">
        <div className="article-results__body">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Results and Impact:
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item full"
            >
              <h3>25%</h3>

              <p>
                <b>Reduction in Operational Costs</b>
                The firm significantly cut down on agent hours devoted to
                repetitive tasks by automating the initial calling and lead
                filtering.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item full"
            >
              <h3>30%</h3>

              <p>
                <b> Increase in Agent Productivity</b>
                With unqualified leads filtered out, agents focused on
                high-potential prospects, boosting conversions and overall
                efficiency.
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item left"
            >
              <h4>Enhanced Customer Engagement</h4>

              <p>
                Callback scheduling ensured interested leads were reached at
                convenient times, improving customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item full"
            >
              <h4>
                Better Agent <br />
                Experience
              </h4>

              <p>
                Reduced workload and clearer follow-up schedules led to lower
                burnout rates, helping the firm retain top talent.
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item full"
            >
              <h2>Scalability</h2>

              <p>
                Airis handled large call volumes without requiring additional
                hiring, giving the firm room to grow its client base without
                increasing overhead costs.
                <br />
                <br />
                Through Airis, this financial services firm transformed its call
                center from a cost-heavy, manual operation into a lean,
                high-performing system. Agents now spend more time closing deals
                and nurturing interested leads, while Airis continuously
                generates detailed insights to improve the sales process.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article1Results;
