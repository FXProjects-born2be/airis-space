"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const Article1Content = () => {
  return (
    <section className="article-content">
      <div className="_container">
        <div className="article-content__body">
          <div className="col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="block"
            >
              <h2>Solution</h2>
              <ul>
                <li>Airis Integration</li>
                <li>
                  To address these challenges, the firm chose Airis for its
                  AI-driven, automated call center functionality. Here’s how the
                  process unfolded:
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="block"
            >
              <h4>Data Upload and Segmentation</h4>
              <div className="table">
                <div>
                  <span>01</span>
                  <p>
                    The firm uploaded its lead database (over 20,000 contacts)
                    segmented by region and service interest.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    Airis securely integrated the data, ensuring proper
                    categorization and compliance with privacy standards.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="block"
            >
              <h4>Customized Call Scripts</h4>
              <div className="table">
                <div>
                  <span>01</span>
                  <p>
                    Airis worked with the firm to craft tailored scripts that
                    resonated with potential clients, focusing on key financial
                    services offerings.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    The scripts included clear talking points and questions to
                    qualify leads quickly.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="block"
            >
              <h4>Automated Calling and Lead Filtering</h4>
              <div className="table">
                <div>
                  <span>01</span>
                  <p>
                    Airis initiated automated calls using natural language
                    processing (NLP) to simulate human-like conversations.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    The system automatically classifies leads—Interested, Not
                    Interested, No Answer, Do Not Call, or Wrong Number.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="block"
            >
              <h4>Callback Scheduling</h4>
              <div className="table">
                <div>
                  <span>01</span>
                  <p>
                    For leads expressing interest, Airis scheduled callbacks at
                    times they preferred.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    This ensured no missed opportunities and gave agents a clear
                    schedule to follow.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="block"
            >
              <h4>Detailed Reporting</h4>
              <div className="table">
                <div>
                  <span>01</span>
                  <p>
                    Upon completion of each calling cycle, Airis generated
                    detailed reports that included:
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <ul>
                      <li>Lead classification outcomes</li>
                      <li>Call recordings for leads marked as “Interested”</li>
                      <li>
                        Organized callback times for easier agent follow-up
                      </li>
                    </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article1Content;
