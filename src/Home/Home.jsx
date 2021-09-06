import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import SideBar from "../Navbar/Sidebar/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="home-navbar">
    <Navbar toggle={toggle} />
    {isOpen &&
      <SideBar isOpen={isOpen} toggle={toggle} />}
      </div>
  
  );
};

export default Home;
