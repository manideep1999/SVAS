import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Auth from "../auth/Auth.js";
import "./Header.css";
function Header({ basename }) {
  const [collapsed, setCollapsed] = useState(true); // State for collapsing/expanding the nav
  const auth = new Auth();

  const navBarToggleClick = () => {
    setCollapsed((prevState) => !prevState);
  };

  const navLinkClick = () => {
    setCollapsed(true);
  };

  const login = (event) => {
    auth.login();
  };

  const collapsedClass = collapsed ? "collapse" : "";

  return (
    <nav className="sbc-navbar navbar fixed-top navbar-expand-xl navbar-light">
      <Link to="/" className="navbar-brand" onClick={navLinkClick}>
        <img
          className="sbc-navbar-logo"
          src="./img/SvasLogoFinal-v2.jpeg"
          alt="SVAS FOR EARTH"
        />
      </Link>
      {/* Toggle button for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={navBarToggleClick}
        aria-controls="navbarNav"
        aria-expanded={!collapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`navbar-collapse  ${collapsedClass}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav sbc-navbar-content">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={navLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="ourMaster"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={navLinkClick}
            >
              Our Master
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="meditation"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={navLinkClick}
            >
              Meditation
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="ashram"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={navLinkClick}
            >
              Ashram
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="programs"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={navLinkClick}
            >
              Programs
            </NavLink>
          </li>
          {/*<li className="nav-item">
              <NavLink
                to="/Sermons"
                className="nav-link"
                activeClassName="active"
                onClick={this.navLinkClick}
              >
                Teachings
              </NavLink>
    </li> 
            <li className="nav-item">
              <NavLink
                to="/live"
                className="nav-link"
                activeClassName="active"
                onClick={this.navLinkClick}
              >
                Watch Live
              </NavLink>
            </li>*/}

          {/* <li className="nav-item">
              <NavLink
                to="/giving"
                className="nav-link"
                activeClassName="active"
                onClick={this.navLinkClick}
              >
                Giving
              </NavLink>
            </li> */}
          {/* <li className="nav-item">
              <NavLink
                to="/word-for-the-way"
                className="nav-link"
                activeClassName="active"
                onClick={this.navLinkClick}
              >
                Word for the way
              </NavLink>
            </li> */}
          <li className="nav-item">
            <NavLink
              to="about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={navLinkClick}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={navLinkClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
