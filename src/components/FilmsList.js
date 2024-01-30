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

const FilmsList = () => {
  return (
    <div className="my-10 pt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-left text-lg ml-3 font-medium ">Latest...</h2>
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
        <div className="mt-10 grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-3 w-full">
          <div className="flex justify-center">
            <FilmCard />
          </div>
          <div className="flex justify-center">
            <FilmCard />
          </div>
          <div className="flex justify-center">
            <FilmCard />
          </div>
          <div className="flex justify-center">
            <FilmCard />
          </div>
          <div className="flex justify-center">
            <FilmCard />
          </div>
          <div className="flex justify-center">
            <FilmCard />
          </div>
          <div className="flex justify-center">
            <FilmCard />
          </div>
          <div className="flex justify-center">
            <FilmCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmsList;
