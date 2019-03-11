import React from 'react';
import './navigation.scss';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../img/FBR-logo-sw.svg';
import logoBurger from '../../img/FBR-logo-sw1.svg';

const Navigation = () => (
  <div className="navigation-container">
    <div className="image-container">
      <img alt="LOGO" src={logo} />
    </div>
    <div id="menu" className="navigation-menu">
      <ul>
        <li>
          <a href="/"> Start </a>
        </li>
        <div className="subnav">
          <li>
            <a href="/unsereLeistungen"> Unsere Leistungen</a>
          </li>
          <div className="triangle" />
          <div className="subnav-content-container">
            <div className="subnav-content">
              <a href="#ernaehrung">Ernährungsbearatung</a>
              <a href="#coaching">Coaching</a>
              <a href="#naehrwertanalyse">Nährwertanalyse</a>
              <a href="#seminare">Seminare und Vorträge</a>
            </div>
          </div>
        </div>
        <li>
          <a href="/referenzen">Referenzen</a>
        </li>
        <li>
          <a href="/ueberuns">Über uns</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/kontakt">Kontakt</a>
        </li>
      </ul>
    </div>
    <div className="burgerMenu-container">
      <Menu className="bm-menu" right width={'100%'}>
        <div className="burgerMenu-logo">
          <img alt="LOGO" src={logoBurger} />
        </div>
        <a href="#ernaherung" className="menu-item">Unsere <br className="burgerMenu-br" /> Leistungen</a>
        <a href="/referenzen" className="menu-item">Referenzen</a>
        <a href="/ueberuns" className="menu-item">Über uns</a>
        <a href="/blog" className="menu-item">Blog</a>
        <a href="/kontakt" className="menu-item">Kontakt</a>
      </Menu>
    </div>
  </div >
);

export default Navigation;
