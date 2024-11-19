import React from "react";
import "./BlobWithImage.css";

function BlobWithImage({ imageurl, text, colorClass }) {
  return (
    <div className="container blob-container">
      <div className={`blob-shape ${colorClass}`}>
        {/*<img
          className="circular-image"
          src={imageurl}
          alt="a yellow flower shining in the dark"
  />*/}
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
