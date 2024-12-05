"use client";

import Image from "next/image";
import { membership } from "@/constants/links";
import Button from "./Button";
import { useState } from "react";
import FormModal from "./FormModal";

const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {membership.map((item) => {
        const { id, title, description, price } = item;
        return (
          <div key={id} className="card bg-base-100 w-full shadow-xl mx-auto ">
            <figure className="px-4 py-4 bg-neutral-500">
              <Image
                src="/WhiteNP.png"
                alt={title}
                width={500}
                height={500}
                className="w-[200px] h-auto object-contain"
              />
            </figure>
            <div className="card-body items-center text-nova-charcoal">
              <h1 className="card-title text-center text-2xl lg:text-4xl">
                {title}
              </h1>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-red-700">
                £{price}
              </h2>
              <small className="text-lg md:text-xl lg:text-3xl">
                per month
              </small>
              <ul className="list-disc list-inside text-start text-sm md:text-lg lg:text-xl mt-10">
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <div className="card-actions mt-4">
                <Button
                  type="button"
                  label="Book a consultation"
                  fontSize="text-sm lg:text-xl"
                  onClickHandler={openModal}
                />
              </div>
            </div>
          </div>
        );
      })}
      <FormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Card;
