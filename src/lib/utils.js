import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}







export async function getTrendingFilms()  {
	const url = 'https://movies-tv-shows-database.p.rapidapi.com/?page=1';
	const options = {
		method: 'GET',
		headers: {
			Type: 'get-trending-movies',
			'X-RapidAPI-Key': process.env.API_KEY,
			'X-RapidAPI-Host': process.env.API_HOST
		}
	};
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result
	} catch (error) {
		console.error(error);
	}
}

export async function getMovieImagesById(movieId) {
	const url = `https://movies-tv-shows-database.p.rapidapi.com/?movieid=${movieId}`;
	const options = {
	  method: 'GET',
	  headers: {
		Type: 'get-movies-images-by-imdb',
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': process.env.API_HOST
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json();
	  console.log(result);
	  return result;
	} catch (error) {
	  console.error(error);
	}
  };

export async function getMovieDetailsById(movieId) {
	const url = `https://movies-tv-shows-database.p.rapidapi.com/?movieid=${movieId}`;
const options = {
	method: 'GET',
	headers: {
		Type: 'get-movie-details',
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': process.env.API_HOST
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}