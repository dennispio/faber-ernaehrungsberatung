import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './offerCard.scss';

const OfferCard = ({ category, price, time, bullets }) => (
  <div className="offerCard">
    <div className="offer-price-container">
      <p>
        {price} <span className="euro">€</span>
      </p>
      <p className="time">{time}</p>
    </div>
    <div className="offer-title-container">
      <h5>{category}</h5>
    </div>
    <div className="offer-content-container">
      <ul>
        {bullets.map(el => (
          <li>{el.title}</li>
        ))}
      </ul>
    </div>
    <div className="offer-link-container">
      <Link to="anfrage">
        mehr erfahren & <br /> unverbindlich anfragen{' '}
      </Link>
    </div>
  </div>
);

export default OfferCard;

OfferCard.propTypes = {
  price: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bullets: PropTypes.array.isRequired,
};
