import React from "react";
import { BASENAME } from "../common/constants/constants";
import { useLocation, Link } from "react-router-dom";
import "./NextPageLink.css";
function NextPageLink() {
  const location = useLocation();

  // Determine the next page based on current route
  const getNextPageLink = () => {
    switch (location.pathname) {
      case `${BASENAME}/`:
        return `${BASENAME}/ourMaster`;
      case `${BASENAME}/ourMaster`:
        return `${BASENAME}/meditation`;
      case `${BASENAME}/meditation`:
        return `${BASENAME}/ashram`;
      case `${BASENAME}/ashram`:
        return `${BASENAME}/programs`;
      case `${BASENAME}/programs`:
        return `${BASENAME}/about`;
      case `${BASENAME}/about`:
        return `${BASENAME}/contact`;
      case `${BASENAME}/contact`:
        return `${BASENAME}/`;
      default:
        return `${BASENAME}/`;
    }
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="next-link-content">
        <Link to={getNextPageLink()} className="next-page-link">
          Next Page
        </Link>
      </div>
    </footer>
  );
}

export default NextPageLink;
