import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import LegalContent from '../components/legalContent/LegalContent';

const Legal = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout title={post.frontmatter.seo_title} description={post.frontmatter.seo_desc}>
      <LegalContent title={post.frontmatter.title} post={post} />
    </Layout>
  );
};

Legal.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Legal;

export const pageQuery = graphql`
  query LegalByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        seo_desc
        seo_title
      }
    }
  }
`;
