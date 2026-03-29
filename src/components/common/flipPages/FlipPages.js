import React, { useState } from "react";
import "./FlipPages.css";

export default function FlipPages({ pages = [] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlippingBack, setIsFlippingBack] = useState(false);

  const handleFlip = (pageIndex) => {
    if (isFlippingBack) return;

    const lastIndex = pages.length - 1;

    // Flip to end and reset
    if (pageIndex === lastIndex) {
      setIsFlippingBack(true);
      setCurrentPage(pages.length);

      setTimeout(() => {
        setCurrentPage(0);
        setIsFlippingBack(false);
      }, 700);
      return;
    }

    if (pageIndex < currentPage) {
      setCurrentPage(pageIndex);
      return;
    }

    setCurrentPage((prev) => Math.min(prev + 1, pages.length));
  };

  return (
    <div className="book">
      {pages.map((page, index) => {
        const flipped = index < currentPage || currentPage === pages.length;

        return (
          <div
            key={index}
            className={`page ${flipped ? "flipped" : ""} ${
              isFlippingBack ? "reverseFlip" : ""
            }`}
            style={{
              zIndex: flipped ? index : pages.length - index, // higher pages appear on top
              top: index * 2 + "px", // tiny vertical offset for stacked look
              left: index * 2 + "px", // tiny horizontal offset
            }}
          >
            <div className="face front">
              <div className="content">
                {page.image && <img src={page.image} alt="" />}
                <div className="text-content">
                  {page.title && <h1>{page.title}</h1>}
                  {page.desc && <p>{page.desc}</p>}
                </div>
              </div>
            </div>
            <div className="face back"></div>
            <div className="corner" onClick={() => handleFlip(index)}></div>
          </div>
        );
      })}
    </div>
  );
}
