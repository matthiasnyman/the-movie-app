"use client";

import { Movie } from "@/types";
import Card from "./Card";
import BigCard from "./BigCard";

type Props = {
  movies: Movie[];
  size?: boolean;
};

const MovieList = ({ movies, size = false }: Props) => {
  return (
    <section
      className={`
      'pl-7 grid grid-flow-row justify-items-center gap-8
      ${size ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-4 "}
      `}
    >
      {movies?.map((movie) =>
        size ? (
          <BigCard key={movie.id} {...movie} />
        ) : (
          <Card key={movie.id} {...movie} />
        )
      )}
    </section>
  );
};

export default MovieList;
