"use client";
import getCardsByCategory from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup
} from "@/components/ui/select";
import { Filter } from "lucide-react";
import { useRef, useState } from "react";

const apiKey = process.env.API_KEY
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


const FilterFilms = () => {
    const selectTriggerRef = useRef(null)
    const [cards, setCards] = useState([])

    const handleClick = async (e) => {
        e.preventDefault()
        if(selectTriggerRef.current){
            selectTriggerRef.current.click()
        }
        const fetchedCategories = await Promise.all(
            categoryArray.map(async(category) => {
                console.log(category.title)
                const cards = await getCardsByCategory(category.apiUrl)
                return cards
            })
        )
        setCards(fetchedCategories)
    }

  return (
    <div className="flex w-full max-w-sm items-center">
      <Select>
        <SelectTrigger ref={selectTriggerRef} className="opacity-0 absolute" >
        </SelectTrigger>
        <Filter alt="filter" onClick={handleClick}  />
        <SelectContent className="border bg-white">
          {categoryArray.map((category) => (
            <div key={category.title}>
            <SelectGroup>
              <SelectItem value={category.title} onClick={handleClick} className="hover:shadow-indigo-500/40">{category.title} </SelectItem>
              </SelectGroup>
            </div>
          ))}
        </SelectContent>
      </Select>
    </div>
    //   {cards.length > 0 && (
    //     <div>
    //         {cards.map((categoryCards, i) => (
    //             <div key={i}>
    //                 <h2>{categoryArray[i].title}</h2>
    //                 <div> {categoryCards.props.title}</div>

    //             </div>
    //         ))}
    //     </div>
    //   )} 
  );
};

export default FilterFilms;
