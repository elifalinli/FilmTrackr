import React from "react";
import FilmCard from "./FilmCard";
import { ArrowDownWideNarrow, Filter, Search } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Input } from "./ui/input";
import {
  getUpcomingMovieDetails,
  getPopularMovies,
  getMoviesByKeyword,
  getMovieById
} from "@/lib/utils";

const FilmsList = async ({query}) => {
  
  const films = await getPopularMovies();
  

  const filmsWithDetails = await Promise.all(
    films.map(async (film) => {
      const searchedMovies = await getMoviesByKeyword();
      const details = await getMovieById(film.id)
      return {
        ...film,
        searchedMovies: searchedMovies,
        details: details
      };
    })
  );
console.log(filmsWithDetails)
const moviesByKeyword = await getMoviesByKeyword(query)
console.log(moviesByKeyword)
 
  return (
    <div className="my-10 pt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-left text-lg ml-3 font-medium ">Trending...</h2>
        <div className="flex mx-2">
          <TooltipProvider>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="search"
                placeholder="Search films"
                className="border rounded-md grow"
                onChange
                
              />
              <Search alt="search"  className="m-2" />
            </div>

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
              <TooltipTrigger>
                {" "}
                <Filter alt="filter" className="m-2" />{" "}
              </TooltipTrigger>
              <TooltipContent>
                {" "}
                <p>Filter through films</p>{" "}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="rounded-xl border border-gray-500 p-3 sm:p-12 w-auto ">
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-3 w-full">
          {filmsWithDetails.map((film) => (
            <div className="relative" key={film.id}>
              <FilmCard film={film} id={film.id} />
              <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmsList;
