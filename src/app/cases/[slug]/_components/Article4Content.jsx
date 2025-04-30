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
                  EverBright Solar integrated Airis AI sales agents into their
                  sales funnel to:
                </h4>
                <div className="tables six">
                  <div className="table">
                    <div>
                      <p>Instantly call and engage new incoming leads.</p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Answer basic product and service questions automatically
                        using customized, dynamic scripts.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Handle objections such as pricing concerns or technical
                        questions about solar installation.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Schedule home consultations directly in sales reps’
                        calendars based on availability.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Confirm appointments and send reminders to reduce
                        no-show rates.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Transfer hot leads live to available agents for
                        immediate conversion opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                <h4>Results After 4 Months:</h4>

                <div className="tables five">
                  <div className="table">
                    <div>
                      <p>
                        Appointment booking rate tripled, rising from 6% to 19%.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Lead response time dropped from 2 days to under 10
                        minutes after inquiry submission.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        No-show rate decreased by 35% thanks to automated
                        appointment confirmations and reminders.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>Sales conversion rate improved by 28%.</p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Generated an estimated €1,120,000 in additional annual
                        revenue from better lead handling and faster sales
                        cycles.
                      </p>
                    </div>
                  </div>
                </div>

                <h4>EverBright Solar also reported:</h4>

                <div className="tables five">
                  <div className="table">
                    <div>
                      <p>
                        Increased sales team efficiency, as reps spent more time
                        closing deals and less time chasing leads.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Higher customer satisfaction, with homeowners
                        appreciating the fast and professional response.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Improved brand perception, as automation gave the
                        company a more modern, reliable image.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        More accurate sales forecasting, as Airis provided
                        real-time lead status updates and better pipeline
                        visibility.
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div>
                      <p>
                        Reduced operational costs, as fewer resources were
                        needed for initial lead outreach and appointment
                        scheduling.
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
                By leveraging Airis, EverBright Solar Solutions automated the
                most critical stages of lead engagement, resulting in faster
                booking, lower no-show rates, and a substantial revenue
                increase—without adding to their sales team.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article4Content;
