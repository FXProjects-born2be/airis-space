"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

import "@/styles/headlines.scss";

const AIrisInHeadlines = () => {
  return (
    <section className="headlines">
      <div className="_container">
        <div className="headlines__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            AIris in the Headlines
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            From tech to business media, AIris is earning recognition for
            real-world impact and <br />
            innovation.
          </motion.p>
          <div className="headlines__article">
            <img src="/images/home/airis-in-headlines.png" />
            <div>
              <div className="content">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  AIris Launches AI Sales Agents That Convert More Leads and Cut
                  Sales Costs by 50%
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  Discover how AIris is transforming sales with AI-powered
                  agents that follow up instantly, handle objections, and cut
                  team costs in half. With real-time engagement and seamless CRM
                  integration, AIris helps businesses turn lost leads into
                  revenue—without adding headcount.
                </motion.p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link href="#">
                  Read
                  <ButtonArrow />
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="headlines__logos-wrap">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Press Coverage of Our Brand
            </motion.h3>
            <div className="row">
              <Link
                href="https://finance.yahoo.com/news/airis-launches-ai-sales-agents-211000711.html "
                target="_blank"
              >
                <img
                  src="/images/home/headline1.png"
                  style={{ width: "118px", height: "43.2px" }}
                />
              </Link>
              <Link
                href="https://www.digitaljournal.com/pr/news/access-newswire/airis-launches-ai-sales-agents-1690879114.html"
                target="_blank"
              >
                <img
                  src="/images/home/headline2.png"
                  style={{ width: "204px", height: "28px" }}
                />
              </Link>
              <Link
                href="https://markets.financialcontent.com/streetinsider/article/accwirecq-2025-5-22-airis-launches-ai-sales-agents-that-convert-more-leads-and-cut-sales-costs-by-50"
                target="_blank"
              >
                <img
                  src="/images/home/headline3.png"
                  style={{ width: "198px", height: "40px" }}
                />
              </Link>
              <Link
                href="https://www.benzinga.com/pressreleases/25/05/ab45597967/airis-launches-cutting-edge-ai-sales-agents-to-transform-lead-generation-and-cut-costs"
                target="_blank"
              >
                <img
                  src="/images/home/headline4.png"
                  style={{ width: "177px", height: "24px" }}
                />
              </Link>
              <Link
                href="https://www.theglobeandmail.com/investing/markets/markets-news/GetNews/32555456/airis-launches-cutting-edge-ai-sales-agents-to-transform-lead-generation-a"
                target="_blank"
              >
                <img
                  src="/images/home/headline5.png"
                  style={{ width: "60px", height: "60px" }}
                />
              </Link>
              <Link
                href="https://techbullion.com/airis-launches-ai-sales-agents-that-convert-more-leads-and-cut-sales-costs-by-50/"
                target="_blank"
              >
                <img
                  src="/images/home/headline6.png"
                  style={{ width: "205.94px", height: "61.447px" }}
                />
              </Link>
              <Link
                href="https://markets.businessinsider.com/news/stocks/airis-launches-ai-sales-agents-that-convert-more-leads-and-cut-sales-costs-by-50-1034764307"
                target="_blank"
              >
                <img
                  src="/images/home/headline7.png"
                  style={{ width: "129px", height: "40px" }}
                />
              </Link>
              <Link
                href="https://apnews.com/press-release/kisspr/airis-launches-ai-sales-a"
                target="_blank"
              >
                <img
                  src="/images/home/headline8.png"
                  style={{ width: "51px", height: "60px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIrisInHeadlines;
