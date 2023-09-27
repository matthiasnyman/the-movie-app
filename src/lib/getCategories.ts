export async function getMoviesByCategory(
  categoryParams: string,
  searchParams: string
) {
  const url = "https://api.themoviedb.org";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmExNGZhMWFkYjA3NTQyYzZlYmJhZjA4MDZhMTE2YyIsInN1YiI6IjY1MGQ2MTI0NGRhM2Q0MDBjOWRkNWZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XlloPaXXlC0pfEZVuzZdGebPfADs29fKcXgm6f22Fvo",
    },
  };
  if (searchParams) {
    const categories = await fetch(
      `${url}/3/genre/movie/list?language=en`,
      options
    ).then((response) => response.json());
    const searchRes = await fetch(
      `${url}/3/search/movie?query=${searchParams?.search}&include_adult=false&language=en-US&page=1`,
      options
    ).catch((error) => console.log("error", error));

    return {
      categories: categories,
      search: await searchRes?.json(),
    };
  }
  try {
    const categories = await fetch(
      `${url}/3/genre/movie/list?language=en`,
      options
    ).then((response) => response.json());

    let selectedCategory = categoryParams || (await categories?.genres[0].id);

    const movies = await fetch(
      `${url}/3/discover/movie?with_genres=${selectedCategory}`,
      options
    ).then((response) => response.json());
    return {
      categories,
      movies,
    };
  } catch (err) {
    console.log("err", err);
    return {};
  }
}
