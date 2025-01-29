"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const AgentsHero = () => {
  return (
    <section className="agents-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="agents-hero__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              alt="hero1"
              src={"/images/agents/hero1.png"}
              width={330}
              height={353}
            />
          </motion.div>
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              AI Sales Agents
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              The Future of Lead Engagement
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
              src={"/images/agents/hero2.png"}
              width={330}
              height={353}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentsHero;
