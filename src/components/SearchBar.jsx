import React from "react";
import { useState } from "react";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <nav className="px-[20px] space-x-3 flex justify-center">
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="search"
        placeholder="Control, ecuaciones diferenciales, 2019..."
        className="p-3 border-2 border-gray-200 bg-gray-50 focus:ring focus:ring-gray-300 focus:outline-none rounded-[5px] h-[35px] lg:w-1/2 w-full"
      />
    </nav>
  );
};

export default SearchBar;
