import React from 'react';
import PropTypes from 'prop-types';
import leftBub from '../../img/bubbles/bubble_subpage_header_1.svg';
import rightBub from '../../img/bubbles/bubble_subpage_header_2.svg';
import './subpageHeader.scss';

const SubpageHeader = ({ title, text }) => (
  <div className="container-full subPage-header-container">
    <img
      className="right-bubbble"
      src={rightBub}
      alt="hintergrund bubble links"
    />
    <img
      className="left-bubbble"
      src={leftBub}
      alt="hintergrund bubble links"
    />
    <div className="container">
      <div className="subpage-title-container">
        <h2>{title}</h2>
      </div>
      <div className="subpage-text-container">
        <p>{text}</p>
      </div>
    </div>
  </div>
);

SubpageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default SubpageHeader;
