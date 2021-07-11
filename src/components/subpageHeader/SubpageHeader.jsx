import React from 'react'
import PropTypes from 'prop-types'
import leftBub from '../../img/bubbles/bubble_subpage_header_1.svg'
import rightBub from '../../img/bubbles/bubble_subpage_header_2.svg'
import './subpageHeader.scss'

const SubpageHeader = ({ title, text, sitename, blog, checkheader }) => (
    <div
        className={`container-full subPage-header-container ${
            blog ? 'blog-template-header-container' : null
        }`}
    >
        <img
            className="right-bubbble"
            src={rightBub}
            alt="Hintergrund bubble links"
            title="Hintergrund bubble links"
        />
        <img
            className="left-bubbble"
            src={leftBub}
            alt="Hintergrund bubble links"
            title="Hintergrund bubble links"
        />
        <div className="subpage-title-container farbverlauf">
            {checkheader !== 'h2' ? (
                <h1 className={`farbverlauf ${sitename}`}>{title}</h1>
            ) : (
                <h2 className={`farbverlauf ${sitename}`}>{title}</h2>
            )}
        </div>
        <div className="subpage-text-container">
            <p>{text}</p>
        </div>
    </div>
)

SubpageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    sitename: PropTypes.string,
    blog: PropTypes.bool,
    checkheader: PropTypes.string,
}

export default SubpageHeader
