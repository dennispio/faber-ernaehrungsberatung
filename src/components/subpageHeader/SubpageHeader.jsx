import React from 'react';
import PropTypes from 'prop-types';
import './subpageHeader.scss';

const SubpageHeader = ({ title, text }) => (
  <div className="container-full">
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
