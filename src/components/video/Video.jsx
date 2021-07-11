import React from 'react'
import './videoPlayer.scss'
import video from '../../img/FBR-countdown_animation-desktop-K0-C.mp4'
import videoMobile from '../../img/FBR-countdown_animation-mobil-K0-D.mp4'

/* ToDo: Mit CMS Verknüpfen and Play button on mobile */
const VideoPlayer = () => (
    <div className="container-full">
        <div className="header-container farbverlauf">
            <h2 className="farbverlauf">
                Lebensqualität <br /> steigern - ohne <br /> zu verzichten
            </h2>
        </div>
        <video
            title="Video Lebensqualität steigern ohne zu verzichten"
            alt="Video Lebensqualität steigern ohne zu verzichten"
            id="background-video"
            playsInline
            muted
            autoPlay
        >
            <source
                src={video}
                media="all and (min-width: 1024px)"
                type="video/mp4"
            />
            <source
                src={video}
                media="all and (min-width: 1024px)"
                type="video/ogg"
            />
            Your browser does not support the video tag.
            <source
                src={videoMobile}
                media="all and (max-width: 1023px)"
                type="video/mp4"
            />
            <source
                src={videoMobile}
                media="all and (max-width: 1023px)"
                type="video/ogg"
            />
        </video>
    </div>
)

export default VideoPlayer
