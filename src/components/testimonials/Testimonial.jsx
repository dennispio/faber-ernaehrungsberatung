import React from 'react';
import PropTypes from 'prop-types';
import TestimonialLeft from './TestimonialLeft';
import TestimonialRight from './TestimonialRight';
import './testimonial.scss';

const Testimonial = ({ title, text, fluid, link, left, alt }) =>
  left ? (
    <TestimonialLeft
      title={title}
      text={text}
      link={link}
      fluid={fluid}
      alt={alt}
    />
  ) : (
    <TestimonialRight
      title={title}
      text={text}
      link={link}
      fluid={fluid}
      alt={alt}
    />
  );

Testimonial.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  left: PropTypes.bool.isRequired,
  alt: PropTypes.string,
  fluid: PropTypes.any,
};

export default Testimonial;
