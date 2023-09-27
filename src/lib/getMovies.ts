export async function getSortedMovies(search: any) {
  const url = "https://api.themoviedb.org";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.Token as string,
    },
  };
  if (search?.search) {
    const searchRes = await fetch(
      `${url}/3/search/movie?query=${search?.search}&include_adult=false&language=en-US&page=1`,
      options
    ).catch((error) => console.log("error", error));

    return {
      search: await searchRes?.json(),
    };
  }
  try {
    let [popular, playing, rated] = await Promise.all([
      fetch(`${url}/3/movie/now_playing`, options),
      fetch(`${url}/3/movie/popular`, options),
      fetch(`${url}/3/movie/top_rated`, options),
    ]);

    return {
      popular: await popular.json(),
      playing: await playing.json(),
      rated: await rated.json(),
    };
  } catch (err) {
    console.log("err", err);
    return {};
  }
}
