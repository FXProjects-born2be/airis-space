"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const StandartsHero = () => {
  return (
    <section className="standarts-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="standarts-hero__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              alt="hero1"
              src={"/images/standarts/hero1.png"}
              width={330}
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
              Airis Standards
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              alt="hero1"
              src={"/images/standarts/hero2.png"}
              width={330}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StandartsHero;
