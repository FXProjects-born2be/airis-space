"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PressRoomLoop = () => {
  const posts = [
    {
      slug: "boosting-call-center-efficiency-with-airis",
      title: "Case Study: Financial Firm <br/>Transforms Call Center",
      excerpt: `By integrating Airis, a mid-sized financial services company reduced operational <br/>
            costs by 25% and boosted agent productivity by 30%. By automating calls, filtering <br/>
            leads, and scheduling callbacks, the firm shifted resources to high-value prospects, <br/>
            improving conversions and lowering burnout.`,
      img: "/images/blog/article1.png",
    },
    {
      slug: "comparing-human-call-center-efficiency-vs-airis",
      title: "Case Study:<br/>Human vs. Airis",
      excerpt: `A mid-sized telecom company measured cost savings, conversions, and efficiency <br/>
            by comparing its 40-agent call center to Airis. See how AI solutions outperformed <br/>
            traditional methods, significantly boosting ROI and reducing operational costs.`,
      img: "/images/blog/article2.png",
    },
    {
      slug: "ai-trends-in-business-process-optimization",
      title: "AI Trends in Business Process <br/>Optimization 2025 and Beyond",
      excerpt: `Discover how hyperautomation, predictive analytics, and ethical AI are set <br/>
            to reshape business operations. Learn what these trends mean for your company's <br/>
            future.`,
      img: "/images/blog/article3.png",
    },
    {
      slug: "ai-trends-in-business-process-optimization",
      title: "How AI Outbound Call Centers <br/>Elevate Customer Satisfaction",
      excerpt: `Discover how personalized outreach, intelligent lead filtering, and seamless human <br/>
            handoffs transform outbound calling into a positive customer experience.`,
      img: "/images/blog/article4.png",
    },
  ];

  return (
    <section className="pressroom-loop">
      <img src="/images/home/ellipse3.png" />
      <img src="/images/home/ellipse2.png" />
      <img src="/images/home/ellipse3.png" />
      <img src="/images/home/ellipse2.png" />

      <div className="_container">
        <div className="pressroom-loop__body">
          {posts.map((post, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="post"
              key={index}
            >
              <Link href={`/press-room/${post.slug}`}>
                <Image alt="article1" src={post.img} width={500} height={500} />
                <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
                <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressRoomLoop;
