"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const WorkHero = () => {
  return (
    <section className="work-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="work-hero__body">
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Work at Airis
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Join our mission to transform call centers.
            </motion.h2>
          </div>
        </div>
      </div>
      <div className="work-hero__image">
        <img src="/images/work/hero.png" />
      </div>
    </section>
  );
};

export default WorkHero;
