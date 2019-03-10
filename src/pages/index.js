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
import OfferCard from '../components/offerCard/OfferCard';

const IndexPage = props => {
  const { data: home } = props;
  const { node: data } = home.homePageData.edges[0];
  const { edges: referenzen } = home.referenzen;
  const { edges: angebote } = home.angebote;
  return (
    <Layout>
      <Helmet titleTemplate="%s | Blog">
        <title> {data.frontmatter.seo_comp.seo_title} </title>
        <meta name="description" content={data.frontmatter.seo_comp.seo_desc} />
      </Helmet>
      <Navigation />
      <VideoPlayer />
      <HomepageText />
      {/* eslint-disable-next-line */}
      {referenzen.map(({ node: referenz }) => {
        return referenz.frontmatter.show_homepage ? (
          <Testimonial
            title={referenz.frontmatter.title}
            text={referenz.frontmatter.description}
            link="/referenzen"
            left={false}
            fluid={referenz.frontmatter.featuredImage.childImageSharp.fluid}
          />
        ) : null;
      })}
      <div className="container-full bubble-bg">
        <div className="preview-section container">
          <h3>
            Das bekommst du:
            <br />
            Unsere Top-Angebote
          </h3>
          <div className="offer-preview-container">
            {/* eslint-disable-next-line */}
        {angebote.map(({ node: angebot }) => {
              return angebot.frontmatter.angebot ? <OfferCard /> : null;
            })}
          </div>
        </div>
      </div>
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
    angebote: allMarkdownRemark(
      filter: { frontmatter: { service: { eq: "service" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            price
            angebot
            category
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
