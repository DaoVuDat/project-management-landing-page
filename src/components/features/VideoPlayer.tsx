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
          url="./video/intro_video.webm"
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          controls={false}
        />
      )}
    </>
  );
}
