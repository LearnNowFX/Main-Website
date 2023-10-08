import React, { useEffect, useState } from "react";
import { tutorialService } from "src/services/tutorial.service";
import { IVideoDetails } from "src/interfaces/video-details.interface";
import YouTubePlayer from "src/components/generic/youtube-player/youtube-player";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./tutorials.style";

const Tutorials = () => {
  const styles = useStyles();
  const [videos, setVideos] = useState<IVideoDetails[]>([]);

  useEffect(() => {
    tutorialService.getAll().then(videos => setVideos(videos));
  }, []);

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>Tutorials</Typography>
      <Grid container spacing={3} style={styles.gridContainer}>
        {videos.map(video => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={video.id} style={styles.gridItem}>
            <YouTubePlayer
              key={video.id}
              width={400}
              height={250}
              videoId={video.id}
              title={video.title}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default React.memo(Tutorials);
