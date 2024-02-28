"use client";
import React, { useEffect, useState } from "react";
import FilmCard from "./FilmCard";
import getCardsByCategory from "@/lib/utils";
import FilmsListBar from "./FilmsListBar";
import categoryArray from "data";
import Link from "next/link";

const FilmsList = () => {
  const [filterOption, setFilterOption] = useState("Popular");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const selectedCategory = categoryArray.find(
          (category) => category.title === filterOption
        );
        const movies = await getCardsByCategory(selectedCategory.apiUrl);
        setFilteredMovies(movies);
        setLoading(false);
        setSearched(false)
      } catch (err) {
        console.error("error fetching movies", err);
      }
    };

    fetchData();
  }, [filterOption]);

let inputValue = searchValue.trim().toLowerCase();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=69a4a5a44ce1c9025852dc6d3be18d93&d&query=${inputValue}`
      );
      const responseData = await response.json();
      setFilteredMovies(responseData.results);
      setSearched(true)
    } catch (error) {
      console.error(error);
    }
  
  };

  return (
    <div className="my-10 pt-10">
      <FilmsListBar
        setFilterOption={setFilterOption}
        filterOption={filterOption}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
        inputValue={inputValue}
        searched={searched}
      />
      {loading ? (
        <h2 className="w-[80%]"> They're on their way... </h2>
      ) : (
        <div className="rounded-xl border border-gray-500 p-3 sm:p-12 w-auto ">
          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-3 w-full">
            {filteredMovies.map((film) => (
              <li className="relative" key={film.id}>
                <Link href={`/details/${film.id ?? film.props.id}`}>
                <FilmCard film={film} searched={searched} />
                <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilmsList;
