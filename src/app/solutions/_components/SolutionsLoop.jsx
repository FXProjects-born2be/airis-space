"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import PlansButton from "@/components/PlansButton";

const SolutionsLoop = () => {
  const plans = [
    {
      name: "Basic",
      description:
        "Perfect for small businesses starting with call center automation.",
      features: `
        <ul>
          <li>Data warm-up: Up to 10,000 calls/month</li>
          <li>Basic lead filtering and categorization</li>
          <li>Summary reports with lead classifications (Interested, Not Interested, No Answer)</li>
        </ul>
      `,
      exclusions: `
        <ul>
          <li>No callback scheduling</li>
          <li>No live call transfer</li>
        </ul>
      `,
      support: `
        <ul>
          <li>Email support only</li>
        </ul>
      `,
    },
    {
      name: "Professional",
      description:
        "Ideal for growing businesses that need advanced call management.",
      features: `
        <ul>
          <li>Data warm-up: Up to 20,000 calls/month</li>
          <li>Advanced lead filtering and categorization</li>
          <li>Callback scheduling for Interested leads</li>
          <li>Detailed reports with call recordings for Interested leads</li>
          <li>Real-time dashboard access for tracking progress</li>
        </ul>
      `,
      exclusions: `
        <ul>
          <li>No live call transfer</li>
        </ul>
      `,
      support: `
        <ul>
          <li>Priority email and chat support</li>
        </ul>
      `,
    },
    {
      name: "Advanced",
      description: `The ultimate solution for large-scale businesses requiring full-service automation.`,
      features: `
        <ul>
          <li>Data warm-up: Up to 50,000 calls/month</li>
          <li>Comprehensive lead filtering and categorization</li>
          <li>Callback scheduling with automated reminders</li>
          <li>Live call transfer for high-priority leads</li>
          <li>In-depth reports with actionable insights and analytics</li>
          <li>API integration for seamless data management</li>
        </ul>
      `,
      support: `<ul>
          <li>Dedicated account manager and 24/7 support</li>
        </ul>`,
    },
  ];

  return (
    <section className="solutions-loop">
      <img src="/images/home/ellipse2.png" />
      <img src="/images/home/ellipse3.png" />
      <div className="_container">
        <div className="solutions-loop__body">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Plans
          </motion.h3>
          <div className="wrap">
            {plans.map((plan) => (
              <div className="item" key={plan.index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="col-01"
                >
                  <h2>{plan.name}</h2>
                  <p>{plan.description}</p>
                  <PlansButton position={plan.name} />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="col-02"
                >
                  {plan.features ? (
                    <div>
                      <h4>Included Features:</h4>
                      <div
                        dangerouslySetInnerHTML={{ __html: plan.features }}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  {plan.exclusions ? (
                    <div>
                      <h4>Exclusions:</h4>
                      <div
                        dangerouslySetInnerHTML={{ __html: plan.exclusions }}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  {plan.support ? (
                    <div>
                      <h4>Support:</h4>
                      <div dangerouslySetInnerHTML={{ __html: plan.support }} />
                    </div>
                  ) : (
                    ""
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsLoop;
