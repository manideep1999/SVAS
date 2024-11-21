import React from "react";
import "./BlobWithImage.css";

function BlobWithImage({ imageurl, text, colorClass, topvalue }) {
  return (
    <div className="container blob-container">
      <img
        className={`circular-image ${topvalue}`}
        src={imageurl}
        alt="a yellow flower shining in the dark"
      />
      <div className={`blob-shape ${colorClass} `}>
        <span className="image-text">
          {text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
}

export default BlobWithImage;
