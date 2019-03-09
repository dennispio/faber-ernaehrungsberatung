import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import BlogContent from '../components/blogContent/BlogContent';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Helmet titleTemplate="%s | Blog">
        <title>{`${post.frontmatter.title}`}</title>
        <meta name="description" content={`${post.frontmatter.description}`} />
      </Helmet>
      <BlogContent
        cat="ToDo Category"
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
        date(formatString: "DD.mm.YYYY")
        title
        description
      }
    }
  }
`;
