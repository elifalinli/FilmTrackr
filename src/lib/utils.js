import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const apiKEY = process.env.API_KEY;
const apiToken = process.env.API_TOKEN;

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
