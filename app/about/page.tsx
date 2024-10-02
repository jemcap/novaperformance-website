"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { teamList } from "@/constants/links";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const AboutPage = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <motion.h1 className="font-bold text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl absolute top-[20%] left-1/2 transform -translate-x-1/2 z-10 text-center">
          Our Mission
        </motion.h1>

        <motion.p className="font-bold text-red-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl absolute top-[35%] md:top-[40%] lg:top-[30%] left-1/2 transform -translate-x-1/2 z-10 text-center">
          We&apos;re more than just a gym.
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
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(/nova_group_bottom.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </section>

      <section className="max-w-4xl md:max-w-5xl mx-auto my-8 md:my-10 p-4 text-center">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
          Nova Performance is a specialised strength sports facility. Nova
          prides itself on the community atmosphere encouraged among all members
          that allows each member to perform to their best. Nova Performance
          offers: Small group training, personal training, tailored lifting
          programs, and competition coaching. Nova Performance engages with
          high-quality coaches who understand the best training methods that fit
          your desired outcomes. With hard work and dedication, you can be the
          best version of yourself.
        </p>
      </section>

      <section className="text-center my-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-red-500">
          Meet the Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamList.map((member, index) => {
            const { id, name, role, img, social } = member;
            return (
              <div key={id} className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <Image
                    src={img || "/WhiteNP.png"}
                    alt={`Team Member ${index + 1}`}
                    width={400} // set an appropriate width
                    height={400}
                    className="rounded-xl w-full h-64 object-cover"
                  />
                </figure>
                <div className="card-body items-center">
                  <h2 className="card-title text-nova-charcoal">{name}</h2>
                  <p className="text-nova-charcoal">{role}</p>
                  <Link
                    href={`https://www.instagram.com/${social}`}
                    target="_blank"
                  >
                    <FaInstagram className="text-2xl text-nova-charcoal" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
