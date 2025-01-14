"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const HomePrivacy = () => {
  return (
    <section className="home-privacy">
      <div className="_container">
        <div className="home-privacy__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Data Privacy and Security
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            AIris is committed to keeping your data secure and confidential. We
            implement strong measures to protect sensitive information
            throughout our processes. Your data is used exclusively for
            delivering our services, following strict privacy regulations to
            ensure its safety and integrity.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link href="#">
              Learn More
              <ButtonArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePrivacy;
