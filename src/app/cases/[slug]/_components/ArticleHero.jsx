"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const ArticleHero = ({ title, subtitle, articleClass, img, short }) => {
  return (
    <section className={`article-hero ${articleClass}`}>
      <img src="/images/about/ellipse1.png" />
      <div className="_container">
        <div className="article-hero__body">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {subtitle}
            </motion.h2>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {title}
            </motion.h1>
            {short && (
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {short}
              </motion.p>
            )}
          </div>
          <Image alt="hero1" src={img} width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;
