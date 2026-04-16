import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Auth from "../auth/Auth.js";
import "./Header.css";

function Header() {
  const [collapsed, setCollapsed] = useState(true);
  const [auth] = useState(() => new Auth());

  const navBarToggleClick = () => {
    setCollapsed((prevState) => !prevState);
  };

  const navLinkClick = () => {
    setCollapsed(true);
  };

  const login = () => {
    auth.login();
  };

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = collapsed ? "auto" : "hidden";
  }, [collapsed]);

  return (
    <nav className="sbc-navbar navbar fixed-top navbar-expand-xl navbar-light">
      {/* Logo */}
      <Link to="/" className="navbar-brand" onClick={navLinkClick}>
        <img
          className="sbc-navbar-logo"
          src="./img/SvasLogoFinal-v2.jpeg"
          alt="SVAS FOR EARTH"
        />
      </Link>

      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={navBarToggleClick}
        aria-label="Toggle navigation"
      >
        {collapsed ? "☰" : "✕"}
      </button>

      {/* SINGLE MENU (used for both mobile + desktop) */}
      <div
        className={`navbar-collapse sbc-navbar-collapse ${
          collapsed ? "mobile-hide" : "mobile-show"
        }`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav sbc-navbar-content">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" onClick={navLinkClick}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/ourMaster"
              className="nav-link"
              onClick={navLinkClick}
            >
              Our Master
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/meditation"
              className="nav-link"
              onClick={navLinkClick}
            >
              Meditation
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ashram" className="nav-link" onClick={navLinkClick}>
              Ashram
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/programs" className="nav-link" onClick={navLinkClick}>
              Programs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" onClick={navLinkClick}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" onClick={navLinkClick}>
              Contact
            </NavLink>
          </li>

          {/* Optional login 
          <li className="nav-item">
            <button className="login-btn" onClick={login}>
              Login
            </button>
          </li>*/}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
