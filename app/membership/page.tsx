import Card from "@/components/Card";

const MembershipPage = () => {
  return (
    <div className="bg-gradient-to-r from-red-950 via-neutral-950 to-red-950">
      <div className="align-elements h-screen w-screen flex items-center justify-center overflow-hidden ">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl text-center lg:text-left lg:text-8xl">
            Membership
          </h1>
          <p className="max-w-5xl text-xl lg:text-3xl">
            Are you ready to{" "}
            <span className="text-red-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
              invest
              <svg
                className="absolute -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  stroke-width="2"
                ></path>
              </svg>
            </span>{" "}
            in your physical and mental growth with us?
          </p>

          <Card />
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
