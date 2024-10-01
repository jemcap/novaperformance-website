"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { loadStripe } from "@stripe/stripe-js";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const EventId = ({
  params,
  searchParams,
}: {
  params: { eventId: string };
  searchParams: {
    name: string;
    image: string;
    date: string;
    location: string;
    description: string;
  };
}) => {
  const { name, image, date, location, description } = searchParams;

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: params.eventId,
        name,
        image,
        date,
        location,
      }),
    });

    const session = await response.json();

    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: session.id });
    }
  };

  return (
    <div className="align-elements my-8 h-full w-full md:h-screen md:w-screen flex items-center justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-8 ">
        <Image
          src={image}
          alt={name}
          width={750}
          height={750}
          style={{ borderRadius: 100 }}
        />
        <div className="flex flex-col justify-center ml-5 gap-10">
          <h1 className="text-5xl text-center lg:text-left lg:text-8xl">
            {name}
          </h1>
          <div className="flex gap-10">
            <small className="flex gap-2 text-2xl">
              <FaRegCalendarAlt />
              {date}
            </small>
            <small className="flex gap-2 text-2xl">
              <IoLocationOutline />
              {location}
            </small>
          </div>
          <p className="max-w-5xl text-xl lg:text-3xl">{description}</p>
          <p className="text-3xl text-red-500">
            Do you want to compete? Sign up below!
          </p>
          <Button
            type="button"
            label="Sign up"
            onClickHandler={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
};

export default EventId;
