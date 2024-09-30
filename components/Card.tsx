import Image from "next/image";
import { membership } from "@/constants/links";
import Button from "./Button";

const Card = () => {
  return (
    <>
      {membership.map((item) => {
        const { id, title, description, price } = item;
        return (
          <div
            key={id}
            className="card bg-base-100 w-full shadow-xl lg:max-w-lg mx-auto"
          >
            <figure className="px-6 py-6 lg:px-10 lg:py-10 bg-neutral-500">
              <Image
                src="/WhiteNP.png"
                alt={title}
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </figure>
            <div className="card-body items-center text-center text-nova-charcoal">
              <h1 className="card-title text-3xl lg:text-5xl">{title}</h1>
              <h2 className="text-5xl lg:text-9xl font-bold text-red-700">
                £{price}
              </h2>
              <small className="text-xl lg:text-3xl">per month</small>
              <ul className="list-disc list-inside text-lg lg:text-3xl text-start">
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <div className="card-actions">
                <Button
                  type="button"
                  label="Book a consultation"
                  fontSize="text-lg lg:text-2xl"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
