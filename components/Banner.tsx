import { IoLocationOutline } from "react-icons/io5";
import { LuClock2 } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import AnnouncementBanner from "./AnnouncementBanner";

const Banner = () => {
  return (
    <>
      <AnnouncementBanner />
      <div
        className="glass w-full flex flex-col gap-4 md:gap-6 lg:gap-8 py-4 md:py-6 lg:py-8"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Location Section */}
        <div className="flex justify-center">
          <div className="text-white">
            <p className="flex text-base md:text-xl lg:text-3xl gap-2 items-center">
              <IoLocationOutline className="text-lg md:text-2xl lg:text-4xl" />
              <a
                href="https://maps.app.goo.gl/NQBXJnvYF2wQ6YDv5"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Unit 9, Enfield Court, Nuffield Rd, St. Ives PE27 3NJ
              </a>
            </p>
          </div>
        </div>
        {/* Info Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 lg:gap-28 text-white">
          <p className="flex text-base md:text-xl lg:text-2xl gap-2 items-center">
            <LuClock2 className="text-lg md:text-2xl lg:text-3xl" />
            24 hours, 7 days a week
          </p>
          <p className="flex text-base md:text-xl lg:text-2xl gap-2 items-center">
            <FaCircleCheck className="text-lg md:text-2xl lg:text-3xl" />
            High-quality equipment
          </p>
          <p className="flex text-base md:text-xl lg:text-2xl gap-2 items-center">
            <FaChalkboardTeacher className="text-lg md:text-2xl lg:text-3xl" />
            Personalized coaching
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
