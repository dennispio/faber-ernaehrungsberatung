import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Layout';
import SubpageHeader from '../components/subpageHeader/SubpageHeader';
import TextComp from '../components/textComp/TextComp';
import OfferCard from '../components/offerCard/OfferCard';
import bubbleOne from '../img/bubbles/bubble_service_1.svg';
import bubbleThree from '../img/bubbles/bubble_service_4.svg';
import bubbleTwo from '../img/bubbles/bubble_service_2.svg';
import '../constants/style/servicePage.scss';

const Leistungen = props => {
  const { data: leistungen } = props;
  const { edges: angebote } = leistungen.angebote;
  const { frontmatter: content } = leistungen.servicePageData.edges[0].node;
  return (
    <Layout
      pageName="leistungen"
      title={content.seo_comp.seo_title}
      description={content.seo_comp.seo_desc}
    >
      <SubpageHeader title={content.page_title.title} />
      <div className="grid-container">
        <div id="ernaehrung" className="offer-1 d-flex-column">
          <TextComp
            title={content.service_1.title}
            text={content.service_1.text}
            position=""
            gradient
          />
          <div className="offer-preview-container">
            {/* eslint-disable-next-line */}
            {angebote.map(({ node: angebot }) => {
              return angebot.frontmatter.category === 'Beratung' ? (
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
        <img
          className="bubble-one"
          src={bubbleOne}
          alt="hintergrund bubble mit verlauf"
        />
        <img
          className="bubble-two"
          src={bubbleTwo}
          alt="hintergrund bubble mit verlauf"
        />
        <div id="coaching" className="offer-2">
          <TextComp
            title={content.service_2.title}
            text={content.service_2.text}
            position=""
            gradient
          />
          <div className="offer-preview-container">
            {/* eslint-disable-next-line */}
            {angebote.map(({ node: angebot }) => {
              return angebot.frontmatter.category === 'Coaching' ? (
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
        {/* <img
          className="bubble-three"
          src={bubbleThree}
          alt="hintergrund bubble mit verlauf"
        /> */}
        <div id="naehrwertanalyse" className="offer-3">
          <TextComp
            title={content.service_3.title}
            text={content.service_3.text}
            position=""
            gradient
          />
          <div className="offer-preview-container">
            {/* eslint-disable-next-line */}
            {angebote.map(({ node: angebot }) => {
              return angebot.frontmatter.category === 'Nährwertanalyse' ? (
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
        <img
          className="bubble-three"
          src={bubbleThree}
          alt="hintergrund bubble mit verlauf"
        />
        {/* </div> */}
      </div>
    </Layout>
  );
};
export default Leistungen;

Leistungen.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query ServiceContent {
    servicePageData: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "page_service" } } }
    ) {
      edges {
        node {
          frontmatter {
            seo_comp {
              seo_desc
              seo_title
            }
            page_title {
              title
            }
            service_1 {
              title
              text
            }
            service_2 {
              title
              text
            }
            service_3 {
              title
              text
            }
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
  }
`;
