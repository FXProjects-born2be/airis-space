"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HowWorksHero = () => {
  return (
    <section className="how-airis-works-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="how-airis-works-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            How AIris Works
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Discover the simple, smart process behind AI for call centers.
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default HowWorksHero;
