import React from 'react';
import PropTypes from 'prop-types';
import leftBub from '../../img/bubbles/bubble_subpage_header_1.svg';
import rightBub from '../../img/bubbles/bubble_subpage_header_2.svg';
import './subpageHeader.scss';

const SubpageHeader = ({ title, text, sitename, blog }) => (
  <div
    className={`container-full subPage-header-container ${
      blog ? 'blog-template-header-container' : null
    }`}
  >
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
    <div className="subpage-title-container farbverlauf">
      {sitename && sitename !== 'blog' ? (
        <h1 className={`farbverlauf ${sitename}`}>{title}</h1>
      ) : (
        <h2 className={`farbverlauf ${sitename}`}>{title}</h2>
      )}
    </div>
    <div className="subpage-text-container">
      <p>{text}</p>
    </div>
  </div>
);

SubpageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  sitename: PropTypes.string,
  blog: PropTypes.bool,
};

export default SubpageHeader;
