"use client";

import React, { useRef } from "react";
import { sportsList } from "@/constants/links";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { motion, useInView } from "framer-motion";

const Sport = () => {
  return (
    <div className="container mx-auto px-4">
      {sportsList.map((item, index) => {
        const { title, description, image, url } = item;
        const isEven = index % 2 === 1;
        const ref = useRef(null);
        const inView = useInView(ref, { once: true });

        return (
          <motion.div
            key={title}
            ref={ref}
            initial={{ opacity: 0, x: isEven ? 200 : -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 shadow-2xl"
          >
            <div
              className={`flex flex-col lg:flex-row bg-neutral-950 p-5 md:p-7 rounded-lg items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="text-center lg:text-start flex-1 mb-4 lg:mb-0 mx-4 lg:mx-10">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-bold mb-2 text-red-500">
                  {title}
                </h1>
                <p className="text-xl sm:text-base lg:text-3xl text-gray-300 mb-4">
                  {description}
                </p>
              </div>

              {/* Image Section */}
              <div className="relative w-full h-64 lg:w-80 lg:h-96 flex-1">
                <Image
                  className="object-cover rounded-lg"
                  src={image}
                  fill
                  alt={title}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Sport;
