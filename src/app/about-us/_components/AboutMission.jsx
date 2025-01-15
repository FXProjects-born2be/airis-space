"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const AboutMission = () => {
  return (
    <section className="about-mission">
      <div className="_container">
        <div className="about-mission__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Call center optimization should be simple, affordable, and effective
            for businesses of all sizes. Airis is more than just a tool; it’s a
            solution designed to empower enterprises with modern technology
            while cutting through the noise and inefficiencies of the market.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
