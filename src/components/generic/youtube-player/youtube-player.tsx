import { FC, useMemo } from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./youtube-player.style";
import { useDeviceContext } from "src/context/device.context";
import { VIDEO_ASPECT_RATIO } from "src/constants/media.constants";

interface IYouTubePlayerProps {
  width: number;
  videoId: string;
  title?: string;
}

const YouTubePlayer: FC<IYouTubePlayerProps> = ({ width, videoId, title }) => {
  const styles = useStyles();
  const { width: deviceWidth } = useDeviceContext();

  const calculatedWidth = useMemo(() => {
    return Math.min(width, deviceWidth * 0.7);
  }, [width, deviceWidth]);

  const calculatedHeight = useMemo(() => {
    return calculatedWidth / VIDEO_ASPECT_RATIO;
  }, [calculatedWidth]);

  return (
    <div style={styles.container}>
      <div>
        <iframe
          width={calculatedWidth}
          height={calculatedHeight}
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
