import React from "react";
import { BASENAME } from "../utils/constants";
import { FaArrowRight } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { withBase } from "../utils/withBase";
import "./NextPageLink.css";
function NextPageLink() {
  const location = useLocation();
  const pages = [
    { name: "Home", path: withBase("/") },
    { name: "Our Master", path: withBase("/ourMaster") },
    { name: "Meditation", path: withBase("/meditation") },
    { name: "Ashram", path: withBase("/about") },
    { name: "About", path: withBase("/about") },
    { name: "Contact Us", path: withBase("/contact") },
  ];
  const currentPageIndex = pages.findIndex(
    (page) => page.path === location.pathname
  );
  const nextPageIndex = (currentPageIndex + 1) % pages.length;
  const nextPage = pages[nextPageIndex];
  // Determine the next page based on current route

  return (
    <footer>
      <div className="next-link-content">
        <Link to={nextPage.path} className="next-page-link">
          <h4>
            NEXT:
            <FaArrowRight className="iconStyle" />
          </h4>

          <button className="buttonStyle">{nextPage.name}</button>
        </Link>
      </div>
    </footer>
  );
}

export default NextPageLink;
