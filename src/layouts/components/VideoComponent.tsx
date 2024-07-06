"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";

type Props = {
  width: number;
  height: number;
  src: string;
  video_id: string;
  video_height: string;
  video_width: string;
  title: string;
};

const VideoComponent = ({
  height,
  width,
  src,
  title,
  video_id,
  video_height,
  video_width,
}: Props) => {
  const [play, setPlay] = useState(false);
  const videoOptions = {
    borderRadius: "16px",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      {!play ? (
        <div className="relative text-center">
          <button
            className="play-button"
            aria-label="play-video"
            onClick={() => setPlay(true)}
          >
            <DynamicIcon icon="FaPlay" />
          </button>
          <Image
            width={width}
            height={height}
            src={src}
            alt={title}
            className="inline rounded-2xl"
            style={{ width: "auto" }}
          />
        </div>
      ) : (
        <div className="youtube mx-auto text-center">
          <YouTube
            videoId={video_id}
            opts={videoOptions}
            iframeClassName={`  aspect-video ${video_height} ${video_width} max-w-full bg-transparent rounded-2xl`}
          />
        </div>
      )}
    </>
  );
};

export default VideoComponent;
