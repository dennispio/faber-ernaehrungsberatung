import React from 'react';
import PropTypes from 'prop-types';
import './textComp.scss';

const TextComp = ({ position, title, text }) => (
  <div className={`${position}-div text-comp-container`}>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

TextComp.propTypes = {
  position: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextComp;
