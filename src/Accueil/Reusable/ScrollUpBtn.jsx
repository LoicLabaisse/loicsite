import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import "./scrollUpBtn.css";

const ScrollUpBtn = () => {
  const [scroll, setScroll] = useState(false);

  const buttonUp = () => {
    if (window.scrollY >= 500) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", buttonUp);
  return (
    <div className="scrollUpBtn">
      <a className={scroll ? "active" : "to-top"} href="#accueil">
        <BsIcons.BsArrowUpShort />
      </a>
    </div>
  );
};

export default ScrollUpBtn;
