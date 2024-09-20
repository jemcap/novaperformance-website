import React from "react";
import Sport from "./Sport";

const SportsSection = () => {
  return (
    <section className="w-full py-10 bg-neutral-800">
      <div className="flex flex-col items-center justify-center text-3xl max-md:text-xl max-sm:text-lg ">
        <h1 className="text-4xl lg:text-7xl mb-10">
          What sports do we specialise in?
        </h1>
        <Sport />
      </div>
    </section>
  );
};

export default SportsSection;
