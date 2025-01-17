"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import PlansButton from "@/components/PlansButton";

const ArticleCta = ({ text }) => {
  return (
    <section className="article-cta">
      <div className="_container">
        <div className="article-cta__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default ArticleCta;
