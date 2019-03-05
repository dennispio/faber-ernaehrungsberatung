import React from 'react';
import './navigation.scss';
import logo from '../../img/FBR-logo-sw.svg';

const Navigation = () => (
  <div className="navigation-container">
    <div className="image-container">
      <img alt="LOGO" src={logo} />
    </div>
  </div>
);

export default Navigation;
