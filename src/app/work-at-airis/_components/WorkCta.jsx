"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const WorkCta = () => {
  return (
    <section className="work-cta">
      <img src="/images/home/ellipse3.png" />
      <div className="_container">
        <div className="work-cta__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            With combined effort, we <br />
            create something truly <br />
            genuine.
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default WorkCta;
