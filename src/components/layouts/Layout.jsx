import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import '../../constants/style/application.scss';
import Footer from '../footer/Footer';
import Navigation from '../navigation/Navigation';
import logo from '../../img/FBR-logo-sw.svg';

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
      <meta name="description" content={description} />
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content={image || logo} />
    </Helmet>
    <Navigation pageName={pageName} />
    <div>{children}</div>
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
