import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import './testimonial.scss';
import { Link } from 'gatsby';

const TestimonialLeft = ({ title, text, fluid, link }) => (
  <Link className="testo-link" to={link} title="Zu der Referenz Seite">
    <div
      style={{ position: `relative` }}
      className="container-full testimonials-container"
    >
      <Img
        alt="Person der Referenz"
        className="desktop-img testimonial-img-left"
        fluid={fluid}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-lg-5 testimonial-content testimonial-left">
          <div className="testimaonial-title">
            <h2>{title}</h2>
          </div>
          <div className="testimonial-text">
            <p>{text}</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-7" />
        <div
          style={{ position: `relative` }}
          className="col-xs-12 col-sm-6 col-lg-7 mobile-testo"
        >
          <Img
            alt="Person der Referenz"
            fluid={fluid}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '220%',
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  </Link>
);

TestimonialLeft.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  fluid: PropTypes.any,
};

export default TestimonialLeft;
