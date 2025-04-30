"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const Article4Content = () => {
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
                <h2>Solution</h2>
                <h4>
                  NovaLux implemented Airis AI sales agents to overhaul their
                  lead engagement strategy.
                  <br />
                  <br />
                  The solution included:
                </h4>
                <br />
                <br />
                <ul>
                  <li>
                    Automated outbound calls immediately after a lead was
                    generated.
                  </li>
                  <li>
                    Qualification of prospects in real-time based on customized
                    scripts.
                  </li>
                  <li>
                    Handling of common objections such as pricing concerns,
                    product ingredients, and shipping timelines.
                  </li>
                  <li>
                    Seamless scheduling of consultations with live sales agents
                    for high-potential leads.
                  </li>
                </ul>
                <br />
                <br />
                <h4>
                  With Airis, NovaLux could engage leads instantly, filter and
                  prioritize prospects, and convert interest into action faster
                  than ever before.
                </h4>
                <br />
                <br />
                <h4>Results After 3 Months:</h4>

                <div className="tables four">
                  <div className="table">
                    <div>
                      <p>
                        Lead-to-consultation rate increased from 18% to 39%.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>Customer acquisition cost dropped by 32%.</p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Agent productivity improved by 41%, allowing the company
                        to handle twice as many leads without hiring additional
                        staff.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Revenue grew by €480,000 from recovered and
                        faster-converted leads.
                      </p>
                    </div>
                  </div>
                </div>

                <h4>NovaLux also reported:</h4>

                <div className="tables four">
                  <div className="table">
                    <div>
                      <p>
                        A noticeable improvement in customer satisfaction, as
                        leads were contacted within minutes instead of days.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Lower burnout among sales agents, who now focused only
                        on qualified, high-intent prospects instead of cold
                        outreach.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Higher long-term retention, as buyers engaged early were
                        more likely to become repeat customers.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Revenue grew by €480,000 from recovered and
                        faster-converted leads.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="article-content-bottom">
        <div className="_container">
          <div className="article-content-bottom__body">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item full"
            >
              <h2>Key Takeaway:</h2>
              <p>
                By automating its direct sales engagement with Airis, NovaLux
                Skincare not only reduced operational costs but also
                dramatically increased conversions and revenue—all while
                providing a faster, more satisfying customer experience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article4Content;
