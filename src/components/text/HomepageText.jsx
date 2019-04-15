import React from 'react';
import './homepageText.scss';
import PropTypes from 'prop-types';

const HomepageText = ({ heading, text }) => (
  <div className="container-full homepageText-container">
    <div className="container">
      <div className="homepageText-content">
        <div className="hompageText-title">
          <h1>{heading}</h1>
        </div>
        <div className="hompageText-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  </div>
);

export default HomepageText;

HomepageText.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
