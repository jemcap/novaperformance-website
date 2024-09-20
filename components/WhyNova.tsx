import Carousel from "./Carousel";

const WhyNova = () => {
  return (
    <section className="flex flex-col items-center text-center gap-12 lg:flex-row lg:justify-between align-elements my-20">
      <div className="">
        <h1 className="text-4xl lg:text-8xl">
          Why <span className="text-red-500">Nova Performance?</span>
        </h1>
        <p className="max-w-3xl text-2xl oswald">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          doloribus a asperiores natus quaerat laudantium vel. Explicabo
          dignissimos commodi animi corporis sed? Culpa nisi eaque quaerat nam
          cum odio, pariatur quia vel, temporibus inventore quae, labore iure.
          Sed facilis possimus illo accusamus, minima eos facere, dolore
          asperiores, odit harum officiis.
        </p>
      </div>
      <Carousel />
    </section>
  );
};

export default WhyNova;
