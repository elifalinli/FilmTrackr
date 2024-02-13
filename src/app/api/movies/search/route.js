import { NextResponse } from "next/server";

const apiKEY = process.env.API_KEY;
const apiToken = process.env.API_TOKEN;

// async function fetchMovies() {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?include_adult=true?&language=en-US&page=2`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${apiToken}`,
//       },
//     }
//   );
//   const movies = await response.json();
//   return movies;
// }
async function fetchPopularMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?page=76&api_key=${apiKEY}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      }
    );
    const popularMovies = await response.json();
    return popularMovies;
  }

export async function GET(request) {
    const movies = await fetchPopularMovies();
    const {searchParams} = new URL(request.url)
    const query = searchParams.get('query')
    const filteredMovies = movies.results?.filter((movie) => {
        return movie.title.toLowerCase().includes(query.toLowerCase())
    })
    return NextResponse.json(filteredMovies);
    

}