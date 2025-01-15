"use client";
import React, { useEffect, useRef } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const AboutHow = () => {
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
      title: "User-Friendly Design",
      description:
        "Airis is designed for everyone. With a simple setup process and no need for specialized training, you can get started quickly and focus on what matters—engaging your leads.",
      imageSrc: "/images/how/01.svg",
    },
    {
      index: 2,
      title: "Affordable for All Businesses",
      description:
        "Our transparent pricing ensures that businesses of all sizes can access AI-powered call center optimization without breaking the bank.",
      imageSrc: "/images/how/02.svg",
    },
    {
      index: 3,
      title: "Scalable to Your Needs",
      description:
        "Whether you’re managing a small database or millions of leads, Airis scales effortlessly to meet your needs as your business grows.",
      imageSrc: "/images/how/03.svg",
    },
    {
      index: 4,
      title: "Clear and Actionable Insights",
      description:
        "Airis provides straightforward, categorized reports, helping you prioritize high-potential leads and make informed decisions without digging through unnecessary data.",
      imageSrc: "/images/how/04.svg",
    },
    {
      index: 5,
      title: "Reliable and Consistent Results",
      description:
        "Airis delivers what it promises—efficient lead management, clear reporting, and real-time call transfer for critical interactions.",
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
              How Airis is Different
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              We created Airis to address these challenges and offer a smarter, simpler solution for businesses:
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

export default AboutHow;
