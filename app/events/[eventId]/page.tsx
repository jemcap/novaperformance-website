"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const EventId = ({
  params,
  searchParams,
}: {
  params: { eventId: string };
  searchParams: { name: string; image: string; date: string; location: string };
}) => {
  const { name, image, date, location } = searchParams;

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
    <div className="align-elements h-screen w-screen flex items-center justify-center overflow-hidden">
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
            <small className="text-2xl">{date}</small>
            <small className="text-2xl">{location}</small>
          </div>
          <p className="max-w-5xl text-xl lg:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            velit similique quaerat pariatur ducimus autem deleniti atque! Rerum
            sed, odit, provident dolores eveniet accusantium assumenda nam
            perferendis non doloremque repellat dolor dolore deleniti natus
            porro veritatis ex aspernatur illo alias aliquid voluptate amet
            voluptatem eos! Facilis culpa maiores tempora fugit?
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
