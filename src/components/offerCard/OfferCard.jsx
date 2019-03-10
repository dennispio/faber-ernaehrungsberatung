import React from 'react';
import './offerCard.scss';

const OfferCard = () => (
  <div className="offerCard">
    <div className="offer-price-container">
      <p>
        60 <span className="euro">€</span>
      </p>
    </div>
    <div className="offer-title-container">
      <h5>Erstberatung</h5>
    </div>
    <div className="offer-content-container">
      <ul>
        <li>telefonisch</li>
        <li>per Skype</li>
        <li>vor Ort</li>
      </ul>
    </div>
    <div className="offer-link-container">
      <a href="#">unverbindlich anfragen</a>
    </div>
  </div>
);

export default OfferCard;
