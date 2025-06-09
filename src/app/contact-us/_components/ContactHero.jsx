"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="contact-hero__body">
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Contact AIris Team
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              All questions, all channels—just reach out.
            </motion.h2>
          </div>
          <Image
            alt="hero1"
            src={"/images/contact/hero.png"}
            width={314}
            height={325}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
