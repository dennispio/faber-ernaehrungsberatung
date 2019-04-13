import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import BlogContent from '../components/blogContent/BlogContent';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout
      title={post.frontmatter.seo_title}
      description={post.frontmatter.seo_desc}
      type="article"
    >
      <BlogContent
        cat={post.frontmatter.category}
        title="Blog"
        date={post.frontmatter.date}
        post={post}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        seo_title
        seo_desc
        date(formatString: "DD.mm.YYYY")
        title
        category
        description
      }
    }
  }
`;
