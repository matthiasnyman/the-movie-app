"use client";

import { Movie } from "@/types";
import Image from "next/image";

const Card = (movie: Movie) => {
  const { id, backdrop_path, original_title, release_date } = movie;
  const date = new Date(release_date);
  return (
    <section className="aspect-[16/9] w-full relative overflow-hidden cursor-pointer rounded-lg group">
      <Image
        fill
        className="object-cover h-full w-full"
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={original_title}
        sizes="100%"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-20 bg-black backdrop-blur-md text-white transition-opacity opacity-0 group-hover:opacity-100">
        <h5 className="text-white text-2xl font-inter font-semibold break-words">
          {original_title}
        </h5>
        <p className="text-white text-base font-inter font-normal break-words">
          {date.getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Card;
