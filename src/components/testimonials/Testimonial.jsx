import React from 'react';
import PropTypes from 'prop-types';
import TestimonialLeft from './TestimonialLeft';
import TestimonialRight from './TestimonialRight';
import './testimonial.scss';

const Testimonial = ({ title, text, fluid, link, left }) =>
  left ? (
    <TestimonialLeft title={title} text={text} link={link} fluid={fluid} />
  ) : (
      <TestimonialRight title={title} text={text} link={link} fluid={fluid} />
    );

Testimonial.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  left: PropTypes.bool.isRequired,
  fluid: PropTypes.any,
};

export default Testimonial;
