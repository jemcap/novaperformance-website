"use client";

import React from "react";
import { sportsList } from "@/constants/links";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Sport = () => {
  return (
    <div className=" mx-auto px-4 ">
      {sportsList.map((item, index) => {
        const { title, description, image, url } = item;
        const isEven = index % 2 === 1;
        return (
          <Link
            href={url}
            key={title}
            className={`flex bg-neutral-950 p-7 rounded-lg items-center mb-10 ${
              isEven ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 px-4">
              <h1 className="text-3xl lg:text-8xl font-bold mb-2 text-red-500">
                {title}
              </h1>
              <p className="text-gray-600 mb-4">{description}</p>
              <Button label="Learn more" url={url} />
            </div>
            <div className="relative w-80 h-96 flex-1">
              <Image
                className="object-cover rounded-lg"
                src={image}
                fill
                alt={title}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sport;
