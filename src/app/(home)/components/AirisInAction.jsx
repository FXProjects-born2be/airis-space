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
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Explore how our Agent recovers lost sales.
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
            width={1170}
            height={658}
            controlsList="nodownload nofullscreen"
          />
        </div>
      </div>
    </section>
  );
};

export default AirisInAction;
