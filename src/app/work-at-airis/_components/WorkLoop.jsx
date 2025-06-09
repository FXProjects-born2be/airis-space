"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import JobButton from "@/components/JobButton";

const WorkLoop = () => {
  const works = [
    {
      index: 1,
      title: "Develop AI Solutions",
      position: "AI Developer",
      description:
        "We are looking for <b>AI developers</b> who know how AI works and how to improve it. You’ll help us create solutions that meet more business needs and make call center operations more efficient.",
    },
    {
      index: 2,
      title: "Create New Concepts",
      position: "Concept Developer",
      description:
        "We need <b>creative thinkers</b> to develop ideas that shape the future of call center management. Your role will focus on making our solutions smarter, simpler, and more effective for businesses.",
    },
    {
      index: 3,
      title: "Market the Value",
      position: "Marketing Expert",
      description:
        "We seek <b>marketing experts</b> who can explain our product's real benefits to businesses. Your work will connect us with customers and show how AIris solves real problems.",
    },
  ];

  return (
    <section className="work-loop">
      <img src="/images/home/ellipse2.png" />
      <img src="/images/home/ellipse3.png" />
      <div className="_container">
        <div className="work-loop__body">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            We redefine how businesses manage call centers with cutting-edge AI
            technology. Become a part of a groundbreaking journey to create
            innovative solutions that make businesses more efficient,
            productive, and successful.
          </motion.h3>
          <div className="wrap">
            {works.map((work) => (
              <div className="item" key={work.index}>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  {work.title}
                </motion.h2>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="col"
                >
                  <p dangerouslySetInnerHTML={{ __html: work.description }} />
                  <JobButton position={work.position} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkLoop;
