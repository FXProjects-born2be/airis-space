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

const Article1Timeline = () => {
  return (
    <section className="article-timeline">
      <div className="_container">
        <div className="article-timeline__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Implementation Timeline
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
                <h3>Week 1:</h3>
                <p>Data integration and script creation</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col">
              <span></span>
              <div>
                <h3>Week 2:</h3>
                <p>Testing automated calls on a small batch of leads</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col">
              <span></span>
              <div>
                <h3>Week 3:</h3>
                <p>System-wide deployment to 20,000 leads</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col">
              <span></span>
              <div>
                <h3>Week 4:</h3>
                <p>Review of initial results and fine-tuning scripts/filters</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Article1Timeline;
