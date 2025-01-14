"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HomeHow = () => {
  return (
    <section className="home-how">
      <div className="_container">
        <div className="home-how__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            How AIris Works
          </motion.h2>
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <span></span>
              <div>
                <h3>
                  Data <br />
                  Integration
                </h3>
                <p>
                  Upload your customer information, including names and phone
                  numbers, to the AIris system securely.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <span></span>
              <div>
                <h3>
                  Automated <br />
                  Calling
                </h3>
                <p>
                  AIris makes calls to your contacts, using advanced speech
                  recognition to engage with them and gather responses.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <span></span>
              <div>
                <h3>
                  Leads <br />
                  Filtering
                </h3>
                <p>
                  The system categorizes leads into Interested, Not Interested,
                  No Answer, Do Not Call, or Wrong Number for efficient
                  follow-up.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <span></span>
              <div>
                <h3>
                  Actionable <br />
                  Reports
                </h3>
                <p>
                  Detailed reports include categorized leads, callback
                  schedules, and call recordings for Interested prospects
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHow;
