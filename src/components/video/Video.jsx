import React from 'react';
import './videoPlayer.scss';
import video from '../../img/video.mp4';
/* ToDo: Mit CMS Verknüpfen and Play button on mobile */
const VideoPlayer = () => (
  <div className="container-full">
    <div className="header-container farbverlauf">
      <h2>Lebensqualität <br /> steigern - ohne <br /> zu verzichten</h2>
    </div>
    <video id="background-video" playsInline muted autoPlay>
      <source src={video} type="video/mp4" />
      <source src={video} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoPlayer;
