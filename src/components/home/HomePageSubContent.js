import React from "react";
import "./HomePageSubContent.css";
import HomePage from "./HomePage";

function HomePageSubContent({ contentProps }) {
  return (
    <article className="container-fluid row px-0 my-6 master-content">
      {/* Sticky div and quote here 
        the background class should be defined in css
      */}
      <div className={`row sticky-div p-0 m-0 ${contentProps.backGround}`}>
        <div className="col-12">
          <div className="full-height">
            <picture>
              <source
                media="(max-width: 799px)"
                srcSet={contentProps.portrait}
              />
              <source
                media="(min-width: 800px)"
                srcSet={contentProps.landscape}
              />
              <img
                src={contentProps.default}
                alt={contentProps.alt}
                className="image-fluid image"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="row d-flex quote-main-container text-scroll-effect">
        <div className="col-12">
          {contentProps.quote.map((line) => (
            <div className="quote-container">
              <h2 className="header quote-text">
                <span>{line}</span>
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className={`row ${contentProps.rowBackground}`}>
        <div className="col-12 col-md-6">
          <h3 className="header textcolor text-center">
            {contentProps.sectionHeading}
          </h3>
          <hr className="divider" />

          <p className="text textcolor">{contentProps.sectionText}</p>
          <div className="col align-items-center justify-content-center  d-flex  ">
            <Button
              btnName="Know More"
              buttonclicked={contentProps.goToPageFunction}
            ></Button>
          </div>
        </div>
        <div className="col-12 col-md-6 p-0">
          <img
            src={contentProps.sectionImage}
            alt={contentProps.sectionImageAlt}
            className="img-fit"
          />
        </div>
      </div>
    </article>
  );
}
export default HomePageSubContent;
