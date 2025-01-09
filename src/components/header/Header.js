import React from "react";
import { NavLink, Link } from "react-router-dom";
import Auth from "../auth/Auth.js";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
    this.auth = new Auth();
  }

  navBarToggleClick = (event) => {
    this.setState({
      collapsed: this.state.collapsed ? false : true,
    });
  };

  navLinkClick = (event) => {
    this.setState({
      collapsed: true,
    });
  };

  login = (event) => {
    this.auth.login();
  };

  render() {
    let collapsedClass = "collapse";

    if (!this.state.collapsed) {
      collapsedClass = "";
    }

    return (
      <nav className="sbc-navbar navbar fixed-top navbar-expand-xl navbar-light">
        <Link to="/" className="navbar-brand" onClick={this.navLinkClick}>
          <img
            className="sbc-navbar-logo"
            src="./img/SvasLogoFinal-v2.jpeg"
            alt="SVAS FOR EARTH"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navBarToggleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={collapsedClass + " navbar-collapse sbc-navbar-collapse"}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav sbc-navbar-content">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                onClick={this.navLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ourMaster"
                className="nav-link"
                activeClassName="active"
                onClick={this.navLinkClick}
              >
                Our Master
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/meditation"
                className="nav-link"
                activeClassName="active"
                onClick={this.navLinkClick}
              >
                Meditation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ashram"
                className="nav-link"
                activeClassName="active"
                onClick={this.navLinkClick}
              >
                Ashram
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/programs"
                className="nav-link"
                activeClassName="active"
                onClick={this.navLinkClick}
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
                to="/about"
                className="nav-link"
                activeClassName="active"
                onClick={this.navLinkClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
                onClick={this.navLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
