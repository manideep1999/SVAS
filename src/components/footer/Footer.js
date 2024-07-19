import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faInstagram, faYoutube, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faMapMarked } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src="/img/SvasLogoFinal-v2.jpeg"
            alt="Logo"
            className="footer-logo"
            style={{ width: "auto", height: "55px" }}
          />
        </div>
        <div className="footer-center">
          <div className="footer-social-links">
            <a href="https://www.youtube.com" aria-label="Youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.behance.net" aria-label="Whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.dribbble.com" aria-label="Dribbble">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.google.com/maps" aria-label="Maps">
              <FontAwesomeIcon icon={faMapMarked} />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <a href="/terms-and-conditions" className="footer-terms">
            RULES AND REGULATIONS
          </a>
        </div>
      </div>
      <div className="footer-scroll-up">
        <a href="#top" aria-label="Scroll to top">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
