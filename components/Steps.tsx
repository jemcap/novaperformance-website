"use client";

import Link from "next/link";
import Button from "./Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Steps = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section className=" bg-neutral-900 ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-row text-center md:text-start h-[750px] md:h-5/6 justify-between align-elements items-center"
      >
        <div>
          <ul className="max-md:hidden steps steps-vertical text-xl h-[600px] lg:text-3xl lg:h-[1000px]">
            <li className="step">Contact us</li>
            <li className="step">1:1 with a coach and make a plan</li>
            <li className="step">Receive your tailored program</li>
            <li className="step">hit the weights!</li>
          </ul>
        </div>
        <div className="mx-5 md:mx-10 lg:mx-20 lg:text-end">
          <h1 className="text-4xl md:text-4xl lg:text-8xl">
            How can I <span className="text-red-500">get started?</span>
          </h1>
          <p className="w-full max-w-2xl md:max-w-3xl text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 leading-relaxed">
            Getting started at Nova Performance is simple. Begin by contacting
            us to discuss your goals. From there, you&apos;ll have a 1:1 session
            with one of our expert coaches, who will help you create a
            personalised training plan, as well as diet and nutrition guidance,
            tailored to your needs and objectives. Once you receive your custom
            program, you&apos;re all set to begin your journey, working towards
            achieving your fitness goals with the best support and guidance.
          </p>

          <div className="mt-7">
            <Link href="/contact">
              <Button
                type="button"
                label="Contact us"
                fontSize="text-xl lg:text-2xl"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Steps;
