"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import PlansButton from "@/components/PlansButton";

const SolutionsCta = () => {
  return (
    <section className="solutions-cta">
      <img src="/images/home/ellipse3.png" />
      <div className="_container">
        <div className="solutions-cta__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Pay-As-You-Go
          </motion.h2>
        </div>
        <div className="solutions-cta__row">
          <div className="item">
            <h3>Flexible and Risk-Free</h3>
            <p>
              Perfect for businesses wanting to explore Airis without long-term
              commitments. With this plan, there are no limits—pay only for the
              services you use.
            </p>
          </div>
          <div className="item">
            <h3>Why Choose Pay-As-You-Go?</h3>
            <ul>
              <li>No fixed monthly fees</li>
              <li>Scalable based on your needs</li>
              <li>A great way to test our solution</li>
            </ul>
          </div>
          <div className="item">
            <h3>Choose this plan to try Airis!</h3>
            <PlansButton position={"Pay-As-You-Go"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCta;
