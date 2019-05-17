import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import BlogContent from '../components/blogContent/BlogContent';
import ServiceForm from '../components/contactForm/ServiceForm';

const Service = ({ data }) => {
  const { markdownRemark: service } = data;
  return (
    <Layout
      title={service.frontmatter.seo_title}
      description={service.frontmatter.seo_desc}
      type="article"
    >
      <BlogContent service post={service} share={false} blog={false} />
      <ServiceForm serviceName={service.frontmatter.title} />
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
        price
        category
        description
      }
    }
  }
`;
