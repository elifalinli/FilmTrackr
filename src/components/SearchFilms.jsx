'use client'
import React, {useState} from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";


const SearchFilms = ({getSearchResults}) => {
    const [query, setQuery] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`/api/movies/search?query=${query}`)
        const movie = await response.json()

        getSearchResults(movie)
    }
  return (
    <div>
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="search"
        placeholder="Search films..."
        className="border rounded-md grow"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button type="submit">
      <Search  alt="search" className=" ml-1 m-2 " />
      </button>
    </form>
    </div>
  );
};

export default SearchFilms;
