import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import right from '../../img/chevron-right.svg';
import left from '../../img/chevron-left.svg';
import './carousel.scss';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
      onKeyPress={onClick}
      role="presentation"
    >
      <img src={right} alt="right arrow" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
      onKeyPress={onClick}
      role="presentation"
    >
      <img src={left} alt="left arrow" />
    </div>
  );
}

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      pauseOnHover: true,
      adaptiveHeight: true,
      draggable: true,
      nextArrow: <NextArrow className="preArrow" />,
      prevArrow: <PrevArrow className="nextArrow" />,
    };
    return (
      <div className="container fact-carousel-container">
        <Slider {...settings}>
          <div className="slide container">
            <div className="titelCarousel">
              <h1>1. Nach 18 keine Kohlenhydrate mehr</h1>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <p>
                  linker text das ist der test für die linke seite responsiv
                  muss es auch sein mak schauen was noch so kommt
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <p>
                  rechter text das ist der test für die linke seite responsiv
                  muss es auch sein mak schauen was noch so kommt
                </p>
              </div>
            </div>
          </div>
          <div className="slide container">
            <div className="titelCarousel">
              <h1>2. Nach 18 keine Kohlenhydrate mehr</h1>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <p>
                  linker text das ist der test für die linke seite responsiv
                  muss es auch sein mak schauen was noch so kommt
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <p>
                  rechter text das ist der test für die linke seite responsiv
                  muss es auch sein mak schauen was noch so kommt
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

NextArrow.propTypes = {
  className: PropTypes.any,
  style: PropTypes.any,
  onClick: PropTypes.any,
};

PrevArrow.propTypes = {
  className: PropTypes.any,
  style: PropTypes.any,
  onClick: PropTypes.any,
};
