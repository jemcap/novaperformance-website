"use client";

import React from "react";
import Sport from "./Sport";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SportsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section className="w-full py-10 bg-gradient-to-br from-red-950 via-neutral-950 to-red-950 ">
      <div className="flex flex-col items-center justify-center text-3xl max-md:text-xl max-sm:text-lg ">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl lg:text-7xl mb-10 drop-shadow-xl text-center"
        >
          What sports do we specialise in?
        </motion.h1>
        <Sport />
      </div>
    </section>
  );
};

export default SportsSection;
