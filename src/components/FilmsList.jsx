import React from "react";
import FilmCard from "./FilmCard";
import { ArrowDownWideNarrow } from "lucide-react";
import { Filter } from "lucide-react";
import { Search } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { getMovieDetailsById, getMovieImagesById, getTrendingFilms } from "@/lib/utils";



const FilmsList = async () => {
  const films = await getTrendingFilms();
  const filmData = films.movie_results;
  console.log(filmData)

  const filmsWithDetails = await Promise.all(
    filmData.map(async (film) => {
      const images = await getMovieImagesById(film.imdb_id);
      const details = await getMovieDetailsById(film.imdb_id)
      return {
        ...film,
        images: images,
        details: details
      };
    })
  );

  return (
    <div className="my-10 pt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-left text-lg ml-3 font-medium ">Trending...</h2>
        <div className="flex mx-2">
          <TooltipProvider>
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Search alt="search" className="m-2" />{" "}
              </TooltipTrigger>
              <TooltipContent>
                {" "}
                <p>Search through films</p>{" "}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="rounded-xl border border-gray-500 p-3 sm:p-12 w-auto">
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-3 w-full">
            {filmsWithDetails.map((film) => (
              <FilmCard key={film.imdb_id} film={film} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilmsList;
