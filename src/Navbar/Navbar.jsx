import React, { useState, useContext } from 'react';
import * as FaIcons from"react-icons/fa"
import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from"../image/logo.png"
import BtnToggle from '../Accueil/Reusable/BtnToggle/BtnToggle';
import { ThemeContext } from '../Context/ThemeContext';




const Navbar =({toggle},{dark})=>{

    const [navbar, setNavbar] = useState(false);

    const {theme}= useContext(ThemeContext)



    const NavbarUp = () => {
        if (window.scrollY >= 900) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };      
      window.addEventListener("scroll", NavbarUp )
    return(

        <div className={navbar ? "Navbar active" : "Navbar"}>
            <nav className={theme? "navbar-color dark " : "navbar-color light"}>
                <a href="/#title" id="accueil"><img className={theme ? "NavBar-logo" : "NavBar-logo light"} src={Logo} alt="logo"/></a>
                <FaIcons.FaBars className={theme ? "burger" : "burger light"} onClick={toggle}/>
            <ul>
                <li>
                    <Link className="Navbar-list" to="/about"><span>A propos</span></Link>
                </li>
                <li>
                    <a  className="Navbar-list" href="/#project"><span>Projets</span></a>
                </li>
                <li>
                    <a  className="Navbar-list" href="/#skills"><span>Compétences</span></a>
                </li>
                <li>
                    <a  className="Navbar-list" href="/#contact"><span>Contactez-moi</span></a>
                </li>
                <li><BtnToggle/></li>
            </ul>
            </nav>
        </div>
       )
}


export default Navbar