import React from 'react';
import './footer.scss';
import Link from 'gatsby-link';
import instagram from '../../img/socialmedia/instagram.svg';
import facebook from '../../img/socialmedia/facebook.svg';
import p1 from '../../img/partner/partner_agentur_strasse.svg';
import p2 from '../../img/partner/partner_akbulut_kuchen.svg';
import p3 from '../../img/partner/partner_alex_strasser.svg';
import tuv from '../../img/partner/tuv.png';

const Footer = () => (
  <footer className="container-full">
    <div className="row social-media-container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/Ernaehrungsberatung-faber-1031981213858998/?modal=admin_todo_tour"
        title="facebook"
      >
        <img className="hover-svg" src={facebook} alt="facebook logo" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/ernaehrungsberatungfaber/"
        title="instagram"
      >
        <img className="hover-svg" src={instagram} alt="instagram logo" />
      </a>
    </div>
    <div className="container footer-navigation">
      <div className="col-xs-12 col-sm-6 col-lg-3">
        <h4>Auszeichnungen</h4>
        <p>Staatlich geprüft</p>
        {/* <p>TÜV-Süd</p>
        <a
          target="_blank" 
          rel="noopener noreferrer"
          href="https://www.tuev-sued.de/home_de"
          title="zu tuv süd"
        >
          <img src={tuv} alt="Logo des Tüv süd als Auszeichnung" />
        </a> */}
      </div>
      <div className="col-xs-12 col-sm-6 col-lg-3">
        <h4>Unternehmen</h4>
        <ul>
          <Link to="ueberuns" title="zu der über uns seite">
            <li>Über uns</li>
          </Link>
          <Link to="kontakt" title="zu der kontakt seite">
            <li>Kontakt</li>
          </Link>
          <Link to="legal/impressum" title="zum impressum">
            <li>Impressum</li>
          </Link>
          <Link to="newsletter" title="zum Newsletter">
            <li>Newsletter</li>
          </Link>
        </ul>
      </div>
      <div className="col-xs-12 col-sm-6 col-lg-3">
        <h4>Support</h4>
        <ul>
          <Link to="legal/datenschutz" title="zu der Datenschutzseite">
            <li>Datenschutz</li>
          </Link>
        </ul>
      </div>

      <div className="col-xs-12 col-sm-6 col-lg-3 partner-container">
        <h4>Unsere Partner</h4>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://lkh.agentur-strasser.de/"
          title="zu Partner Alex Strasser"
        >
          <img src={p1} alt="Logo der Alex Strasser Agentur" />
        </a>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://xn--akbulut-kchen-4ob.de/"
          title="zum Partner Akbulut Küchentechnik"
        >
          <img src={p2} alt="Logo der Akbulut Küchentechnik" />
        </a>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://alexstrasser.de/"
          title="Zum Partner Agentur Strasser"
        >
          <br />
          <img src={p3} alt="Logo des Tüv süd als Auszeichnung" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
