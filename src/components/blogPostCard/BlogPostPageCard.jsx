import React from 'react';
import Truncate from 'react-truncate';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './blogPostCard.scss';

// const initGridItem = index => {
//   if (index < 3) {
//     return 'grid-item--' + index + '--p'
//   }
// };


const calcTruncate = title => {
  const count = title.split('').length;
  if (count >= 0 && count <= 11) {
    return 10;
  }
  if (count > 10 && count <= 21) {
    return 8;
  }
  if (count > 20 && count <= 33) {
    return 7;
  }
  return 6;
};

const BlogPostPageCard = ({ category, date, title, text, link, index }) => (
  <div className={`grid-item blogPostCard overviewCard grid-item--${index}`}>
    <div className="blogPost-head-container">
      <span className="cat">{category}</span>
      <span className="date">{date}</span>
    </div>
    <div className="blogPost-title-container test">
      <h3>{title}</h3>
    </div>
    <div className="blogPost-content-container">
      <Truncate
        lines={calcTruncate(title)}
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

export default BlogPostPageCard;

BlogPostPageCard.propTypes = {
  link: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
