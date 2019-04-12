import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './legalContent.scss';
import ShareButton from '../shareButton/ShareButton';
import Newsletter from '../newsletter/Newsletter';

const LegalContent = ({ post, title }) => (
    <div className="container-full">
        <div className="container">
            <div className="subpage-content-container">
                <div
                    className="blog-container"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </div>
    </div>
);

LegalContent.propTypes = {
    title: PropTypes.string.isRequired,
    post: PropTypes.any,
};

export default LegalContent;
