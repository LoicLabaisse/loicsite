import React, { useContext} from "react";
import "./BtnToggle.css";
import { ThemeContext } from "../../../Context/ThemeContext";
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from "react-icons/bi"

const BtnToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className="btn-toggle">
        {/*<BiIcons.BiSun className={theme ? "toggle-sun" : "toggle-sun active "}/>*/}
      <label className="switch">
        <input type="checkbox" className={theme ? "checkbox dark" : "checkbox light"}  onClick={toggleTheme} />
        <span className={theme ? "slider" : "slider light"} >{theme ? <BiIcons.BiSun className="sun"/> :<BsIcons.BsMoon className="moon"/>}</span>
      </label>
      {/*<BsIcons.BsMoon className={theme ?"toggle-moon" : "toggle-moon active"}/> */}
    </div>
  );
};

export default BtnToggle;
