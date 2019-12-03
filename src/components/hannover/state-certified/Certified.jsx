import React from 'react';
import certi from '../../../img/certi.png';
import './certified.scss';

const Certified = () => (
  <div className="container certi-container">
    <div className="col-md-1" />
    <div className="col-md-5 col-xs-12">
      <h2 className="farbverlauf">Wir sind staatlich geprüft</h2>
      <p>
        Eine professionelle und individuelle Ernährungsberatung bildet die
        Grundlage einer erfolgreichen Zusammenarbeit im Ernährungscoaching. Mit
        unserem ausgebildeten und staatlich geprüften Ernährungsberater durch
        den TÜV SÜD garantieren wir einen hohen Qualitätsstandard unter stetiger
        Berücksichtigung der aktuellen wissenschaftlichen Erkenntnisse.
      </p>
    </div>
    <div className="col-md-1" />
    <div className="col-md-5 col-xs-12">
      <img src={certi} alt="Bild des Zertifikats" title="Zertifikat" />
    </div>
  </div>
);

export default Certified;
