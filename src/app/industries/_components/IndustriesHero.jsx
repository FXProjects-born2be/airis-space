"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const IndustriesHero = () => {
  return (
    <section className="industries-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="industries-hero__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              alt="hero1"
              src={"/images/industries/hero1.png"}
              width={292}
              height={300}
            />
          </motion.div>
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Industries <br />We Serve
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Discover the benefits and use cases for your business.
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
              src={"/images/industries/hero2.png"}
              width={292}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;
