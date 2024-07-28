"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  // video path
  const [videosrc, setVideosrc] = useState("");

  useEffect(() => {
    setVideosrc("/videos/next.mp4");
  }, []);

  if (!videosrc) {
    return null;
  }

  return (
    <div>
      <h1>My Custom Player</h1>
      <ReactPlayer
        width="500px"
        height="400px"
        url={videosrc}
        controls={true}
        light={false} // light is useful in case of dark mode
        pip={true} // picture in picture
      />
    </div>
  );
};

export default VideoPlayer;
