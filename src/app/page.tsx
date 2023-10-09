import MovieList from "@/components/list";
import { getSortedMovies } from "@/lib/getMovies";

const getMovies = async (searchParams: string) => {
  const { popular, playing, rated, search } = await getSortedMovies(
    searchParams
  );
  return {
    popular: popular?.results,
    playing: playing?.results,
    rated: rated?.results,
    search: search?.results,
  };
};

type Props = {
  searchParams: string;
};

export default async function Home({ searchParams }: Props) {
  const { popular, playing, rated, search } = await getMovies(searchParams);

  return (
    <main className="w-full pt-20 p-8 bg-neutral-900">
      {!!search ? (
        <>
          <h1 className="p-8 text-white text-2xl font-inter font-bold break-words">
            Search
          </h1>
          {search && <MovieList movies={search.slice(0, 8)} />}
        </>
      ) : (
        <>
          <h1 className="p-8 text-white text-2xl font-inter font-bold break-words">
            Trending
          </h1>
          {popular && <MovieList movies={popular.slice(0, 2)} size={true} />}
          <h1 className="p-8 text-white text-2xl font-inter font-bold break-words">
            Now playing
          </h1>
          {playing && <MovieList movies={playing.slice(0, 4)} />}
          <h1 className="p-8 text-white text-2xl font-inter font-bold break-words">
            Top rated
          </h1>
          {rated && <MovieList movies={rated.slice(0, 4)} />}
        </>
      )}
      <p className="w-full mt-6 text-center text-gray-400 font-inter text-base font-normal leading-4 tracking-normal">
        This product uses the TMDb API but is not endorsed or certified by TMDb
      </p>
    </main>
  );
}
