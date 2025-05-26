"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const WhatBusinessSay = () => {
  return (
    <section className="home-business-say">
      
      <div className="_container">
        <div className="home-business-say__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            What Businesses Say About Airis
          </motion.h2>
          <div className="row">
            <img className="star1" src="/images/home/star.png" />
            <img className="star2" src="/images/home/star.png" />
            <img className="star3" src="/images/home/star.png" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <div className="top">
                <h3>E-Commerce</h3>
                <p>
                  “We were losing too many sales to abandoned carts, and our
                  team just couldn’t keep up. Airis completely changed that—it
                  follows up automatically, handles objections, and our
                  conversions shot up. Total game-changer!”
                </p>
              </div>
              <div className="bottom">
                <img src="/images/home/person1.png" />
                <span>Mark Edspel</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <div className="top">
                <h3>SaaS</h3>
                <p>
                  “Chasing trial users used to be a nightmare. Most just dropped
                  off, and our team couldn’t follow up with everyone. Airis does
                  it for us now—our trial-to-paid conversions jumped, and we’re
                  not wasting time on dead leads anymore.”
                </p>
              </div>
              <div className="bottom">
                <img src="/images/home/person2.png" />
                <span>J.Woods</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <div className="top">
                <h3>Real Estate</h3>
                <p>
                  “Before AIris, it took us days to get back to potential
                  buyers, and by then, they’d already moved on. Now, leads get a
                  call instantly, and our bookings have tripled. Honestly, I
                  don’t know how we managed without it.”
                </p>
              </div>
              <div className="bottom">
                <img src="/images/home/person3.png" />
                <span>Melany Jonson</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col"
            >
              <div className="top">
                <h3>Enterprise</h3>
                <p>
                  “AIris pays for itself. Our cost per lead went down, our
                  response times improved, and we’re closing more deals without
                  adding to our team. It’s like having a top-tier sales agent
                  working 24/7.”
                </p>
              </div>
              <div className="bottom">
                <img src="/images/home/person4.png" />
                <span>Dave Ribbon</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatBusinessSay;
