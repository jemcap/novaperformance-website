import Card from "@/components/Card";

const MembershipPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-red-950 via-neutral-950 to-red-950">
        <div className="h-full w-full py-8 md:py-16 flex items-center justify-center overflow-hidden">
          <div className="container max-w-6xl flex flex-col items-center gap-6 md:gap-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl">Membership</h1>
            <p className="text-lg md:text-xl lg:text-3xl max-w-3xl lg:max-w-5xl">
              Are you ready to{" "}
              <span className="text-red-500 mx-1 font-extrabold text-xl md:text-2xl lg:text-4xl relative inline-block">
                invest
                <svg
                  className="absolute -bottom-0.5 w-full h-1.5 md:h-2 lg:h-2.5"
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
            <p className="text-lg md:text-xl lg:text-3xl max-w-3xl lg:max-w-5xl">
              Book a free consultation with us to see if our gym is right for
              you!
            </p>

            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipPage;
