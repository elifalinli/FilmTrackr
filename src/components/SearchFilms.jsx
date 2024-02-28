"use client";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchFilms = ({ setSearchValue, handleSearch, inputValue }) => {
  const handleChange = async (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm items-center space-x-2"
      >
        <Input
          type="search"
          placeholder="Search films..."
          className="border rounded-md grow"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit">
          <Search alt="search" className=" ml-1 m-2 " />
        </button>
      </form>
    </div>
  );
};

export default SearchFilms;
