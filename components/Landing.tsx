"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./Button";
import Banner from "./Banner";
import { useState } from "react";
import FormModal from "./FormModal";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
    <>
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
            <div className="content absolute inset-0 flex flex-col items-center lg:items-start top-[50%] lg:top-[55%] text-start align-elements">
              <h1 className="content-heading text-5xl font-bold text-white md:text-6xl lg:text-9xl">
                Are you ready to{" "}
                <span className="text-red-500 mx-1 font-extrabold relative inline-block stroke-current">
                  Get strong?
                  <svg
                    className="absolute -bottom-0.5 w-full max-h-1.5"
                    viewBox="0 0 55 5"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                      stroke-width="2"
                    ></path>
                  </svg>
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-lg lg:text-2xl xl:text-[2rem] text-gray-100 max-w-[800px]">
                Train with us to unlock your strength potential! Whether
                you&apos;re new or experienced, our expert coaches and
                supportive community will help you push limits, build
                confidence, and achieve your goals. Start your journey today!
              </p>
              <div className="mt-7">
                <Button
                  type="button"
                  label="Inquire today"
                  fontSize="text-xl lg:text-2xl"
                  onClickHandler={openModal}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <FormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Landing;
