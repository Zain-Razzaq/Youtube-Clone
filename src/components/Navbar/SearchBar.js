import { useState } from "react";

import { SearchIcon } from "./icons";

const SearchBar = () => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <form className="h-10 my-2 overflow-hidden flex justify-end border rounded-full focus-within:border-sky-700 focus-within:shadow-inner">
      <div className="flex">
        <div
          className={`${
            searchFocused ? "block" : "hidden"
          } flex items-center ml-2`}
        >
          <SearchIcon />
        </div>
        <input
          className="px-2 lg:w-[500px] md:w-[350] focus:outline-none "
          type="text"
          placeholder="Search"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
      </div>
      <button className=" w-16 bg-neutral-100 hover:bg-neutral-200 flex items-center justify-around cursor-pointer">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
