import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Layout';
import Testimonial from '../components/testimonials/Testimonial';
import SubpageHeader from '../components/subpageHeader/SubpageHeader';

const Referenzen = props => {
  const { data } = props;
  const { edges: referenzen } = data.referenzen;
  return (
    <Layout
      title="Faber Ernährungsberatung - Referenzen"
      description="Wir freuen uns immer darüber mit unseren Kunden in Kontakt bleiben zu dürfen. Hier berichten einige von ihren Erfahrungen und Erfolgserlebnissen."
    >
      <SubpageHeader
        checkheader="h1"
        title="Referenzen"
        sitename="referenzen"
        text="Wir freuen uns immer darüber mit unseren Kunden in Kontakt bleiben zu
          dürfen. Hier berichten einige von ihren Erfahrungen und
          Erfolgserlebnissen. Möchtest Du auch auf unserer Referenzseite
          berichten? Dann schreib uns eine Mail an kontakt@ernaehrungsberatung-faber.de"
      />{' '}
      <div className="testo-content-container">
        {referenzen.map(({ node: referenz }) => (
          <div className="testo-con">
            <Testimonial
              title={referenz.frontmatter.title}
              text={referenz.frontmatter.description}
              left={referenz.frontmatter.text_left}
              link={referenz.fields.slug}
              fluid={referenz.frontmatter.featuredImage.childImageSharp.fluid}
              alt={referenz.frontmatter.alt_text}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Referenzen;

Referenzen.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query ReferenzenPageContent {
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
            text_left
            description
            pageKey
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt_text
          }
        }
      }
    }
  }
`;
