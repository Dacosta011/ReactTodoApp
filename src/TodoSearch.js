import React from "react";
import SearchIcon from "./SearchIcon";
import "./TodoSearch.css";

function TodoSearch({search,setSearch}) {

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="search-section-container">
      <input
        className="search-section-input"
        type="text"
        placeholder="Search any task"
        value={search}
        onChange={onChangeSearch}
      />
      <span className="search-section-icon">
       <SearchIcon/>
      </span>
    </div>
  );
}

export default TodoSearch;
