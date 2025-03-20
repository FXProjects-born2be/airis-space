"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const AirisInAction = () => {
  return (
    <section className="airis-in-action ">
      <div className="_container">
        <div className="airis-in-action__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            See AIris in Action
          </motion.h2>

          <div className="video-wrapper">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Explore how our Agent recovers lost sales. an AI sales agent that
              speaks naturally, engages leads, handles objections, schedules
              callbacks, and transfers high-intent prospects in real time.
            </motion.p>
            <ReactPlayer
              url="/air_demo.mp4"
              light={"/images/home/airis-in-action.png"}
              controls
              playIcon={
                <img width={154} height={72} src="/images/playIcon.svg" />
              }
              playing
              loop={true}
              className="video"
              width={820}
              height={460}
              controlsList="nodownload nofullscreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirisInAction;
