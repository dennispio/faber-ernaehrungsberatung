import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Layout';

const Leistungen = props => {
  const { data } = props;
  return (
    <Layout
      pageName="leistungen"
      title="Leistungen title"
      description="Leistugen desc"
    >
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
      <h1>LEISTUNGEN</h1>
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
