import { FC, useState } from "react";
import { PlayArrow } from "@mui/icons-material";
import { useStyles } from "./youtube-player.style";
import { useDeviceContext } from "src/context/device.context";
import { Dialog, IconButton, Typography } from "@mui/material";
import { VIDEO_ASPECT_RATIO } from "src/constants/media.constants";

interface IYouTubePlayerProps {
  videoId: string;
  title: string;
}

const applyMargin = (size: number) => {
  return size * 0.7;
};

const formatTitle = (title: string) => {
  if (title.length > 60) {
    return title.substring(0, 60) + "...";
  }

  return title;
};

const YouTubePlayer: FC<IYouTubePlayerProps> = ({ videoId, title }) => {
  const styles = useStyles();
  const { width } = useDeviceContext();
  const [popupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div style={styles.container}>
        <img
          onClick={handleOpenPopup}
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          style={{ width: "80%", aspectRatio: VIDEO_ASPECT_RATIO, cursor: "pointer" }}
        />
        <div style={styles.actionsContainer}>
          <IconButton style={styles.playButton} onClick={handleOpenPopup}>
            <PlayArrow style={styles.playIcon} />
          </IconButton>
          <Typography style={styles.title} onClick={handleOpenPopup}>
            {formatTitle(title)}
          </Typography>
        </div>
      </div>
      {popupOpen && (
        <Dialog
          open={popupOpen}
          onClose={handleClosePopup}
          maxWidth="lg"
          PaperProps={{ style: styles.dialog }}>
          <div style={styles.videoPlayer}>
            <iframe
              width={applyMargin(width)}
              height={applyMargin(width / VIDEO_ASPECT_RATIO)}
              title={title}
              frameBorder={0}
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default YouTubePlayer;
