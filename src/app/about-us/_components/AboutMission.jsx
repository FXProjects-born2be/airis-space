"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";

const AboutMission = () => {
  return (
    <section className="about-mission">
      <Image width={275} height={480} src={"/images/about/mission_left.png"} alt="left" />
      <Image width={275} height={480} src={"/images/about/mission_right.png"} alt="right" />
      <div className="_container">
        <div className="about-mission__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            At Airis, call center optimization should be simple, affordable, and
            effective for businesses of all sizes. Our mission is to
            revolutionize the sales process by empowering businesses with
            cutting-edge AI technology that delivers smarter, faster, and more
            effective solutions. Airis is more than just a tool; it’s a
            comprehensive solution designed to help enterprises streamline lead
            engagement, optimize workflows, and reduce costs while cutting
            through the market's inefficiencies. We aim to drive unparalleled
            growth and success for our clients worldwide by turning every lead
            into an opportunity.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
