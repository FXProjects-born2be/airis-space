"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="_container">
        <div className="home-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Revolutionize <br />
            Communication and <br />
            Sales with AI-Driven <br />
            Solutions
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Transform Sales Processes and Boost Efficiency with <br />
            AI-Powered Sales Agents
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="buttons"
          >
            
            <Link href="/contact-us">
              Contact Us <ButtonArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
