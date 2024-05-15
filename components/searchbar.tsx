import React from "react";

const searchbar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value.trim().toLowerCase());
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
            value={searchTerm}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default searchbar;
