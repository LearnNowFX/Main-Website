import { Typography } from "@mui/material";
import { useStyles } from "./youtube-player.style";
import { FC, useEffect, useRef, useState } from "react";
import { VIDEO_ASPECT_RATIO } from "src/constants/media.constants";

interface IYouTubePlayerProps {
  width: number;
  videoId: string;
  title?: string;
}

const YouTubePlayer: FC<IYouTubePlayerProps> = ({ width, videoId, title }) => {
  const styles = useStyles();
  const ref = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (ref.current?.clientWidth) {
        setParentWidth(ref.current?.clientWidth);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const applyMargin = (size: number) => {
    return size * 0.9;
  };

  return (
    <div style={styles.container} ref={ref}>
      <div>
        <iframe
          width={applyMargin(parentWidth)}
          height={applyMargin(parentWidth / VIDEO_ASPECT_RATIO)}
          title={title}
          frameBorder={0}
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
      <div style={styles.titleContainer}>
        <Typography style={styles.title}>{title}</Typography>
      </div>
    </div>
  );
};

export default YouTubePlayer;
