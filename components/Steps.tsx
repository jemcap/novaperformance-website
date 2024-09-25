import React from "react";

const Steps = () => {
  return (
    <section className=" bg-neutral-900 ">
      <div className="flex flex-row justify-between align-elements items-center">
        <div>
          <ul className="max-md:hidden steps steps-vertical text-xl h-[600px] lg:text-3xl lg:h-[1000px]">
            <li className="step">Contact us</li>
            <li className="step">1:1 with a coach and make a plan</li>
            <li className="step">Receive your tailored programme</li>
            <li className="step">start working!</li>
          </ul>
        </div>
        <div className="mx-20 lg:text-end">
          <h1 className="text-4xl md:text-4xl lg:text-8xl">
            How can I <span className="text-red-500">get started?</span>
          </h1>
          <p className="max-w-3xl text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            doloribus a asperiores natus quaerat laudantium vel. Explicabo
            dignissimos commodi animi corporis sed? Culpa nisi eaque quaerat nam
            cum odio, pariatur quia vel, temporibus inventore quae, labore iure.
            Sed facilis possimus illo accusamus, minima eos facere, dolore
            asperiores, odit harum officiis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
