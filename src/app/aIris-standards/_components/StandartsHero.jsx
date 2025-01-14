"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const StandartsHero = () => {
  return (
    <section className="standarts-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="standarts-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            AIris Standards
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our commitment to ethical and secure practices.
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default StandartsHero;
