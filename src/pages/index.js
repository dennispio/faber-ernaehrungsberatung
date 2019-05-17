import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Layout';
import Testimonial from '../components/testimonials/Testimonial';
import VideoPlayer from '../components/video/Video';
import HomepageText from '../components/text/HomepageText';
import OfferCard from '../components/offerCard/OfferCard';
import Countdown from '../components/countdown/Countdown';
import BlogPostCard from '../components/blogPostCard/BlogPostCard';
import Carousel from '../components/carousel/Carousel';
import Morph from '../components/morph/Morph';

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
      <VideoPlayer />
      <HomepageText heading={title} text={text} />
      <h3 className="farbverlauf container">
        Du kannst es auch schaffen! <br /> Der {season} kommt in ...
      </h3>
      <Countdown date={countdown} season={season} />
      <Carousel facts={facts} />
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
      <Morph />
      <div className="sperator" />
      <div className="container-full bubble-bg">
        <div className="preview-section container">
          <h3 className="farbverlauf">
            Das bekommst du:
            <br />
            Unsere Top-Angebote
          </h3>
          <div className="offer-preview-container">
            {/* eslint-disable-next-line */}
            {angebote.map(({ node: angebot }) => {
              console.log(angebot.frontmatter.bullets);

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
          <span className="white newsletter-cta">
            <Link to="leistungen">zu den Leistungen</Link>
          </span>
        </div>
        <div className="preview-section blog-p container">
          <h3 className="white">
            Bleib auf dem laufenden und
            <br />
            abboniere den Newletter zu
            <br />
            unserem Blog.
          </h3>
          <div className="offer-preview-container post-preview-container">
            {/* eslint-disable-next-line */}
            {posts.map(({ node: post }, key) => {
              return key < 3 ? (
                <BlogPostCard
                  link={post.fields.slug}
                  date={post.frontmatter.date}
                  category={post.frontmatter.category}
                  title={post.frontmatter.title}
                  text={post.frontmatter.description}
                />
              ) : null;
            })}
          </div>
          <span className="white newsletter-cta">
            <Link to="newsletter">Newsletter abonnieren</Link>
          </span>
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
