import FilmCard from "@/components/FilmCard";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const apiKEY = process.env.API_KEY;
const apiToken = process.env.API_TOKEN;

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const getCardsByCategory = async (api) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWE0YTVhNDRjZTFjOTAyNTg1MmRjNmQzYmUxOGQ5MyIsInN1YiI6IjY1Y2ExNjZkY2U2YzRjMDE3Y2JiZjI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sIQooiDRT5Uh_bXctDj400sO2nKGRJy7qB9xIsytqM0",
    },
  };

  const res = await fetch(api, options);
  const data = await res.json();

  const cardComponents = data.results?.map((movie, i) => {
    return <FilmCard key={i} {...movie} />;
  });

  return cardComponents;
};

export default getCardsByCategory;
