import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './offerCard.scss';

const OfferCard = ({ category, price }) => (
  <div className="offerCard">
    <div className="offer-price-container">
      <p>
        {price} <span className="euro">€</span>
      </p>
    </div>
    <div className="offer-title-container">
      <h5>{category}</h5>
    </div>
    <div className="offer-content-container">
      <ul>
        <li>telefonisch</li>
        <li>per Skype</li>
        <li>vor Ort</li>
      </ul>
    </div>
    <div className="offer-link-container">
      <Link to="anfrage">unverbindlich anfragen </Link>
    </div>
  </div>
);

export default OfferCard;

OfferCard.propTypes = {
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
