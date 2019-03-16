import React from 'react';
import './navigation.scss';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';
import logo from '../../img/FBR-logo-sw.svg';
import logoBurger from '../../img/FBR-logo-sw1.svg';
import closeBurgerButton from '../../img/CloseBurgerButton.svg';

const Navigation = ({ pageChoice }) => {
  // let choice;
  // if (pageChoice === 'referenzen') {
  //   choice = 'subnav-content-container';
  //   return choice;
  // }
  // if (pageChoice !== 'referenzen') {
  //   choice = 'subnav-content-container-other';
  //   return choice;
  // }

  return (
    <div className="navigation-container">
      <div className="navigation-flex">
        <div className="image-container">
          <img alt="LOGO" src={logo} />
        </div>
        <div id="menu" className="navigation-menu">
          <ul>
            <li>
              <Link to="/"> {pageChoice} </Link>
            </li>
            <div className="subnav">
              <li>
                <Link to="/leistungen"> Unsere Leistungen</Link>
              </li>
              <div className={pageChoice === 'referenzen' ? 'triangle' : 'triangle-other'} />
              <div className={pageChoice === 'referenzen' ? 'subnav-content-container' : 'subnav-content-container-other'}>
                <div className="subnav-content">
                  <Link to="/leistungen#ernaehrung">Ernährungsbearatung</Link>
                  <Link to="/leistungen#coaching">Coaching</Link>
                  <Link to="/leistungen#naehrwertanalyse">Nährwertanalyse</Link>
                  <Link to="/leistungen#seminare">Seminare und Vorträge</Link>
                </div>
              </div>
            </div>
            <li>
              <Link to="/referenzen">Referenzen</Link>
            </li>
            <li>
              <Link to="/ueberuns">Über uns</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="burgerMenu-container">
        <Menu className="bm-menu" customCrossIcon={<img src={closeBurgerButton} />} right width={'100%'}>
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
    </div >
  );
};

export default Navigation;
