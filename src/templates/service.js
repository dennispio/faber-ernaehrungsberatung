import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import BlogContent from '../components/blogContent/BlogContent';

const Service = ({ data }) => {
  const { markdownRemark: service } = data;
  return (
    <Layout
      title={service.frontmatter.seo_title}
      description={service.frontmatter.seo_desc}
      type="article"
    >
      <BlogContent
        cat={service.frontmatter.category}
        title="Blog"
        date={service.frontmatter.date}
        post={service}
      />
    </Layout>
  );
};

Service.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Service;

export const pageQuery = graphql`
  query ServicePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        seo_title
        seo_desc
        title
        category
        description
      }
    }
  }
`;
