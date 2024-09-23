import { IoLocationOutline } from "react-icons/io5";
import { LuClock2 } from "react-icons/lu";

const Banner = () => {
  return (
    <div className="glass w-screen" style={{ position: "relative", zIndex: 1 }}>
      <div className="align-elements flex flex-row justify-evenly">
        <div className="text-white my-5">
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
          <p className="flex text-lg lg:text-3xl gap-2">
            <LuClock2 />
            24 hours, 7 days a week
          </p>
        </div>

        <div className="my-5 lg:text-3xl">
          <h1>Nova Powerlifting Meet</h1>
          <p>27 October 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
