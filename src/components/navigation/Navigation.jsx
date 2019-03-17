import React from 'react';
import PropTypes from 'prop-types';
import './navigation.scss';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';
import logo from '../../img/FBR-logo-sw.svg';
import logoBurger from '../../img/FBR-logo-sw1.svg';
import closeBurgerButton from '../../img/CloseBurgerButton.svg';

const Navigation = ({ pageName }) => (
  <div className="navigation-container">
    <div className="burgerMenu-container">
      <Menu
        className="bm-menu"
        customCrossIcon={<img src={closeBurgerButton} alt="close button" />}
        right
        width="100%"
      >
        <div className="burgerMenu-logo">
          <img alt="LOGO" src={logoBurger} />
        </div>
        <div className="burgerMenu-content">
          <Link to="leistungen" className="menu-item">
            Unsere <br className="burgerMenu-br" /> Leistungen
          </Link>
          <Link to="/referenzen" className="menu-item">
            Referenzen
          </Link>
          <Link to="/ueberuns" className="menu-item">
            Über uns
          </Link>
          <Link to="/blog" className="menu-item">
            Blog
          </Link>
          <Link to="/kontakt" className="menu-item">
            Kontakt
          </Link>
        </div>
      </Menu>
    </div>
  </div>
);
export default Navigation;

Navigation.propTypes = {
  pageName: PropTypes.string,
};
