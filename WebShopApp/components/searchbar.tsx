import React from "react";
import { useState } from "react";

const searchbar = ({ search, setSearch }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="mx-auto w-1/4 min-w-[310px] p-4 my-4 text-[24px] rounded-full border-2">
      <form>
        <label>
          <input
            className="focus:outline-none"
            type="text"
            placeholder="Search item.."
            name="name"
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
};

export default searchbar;
