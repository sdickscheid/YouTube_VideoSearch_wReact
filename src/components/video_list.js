import React from 'react';
import VideoListItem from './video_list_item';

// VideoList receives 'props' as an argument.
const VideoList = (props) => {
  // You use the props by declaring props.(the key associated with that piece of state); ex. props.videos. Then .map over the array of videos.

  // For each element of videos array, a function will be called that takes a single video. Save a reference to the videos array that is being returned (i.e. const videoItems).
  const videoItems = props.videos.map((video) => {

    // That function is set to return the VideoListItem component and pass it each video as a property named "video="
    return (
      <VideoListItem
        video={video}
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
      />
    )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
