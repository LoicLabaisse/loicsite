import React from "react";
import Home from "../Home/Home";
import * as AiIcons from "react-icons/ai";
import "./accueil.css";
import ScrollUpBtn from "./Reusable/ScrollUpBtn";
import Footer from "../Footer/Footer";

const Accueil = () => {
  const projects = [
    {
      title: "Bistrot Régent",
      image: "https://i.imgur.com/IZ0VGVF.png",
      description:
        "Développement Web | Site vitrine du Restaurant Bistrot Régent",
      date: "Septembre 2020 - Novembre 2020",
      link: "https://projet-bistro-regent.netlify.app/",
    },
    {
      title: "Festoch Fastoch",
      image: "https://i.imgur.com/Govayd3.png",
      description:
        "Développement Web | Site de réservation de ticket pour festival",
      date: "Novembre 2020 - Décembre 2020",
      link: "https://festochfastoch.herokuapp.com/",
    },
    {
      title: "BabyPlace",
      image: "https://i.imgur.com/lpfPc0r.png",
      description:
        "Développement Web | Réservez votre garde d’enfant en un clic 24h/24 et 7j/7",
      date: "Novembre 2020 - Décembre 2020",
      link: "http://babyplace.fr/",
    },
  ];
  return (
    <div id="accueil"className="accueil">
      <div className="accueil-banner">
        <div className="accueil-navbar" id="accueil">
          <Home />
        </div>
        <div className="accueil-title">
          <h1>Labaisse Loïc</h1>
          <h3>Développeur Web Full Stack</h3>
          <h4>React | Angular | Node.js | Express | mySQL</h4>
        </div>
        <a href="#skills">
          <div href="#skills" className="accueil-banner-button"></div>
        </a>
      </div>
      <div id="skills" className="skills-scroll"></div>
      <div className="accueil-content">
        <div className="accueil-skills">
          <h2 className="skills-title">
            Mes Compétences
          </h2>
          <hr className="underscore_title" />
          <div className="accueil-skills-content">
            <h3>Domaines de compétences</h3>

            <ul className="skills-list-one">
              <li>
                <h4>GESTION DE PROJETS WEB.</h4>
                <p>Site vitrine, évènementiel, e-commerce, application.</p>
              </li>
              <li>
                <h4>APPLICATIONS SPÉCIFIQUES ET INTERFACE D'ADMINISTRATION</h4>
                <p>MYSQL | SQL | EXPRESS | NODE.JS</p>
              </li>
              <li>
                <h4>INTÉGRATION HTML / CSS</h4>
                <p>Codage à la main respectueux des standards du Web</p>
              </li>
              <li>
                <h4>DYNAMISE DES PAGES AVEC JAVASCRIPT</h4>
                <p>Utilisation des Frameworks React et Angular</p>
              </li>
              <li>
                <h4>VALIDATION W3C,RÉFÉRENCEMENT NATUREL SEO</h4>
                <p>Accessibilité et ergonomie des pages web</p>
              </li>
              <li>
                <h4>CONCEPTION MULTI-PLATEFORMES</h4>
                <p>Compatible tous supports, tablette et application mobile</p>
              </li>
            </ul>
          </div>
          <div className="skill-list-two">
            <h3>Compétences en développement</h3>
            <div className="bar-global">
              {" "}
              <div className="bar">
                <div className="bar-stat" id="html">
                  <span className="bar-text">HTML - 80%</span>
                </div>
              </div>
              <div className="bar">
                <div className="bar-stat" id="css">
                  <span className="bar-text">CSS - 75%</span>
                </div>
              </div>
              <div className="bar">
                <div className="bar-stat" id="js">
                  <span className="bar-text">JAVASCRIPT (DOM) - 80%</span>
                </div>
              </div>
              <div className="bar">
                <div className="bar-stat" id="react">
                  <span className="bar-text">REACT | REDUX | HOOKS - 70%</span>
                </div>
              </div>
              <div className="bar">
                <div className="bar-stat" id="angular">
                  <span className="bar-text"> ANGULAR - 60%</span>
                </div>
              </div>
              <div className="bar">
                <div className="bar-stat" id="node">
                  <span className="bar-text">NODE.JS | EXPRESS - 65%</span>
                </div>
              </div>
              <div className="bar">
                <div className="bar-stat" id="sql">
                  <span className="bar-text">MYSQL - 60%</span>
                </div>
              </div>
              <div className="bar">
                <div className="bar-stat" id="c">
                  <span className="bar-text"> C# | UNITY - 30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accueil-responsive">
          <h2>Développement Web Responsive</h2>
          <p> Mobile First une priorité !</p>
        </div>
        <div id="project" className="project-scroll"></div>
        <div className="accueil-project">
          <h2 className="project-title">Mes Projets</h2>
          <hr className="underscore_title" />
          <div className="project-content">
            {projects.map((project, index) => (
              <a href={project.link} target="blank">
                <div className="project-global">
                  <ul>
                    <li className="project-box" key={index}>
                      <h2>{project.title}</h2>
                      <img src={project.image} alt={project.title} />
                      <p className="project-description">
                        {project.description}
                      </p>
                      <hr />
                      <p className="project-date">{project.date}</p>
                    </li>
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div id="contact" className="contact-scroll"></div>
        <div  className="accueil-contact">
          <h2>Contactez-moi</h2>
          <hr className="underscore_title" />
          <div className="contact-content">
            <div className="contact-tel">
              <h3 className="title-contact">
                <AiIcons.AiFillPhone />
                Téléphone
              </h3>
              <p className="description-contact">06.36.57.93.81</p>
            </div>
            <div className="contact-email">
              <h3 className="title-contact">
                <AiIcons.AiFillMail /> Email
              </h3>
              <p className="description-contact">06.36.57.93.81</p>
            </div>
          </div>
        </div>
        <div className="accueil-footer">
          <Footer />
        </div>
      </div>
      <ScrollUpBtn />
    </div>
  );
};

export default Accueil;
