"use client";
import React, { useEffect, useState } from "react";
import FilmCard from "./FilmCard";
import getCardsByCategory from "@/lib/utils";
import FilmsListBar from "./FilmsListBar";
import categoryArray from "data";

const FilmsList = () => {
  const [filterOption, setFilterOption] = useState("Popular");
  const [filteredMovies, setFilteredMovies] = useState([]);
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
      } catch (err) {
        console.error("error fetching movies", err);
      }
    };

    fetchData();
  }, [filterOption]);

  return (
    <div className="my-10 pt-10">
      <FilmsListBar
        setFilterOption={setFilterOption}
        filterOption={filterOption}
      />
      {loading ? (
        <h2 className="w-[80%]"> They're on their way... </h2>
      ) : (
        <div className="rounded-xl border border-gray-500 p-3 sm:p-12 w-auto ">
          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-3 w-full">
            {filteredMovies.map((film) => (
              <li className="relative" key={film.id}>
                <FilmCard film={film} />
                <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilmsList;
