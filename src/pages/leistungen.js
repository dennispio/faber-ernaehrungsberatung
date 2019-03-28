import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Layout';
import SubpageHeader from '../components/subpageHeader/SubpageHeader';
import TextComp from '../components/textComp/TextComp';
import OfferCard from '../components/offerCard/OfferCard';

const Leistungen = props => {
  const { data: leistungen } = props;
  const { edges: angebote } = leistungen.angebote;
  console.log('#######');
  console.log(angebote);
  return (
    <Layout
      pageName="leistungen"
      title="Leistungen title"
      description="Leistugen desc"
    >
      <SubpageHeader title="Unsere Leistungen" />
      <div id="ernaehrung" className="container margin-left">
        <TextComp position="left" />
        <div className="offer-preview-container">
          {/* eslint-disable-next-line */}
        {angebote.map(({ node: angebot }) => {
            return angebot.frontmatter.category === 'Beratung' ? (
              <OfferCard
                category={angebot.frontmatter.category}
                price={angebot.frontmatter.price}
              />
            ) : null;
          })}
        </div>
      </div>
      <div className="sperator" />
      <div id="coaching" className="container">
        <TextComp position="left" />
        <div className="offer-preview-container">
          {/* eslint-disable-next-line */}
        {angebote.map(({ node: angebot }) => {
            return angebot.frontmatter.category === 'Coaching' ? (
              <OfferCard
                category={angebot.frontmatter.category}
                price={angebot.frontmatter.price}
              />
            ) : null;
          })}
        </div>
      </div>
      <div className="sperator" />
      <div id="naehrwertanalyse" className="container margin-left">
        <TextComp position="left" />
        <div className="offer-preview-container">
          {/* eslint-disable-next-line */}
        {angebote.map(({ node: angebot }) => {
            return angebot.frontmatter.category === 'Beratung' ? (
              <OfferCard
                category={angebot.frontmatter.category}
                price={angebot.frontmatter.price}
              />
            ) : null;
          })}
        </div>
      </div>
      <div className="sperator" />
      <div id="seminare" className="container">
        <TextComp position="left" />
        <div className="offer-preview-container">
          {/* eslint-disable-next-line */}
        {angebote.map(({ node: angebot }) => {
            return angebot.frontmatter.category === 'Beratung' ? (
              <OfferCard
                category={angebot.frontmatter.category}
                price={angebot.frontmatter.price}
              />
            ) : null;
          })}
        </div>
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
  }
`;
