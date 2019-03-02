import React from 'react';
import './videoPlayer.scss';
import video from '../../img/video.mp4';
/* ToDo: Mit CMS Verknüpfen and Play button on mobile */
const VideoPlayer = () => (
  <div className="container-full">
    <video id="background-video" muted autoPlay>
      <source src={video} type="video/mp4" />
      <source src={video} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoPlayer;
