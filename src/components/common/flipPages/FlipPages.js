import React, { useState } from "react";
import "./FlipPages.css";

export default function FlipPages({ pages = [] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlippingBack, setIsFlippingBack] = useState(false);

  const handleFlip = (pageIndex) => {
    if (isFlippingBack) return;

    const lastIndex = pages.length - 1;

    // Click last page → flip whole book back
    if (pageIndex === lastIndex) {
      setIsFlippingBack(true);
      setCurrentPage(pages.length); // all flipped

      setTimeout(() => {
        setCurrentPage(0); // reset to first page
        setIsFlippingBack(false);
      }, 700); // total reverse flip time
      return;
    }

    // Click previous page → flip back immediately
    if (pageIndex < currentPage) {
      setCurrentPage(pageIndex);
      return;
    }

    // Forward flip → increment by 1
    setCurrentPage((prev) => Math.min(prev + 1, pages.length));
  };

  return (
    <div className="book">
      {pages.map((page, index) => {
        const flipped = index < currentPage || currentPage === pages.length;
        const isVisible = index === 0 || index >= currentPage;

        return (
          <div
            key={index}
            className={`page ${flipped ? "flipped" : ""} ${
              isFlippingBack ? "reverseFlip" : ""
            } ${!isVisible ? "hidden" : ""}`}
            style={{ zIndex: pages.length - index }}
          >
            {/* Front face */}
            <div className="face front">
              <div className="content">
                <img src={page.image} alt="" />
                <p>{page.comment}</p>
              </div>
            </div>

            {/* Back face */}
            <div className="face back"></div>

            {/* Folded corner */}
            <div className="corner" onClick={() => handleFlip(index)}></div>
          </div>
        );
      })}
    </div>
  );
}
