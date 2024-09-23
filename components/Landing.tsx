"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./Button";
import Banner from "./Banner";

const Landing = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".content > *",
      { opacity: 0, y: 50 },
      {
        delay: 0.1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.65,
      }
    );
  }, []);

  return (
    <main>
      <div className="hero relative w-full overflow-hidden">
        <div>
          <Banner />
          <video
            autoPlay
            muted
            playsInline={true}
            loop
            className="w-screen h-[400px] lg:h-[1000px] object-cover"
          >
            <source src="/nova-video.mp4" type="video/mp4"></source>
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="content absolute inset-0 flex flex-col max-xl:items-center items-start justify-center text-start align-elements">
            <h1 className="content-heading text-5xl font-bold text-white md:text-7xl lg:text-9xl">
              Are you ready to{" "}
              <span className="text-red-700 font-bold">get strong?</span>
            </h1>
            <p className="mt-4 text-sm sm:text-lg lg:text-2xl xl:text-[2rem] text-gray-100 max-w-[800px] oswald">
              Train with us to unlock your strength potential! Whether you're
              new or experienced, our expert coaches and supportive community
              will help you push limits, build confidence, and achieve your
              goals. Start your journey today!
            </p>
            <div className="mt-7">
              <Button label="Inquire today" url="/" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
