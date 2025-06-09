"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { stories } from "@/lib/stories";

const StoriesLoop = () => {
  console.log(stories);

  return (
    <section className="stories-loop">
      <img src="/images/home/ellipse2.png" />
      <img src="/images/home/ellipse3.png" />
      <img src="/images/home/ellipse3.png" />
      <div className="_container">
        <div className="stories-loop__body">
          {stories.map((story, index) => (
            <div className="story-item" key={story.id}>
              <div className="story">
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
                          <h4>Pre-AIris Metrics:</h4>
                          <ul className="metrics-list">
                            {story.metrics.map((metric, index) => (
                              <li key={index}>{metric}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4>Results After 3 Months with AIris:</h4>
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
              <div className="key-performance">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="title"
                >
                  Key Performance Indicators Impacted by AIris Integration
                </motion.h3>
                <div className="row">
                  {story.keyPerformance.map((item, index) => (
                    <div className="col" key={index}>
                      <div className={!item.graph ? "no-graph" : ""}>
                        <h4>{item.title}</h4>
                        <div className="before">
                          <h5>Before:</h5>
                          <p
                            dangerouslySetInnerHTML={{ __html: item.before }}
                          />
                        </div>
                        <div className="after">
                          <h5>After:</h5>
                          <p dangerouslySetInnerHTML={{ __html: item.after }} />
                        </div>
                      </div>
                      {item.graph && <img src={item.graph} />}
                    </div>
                  ))}
                </div>
              </div>
              <div className="testimonial">
                <div className="row">
                  <h3>{story.testimonial.title}</h3>
                  <div className="col">
                    <img class="star1" src="/images/home/star.png" />
                    <img class="star2" src="/images/home/star.png" />
                    <div className="content">
                      <p>"{story.testimonial.quote}"</p>
                      <div>
                        <img src={story.testimonial.image} />
                        <div>
                          <h4>{story.testimonial.name}</h4>
                          <span>{story.testimonial.position}</span>
                        </div>
                      </div>
                    </div>
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
