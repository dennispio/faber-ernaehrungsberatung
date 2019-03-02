import React from 'react';
import PropTypes from 'prop-types';

import './testimonial.scss';

const Testimonial = ({ title, text }) => (
  <div className="container-full testimonials-container">
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-lg-7" />
      <div className="col-xs-12 col-sm-6 col-lg-5 testimonial-content">
        <div className="testimaonial-title">
          <h2>{title}</h2>
        </div>
        <div className="testimonial-text">
          <p>{text}</p>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-lg-7 mobile-testo" />
    </div>
  </div>
);

Testimonial.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Testimonial;
