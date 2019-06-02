import React from 'react';
import './videoPlayer.scss';
import video from '../../img/FBR-countdown_animation-desktop-K0-C.mp4';
import videoMobile from '../../img/FBR-countdown_animation-mobil-K0-D.mp4';

/* ToDo: Mit CMS Verknüpfen and Play button on mobile */
const VideoPlayer = () => (
  <div className="container-full">
    <div className="header-container farbverlauf">
      <h2>Lebensqualität <br /> steigern - ohne <br /> zu verzichten</h2>
    </div>
    <video id="background-video" playsInline muted autoPlay>
      <source src={video} media="all and (min-width: 1024)" type="video/mp4" />
      <source src={video} media="all and (min-width: 1024)" type="video/ogg" />
      Your browser does not support the video tag.
      <source
        src={videoMobile}
        media="all and (max-width: 1023)"
        type="video/mp4"
      />
      <source
        src={videoMobile}
        media="all and (max-width: 1023)"
        type="video/ogg"
      />
    </video>
  </div>
);

export default VideoPlayer;
