"use client";
import React, { useEffect, useRef } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const AboutMarketSolutions = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sliderWrapper = containerRef.current;

      if (!sliderWrapper) {
        console.error("Element .home-details not found.");
        return;
      }

      const rows = sliderWrapper.querySelectorAll(".row");
      if (rows.length === 0) {
        console.error("No rows found inside .home-details.");
        return;
      }

      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const wrapperStart = sliderWrapper.offsetTop;
      console.log("scrollY", scrollY);
      console.log("wrapperStart", wrapperStart);
      // Check if .home-details is partially or fully visible
      if (scrollY >= wrapperStart) {
        const activeRowIndex = Math.floor((scrollY - wrapperStart + 232) / 400);
        console.log("activeRowIndex", activeRowIndex);
        rows.forEach((row, index) => {
          if (index === activeRowIndex) {
            row.classList.add("active");
          } else {
            row.classList.remove("active");
          }
        });
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Run the scroll handler initially to set the active class on page load
    handleScroll();

    return () => {
      // Cleanup listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const solutions = [
    {
      index: 1,
      title: "Too Complex to Use",
      description:
        "Many AI systems require extensive setup, specialized training, or technical knowledge, making it difficult for businesses to integrate seamlessly.",
      imageSrc: "/images/how/01.svg",
    },
    {
      index: 2,
      title: "High Costs",
      description:
        "Most call center solutions come with hefty price tags, often beyond the reach of small and mid-sized businesses.",
      imageSrc: "/images/how/02.svg",
    },
    {
      index: 3,
      title: "Limited Scalability",
      description:
        "Many systems struggle to adapt to growing needs, leaving businesses stuck with solutions that can't scale as they expand.",
      imageSrc: "/images/how/03.svg",
    },
    {
      index: 4,
      title: "Lack of Focus on Actionable Insights",
      description:
        "Existing platforms often overwhelm users with data but fail to provide clear, actionable insights to help sales teams improve performance.",
      imageSrc: "/images/how/04.svg",
    },
    {
      index: 5,
      title: "Overpromised, Underdelivered",
      description:
        "Some AI solutions claim to revolutionize operations but fail to deliver consistent results, leaving businesses frustrated and skeptical.",
      imageSrc: "/images/how/05.svg",
    },
  ];

  return (
    <section className="market-solutions" ref={containerRef}>
      <img src="/images/home/ellipse2.png" />
      <img src="/images/home/ellipse3.png" />
      <div className="_container">
        <div className="market-solutions__body">
          <div className="top">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Current Market Solutions
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              The call center industry faces significant challenges with many
              existing solutions:
            </motion.p>
          </div>
          <div className="row-wrap">
            <div>
              {solutions.map((solution) => (
                <div className="row" key={solution.index}>
                  <div className="col-01">
                    <img src={solution.imageSrc} />
                  </div>
                  <div className="col-02">
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMarketSolutions;
