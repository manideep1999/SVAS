import React from "react";
import Slider from "react-slick";
import $ from "jquery";
import HomePageSlide from "./HomePageSlide";
import { Link } from "react-router-dom";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./HomePageSlider.css";

class HomePageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padding: this.getPadding(),
      currentSlide: 0,
      slides: [
        {
          type: "SERVICE TO ONE ANOTHER",
          title: "MADHAVASEVA",
          imageUrl: "img/slides/yellow-flower.jpg",
          subtitle: "Food donation program for the needy",
          internalLink: true,
          url: "/programs#madhavaseva",
          buttonText: "FIND OUT MORE",
          backgroundPosition: "center",
        },
        {
          type: "THURSDAY EVENING SERIES",
          title: "VIRTUAL TELUGU SATSANG",
          imageUrl: "img/slides/evening2.jpg",
          internalLink: true,
          url: "/programs#thursdaySatsang",
          backgroundPosition: "center",
        },
        {
          type: "ONE DAY SUNDAY",
          title: "ASHRAM SATSANG",
          subtitle: "Group Meditation, ",
          url: "/programs#ashramSatsang",
          imageUrl: "img/slides/mountain.jpg",
          internalLink: true,
          buttonText: "FIND OUT MORE",
        },
        {
          type: "GALLERY",
          title: "GLIMPSE OF ASHRAM",
          url: "/about/whats-on",
          imageUrl: "img/slides/rose.jpg",
          internalLink: true,
          buttonText: "FIND OUT MORE",
        },
        {
          type: "SUNDAY EVENING SERIES",
          title: "ME INTO ME",
          subtitle: "Explore, Reflect and Meditate",
          url: "/programs#meIntoMe",
          imageUrl: "img/slides/meintome.jpg",
          internalLink: true,
        },
      ],
    };
  }

  getPadding = () => {
    if ($(window).width() > 700) {
      return ($(window).width() - 700) / 2;
    } else {
      return 0;
    }
  };

  updateDimensions = () => {
    this.setState({
      padding: this.getPadding(),
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    var settings = {
      centerMode: true,
      centerPadding: this.state.padding + "px",
      slidesToShow: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
      dots: true,
      beforeChange: (current, next) => this.setState({ currentSlide: next }),
    };

    const slides = this.state.slides.map((slide, index) => {
      return (
        <div key={index}>
          <HomePageSlide {...slide} showButton={false} />
        </div>
      );
    });

    const currentSlideData = this.state.slides[this.state.currentSlide];
    const showButton =
      currentSlideData && (currentSlideData.url || currentSlideData.buttonText);

    return (
      <div className="slider-container">
        <Slider {...settings}>{slides}</Slider>
        {showButton && (
          <div className="slider-button-container">
            {currentSlideData.internalLink ? (
              <Link
                to={currentSlideData.url}
                className="btn btn-outline-primary slider-external-button"
              >
                {currentSlideData.buttonText || "LISTEN AGAIN"}
              </Link>
            ) : (
              <a
                href={currentSlideData.url}
                target={currentSlideData.target || "_self"}
                className="btn btn-outline-primary slider-external-button"
              >
                {currentSlideData.buttonText || "LISTEN AGAIN"}
              </a>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default HomePageSlider;
