import { MdEmojiEvents } from "react-icons/md";
import { MdEvent } from "react-icons/md";

const AnnouncementBanner = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-red-500 gap-4 md:gap-8 py-4 justify-center items-center">
      <h1 className="flex gap-2 text-base md:text-xl text-white z-40 items-center">
        <MdEmojiEvents className="text-lg md:text-2xl" />
        <span>Nova Powerlifting Meet</span>
      </h1>
      <h1 className="flex gap-2 text-base md:text-xl z-40 items-center">
        <MdEvent className="text-lg md:text-2xl" />
        <span>27 October 2024</span>
      </h1>
    </div>
  );
};

export default AnnouncementBanner;
