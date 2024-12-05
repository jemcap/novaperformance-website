import { LuClock2 } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div
        className="glass w-full flex flex-col gap-4 md:gap-6 lg:gap-8 py-4"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Location Section */}

        {/* Info Section */}
        <div className="flex flex-row justify-center items-center gap-2 lg:gap-28 text-white">
          <p className="flex text-xs lg:text-lg gap-2 items-center">
            <LuClock2 className="text-xs lg:text-xl " />
            24 hours, 7 days a week
          </p>
          <p className="flex text-xs lg:text-lg gap-2 items-center">
            <FaCircleCheck className="text-xs lg:text-xl" />
            High-quality equipment
          </p>
          <p className="flex text-xs lg:text-lg gap-2 items-center">
            <FaChalkboardTeacher className="text-xs lg:text-xl" />
            Personalised coaching
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
