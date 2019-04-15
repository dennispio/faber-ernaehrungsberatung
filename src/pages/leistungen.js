import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Layout';
import SubpageHeader from '../components/subpageHeader/SubpageHeader';
import TextComp from '../components/textComp/TextComp';
import OfferCard from '../components/offerCard/OfferCard';
import bubbleOne from '../img/bubbles/bubble_1.svg';
import bubbleTwo from '../img/bubbles/bubble_2.svg';
import bubbleThree from '../img/bubbles/bubble_3.svg';
import bubbleFour from '../img/bubbles/bubble_4.svg';
import bubbleFive from '../img/bubbles/bubble_5.svg';
import '../constants/style/servicePage.scss';

const Leistungen = props => {
  const { data: leistungen } = props;
  const { edges: angebote } = leistungen.angebote;
  return (
    <Layout
      pageName="leistungen"
      title="Leistungen title"
      description="Leistugen desc"
    >
      <SubpageHeader title="Unsere Leistungen" />
      <div id="ernaehrung" className="container margin-left">
        <img src={bubbleTwo} alt="hintergrund bubble mit verlauf" />
        <TextComp position="left" />
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
      <div className="sperator" />
      <div id="coaching" className="container">
        <img src={bubbleFive} alt="hintergrund bubble mit verlauf" />
        <TextComp position="left" />
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
      <div className="sperator" />
      <div id="naehrwertanalyse" className="container margin-left">
        <img src={bubbleFive} alt="hintergrund bubble mit verlauf" />
        <TextComp position="left" />
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
      <div className="sperator" />
      <div id="seminare" className="container">
        <img src={bubbleFour} alt="hintergrund bubble mit verlauf" />
        <TextComp position="left" />
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
      <div className="sperator" />
      <div id="betrieblich" className="container margin-left">
        <img src={bubbleFive} alt="hintergrund bubble mit verlauf" />
        <TextComp position="left" />
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
      <div className="sperator" />
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
