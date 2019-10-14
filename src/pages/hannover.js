import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layouts/Layout";
import Testimonial from "../components/testimonials/Testimonial";
import OfferCard from "../components/offerCard/OfferCard";
import Kontakt from "../components/contact/contact";
import Header from "../components/hannover/header/Header";
import Details from "../components/hannover/details/Details";
import Certified from "../components/hannover/state-certified/Certified";

const IndexPage = props => {
  const { data: home } = props;
  const { node: data } = home.homePageData.edges[0];
  const { edges: referenzen } = home.referenzen;
  const { edges: angebote } = home.angebote;
  const { edges: posts } = home.blogPosts;
  const { title, description: text } = data.frontmatter.text_comp;
  const { countdown } = data.frontmatter.countdown_comp;
  const { season } = data.frontmatter.countdown_comp;
  const { facts } = data.frontmatter.facts_compt;

  return (
    <Layout
      title={data.frontmatter.seo_comp.seo_title}
      description={data.frontmatter.seo_comp.seo_desc}
    >
      <Header />
      <div className="sperator" />
      <Details />
      <div className="container">
        <div className="preview-section container">
          <h2 className="farbverlauf">
            Das bekommst Du:
            <br />
            Unsere Top-Angebote
          </h2>
          <div className="offer-preview-container">
            <div className="offer-preview-hannover">
              <div className="center-bubble">
                {/* eslint-disable-next-line */}
                {angebote.map(({ node: angebot }) => {
                  return angebot.frontmatter.angebot ? (
                    <OfferCard
                      category={angebot.frontmatter.category}
                      price={angebot.frontmatter.price}
                      time={angebot.frontmatter.time}
                      bullets={angebot.frontmatter.bullets}
                      link={angebot.fields.slug}
                    />
                  ) : null;
                })}
              </div>
            </div>
          </div>
          <span className="white newsletter-cta">
            <Link to="leistungen">zu den Leistungen</Link>
          </span>
        </div>
      </div>
      <div className="sperator" />
      <Kontakt />
      <div className="sperator" />
      {/* eslint-disable-next-line */}
      {referenzen.map(({ node: referenz }, index) => {
        return referenz.frontmatter.show_homepage ? (
          <Testimonial
            key={index}
            title={referenz.frontmatter.title}
            text={referenz.frontmatter.description}
            link="/referenzen"
            left
            fluid={referenz.frontmatter.featuredImage.childImageSharp.fluid}
            alt={referenz.frontmatter.alt_text}
          />
        ) : null;
      })}
      <div className="sperator" />
      <Certified />
      <div className="sperator" />
    </Layout>
  );
};
export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query HannoverContent {
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
            text_comp {
              title
              description
            }
            countdown_comp {
              countdown(formatString: "YYYY-MM-DDTHH:mm:ss")
              season
            }
            facts_compt {
              facts {
                text_left
                text_right
                title
              }
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
            date(formatString: "DD.MM.YYYY")
            category
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
            time
            angebot
            category
            bullets {
              title
            }
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
            alt_text
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
