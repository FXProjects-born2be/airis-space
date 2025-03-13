"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ProvenResults = () => {
  return (
    <section className="home-results">
      <div className="_container">
        <div className="home-results__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Proven Results with Airis
          </motion.h2>
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <h3>35%</h3>
              <p>Reduction in Lead Acquisition Costs</p>
            </motion.div>
            <div className="empty"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <h3>50%</h3>
              <p>Reduction in Lead Acquisition Costs</p>
            </motion.div>
            <div className="empty"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <h3>50%</h3>
              <p>Recovery of Abandoned Leads</p>
            </motion.div>
            <div className="empty"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <h3>50%</h3>
              <p>Savings on Call Center Costs</p>
            </motion.div>
            <div className="empty"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <h3>
                <span>Under</span> 5
              </h3>
              <p>Minutes Response Time to Leads</p>
            </motion.div>
            <div className="empty"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
