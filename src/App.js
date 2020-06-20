import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Scroll from "./components/Scroll";

const App = () => {
  const [query, setQuery] = useState("search");
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY,
      pageY = window.innerHeight;
  
    if (scrollY > pageY) setShowScroll(true);
    else setShowScroll(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="wrapper">
      <Header searchQuery={setQuery} />
      <Content query={query} />
      { showScroll && <Scroll /> }
    </div>
  );
};

export default App;
