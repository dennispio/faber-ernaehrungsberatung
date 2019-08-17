import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import '../../constants/style/application.scss';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { Link } from 'gatsby';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import logo from '../../img/FBR-logo-sw.svg';
import favicon from '../../img/FBR-Logo-Favicon-RGB.png';

const TemplateWrapper = ({
  children,
  pageName,
  title,
  description,
  type,
  image,
}) => (
    <div>
      <Helmet>
        <html lang="de" />
        <title>{title}</title>
        <link rel="shortcut icon" href={favicon} type="image/png" />
        <link rel="icon" href={favicon} type="image/png" />
        <meta name="description" content={description} />
        <meta property="og:type" content={type || 'website'} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={image || logo} />
        <meta name="google-site-verification" content="emO0oDOZUDOCG4DnmF-EI5mjJQpbo_cWBUALeJBLXog" />
      </Helmet>
      <Navigation pageName={pageName} />
      <div>{children}</div>
      <CookieConsent
        cookieName="maxim-ernaehrungsberatung-cookie"
        style={{ background: 'linear-gradient(to right,  #140A37, #E61E0A)' }}
        location="bottom"
        buttonText="Ich stimme zu."
        buttonStyle={{ background: "#ffffff" }}
      >
        <span style={{ fontSize: '15px' }}>
          Diese Website verwendet Cookies – nähere Informationen dazu und zu Ihren
        Rechten als Benutzer finden Sie in unserer{' '}
          <Link to="/legal/datenschutz">Datenschutzerklärung</Link> am Ende der
          Seite. Klicken Sie auf „Ich stimme zu“, um Cookies zu akzeptieren und
          direkt unsere Website besuchen zu können.
      </span>
      </CookieConsent>
      <Footer />
    </div>
  );

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
};

export default TemplateWrapper;
