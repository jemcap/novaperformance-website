"use client";

import Carousel from "./Carousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyNova = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: 200 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center text-center lg:flex-row lg:justify-between align-elements my-20 gap-10"
    >
      <div className="">
        <h1 className="text-4xl lg:text-8xl">
          Why <span className="text-red-500">Nova Performance?</span>
        </h1>
        <p className="max-w-3xl text-2xl">
          At Nova Performance, we pride ourselves on offering an amazing
          environment and support system where everyone is encouraged to push
          beyond their limits, both in and out of the gym. As an award-winning
          gym specialising in strength sports, we foster a sense of community
          that thrives on mutual encouragement and personal growth.
        </p>
        <p className="max-w-3xl text-2xl mt-4">
          Our facility is equipped with high-quality, official gear for
          Powerlifting, Weightlifting, and Strongman, ensuring that all athletes
          train with the best tools available. Whether you're a seasoned
          competitor or just starting your journey, Nova Performance provides
          everything you need to excel and reach your full potential.
        </p>
      </div>
      <Carousel />
    </motion.section>
  );
};

export default WhyNova;
