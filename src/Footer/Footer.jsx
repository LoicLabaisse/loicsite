import React from "react";

import * as AiIcons from "react-icons/ai";
import Logo from "../image/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logos">
        <img className="footer-logo" src={Logo} alt="logo" />
        <ul className="footer-list">
          <li>
            <a className="logo-list" href="https://www.linkedin.com/in/loïc-labaisse-7aa4691b7/">
              <AiIcons.AiFillLinkedin />
            </a>
          </li>
          <li>
            <a className="logo-list" href="https://github.com/LoicLabaisse">
              <AiIcons.AiFillGithub />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-description">
        <h2>Développeur Web</h2>
        <p>
          Développeur Web Front et Back, je suis spécialisé avec le Frameworks
          React en front et Node.js en back avec Express. Actuellement en
          formation au sein de l'EPSI BORDEAUX en tant que Concepteur
          Développeur d'applications.
        </p>
        <h2>Labaisse Loïc</h2>
        <div className="contact-tel-footer">
          <h3 className="title-contact-footer">
            <AiIcons.AiFillPhone />
            Téléphone
          </h3>
          <p className="description-contact-footer">06.36.57.93.81</p>
        </div>
        <div className="contact-email-footer">
          <h3 className="title-contact-footer">
            <AiIcons.AiFillMail />
            Email
          </h3>
          <p className="description-contact-footer">06.36.57.93.81</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
