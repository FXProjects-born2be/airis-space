"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="about-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            About Us
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Why we crafted AIris.
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
