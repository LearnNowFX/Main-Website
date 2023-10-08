import { FC } from "react";

interface IYouTubePlayerProps {
  width: number;
  height: number;
  videoId: string;
  title?: string;
}

const YouTubePlayer: FC<IYouTubePlayerProps> = ({ width, height, videoId, title }) => {
  return (
    <iframe
      width={width}
      height={height}
      title={title}
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen></iframe>
  );
};

export default YouTubePlayer;
