import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

const FilmCard = ({ film, searched }) => {
  const filmId = searched ? film.id : film.props.id;
  const filmPosterPath = searched ? film.poster_path : film.props.poster_path;
  const filmOriginalTitle = searched
    ? film.original_title
    : film.props.original_title;

  return (
   
      <ScrollArea className="h-full rounded-md">
        <div className="flex items-center justify-center h-full">
          <div className="mx-auto rounded-xl overflow-hidden shadow-sm bg-slate-100 h-60">
            <img
              key={filmId}
              src={`http://image.tmdb.org/t/p/w500/${filmPosterPath}`}
              className="w-full h-full rounded-xl object-cover"
              alt={filmOriginalTitle}
            />
          </div>
        </div>
      </ScrollArea>
   
  );
};

export default FilmCard;
