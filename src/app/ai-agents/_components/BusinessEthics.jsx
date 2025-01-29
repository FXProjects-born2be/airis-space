"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const BusinessEthics = () => {
  return (
    <section className="business-ethics">
      <Image
        src={"/images/agents/ethics.png"}
        width={392}
        height={416}
        alt="ethics"
      />
      <div className="_container">
        <div className="business-ethics__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <h2>Business Ethics</h2>
            <p>
              Our approach to business is grounded in integrity and
              transparency:
            </p>
          </motion.div>
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>
                Proven <br />
                Experience
              </h3>
              <p>
                With over 14 years of expertise in managing call centers, we
                have a deep understanding of what it takes to succeed.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>
                Versatility Across <br />
                Industries
              </h3>
              <p>
                We operate in diverse fields, including media, marketing, sales,
                customer service, compliance, and more.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>
                Maximize Existing <br />
                Data
              </h3>
              <p>
                Re-engage leads at any stage of the sales process and turn them
                into high-potential prospects.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>
                Cost-Efficient <br />
                Solutions
              </h3>
              <p>
                Save up to 50% on client acquisition costs with our optimized
                processes.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>
                Fully Automated <br />
                Processes
              </h3>
              <p>
                Delegate lead engagement to Airis while your team focuses on
                closing deals.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>
                Customizable AI <br />
                Agents
              </h3>
              <p>
                Tailor scripts, voices, and strategies to fit your market needs
                and brand identity.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>
                Comprehensive <br />
                Support
              </h3>
              <p>
                Benefit from a dedicated team and 12/7 service designed to boost
                your success.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>
                Multilingual AI <br />
                Capabilities
              </h3>
              <p>
                Our AI agents can communicate in any language, adapting
                seamlessly to your market and audience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessEthics;
