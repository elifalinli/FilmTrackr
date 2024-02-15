
import React from "react";
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

const FilmsList = ({ trendingMovies }) => {
  // console.log(trendingMovies.results)
  
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
              <FilterFilms />
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="rounded-xl border border-gray-500 p-3 sm:p-12 w-auto ">
        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-3 w-full">
          {trendingMovies.results.map((film) => (
            <li className="relative" key={film.id}>
              <FilmCard film={film} id={film.id} />
              <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilmsList;
