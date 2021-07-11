import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import './testimonial.scss'
import { Link } from 'gatsby'

const TestimonialRight = ({ title, text, fluid, link, alt }) => (
    <Link className="testo-link" to={link} title="Zu der Referenz Seite">
        <div className="container-full testimonials-container">
            <div className="row">
                <div className="col-xs-12 col-sm-1 col-lg-1" />
                <div className="col-xs-12 col-sm-5 col-lg-5 testo-right">
                    <div className="testimonial-content">
                        <div className="testimaonial-title">
                            <h2 className="farbverlauf">{title}</h2>
                        </div>
                        <div className="testimonial-text">
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-6 testimonial-image">
                    <Img alt={alt} fluid={fluid} title={title} />
                </div>
            </div>
        </div>
    </Link>
)

TestimonialRight.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    fluid: PropTypes.any,
}

export default TestimonialRight
