import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import SearchFilms from "./SearchFilms";
import FilterFilms from "./FilterFilms";
import { ArrowDownWideNarrow } from "lucide-react";


const FilmsListBar = ({setFilterOption, filterOption, setSearchValue, handleSearch, inputValue, searched}) => {

  return (
    <div className="flex justify-between items-center">
      {searched ? (
        <h2 className="text-left text-lg ml-3 font-medium ">Results for "{inputValue}""...</h2>
      ) : (
        <h2 className="text-left text-lg ml-3 font-medium ">{filterOption}...</h2>
      )}
      
      <div className="flex mx-2">
        <TooltipProvider>
          <SearchFilms setSearchValue={setSearchValue} handleSearch={handleSearch} inputValue={inputValue} />
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
            <FilterFilms
              setFilterOption={setFilterOption}
            />
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default FilmsListBar;
