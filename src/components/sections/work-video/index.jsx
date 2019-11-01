import React from 'react';
import Video from '../../units/Video';

import './work-video.scss';

const WorkVideo = ({ mediaData }) => {
  console.log(mediaData);
  const isVideoHosted = mediaData.video;

  return (
    <section className="obra__video-wrap">
      {isVideoHosted ? (
        <div></div>
      ) : (
        <Video
          source={mediaData.videoFile.url}
          poster={mediaData.thumbnail.url}
          autoPlay={false}
          isMuted={false}
          loop={false}
          controls
        />
      )}
    </section>
  );
};
export default WorkVideo;
