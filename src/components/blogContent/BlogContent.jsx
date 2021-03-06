import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import './blogContent.scss'
import ShareButton from '../shareButton/ShareButton'
import Newsletter from '../newsletter/Newsletter'

const BlogContent = ({
    title,
    date,
    fluid,
    post,
    alt,
    cat,
    share,
    blog,
    service,
}) => (
    <div className="container-full">
        <div
            className={
                service
                    ? 'subpage-service-container'
                    : 'subpage-content-container'
            }
        >
            {fluid ? (
                <div className="blog-page-image-container">
                    <Img
                        title={title}
                        alt={alt}
                        fluid={fluid}
                        style={{
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            ) : null}
            <div className="blog-info row">
                <div className="col-xs-8 col-sm-10 col-lg-10">{cat}</div>
                <div className="col-xs-4 col-sm-2 col-lg-2 date">{date}</div>
            </div>
            <div
                className={service ? 'form-felder' : 'blog-container'}
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
            {share !== false ? (
                <div className="row">
                    <ShareButton />
                    <Newsletter />
                </div>
            ) : null}
        </div>
    </div>
)

BlogContent.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    alt: PropTypes.string,
    cat: PropTypes.string,
    fluid: PropTypes.any,
    post: PropTypes.any,
    share: PropTypes.bool,
    blog: PropTypes.bool,
    service: PropTypes.bool,
}

export default BlogContent
