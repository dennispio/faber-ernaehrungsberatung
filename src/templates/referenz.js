import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Layout from '../components/layouts/Layout';

const Referenz = () => (
  <Layout>
    <Helmet titleTemplate="%s | Blog">
      <title>Test</title>
      <meta name="description" content="test desc" />
    </Helmet>
    <h1>Referenz </h1>
  </Layout>
);

Referenz.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Referenz;
