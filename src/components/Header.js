import React, { useState } from "react";
import Search from "./Search";
import Menu from "./Menu";

const Header = ({ searchQuery }) => {
  const [query, setQuery] = useState("search");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <Search
        searchQuery={searchQuery}
        setQuery={setQuery}
        query={query}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      <Menu
        searchQuery={searchQuery}
        setQuery={setQuery}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </header>
  );
};

export default Header;
