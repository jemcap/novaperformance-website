"use client";

import Image from "next/image";
import { membership } from "@/constants/links";
import Button from "./Button";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {membership.map((item) => {
        const { id, title, description, price } = item;
        return (
          <div key={id} className="card bg-base-100 w-full shadow-xl mx-auto ">
            <figure className="px-4 py-4 md:px-6 md:py-6 lg:px-10 lg:py-10 bg-neutral-500">
              <Image
                src="/WhiteNP.png"
                alt={title}
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </figure>
            <div className="card-body text-center text-nova-charcoal">
              <h1 className="card-title text-2xl md:text-3xl lg:text-5xl">
                {title}
              </h1>
              <h2 className="text-4xl md:text-6xl lg:text-9xl font-bold text-red-700">
                £{price}
              </h2>
              <small className="text-lg md:text-xl lg:text-3xl">
                per month
              </small>
              <ul className="list-disc list-inside text-start text-sm md:text-lg lg:text-2xl">
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <div className="card-actions mt-4">
                <Button
                  type="button"
                  label="Book a consultation"
                  fontSize="text-sm md:text-lg lg:text-2xl"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
