"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { stories } from "@/lib/stories";

const StoriesLoop = () => {
  return (
    <section className="stories-loop">
      <img src="/images/home/ellipse2.png" />
      <img src="/images/home/ellipse3.png" />
      <img src="/images/home/ellipse3.png" />
      <div className="_container">
        <div className="stories-loop__body">
          {stories.map((story, index) => (
            <div className="story" key={story.id}>
              <img src={story.image} />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="title"
              >
                <h2 dangerouslySetInnerHTML={{ __html: story.title }} />
              </motion.div>
              <div className="inner">
                <div className="row">
                  <div className="col1">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                    >
                      <h3
                        dangerouslySetInnerHTML={{ __html: story.subtitle }}
                      />
                    </motion.div>
                  </div>
                  <div className="col2">
                    <div className="details">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                      >
                        <h4>Challenge:</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: story.challenge,
                          }}
                        />
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                      >
                        <h4>Key Takeaway:</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: story.takeway,
                          }}
                        />
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                      >
                        <h4>Solution:</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: story.solution,
                          }}
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className="results"
                    >
                      <div>
                        <h4>Pre-Airis Metrics:</h4>
                        <ul className="metrics-list">
                          {story.metrics.map((metric, index) => (
                            <li key={index}>{metric}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Results After 3 Months with Airis:</h4>
                        <ul className="results-list">
                          {story.results.map((result, index) => (
                            <li key={index}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesLoop;
