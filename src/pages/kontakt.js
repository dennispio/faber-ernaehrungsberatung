import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Kontakt from '../components/contact/contact';
import Layout from '../components/layouts/Layout';

const Leistungen = props => {
  const { data } = props;
  return (
    <Layout
      pageName="kontakt"
      title="kontakt title"
      description="kontakt desc"
    >
      <Kontakt />
    </Layout>
  );
};
export default Leistungen;

Leistungen.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
