import React, { useState } from "react";
import "./FlipPages.css";

export default function FlipPages({ pages = [] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlippingBack, setIsFlippingBack] = useState(false);
  const [startX, setStartX] = useState(null);
  const handleStart = (x) => {
    setStartX(x);
  };

  const handleEnd = (x) => {
    if (startX === null) return;

    const diff = startX - x;

    // sensitivity threshold
    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
      // swipe left → next page
      handleFlip(currentPage);
    } else {
      // swipe right → previous page
      handleFlip(currentPage - 1);
    }

    setStartX(null);
  };
  const handleFlip = (pageIndex) => {
    if (pageIndex < 0) return;
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
    <div
      className="book"
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
    >
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
