import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Layout';
import Testimonial from '../components/testimonials/Testimonial';
import VideoPlayer from '../components/video/Video';
import HomepageText from '../components/text/HomepageText';
import TestimonialLeft from '../components/testimonials/TestimonialLeft';
import Navigation from '../components/navigation/Navigation';
import Countdown from '../components/countdown/Countdown';

const IndexPage = props => {
  const { data: home } = props;
  const { node: data } = home.homePageData.edges[0];
  const { edges: referenzen } = home.referenzen;
  return (
    <Layout>
      <Helmet titleTemplate="%s | Blog">
        <title> {data.frontmatter.seo_comp.seo_title} </title>
        <meta name="description" content={data.frontmatter.seo_comp.seo_desc} />
      </Helmet>
      <Navigation />
      <VideoPlayer />
      <HomepageText />
      <Countdown date="2019-08-17T03:24:10" />
      {/* eslint-disable-next-line */}
      {referenzen.map(({ node: referenz }, index) => {
        return referenz.frontmatter.show_homepage ? (
          <Testimonial
            key={index}
            title={referenz.frontmatter.title}
            text={referenz.frontmatter.description}
            link="/referenzen"
            left={false}
            fluid={referenz.frontmatter.featuredImage.childImageSharp.fluid}
          />
        ) : null;
      })}
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
            countdown_comp {
              countdown
              season
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
    referenzen: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "page_referenz" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          rawMarkdownBody
          frontmatter {
            seo_title
            seo_desc
            title
            show_homepage
            description
            pageKey
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
