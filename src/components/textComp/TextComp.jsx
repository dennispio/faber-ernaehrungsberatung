import React from 'react';
import PropTypes from 'prop-types';
import './textComp.scss';

const TextComp = ({ position, title, text }) => (
  <div className={`${position}-div text-comp-container`}>
    <h2>
      Individuelle <br /> Ernährungsberatung
    </h2>
    <p>
      Die individuelle Ernährungsberatung ist eine auf Dich abgestimmte
      Beratung. Das heißt konkret: Wir passen uns auf Dich an und nicht Du auf
      uns. Du sagst uns, was Du willst und wir sagen Dir nicht, was Du musst. In
      Zusammenarbeit erstellen wir ein auf Dich abgestimmtes Konzept, das Dir
      auf dem Weg zu Deinem Ziel helfen wird. Deine Ziele könnten sein:
      Abnehmen, Zunehmen, Optimierung der Verdauung, gesünder Essen, Lernen
      bewusst zu Leben oder Steigerung der sportlichen Leistungsfähigkeit.
    </p>
  </div>
);

TextComp.propTypes = {
  position: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextComp;
