"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const AgentsHero = () => {
  return (
    <section className="stories-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="stories-hero__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              alt="hero1"
              src={"/images/stories/hero1.png"}
              width={303}
              height={369}
            />
          </motion.div>
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Client Results
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              See How Businesses Succeed with Airis
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
              src={"/images/stories/hero2.png"}
              width={303}
              height={369}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentsHero;
