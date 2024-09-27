import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

import { eventsList } from "@/constants/links";

const EventsPage = () => {
  return (
    <div className=" h-screen relative w-screen overflow-hidden">
      <div className="align-elements">
        <div>
          <h1 className="text-4xl lg:text-7xl mb-10 drop-shadow-xl text-center my-10">
            Upcoming events
          </h1>
          <div>
            {eventsList.map((list) => {
              const { id, title, url, location, calendar, image } = list;
              const formatDate = calendar.toLocaleDateString();
              return (
                <Link
                  key={id}
                  href={`/events/${url}?name=${encodeURIComponent(
                    title
                  )}&image=${image}`}
                >
                  <div className="card card-side bg-neutral-800 shadow-xl my-5">
                    <div className="card-body flex justify-center">
                      <div className="flex gap-5 text-lg lg:text-4xl text-white">
                        <small>{formatDate}</small>
                        <small>{location}</small>
                      </div>
                      <h1 className="text-white card-title text-3xl lg:text-5xl">
                        {title}
                      </h1>

                      <div className="card-actions justify-start">
                        <Button
                          type="button"
                          label="See more"
                          url={`/events/${url}?name=${encodeURIComponent(
                            title
                          )}`}
                          fontSize="text-md lg:text-2xl"
                        />
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
