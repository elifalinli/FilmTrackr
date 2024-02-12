import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const apiKEY = process.env.API_KEY;
const apiToken = process.env.API_TOKEN;

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiToken}`,
  },
};

export async function getPopularMovies(pageNum = 1) {

  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNum}?api_key=${apiKEY}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getUpcomingMovieDetails(pageNum = 1) {

  const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNum}?api_key=${apiKEY}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMoviesByKeyword(keyword) {
  const url = `https://api.themoviedb.org/3/search/${keyword}?page=1`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieById(id) {
	const url = `https://api.themoviedb.org/3/movie/${id}`
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result;
	  } catch (error) {
		console.error(error);
	  }
}