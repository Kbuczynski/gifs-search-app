import React from "react";
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const Scroll = () => {
  const handleScroll = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  return (
    <div className="scroll" onClick={handleScroll}>
      <span className="scroll__arrow"></span>
    </div>
  );
};

export default Scroll;
