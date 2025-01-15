"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const HowWorksHero = () => {
  return (
    <section className="how-airis-works-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="how-airis-works-hero__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              alt="hero1"
              src={"/images/how/hero1.png"}
              width={282}
              height={315}
            />
          </motion.div>
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              How Airis Works
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              alt="hero1"
              src={"/images/how/hero2.png"}
              width={282}
              height={315}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWorksHero;
