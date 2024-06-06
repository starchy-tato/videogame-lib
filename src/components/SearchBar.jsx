import React, { useState } from "react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log(searchText);
  };

  const handleInputChange = (event) => {
    const searchParam = event.target.value;
    setSearchText(searchParam);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-2">
      <div className="flex flex-wrap items-center -mx-3 mb-6">
        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-title"
          >
            Search
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-title"
            type="text"
            placeholder="Search for a video game"
            value={searchText}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 flex items-end">
          <button
            type="button"
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
