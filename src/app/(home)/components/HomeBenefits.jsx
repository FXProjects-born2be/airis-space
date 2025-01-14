"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeBenefits = () => {
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <div className="col">
              <span>01</span>
              <h3>Work More Efficiently</h3>
              <p>
                Handle more calls and leads with fewer people. AIris manages
                repetitive tasks, so your team can focus on high-value work.
              </p>
            </div>
            <Image
              alt="benefit1"
              src={"/images/home/benefit1.png"}
              width={770}
              height={368}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <div className="col">
              <span>02</span>
              <h3>Save Money</h3>
              <p>
                Reduce staffing costs—AIris automates calling and lead
                management, cutting expenses while strengthening engagement.
              </p>
            </div>
            <Image
              alt="benefit2"
              src={"/images/home/benefit2.png"}
              width={770}
              height={368}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <div className="col">
              <span>03</span>
              <h3>Increase Productivity</h3>
              <p>
                AIris filters out unqualified leads, letting your team focus on
                prospects ready to buy and boosting conversion rates and
                success.
              </p>
            </div>
            <Image
              alt="benefit3"
              src={"/images/home/benefit3.png"}
              width={770}
              height={368}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <div className="col">
              <span>04</span>
              <h3>Generate Leads Continuously</h3>
              <p>
                AIris runs around the clock to deliver a constant stream of
                qualified leads, so the team has new opportunities to follow up
                on.
              </p>
            </div>
            <Image
              alt="benefit4"
              src={"/images/home/benefit4.png"}
              width={770}
              height={368}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeBenefits;
