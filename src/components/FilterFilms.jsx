"use client";
import { Filter } from "lucide-react";
import { useRef } from "react";


const FilterFilms = ({ onFilterChange, categoryArray }) => {
  const selectTriggerRef = useRef(null);

  const handleClick = (e) => {
    const filterOption = e.target.value;
    onFilterChange(filterOption);
  };

  return (
    <div className="flex w-full max-w-sm items-center">
      <Filter alt="filter" onClick={() => selectTriggerRef.current?.click()} />
      <select
        ref={selectTriggerRef}
        onChange={handleClick}
        className="opacity-0 absolute"
      >
        <option value="">All</option>
        {categoryArray.map((category, index) => (
          <option key={index} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
};
export default FilterFilms;
