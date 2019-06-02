import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Layout';
import '../constants/style/ueberuns.scss';
import bubbleOne from '../img/bubbles/bubble_subpage_header_2.svg';
import bubbleTwo from '../img/bubbles/bubble_service_3.svg';

const Ueberuns = props => {
  const { data: ueberuns } = props;
  const { frontmatter: content } = ueberuns.ueberunsPageData.edges[0].node;
  return (
    <Layout
      pageName="ueberuns"
      title={content.seo_comp.seo_title}
      description={content.seo_comp.seo_desc}
    >
      <div className="ueberUnsContainer">
        <div className="ueberunsContainerImg" />
        <img
          className="bubble-zwei"
          src={bubbleTwo}
          alt="hintergrund bubble mit verlauf"
        />
        <img
          className="bubble-eins"
          src={bubbleOne}
          alt="header bubble mit verlauf"
        />
        <div className="texttitel">
          <h1 className="farbverlauf">{content.page_title.title}</h1>
          <h2 className="farbverlauf">
            Unsere Entstehung <br /> und Philosophie
          </h2>
          <div className="paragraph-container">
            <p>{content.text_comp.entstehung}</p>
          </div>
        </div>
        <div className="background-container" />
        {/* <div className="textNamen">       
            <h2 className="farbverlauf"> Das sind wir</h2>
            <p className="bruder-container">Maxim Faber</p>
            <p>
              {content.text_comp.bruder_max}
            </p>
            <p className="bruder-container">Daniel Faber</p>
            <p>
              {content.text_comp.bruder_daniel}
            </p> 
        </div> */}
      </div>
    </Layout>
  );
};
export default Ueberuns;

Ueberuns.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
export const pageQuery = graphql`
  query UeberunsContent {
    ueberunsPageData: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "page_ueberuns" } } }
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
            text_comp {
              entstehung
              bruder_max
              bruder_daniel
            }
          }
        }
      }
    }
  }
`;
