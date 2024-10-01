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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          doloribus a asperiores natus quaerat laudantium vel. Explicabo
          dignissimos commodi animi corporis sed? Culpa nisi eaque quaerat nam
          cum odio, pariatur quia vel, temporibus inventore quae, labore iure.
          Sed facilis possimus illo accusamus, minima eos facere, dolore
          asperiores, odit harum officiis.
        </p>
      </div>
      <Carousel />
    </motion.section>
  );
};

export default WhyNova;
