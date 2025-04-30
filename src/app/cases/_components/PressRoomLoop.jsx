"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PressRoomLoop = () => {
  const posts = [
    {
      slug: "case-study-financial-firm-transforms-call-center",
      title: "Case Study: Financial Firm <br/>Transforms Call Center",
      excerpt: `By integrating Airis, Brightstone Financial, a mid-sized financial services company, reduced operational costs by 25% and boosted agent productivity by 30%. Airis automated calls, intelligently filtered leads, and scheduled callbacks, allowing Brightstone Financial to shift resources toward high-value prospects. As a result, the firm significantly improved conversion rates, lowered agent burnout, and achieved faster client acquisition.`,
      img: "/images/blog/article1.png",
    },
    {
      slug: "case-study-human-vs-airis",
      title: "Case Study:<br/>Human vs. Airis",
      excerpt: `Skywave Telecom, a mid-sized telecommunications company, measured cost savings, conversions, and efficiency by comparing its 40-agent call center to Airis. By automating outreach and lead handling, Skywave Telecom saw AI solutions significantly outperform traditional methods, leading to a major boost in ROI and a sharp reduction in operational costs.`,
      img: "/images/blog/article2.png",
    },
    {
      slug: "case-study-boosting-direct-sales-conversions-with-airis",
      title: "Case Study: Boosting Direct Sales Conversions with Airis",
      excerpt: `NovaLux Skincare, a direct-to-consumer beauty brand, transformed its lead engagement by integrating Airis. Faster outreach, smart objection handling, and automated appointment scheduling helped increase consultations by 117% and boost revenue by €480,000 in just three months.`,
      img: "/images/blog/article3.png",
    },
    {
      slug: "case-study-increasing-appointment-rates-in-home-services",
      title: "Case Study: Increasing Appointment Rates in Home Services",
      excerpt: `EverBright Solar Solutions, a direct residential solar provider, automated lead outreach with Airis and tripled their appointment booking rate, cut no-shows by 35%, and added over €1,100,000 in new revenue within four months.`,
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
              custom={0.25}
            >
              <div className="post-inner">
                <div>
                  <Image
                    alt="article1"
                    src={post.img}
                    width={250}
                    height={250}
                  />
                  <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
                  <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
                <Link href={`/cases/${post.slug}`}>
                  Read the Case
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.2197 7.71967C17.5126 7.42678 17.9874 7.42678 18.2803 7.71967L22.0303 11.4697C22.3232 11.7626 22.3232 12.2374 22.0303 12.5303L18.2803 16.2803C17.9874 16.5732 17.5126 16.5732 17.2197 16.2803C16.9268 15.9874 16.9268 15.5126 17.2197 15.2197L19.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H19.6893L17.2197 8.78033C16.9268 8.48744 16.9268 8.01256 17.2197 7.71967Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressRoomLoop;
