import { NextResponse } from "next/server";

const apiKEY = process.env.API_KEY;
const apiToken = process.env.API_TOKEN;

async function fetchPopularMovies(pageNum = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNum}?api_key=${apiKEY}`,
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
    const popularMovies = await fetchPopularMovies();
    return NextResponse.json(popularMovies)

}

