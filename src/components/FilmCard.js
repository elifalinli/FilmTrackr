import React from 'react'
import { ScrollArea } from './ui/scroll-area';

const FilmCard = () => {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
    <div className='flex items-center justify-center '>
        <div className='mx-auto rounded-xl'>
             <div className="rounded-3xl max-w-[350px] shadow-sm bg-slate-100 flex-col">
          <img
              src="https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg"
             className="w-auto h-auto rounded-2xl justify-center object-cover"
              alt="movie.title"
            />
          {/* <div className="w-auto group p-6 grid z-10 font-semibold">
             Spider-Man: Across the Spider-Verse
          </div> */}
        </div>
    </div>
    </div>
    </ScrollArea>
  )
}

export default FilmCard;
