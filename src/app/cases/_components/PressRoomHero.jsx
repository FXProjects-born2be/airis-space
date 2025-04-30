"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const PressRoomHero = () => {
  return (
    <section className="pressroom-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="pressroom-hero__body">
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Cases
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Discover how companies boost sales and cut costs with Airis
            </motion.h2>
          </div>
          <Image
            alt="hero1"
            src={"/images/blog/hero.png"}
            width={581}
            height={435}
          />
        </div>
      </div>
    </section>
  );
};

export default PressRoomHero;
