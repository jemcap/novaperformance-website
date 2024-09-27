import Image from "next/image";
import { membership } from "@/constants/links";
import Button from "./Button";

const Card = () => {
  return (
    <>
      {membership.map((item) => {
        const { id, title, description, price } = item;
        return (
          <div key={id} className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 py-10 pt-10 bg-neutral-500">
              <Image src="/WhiteNP.png" alt={title} width={500} height={500} />
            </figure>
            <div className="card-body items-center text-center text-nova-charcoal">
              <h1 className="card-title lg:text-5xl">{title}</h1>
              <h2 className="lg:text-8xl font-bold text-red-700">£{price}</h2>
              <ul className="list-disc list-inside text-3xl text-start">
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <div className="card-actions">
                <Button
                  type="button"
                  label="Inquire"
                  fontSize="text-xl lg:text-2xl"
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
