"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const Article3Content = () => {
  return (
    <>
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
                      Size: 15,000 leads, split evenly between the
                      human-operated call center (7,500 leads) and Airis (7,500
                      leads).
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
                      Percentage of leads expressing interest or signing up for
                      a service.
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
                <h4>Human Call Center Group at Skywave Telecom</h4>
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
                        Any callback requests were noted by individual agents
                        and scheduled in a shared calendar.
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
                        Airis was configured with a custom script tailored to
                        the company’s telecom services.
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
                        The AI recorded and scheduled callback times, ensuring
                        no manual oversight.
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
      <section className="article-implementation">
        <div className="_container">
          <div className="article-implementation__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Implementation Timeline
            </motion.h2>
            <div className="row">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <img src="/images/logo.svg" />
                <p>
                Human <br />Call Center <br />Skywave Telecom
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <div>
                  <span>Contact Rate</span>
                  <h3>82%</h3>
                </div>
                <p>65%</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <div>
                  <span>Conversion Rate</span>
                  <h3>18%</h3>
                </div>
                <p>12%</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <div>
                  <span>AHT</span>
                  <h3>
                    2<span>minutes/lead</span>
                  </h3>
                </div>
                <p>
                  5<span>minutes/lead</span>
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <div>
                  <span>CPC</span>
                  <h3>$10</h3>
                </div>
                <p>$18</p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <div>
                  <span>Callback AccuracyPC</span>
                  <h3>95%</h3>
                </div>
                <p>72%</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="article-key">
        <div className="_container">
          <div className="article-key__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Key Observations
            </motion.h2>
            <div className="row">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col half"
              >
                <h3>Higher Contact Rate:</h3>
                <p>
                  Airis’s automated and continuous calling approach reached more
                  leads, especially during off-peak hours when human agents were
                  unavailable.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col half"
              >
                <h3>Improved Conversion Rate:</h3>
                <p>
                  By filtering out unqualified leads, Airis allowed the
                  company’s sales team to focus on high-potential prospects,
                  increasing overall conversions.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <h3>Faster Handling Time:</h3>
                <p>
                  Airis engaged multiple leads in parallel, reducing the average
                  time spent per lead.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <h3>Lower Cost per Conversion: </h3>
                <p>
                  The telecom company spent less while converting more leads.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <h3>Accurate Callbacks:</h3>
                <p>
                  Airis automatically scheduled and delivered reminders,
                  reducing missed appointments and boosting customer
                  satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="article-key">
        <div className="_container">
          <div className="article-key__body">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Financial & Operational Impact
            </motion.h2>
            <div className="row">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <h3>Operational Cost Reduction: </h3>
                <p>
                  The company estimated a 30% decrease in labor costs by scaling
                  back the number of human operators needed for initial
                  outreach.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <h3>Increased Scalability:</h3>
                <p>
                  Airis handled thousands of calls without hiring additional
                  staff, making it easier to manage high-volume campaigns.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col"
              >
                <h3>Better Agent Utilization: </h3>
                <p>
                  With unqualified leads filtered out, the remaining human
                  agents focused on closing deals, further boosting sales
                  performance.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col full"
              >
                <p>
                  This case study highlights the clear advantages Airis provides
                  over a traditional human-operated call center in terms of cost
                  efficiency, scalability, and lead engagement. While skilled
                  human agents excel at nuanced conversations and complex
                  customer needs, Airis efficiently manages repetitive tasks,
                  callbacks, and lead filtering—ultimately allowing businesses
                  to allocate human resources where they’re most needed.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article3Content;
