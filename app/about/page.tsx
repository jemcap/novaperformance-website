"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./styles.css";

const AboutPage = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "350%"]);
  return (
    <>
      <section>
        <div className=" h-screen relative w-screen overflow-hidden">
          <motion.h1
            style={{ y: textY }}
            className="font-bold text-white text-5xl md:text-9xl relative z-10 text-center top-[20%]"
          >
            Our Mission
          </motion.h1>
          <motion.p className="font-bold text-red-500 text-2xl md:text-4xl relative z-10 text-center top-[20%]">
            We're more than just a gym.
          </motion.p>
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(/nova_group.jpg)`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              y: backgroundY,
            }}
          />
          <div
            className="absolute inset-0 z-20 img"
            style={{
              backgroundImage: `url(/nova_group_bottom.png)`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />
        </div>
        <p className="max-w-5xl text-4xl align-elements my-10">
          Nova Performance is a Weightlifting and Powerlifting facility. Nova
          prides itself in the community atmosphere encouraged among all members
          which allows each member to perform to their best. Nova Performance
          offers: Small group training, personal training, tailored lifting
          programs and competition coaching. ​ Nova Performance engages with
          high quality coaches who understand the best training methods that fit
          your desired outcomes. ​ With hard work and dedication, you can be the
          best version of yourself.
        </p>
      </section>
      <section>
        <h1>Meet the Team</h1>
      </section>
    </>
  );
};

export default AboutPage;
