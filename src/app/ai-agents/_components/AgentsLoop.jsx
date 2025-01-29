"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const AgentsLoop = () => {
  return (
    <section className="agents-loop">
      <img src="/images/home/ellipse2.png" />
      <img src="/images/home/ellipse3.png" />
      <img src="/images/home/ellipse3.png" />
      <div className="_container">
        <div className="agents-loop__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <h2>
              Lead Engagement <br />
              Redefined
            </h2>
            <p>
              Our AI sales agents are designed to transform <br />
              your lead engagement process:
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
              <h3>What We Offer:</h3>
              <ul>
                <li>
                  Capable of communicating in any language, tailored to any
                  market or industry.
                </li>
                <li>
                  Structured to engage leads at any stage of the sales process
                  and guide them toward conversion.
                </li>
                <li>
                  Equipped to handle rebuttals, answer questions, and direct
                  leads seamlessly through meaningful conversations.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>What You Get:</h3>
              <ul>
                <li>
                  Advanced AI technology that drives effective communication and
                  maximizes conversion potential.
                </li>
                <li>
                  Effortless lead nurturing and engagement, reducing the need
                  for manual intervention.
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <h2>
              Unlimited Data <br />
              Warm-Up
            </h2>
            <p>
              We engage your leads systematically to ensure <br />
              maximum re-engagement:
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
              <h3>What We Offer:</h3>
              <ul>
                <li>
                  Calling leads multiple times over a strategically planned
                  period, optimized for the best response rates.
                </li>
                <li>
                  Providing comprehensive reports that categorize leads into:
                  Callbacks, Interested, Not Interested, No Answer, or Wrong
                  Number.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>What You Get:</h3>
              <ul>
                <li>
                  Continuous re-engagement with your leads, tailored to your
                  business's specific needs.
                </li>
                <li>
                  Actionable insights to improve lead management and conversion
                  rates.
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <h2>
              Data Warm-Up with <br />
              Callback Scheduling
            </h2>
            <p>
              Extend the benefits of Data Warm-Up with <br />
              advanced follow-up capabilities:
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
              <h3>What We Offer:</h3>
              <ul>
                <li>
                  Automated callback scheduling ensures every interested lead is
                  followed up at their preferred time.
                </li>
                <li>
                  Leads requesting callbacks are automatically recorded and
                  prioritized for your sales team.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>What You Get:</h3>
              <ul>
                <li>
                  A structured and efficient callback system for better lead
                  conversion.
                </li>
                <li>
                  Enhanced lead prioritization to focus on high-intent
                  prospects.
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <h2>
              Seamless Live <br />
              Call Transfer
            </h2>
            <p>Connect directly with high-intent leads in real-time:</p>
          </motion.div>
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>What We Offer:</h3>
              <ul>
                <li>
                  Calls are instantly transferred to your sales team, ensuring
                  no time is wasted.
                </li>
                <li>
                  A seamless handoff process ensures your sales reps can focus
                  on closing deals efficiently.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>What You Get:</h3>
              <ul>
                <li>
                  Immediate access to high-quality leads ready to convert.
                </li>
                <li>Optimized sales operations with minimal friction.</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <h2>
              Dedicated Support <br />
              and Optimization
            </h2>
            <p>
              We work closely with you to ensure the best <br />
              results for your business:
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
              <h3>What We Offer:</h3>
              <ul>
                <li>
                  A dedicated team collaborates directly with your business to
                  help maximize your sales potential.
                </li>
                <li>
                  Script optimization tailored to your specific company, market,
                  and objectives.
                </li>
                <li>
                  Support available 12/7 to ensure smooth operations and ongoing
                  assistance.
                </li>
                <li>
                  AI agents capable of speaking in any language, adapting
                  seamlessly to your market and audience.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>What You Get:</h3>
              <ul>
                <li>
                  Personalized, hands-on support to ensure continuous
                  improvements in your sales process.
                </li>
                <li>
                  Fully customized scripts and strategies to match your industry
                  and target audience.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsLoop;
