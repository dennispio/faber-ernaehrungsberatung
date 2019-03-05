import React from 'react';
import './navigation.scss';
import logo from '../../img/FBR-logo-sw.svg';

const Navigation = () => (
  <div className="navigation-container">
    <div className="image-container">
      <ul>
        <img alt="LOGO" src={logo} />
      </ul>
    </div>
  </div>
);

export default Navigation;
