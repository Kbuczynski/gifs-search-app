import React from "react";
import { useApi } from "../hooks/useApi";
import { fetchTypes } from "../data/fetchTypes";

const Menu = ({ searchQuery, setQuery, showMenu, setShowMenu }) => {
  const { data } = useApi(fetchTypes.categories);

  const handleClick = (e) => {
    const value = e.target.innerText;
    setQuery(value);
    searchQuery(value);
    setShowMenu(false);
  };

  return (
    <>
      {showMenu && (
        <nav className="header__menu">
          <ul className="header__menu__box">
            {data == null
              ? null
              : data.map(({ name }, index) => {
                  return (
                    <li
                      key={index}
                      onClick={handleClick}
                      className="header__menu__box__category"
                    >
                      {name}
                    </li>
                  );
                })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Menu;
