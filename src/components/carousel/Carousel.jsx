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
  constructor(props) {
    super(props);
    this.facts = null;
  }

  render() {
    const { facts } = this.props;
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
      <div className="container sperator fact-carousel-container">
        <Slider {...settings}>
          {facts.map(fact => (
            <div className="slide container">
              <div className="titelCarousel">
                <h2 className="farbverlauf">{fact.title}</h2>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-lg-5 carousel-text-left-container">
                  <p>{fact.text_left}</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-5 carousel-text-right-container">
                  <p>{fact.text_right}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

Carousel.propTypes = {
  facts: PropTypes.any,
};

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
