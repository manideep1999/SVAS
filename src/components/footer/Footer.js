import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneVolume,
  FaLocationDot,
  FaEnvelope,
  FaAnglesRight,
} from "react-icons/fa6";
import "./Footer.css";
import ScrollToTop from "../common/scrollTop/ScrollTopButton";
import NextPageLink from "./NextPageLink";
import ScrollTopButton from "../common/scrollTop/ScrollTopButton";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4  ">
            <h3 className="footer-theme-text content-center-align">
              Come, <br></br>Let Us Meditate.
            </h3>
          </div>

          <div className="col-md-4 content-center-align">
            <div className="footer-links">
              <h4 className="display-1 footer-heading">Links</h4>
              <ul className="use-links">
                <li key="About">
                  <Link to="about">
                    <i>
                      {" "}
                      <FaAnglesRight />
                    </i>
                    About
                  </Link>
                </li>
                <li key="Progarms">
                  <Link to="programs">
                    {" "}
                    <i>
                      {" "}
                      <FaAnglesRight />
                    </i>
                    Programs
                  </Link>
                </li>
                <li key="Meditation">
                  <Link to="meditation">
                    {" "}
                    <i>
                      {" "}
                      <FaAnglesRight />
                    </i>
                    Meditation
                  </Link>
                </li>
                <li key="Contact">
                  <Link to="contact">
                    {" "}
                    <i>
                      {" "}
                      <FaAnglesRight />
                    </i>
                    Contact
                  </Link>
                </li>
              </ul>
              <h4 className="footer-heading ">Inquiries:</h4>
              <p className="footer-text">svasformeditation@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <p>
              <span className="contact-icon">
                <FaLocationDot />
              </span>
              <a
                href="https://www.google.com/maps/place/Sri+Sai+Vani+Satsang+Ashram/@17.2952039,78.2406254,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbc17757ac0273:0xda9baab424214b4b!8m2!3d17.2951988!4d78.2432003!16s%2Fg%2F11ff0sftnx?entry=ttu"
                className="contact-link"
              >
                76WV+37G, Kanakamamidi, Telangana 501504, India
              </a>
            </p>
            <p>
              <span className="contact-icon">
                <FaPhoneVolume />
              </span>
              <a href="tel:+1562.567.SVAS (7827)" className="contact-link">
                {" "}
                (+1) 562.567.SVAS (7827)
              </a>
            </p>
            <NextPageLink></NextPageLink>
          </div>
        </div>

        {/*<div className="row">
        <div className="col-sm">
          <p>
            SVAS
            <br />
            Hyderabad
            <br />
            &copy; SVAS 2024 | All Rights Reserved
          </p>
        </div>
        <div className="col-sm">
          <p className="footer-social-title">STAY CONNECTED</p>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="col-sm d-none d-sm-none d-md-none d-lg-block">
          <img
            alt="footer-logo"
            // srcSet="img/logo_footer@2x.png 2x"
            className="footer-logo float-right"
            src="/img/SvasLogoFinal-v2.jpeg"
          />
        </div>
      </div>*/}
      </div>
      <div className="row p-0">
        <div className="col-sm content-center-align ">
          <p className="footer-text">
            SVAS,Hyderabad <br></br>Copyright&copy; SVAS 2024 | All Rights
            Reserved
          </p>
          <ScrollTopButton></ScrollTopButton>
        </div>
      </div>
    </div>
  );
}

export default Footer;
