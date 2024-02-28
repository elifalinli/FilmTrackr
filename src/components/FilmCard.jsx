import { ScrollArea } from "./ui/scroll-area";

const FilmCard = ({ film, searched }) => {
  console.log(film);
  return (
    <ScrollArea className="h-full rounded-md">
      <div className="flex items-center justify-center h-full ">
        {searched ? (
          <div className="mx-auto rounded-xl overflow-hidden shadow-sm bg-slate-100 h-60">
            <img
              key={film.id}
              src={`http://image.tmdb.org/t/p/w500/${film.poster_path}`}
              className="w-full h-full rounded-xl object-cover"
              alt={film.original_title}
            />
          </div>
        ) : (
          <div className="mx-auto rounded-xl overflow-hidden shadow-sm bg-slate-100 h-60">
            <img
              key={film.id}
              src={`http://image.tmdb.org/t/p/w500/${film.props?.poster_path}`}
              className="w-full h-full rounded-xl object-cover"
              alt={film.props?.original_title}
            />
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default FilmCard;
