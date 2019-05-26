import React from 'react';
import PropTypes from 'prop-types';
import leftBub from '../../img/bubbles/bubble_subpage_header_1.svg';
import rightBub from '../../img/bubbles/bubble_subpage_header_2.svg';
import './subpageHeader.scss';

const SubpageHeader = ({ title, text, sitename }) => (
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
    <div className="subpage-title-container farbverlauf">
      {sitename === 'leistungen' ? (
        <h1 className="farbverlauf leistungen">{title}</h1>
      ) : null}
      {sitename === 'blog' ? (
        <h1 className="farbverlauf blog">{title}</h1>
      ) : null}
      {sitename === 'referenzen' ? (
        <h1 className="farbverlauf referenzen">{title}</h1>
      ) : null}
      {sitename === 'kontakt' ? (
        <h1 className="farbverlauf kontakt">{title}</h1>
      ) : null}
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
};

export default SubpageHeader;
