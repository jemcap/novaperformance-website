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
        className="glass w-screen flex flex-col gap-3 lg:gap-8 py-2 lg:py-4"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="align-elements flex justify-center">
          <div className="text-white">
            <p className="flex text-lg lg:text-3xl gap-2">
              <IoLocationOutline />
              <a
                href="https://maps.app.goo.gl/NQBXJnvYF2wQ6YDv5"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Unit 9, Enfield Court, Nuffield Rd, St. Ives PE27 3NJ
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-28">
          <p className="flex text-lg lg:text-2xl gap-2">
            <LuClock2 />
            24 hours, 7 days a week
          </p>
          <p className="flex text-lg lg:text-2xl gap-2">
            <FaCircleCheck />
            High-quality equipment
          </p>
          <p className="flex text-lg lg:text-2xl gap-2">
            <FaChalkboardTeacher />
            personalised coaching
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
