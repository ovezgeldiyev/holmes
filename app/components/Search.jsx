import React from "react";
import { searchIcon } from "../Base/SVG";

export default function Search() {
  return (
    <div className="search">
      {searchIcon}
      <input
        type="search"
        placeholder="Search for cities, neighborhoods or addresses"
      />
      <button type="button" className="button primary">
        Search
      </button>
    </div>
  );
}
