"use client";

import { Movie } from "@/types";
import Image from "next/image";

const Card = (movie: Movie) => {
  const { id, backdrop_path, original_title, release_date } = movie;
  const date = new Date(release_date);
  return (
    <section className="aspect-[16/9]  cursor-pointer w-full relative overflow-hidden rounded-lg">
      <Image
        fill
        className="object-cover h-full w-full"
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        sizes="100"
        alt={original_title}
      />
      <div
        className="absolute inset-x-0 bottom-0 w-full p-4 flex justify-center flex-col"
        style={{
          backgroundImage:
            "linear-gradient(91deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <h5 className="text-white text-lg font-inter font-semibold break-words">
          {original_title}
        </h5>
        <p className="text-white text-base font-inter font-medium break-words">
          {date.getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Card;
