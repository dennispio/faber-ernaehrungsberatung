import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const IndexPage = props => {
  const { data: home } = props;
  const { node: data } = home.homePageData.edges[0];
  const { edges: posts } = home.blogPosts;
  return (
    <Layout>
      <Helmet titleTemplate="%s | Blog">
        <title> {data.frontmatter.seo_comp.seo_title} </title>
        <meta name="description" content={data.frontmatter.seo_comp.seo_desc} />
      </Helmet>
      <h1> title: {data.frontmatter.seo_comp.seo_title} </h1>
      <p> Content: {data.frontmatter.seo_comp.seo_desc} </p>
      <h2> BlogPosts: </h2>
      {posts.map(({ node: post }) => (
        <div key={post.id}>
          <h3> Blog Post Title: {post.frontmatter.title} </h3>
          <p> Blog Post Description: {post.frontmatter.description} </p>
          <p> Blog Post Date: {post.frontmatter.date} </p>
          <Link to={post.fields.slug} title="link to blog post">
            Link to blog post{' '}
          </Link>
        </div>
      ))}
    </Layout>
  );
};
export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query HomeContent {
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "page_home" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            pageKey
            seo_comp {
              seo_desc
              seo_title
            }
          }
        }
      }
    }
    blogPosts: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "page_blogpost" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`;
