"use client";
import React, { useRef } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Row = ({ index, title, description, imageSrc }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 500px", "end start"], // Customize the scroll range
  });

  // Define the parallax effect range for each row
  const translateY = useTransform(scrollYProgress, [0, 0.7], ["-110%", "110%"]);

  return (
    <div ref={containerRef} className="row">
      <div className="col">
        <span>{`0${index}`}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="image-wrap">
        {/**<motion.div
          className="image-wrap-inner"
          style={{ y: translateY }} // Bind scroll-based animation
        >
          <Image alt={`benefit${index}`} src={imageSrc} width={770} height={368} />
        </motion.div> */}
        <motion.div
          className="image-wrap-inner"
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
          <Image alt={`benefit${index}`} src={imageSrc} width={770} height={368} />
        </motion.div>
      </div>
    </div>
  );
};

const HomeBenefits = () => {
  const benefits = [
    {
      index: 1,
      title: "Work More Efficiently",
      description:
        "Handle more calls and leads with fewer people. Airis manages repetitive tasks, so your team can focus on high-value work.",
      imageSrc: "/images/home/benefit1.png",
    },
    {
      index: 2,
      title: "Save Money",
      description:
        "Reduce staffing costs—Airis automates calling and lead management, cutting expenses while strengthening engagement.",
      imageSrc: "/images/home/benefit2.png",
    },
    {
      index: 3,
      title: "Increase Productivity",
      description:
        "Airis filters out unqualified leads, letting your team focus on prospects ready to buy and boosting conversion rates and success.",
      imageSrc: "/images/home/benefit3.png",
    },
    {
      index: 4,
      title: "Generate Leads Continuously",
      description:
        "Airis runs around the clock to deliver a constant stream of qualified leads, so the team has new opportunities to follow up on.",
      imageSrc: "/images/home/benefit4.png",
    },
  ];

  return (
    <section className="home-benefits">
      <img src="/images/home/ellipse2.png" />
      <img src="/images/home/ellipse3.png" />
      <div className="_container">
        <div className="home-benefits__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Benefits
          </motion.h2>
          {benefits.map((benefit) => (
            <Row
              key={benefit.index}
              index={benefit.index}
              title={benefit.title}
              description={benefit.description}
              imageSrc={benefit.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBenefits;
