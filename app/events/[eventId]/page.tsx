import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const EventId = ({
  params,
  searchParams,
}: {
  params: { eventId: string };
  searchParams: { name: string; image: string };
}) => {
  const sport = searchParams.name;
  const image = searchParams.image;
  return (
    <div className="align-elements h-screen w-screen flex items-center justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-8 ">
        <Image
          src={image}
          alt={sport}
          width={750}
          height={750}
          style={{ borderRadius: 100 }}
        />
        <div className="flex flex-col justify-center ml-5 gap-10">
          {" "}
          <h1 className="text-5xl text-center lg:text-left lg:text-8xl">
            {sport}
          </h1>
          <p className="max-w-5xl text-xl lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            tempore ab porro unde sed, fugit illum, accusamus esse ut maiores
            veniam, iure accusantium saepe eos aliquam alias ducimus hic
            corrupti inventore temporibus aspernatur repellat? Sint facilis
            magni aspernatur eos sed exercitationem doloribus distinctio minus
            odio. Assumenda magni laborum ab fugiat.
          </p>
          <Button label="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default EventId;
