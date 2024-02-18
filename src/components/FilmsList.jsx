'use client'
import React, {useEffect, useState} from "react";
import FilmCard from "./FilmCard";
import { ArrowDownWideNarrow } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import SearchFilms from "./SearchFilms";
import FilterFilms from "./FilterFilms";
import getCardsByCategory from "@/lib/utils";

const apiKey = process.env.API_KEY

const FilmsList = ({ trendingMovies }) => {

  const categoryArray = [
    {
      title: "Popular",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    },
    {
      title: "Top Rated",
      apiUrl: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    },
    {
      title: "Action",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=28`,
    },
    {
      title: "Comedy",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=35`,
    },
    {
      title: "Best from Bollywood",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_original_language=hi`,
    },
    {
      title: "Horror",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=27`,
    },
    {
      title: "Sci-Fi",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=878&sort_by=vote_count.desc`,
    },
    {
      title: "Crime",
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=80`,
    },
  ];
  
const [filterOption,setFilterOption] = useState("")
 const [filteredMovies, setFilteredMovies] = useState(trendingMovies.results)

 const handleFilterChange = (option) => {
  setFilterOption(option)
 }


 useEffect(() => {
  if(filterOption !== null ) {
    const selectedCategory = categoryArray.find(category => category.title === filterOption)
    if(selectedCategory) {
    getCardsByCategory(selectedCategory.apiUrl)
    .then((movies) => {
      setFilteredMovies(movies);
    })
    .catch((err) => {
      console.error("error fetching movies", err)
    });
  }
  } else {
    filteredMovies
  }
 }, [filterOption, trendingMovies])

 return (
    <div className="my-10 pt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-left text-lg ml-3 font-medium ">Trending...</h2>
        <div className="flex mx-2">
          <TooltipProvider>
            <SearchFilms />
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <ArrowDownWideNarrow alt="sort" className="m-2" />{" "}
              </TooltipTrigger>
              <TooltipContent>
                {" "}
                <p>Sort through films</p>{" "}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <FilterFilms onFilterChange={handleFilterChange} categoryArray={categoryArray}/>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="rounded-xl border border-gray-500 p-3 sm:p-12 w-auto ">
        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-3 w-full">
          {filteredMovies.map((film) => (
            <li className="relative" key={film.id}>
              <FilmCard film={film}  />
              <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilmsList;
