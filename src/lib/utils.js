import FilmCard from "@/components/FilmCard";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const apiKEY = process.env.API_KEY;
const apiToken = process.env.API_TOKEN;

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const getCardsByCategory = async (api) => {
  const res = await fetch(api);
  const data = await res.json();

  const cardComponents = data.results?.map((movie, i) => <FilmCard key={i} {...movie} />);

  return cardComponents;
};

export default getCardsByCategory;