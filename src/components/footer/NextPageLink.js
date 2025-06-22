import React from "react";
import { BASENAME } from "../utils/constants";
import { FaArrowRight } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import "./NextPageLink.css";
function NextPageLink() {
  const location = useLocation();
  const pages = [
    { name: "Home", path: "/" },
    { name: "Our Master", path: "ourMaster" },
    { name: "Meditation", path: "meditation" },
    { name: "Ashram", path: "ashram" },
    { name: "Programs", path: "programs" },
    { name: "About", path: "about" },
    { name: "Contact Us", path: "contact" },
  ];
  const currentPath =
    location.pathname === "/" ? "/" : location.pathname.replace(/^\//, "");

  const currentPageIndex = pages.findIndex((page) => {
    return page.path === currentPath;
  });

  const nextPageIndex = (currentPageIndex + 1) % pages.length;
  const nextPage = pages[nextPageIndex];

  // Determine the next page based on current route

  return (
    <div className="next-link-content">
      <Link to={nextPage.path} className="next-page-link">
        <h4>Next: {nextPage.name}</h4>
        {/* <div class="arrow-container">
          <span class="arrow-text">Go To {nextPage.name}</span>
        </div>*/}
        <button className="buttonStyle">
          {nextPage.name}
          <FaArrowRight />
        </button>
      </Link>
    </div>
  );
}

export default NextPageLink;
