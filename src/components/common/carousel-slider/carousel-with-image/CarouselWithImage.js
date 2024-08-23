import React from "react";
function CarouselWithImage() {
  return (
    <div className="container-fluid">
      <div className="row section-container">
        <div className="col-lg-6 col-md-12 image-container">
          <img
            src="img/masterpics/lighthouse.jpg"
            alt="light house"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-lg-6 col-md-12 carousel-container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="d-flex justify-content-center align-items-center "
                  style={{ height: "400px", backgroundColor: "#f8f9fa" }}
                >
                  <p className="text-center svas-font mini-text">
                    Akhanndda-Mannddala-Akaaram Vyaaptam Yena Cara-Acaram |
                    Tat-Padam Darshitam Yena Tasmai Shrii-Gurave Namah ||
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="d-flex justify-content-center align-items-center "
                  style={{ height: "400px", backgroundColor: "#f8f9fa" }}
                >
                  <p className="text-center svas-font mini-text">
                    Salutations to my guru who reveals to me the Prabrahma
                    tattva - the supreme being encompassing the timeless,
                    infinite universe -both movable and immovable.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselWithImage;
