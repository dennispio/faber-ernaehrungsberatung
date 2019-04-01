import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './blogContent.scss';
import ShareButton from '../shareButton/ShareButton';
import Newsletter from '../newsletter/Newsletter';

const BlogContent = ({ title, date, fluid, post, alt, cat }) => (
  <div className="container-full">
    <div className="container">
      <div className="subpage-title-container">
        <h2>{title}</h2>
      </div>
      <div className="subpage-content-container">
        {fluid ? (
          <div className="blog-page-image-container">
            <Img
              alt={alt}
              fluid={fluid}
              style={{
                left: 0,
                top: 0,
                width: '170%',
                height: '100%',
              }}
            />
          </div>
        ) : null}
        <div className="blog-info row">
          <div className="col-xs-8 col-sm-10 col-lg-10">{cat}</div>
          <div className="col-xs-4 col-sm-2 col-lg-2">{date}</div>
        </div>
        <div
          className="blog-container"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="row">
          <ShareButton />
          <Newsletter />
        </div>
      </div>
    </div>
  </div>
);

BlogContent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  alt: PropTypes.string,
  cat: PropTypes.string,
  fluid: PropTypes.any,
  post: PropTypes.any,
};

export default BlogContent;