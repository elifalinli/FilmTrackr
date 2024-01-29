import React from 'react'
import FilmCard from './FilmCard'
import { ScrollArea } from './ui/scroll-area'

const FilmsList = () => {
  return (
    <div class="mt-16 grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-4 w-full">
        <FilmCard/>
        <FilmCard/>
        <FilmCard/>
        <FilmCard/>
        <FilmCard/>
        <FilmCard/>
        <FilmCard/>
        <FilmCard/>
</div>
  )
}

export default FilmsList
