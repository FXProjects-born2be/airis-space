"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const HomeWhatIs = () => {
  return (
    <section className="home-what">
      <img src="/images/home/ellipse1.png" />
      <div className="_container">
        <div className="home-what__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            What is <br />
            AIris?
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col"
          >
            <h3>Effortless automation, powerful results.</h3>
            <p>
              Meet AIris - your new AI for call center automation. Boost
              efficiency, reduce costs, and optimize lead engagement with
              intelligent calling, automatic lead filtering, and real-time
              insights.
            </p>
            <Link href="/solutions">
              Explore Solutions
              <ButtonArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhatIs;
