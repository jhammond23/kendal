import React from 'react';

function VideoPlayer({ video }) {
  return (
    <video controls poster={video.thumbnail}>
      <source src={video.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
