import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import BlogContent from '../components/blogContent/BlogContent';

const Legal = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Helmet titleTemplate="%s | Legal">
        <title>{`${post.frontmatter.title}`}</title>
        <meta name="description" content={`${post.frontmatter.description}`} />
      </Helmet>
      <BlogContent
        cat={post.frontmatter.category}
        title="Blog"
        date={post.frontmatter.date}
        post={post}
      />
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
        description
      }
    }
  }
`;
