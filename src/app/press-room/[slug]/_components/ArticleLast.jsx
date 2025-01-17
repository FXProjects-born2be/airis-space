"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ArticleLast = ({ img1, title1, slug1, img2, title2, slug2 }) => {
  return (
    <section className="article-last">
      <div className="_container">
        <div className="article-last__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <Link href={`/press-room/${slug1}`}>
              <Image alt="article1" src={img1} width={250} height={250} />
              <h2 dangerouslySetInnerHTML={{ __html: title1 }} />
            </Link>
            <Link href={`/press-room/${slug2}`}>
              <Image alt="article1" src={img2} width={250} height={250} />
              <h2 dangerouslySetInnerHTML={{ __html: title2 }} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArticleLast;
