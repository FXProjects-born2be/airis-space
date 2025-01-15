"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const SolutionsHero = () => {
  return (
    <section className="solutions-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="solutions-hero__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              alt="hero1"
              src={"/images/solutions/hero1.png"}
              width={545}
              height={444}
            />
          </motion.div>
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              AIris Solutions
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Tailored for businesses of all sizes and requirements.
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
              src={"/images/solutions/hero2.png"}
              width={545}
              height={444}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
