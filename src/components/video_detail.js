import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>loading...</div>;
  }

const videoId = video.id.videoId;
// craft your own embed url
  // const url = 'http://www.youtube.com/embed/' + videoId;
  // v__ with ES6 syntactical sugar; use template strings and add a JS variable to change the video ID
const url = `http://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={url}>
        </iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default VideoDetail;
