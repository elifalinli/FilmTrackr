import React from "react";
import { ScrollArea } from "./ui/scroll-area";


const FilmCard = ({film}) => {
  const { title, images } = film;
  
  return (
    <ScrollArea className="h-full rounded-md">
      <div className="flex items-center justify-center h-full ">
        <div className="mx-auto rounded-xl overflow-hidden shadow-sm bg-slate-100 h-60">
                <img
                  key={film.id}
                  src={images.poster}
                  className="w-full h-full rounded-xl object-cover"
                  alt={title}
                />
       
        </div>
      </div>
    </ScrollArea>
  );
};

export default FilmCard;
