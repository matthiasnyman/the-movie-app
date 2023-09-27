import { getMoviesByCategory } from "@/lib/getCategories";
import CategoryList from "./components/CategoryList";
import MovieList from "@/components/list";

const getList = async (searchParams: string, categoryParams: string) => {
  const { categories, movies, search }: any = await getMoviesByCategory(
    searchParams,
    categoryParams
  );

  return { categories, movies: movies.results, searchValues: search };
};

type Props = {
  searchParams: Record<string, string>;
};
export default async function Discover({ searchParams }: Props) {
  const { categories, movies, searchValues } = await getList(
    searchParams.category,
    searchParams.search
  );

  return (
    <main className="w-full pt-20 p-8 bg-neutral-900">
      {!!searchValues ? (
        <>
          <h1 className="p-8 text-white text-2xl font-inter font-bold break-words">
            Search
          </h1>
          {<MovieList movies={searchValues} />}
        </>
      ) : (
        <>
          <h1 className="p-8 text-white text-2xl font-inter font-bold break-words">
            Discover
          </h1>
          <CategoryList
            categories={categories.genres}
            selectedCategory={searchParams.category}
          />
          {movies.length && <MovieList movies={movies} />}
        </>
      )}
    </main>
  );
}
