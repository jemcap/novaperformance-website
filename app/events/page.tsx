import React from "react";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import { eventsList } from "@/constants/links";

const EventsPage = () => {
  return (
    <div className=" h-screen relative w-screen overflow-hidden">
      <div className="align-elements">
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-10 drop-shadow-xl text-center my-10">
            Upcoming events
          </h1>
          <div>
            {eventsList.map((list) => {
              const { id, title, url, location, calendar, image, description } =
                list;
              const date = calendar.toLocaleDateString();
              return (
                <Link
                  key={id}
                  href={`/events/${url}?name=${encodeURIComponent(
                    title
                  )}&image=${image}&description=${description}&date=${date}&location=${location}`}
                >
                  <div className="card card-side bg-neutral-800 shadow-xl my-5">
                    <div className="card-body flex justify-center">
                      <div className="flex gap-5 text-lg lg:text-4xl text-white">
                        <small className="flex gap-2 text-xl">
                          <FaRegCalendarAlt />
                          {date}
                        </small>
                        <small className="flex gap-2 text-xl">
                          <IoLocationOutline />
                          {location}
                        </small>
                      </div>
                      <h1 className="text-white card-title text-3xl lg:text-5xl">
                        {title}
                      </h1>

                      <div className="card-actions justify-start">
                        <Link
                          href={`/events/${url}?name=${encodeURIComponent(
                            title
                          )}`}
                        ></Link>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
