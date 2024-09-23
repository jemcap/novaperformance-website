import { MdEmojiEvents } from "react-icons/md";
import { MdEvent } from "react-icons/md";

const AnnouncementBanner = () => {
  return (
    <div className="w-screen flex flex-row bg-red-500 gap-8 py-2 justify-center items-center  ">
      <h1 className="flex gap-2 text-xl text-white z-40">
        <MdEmojiEvents />
        <span>Nova Powerlifting Meet</span>
      </h1>
      <h1 className="flex gap-2 text-xl z-40">
        <MdEvent />
        <span>27 October 2024</span>
      </h1>
    </div>
  );
};

export default AnnouncementBanner;
