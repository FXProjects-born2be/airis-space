"use client";
import React, { useEffect, useRef } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion, useScroll, useTransform } from "framer-motion";
const AboutSecond = () => {
  return (
    <section className="about-second">
      <img src="/images/home/ellipse2.png" />
      <img src="/images/home/ellipse3.png" />
      <img src="/images/about/aboutSecond.png" />
      <img src="/images/about/aboutSecondMob.png" />
      <div className="_container">
        <div className="about-second__body">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            At AIris, we are redefining the way businesses <br />
            engage with leads and drive sales. With over 14 years <br />
            of experience managing call centers across <br />
            industries, we’ve mastered the art of combining <br />
            human expertise with advanced AI technology.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our AI sales agents are designed to streamline lead <br />
            engagement, turning cold prospects into hot leads <br />
            with intelligent conversations and multilingual <br />
            capabilities. From crafting optimized scripts to <br />
            implementing efficient workflows, we empower <br />
            businesses to achieve greater efficiency, reduced <br />
            costs, and higher conversion rates.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            At AIris, innovation meets proven expertise to help <br />
            you unlock your sales potential.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSecond;
