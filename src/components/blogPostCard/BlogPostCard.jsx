import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import { Link } from 'gatsby';
import './blogPostCard.scss';

const BlogPostCard = ({ category, date, title, text, link }) => (
  <div className="blogPostCard homeCard">
    <div className="blogPost-head-container">
      <span className="cat">{category}</span>
      <span className="date">{date}</span>
    </div>
    <div className="blogPost-title-container">
      <h3>{title}</h3>
    </div>
    <div className="blogPost-content-container">
      <Truncate
        lines={7}
        ellipsis={
          <span>
            ... <br /> <Link to={link}> mehr lesen</Link>
          </span>
        }
      >
        {text}
      </Truncate>
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
