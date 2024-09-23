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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <>
      <div className="align-elements h-screen relative w-screen overflow-hidden">
        <motion.h1
          style={{ y: textY }}
          className="font-bold text-white text-7xl md:text-9xl relative z-10 text-center top-[30%]"
        >
          Nova's Story
        </motion.h1>
        <motion.p className="font-bold text-red-500 text-xl md:text-3xl relative z-10 text-center top-[30%]">
          We're more than just a gym.
        </motion.p>
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(/nova_group.jpg)`,
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
      <p className="max-w-5xl align-elements">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est et dolorem
        sint voluptates laborum sed beatae enim atque rem. Inventore, ex!
        Incidunt earum molestias, repellendus hic vel culpa aut omnis sint a in
        cupiditate velit aliquid voluptates suscipit voluptatem error, aliquam
        accusantium animi libero atque illo ipsum eaque dolor officia.
      </p>
    </>
  );
};

export default AboutPage;
