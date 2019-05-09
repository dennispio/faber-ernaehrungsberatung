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
  return (
    <Layout
      pageName="leistungen"
      title="Leistungen title"
      description="Leistugen desc"
    >
      <SubpageHeader title="Unsere Leistungen" />
      <div className="grid-container">
        <div className="offer-1 d-flex-column">
          <TextComp
            title="Individuelle Ernährungsberatung"
            text="Die individuelle Ernährungsberatung ist eine auf Dich abgestimmte Beratung. Das heißt konkret: Wir passen uns auf Dich an und nicht Du auf uns. Du sagst uns, was Du willst und wir sagen Dir nicht, was Du musst. In Zusammenarbeit erstellen wir ein auf Dich abgestimmtes Konzept, das Dir auf dem Weg zu Deinem Ziel helfen wird. Deine Ziele könnten sein: Abnehmen, Zunehmen, Optimierung der Verdauung, gesünder Essen, Lernen bewusst zu Leben oder Steigerung der sportlichen Leistungsfähigkeit. "
            position=""
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
        <div className="offer-2">
          <TextComp
            position=""
            title="Individuelles Ernährungs-coaching"
            text="Unser Ernährungscoaching ist die erweiterte Variante der individuellen Ernährungsberatung. Neben dem auf Dich angepassten individuellen Konzept erfolgt hierbei eine parallel intensive Betreuung auf dem Weg zu Deinem Ziel. Dies bedeutet, dass wir für Dich: Dein Konzept nach Deinen Wünschen (Änderung der Lebensmittel, die Du möchtest) und Deiner Situation (Geburtstage, Restaurantbesuche) anpassen, Dich beim Motivationstief unterstützen, und bei jeglichen Fragen und Tipps zur Seite zu stehen. Wir werden rund um die Uhr für Dich erreichbar sein. Wenn Du der Typ bist, der an die Hand genommen werden muss, wirst Du mit dem Coaching auf der sicheren Seite sein!"
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
        <div className="offer-3">
          <TextComp
            position=""
            title="Nährwertanalyse"
            text="In der Nährwert- und Ernährungsanalyse untersuchen wir auf Basis eines dreiwöchigen Ernährungsprotokolls Deine gesamte Ernährung hinsichtlich der Vitaminaufnahme, Makronährstoffaufnahme und Gesamtbilanz. Nach Abschluss der Nährwert- und Ernährungsanalyse beantworten wir Dir individuell unter anderem folgende Fragen: Esse ich genug Vitamine und Ballaststoffe? Esse ich zu wenig Kohlenhydrate, Proteine oder Fette? Welche Auswirkung hat ein Defizit? Wie viele Kalorien verbrauche ich? Was muss ich tun, um mein Gewicht zu reduzieren, mein Gewicht zu erhöhen oder bewusster zu Leben?"
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
