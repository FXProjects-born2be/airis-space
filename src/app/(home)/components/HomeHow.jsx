"use client";
import React from "react";
import { motion } from "framer-motion";

// Define animation variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay of 0.3 seconds between each child
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Animation duration
      ease: "easeOut", // Smoothing effect
    },
  },
};

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
            How Airis Works
          </motion.h2>
          {/* Apply stagger animation to the parent row */}
          <motion.div
            className="row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="col">
              <span></span>
              <div>
                <h3>
                  Data <br />
                  Integration
                </h3>
                <p>
                  Upload your customer information, including names and phone
                  numbers, to the Airis system securely.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col">
              <span></span>
              <div>
                <h3>
                  Automated <br />
                  Calling
                </h3>
                <p>
                  Airis makes calls to your contacts, using advanced speech
                  recognition to engage with them and gather responses.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col">
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
            <motion.div variants={fadeInUp} className="col">
              <span></span>
              <div>
                <h3>
                  Actionable <br />
                  Reports
                </h3>
                <p>
                  Detailed reports include categorized leads, callback
                  schedules, and call recordings for Interested prospects.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHow;
