import React from 'react';
import Video from '../../units/Video';

import './work-video.scss';

function VideoIframe({ video }) {
  let videoSrc = '';

  // ToDo cubrir escenario de Vimeo
  if (video.provider === 'youtube') {
    videoSrc = `https://www.youtube.com/embed/${video.providerUid}`;
  }

  return (
    <div className="fluid-video">
      <iframe
        title={video.title}
        src={videoSrc}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
}

const WorkVideo = ({ mediaData }) => {
  const isVideoHosted = mediaData.video;

  return (
    <section className="obra__video-wrap">
      {isVideoHosted ? (
        <VideoIframe video={mediaData.video} />
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
