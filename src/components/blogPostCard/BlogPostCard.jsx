import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './blogPostCard.scss';

const BlogPostCard = ({ category, date, title, text, link }) => (
  <div className="blogPostCard">
    <div className="blogPost-head-container">
      <span className="cat">{category}</span>
      <span className="date">{date}</span>
    </div>
    <div className="blogPost-title-container">
      <h5>{title}</h5>
    </div>
    <div className="blogPost-content-container">
      <p>
        {text}
        <Link to={link}> ...mehr lesen</Link>
      </p>
    </div>
  </div>
);

export default BlogPostCard;

BlogPostCard.propTypes = {
  link: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
