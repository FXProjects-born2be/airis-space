"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const CustomAudioPlayer = () => {
  return (
    <audio
      src="/Luca_Script.wav"
      controls
      className="custom-audio-player"
      controlsList="noplaybackrate nodownload"
    />
  );
};

const AIrisInAction = () => {
  return (
    <section className="airis-in-action">
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
            Our solution automates lead engagement with AI-driven sales agents
            that handle outbound calls, follow up with leads, and seamlessly
            transfer high-intent prospects to sales teams. Its human-like voice
            ensures natural, engaging conversations for better conversion rates.
          </motion.p>

          <div className="audio-wrapper">
            <CustomAudioPlayer />
          </div>

          <div className="video-wrapper" style={{ display: "none" }}>
            <ReactPlayer
              url="/air_demo.mp4"
              light={"/images/home/airis-in-action.png"}
              controls
              playIcon={
                <img width={140} height={57} src="/images/playIcon.svg" />
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
      </div>
    </section>
  );
};

export default AIrisInAction;
