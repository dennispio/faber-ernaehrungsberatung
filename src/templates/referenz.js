import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Layout';
import BlogContent from '../components/blogContent/BlogContent';
import SubpageHeader from '../components/subpageHeader/SubpageHeader';

const Referenz = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout
      pageName="Referenz"
      title={post.frontmatter.seo_title}
      description={post.frontmatter.seo_desc}
      type="article"
    >
      <SubpageHeader blog sitename="leistungen" title="Referenz" />
      <BlogContent
        date={post.frontmatter.date}
        post={post}
        fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        alt={post.frontmatter.alt_text}
        cat="Referenz"
      />
    </Layout>
  );
};

Referenz.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Referenz;

export const pageQuery = graphql`
  query ReferenzByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        seo_title
        seo_desc
        date(formatString: "DD.MM.YYYY")
        title
        description
        alt_text
        featuredImage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
