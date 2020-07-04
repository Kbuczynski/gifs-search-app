import React from "react";
import { useApi } from "../hooks/useApi";
import { fetchTypes } from "../data/fetchTypes";

const Search = ({ searchQuery, setQuery, query, setShowMenu, showMenu }) => {
  const { data } = useApi(`${fetchTypes.search}/tags`, query);

  const handleInput = (e) => setQuery(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchQuery(query);
  };

  const handleAutoComplete = (e) => {
    const value = e.target.innerText;

    setQuery(value);
    searchQuery(value);
  };

  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <form className="header__search">
      <input
        type="text"
        className="header__search--input"
        onChange={handleInput}
        placeholder="Search gif"
        value={query}
      />

      {data !== null &&
        (Array.isArray(data) ? (
          <ul className="header__search--autocomplete">
            {data.map(({ name }, index) => (
              <li
                key={index}
                className="header__search--autocomplete--item"
                onClick={handleAutoComplete}
              >
                {name}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="header__search--autocomplete">
            {Object.values(data).map(({ name }, index) => (
              <li
                key={index}
                className="header__search--autocomplete--item"
                onClick={handleAutoComplete}
              >
                {name}
              </li>
            ))}
          </ul>
        ))}

      <button
        type="submit"
        className="header__search--search"
        onClick={handleSubmit}
      >
        Search
      </button>

      <button
        type="button"
        className="header__search--categories"
        onClick={handleMenu}
      >
        Categories
      </button>
    </form>
  );
};

export default Search;
