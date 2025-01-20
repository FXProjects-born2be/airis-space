"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const Article3Content = () => {
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
              <h2>Methodology</h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="block"
            >
              <h4>Pilot Period</h4>
              <div className="table">
                <div>
                  <span>01</span>
                  <h3>Duration:</h3>
                  <p>Four weeks.</p>
                </div>
                <div>
                  <span>02</span>
                  <h3>Sample Size: </h3>
                  <p>
                    Size: 15,000 leads, split evenly between the human-operated
                    call center (7,500 leads) and Airis (7,500 leads).
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
              <h4>Metrics Tracked</h4>
              <div className="table">
                <div>
                  <span>01</span>
                  <h3>Contact Rate:</h3>
                  <p>Percentage of leads successfully reached.</p>
                </div>
                <div>
                  <span>02</span>
                  <h3>Conversion Rate:</h3>
                  <p>
                    Percentage of leads expressing interest or signing up for a
                    service.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <h3>Average Handling Time (AHT):</h3>
                  <p>Time spent per lead or call.</p>
                </div>
                <div>
                  <span>04</span>
                  <h3>Cost Per Conversion (CPC):</h3>
                  <p>
                    Total operational cost divided by the number of converted
                    leads.
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
              <h4>Data Analysis</h4>
              <div className="table">
                <div>
                  <span>01</span>
                  <p>
                    Results were compiled at the end of each week for both
                    groups.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    Agents in the human-operated center were not given
                    additional AI tools, ensuring a clear distinction between
                    methods.
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
              <h2>Implementation Details</h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="block"
            >
              <h4>Human Call Center Group</h4>
              <div className="table">
                <div>
                  <span>01</span>
                  <h3>Staffing:</h3>
                  <p>40 agents, two team leaders, one manager.</p>
                </div>
                <div>
                  <span>02</span>
                  <h3>Process:</h3>
                  <ul>
                    <li>
                      Agents dialed leads manually or via a basic auto-dialer.
                    </li>
                    <li>
                      Any callback requests were noted by individual agents and
                      scheduled in a shared calendar.
                    </li>
                    <li>
                      Leads were classified as Interested, Not Interested, or
                      Could Not Be Reached.
                    </li>
                  </ul>
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
              <h4>Airis Group</h4>
              <div className="table">
                <div>
                  <span>01</span>
                  <h3>Setup:</h3>
                  <ul>
                    <li>
                      Airis was configured with a custom script tailored to the
                      company’s telecom services.
                    </li>
                    <li>
                      Leads were segmented by region and service interest.
                    </li>
                  </ul>
                </div>
                <div>
                  <span>02</span>
                  <h3>Process:</h3>
                  <ul>
                    <li>
                      AI-powered calling initiated automatically, employing
                      speech recognition to understand responses.
                    </li>
                    <li>
                      Leads were filtered into Interested, Not Interested, No
                      Answer, Do Not Call, and Wrong Number.
                    </li>
                    <li>
                      The AI recorded and scheduled callback times, ensuring no
                      manual oversight.
                    </li>
                    <li>Detailed reports were available in real time.</li>
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

export default Article3Content;
