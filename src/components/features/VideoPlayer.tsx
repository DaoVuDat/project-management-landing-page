"use client";
import ReactPlayer from "react-player";
import React, { useEffect, useState } from "react";

export function VideoPlayer() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      {hasWindow && (
        <ReactPlayer
          url={[
            { src: "./video/intro_video.webm", type: "video/webm" },
            { src: "./video/intro_video.mp4", type: "video/mp4" },
          ]}
          playing={true}
          playsinline={true}
          loop={true}
          muted={true}
          volume={0}
          width="100%"
          height="100%"
          controls={false}
        />
      )}
    </>
  );
}
