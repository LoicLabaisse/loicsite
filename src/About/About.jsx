import React,{useContext} from "react";
import "./About.css";

import Footer from "../Footer/Footer";

import { ThemeContext } from "../Context/ThemeContext";

const About = () => {

  const {theme}= useContext(ThemeContext)
  return (
    <div className={theme ? 'about dark' : "about light"}>
      <div className="about-content">
        <h1 className="about-title">A propos de moi</h1>
        <hr className="underscore-about"/>
        <p className="about-description">
          Je m'appelle Loïc , je suis né le 24/05/1995 dans le Lot et Garonne.
          <br/>

          Je suis Développeur Web spécialisé React et NodeJS avec Express. J'ai
          appris en autodidacte à coder avec le frameworks Angular ainsi que le
          language C# avec unity.
          <br/>

          <br/> Je suis quelqu'un d'autonome mais qui aime travailler en
          équipe, je cherche à être polyvalent sur tous mes projets en
          connaissant le plus de technologies possible.
          <br/>
          <br/>
          Au plaisir de vous rencontrer si vous êtes intéressé par mon profil.
        </p>
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
