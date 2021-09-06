import React, { useState } from 'react';
import * as FaIcons from"react-icons/fa"
import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from"../image/logo.png"




const Navbar =({toggle})=>{

    const [navbar, setNavbar] = useState(false);



    const NavbarUp = () => {
        if (window.scrollY >= 100) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };


      window.addEventListener("scroll", NavbarUp)
    return(

        <div className={navbar ? "Navbar active" : "Navbar"}>
            <nav>
                <a href="/#accueil" id="accueil"><img className="NavBar-logo" src={Logo} alt="logo"/></a>
                <FaIcons.FaBars className="burger" onClick={toggle}/>
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
            </ul>
            </nav>
        </div>
       )
}


export default Navbar