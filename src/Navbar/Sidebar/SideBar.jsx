import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import "./sideBar.css";
import BtnToggle from "../../Accueil/Reusable/BtnToggle/BtnToggle";
import { useContext } from "react/cjs/react.development";
import { ThemeContext } from "../../Context/ThemeContext";

const SideBar = ({ toggle }) => {

  const {theme}= useContext(ThemeContext)
  return (
    <div className={theme ? "SideBar" :"SideBar light"}>
      <FaIcons.FaTimes className={theme ? "closeIcon" : "closeIcon light"} onClick={toggle} />
      <div className="SideBarContainer">
        <ul className="SideBarMenu">
          <li>
            <Link onClick={toggle} to="/">
              <AiIcons.AiFillHome /> Accueil
            </Link>
          </li>
          <li>
            <Link onClick={toggle} to="/about">
              <MdIcons.MdDescription /> A propos de moi
            </Link>
          </li>
          <li>
            <a onClick={toggle} href="/#skills">
              <FaIcons.FaCode /> Compétences
            </a>
          </li>
          <li>
            <a onClick={toggle} href="/#project">
              <AiIcons.AiOutlineFundProjectionScreen /> Project
            </a>
          </li>
          <li>
            <a onClick={toggle} href="/#contact">
              <AiIcons.AiOutlineMail /> Contactez-moi
            </a>
          </li>
          <li><BtnToggle/></li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
