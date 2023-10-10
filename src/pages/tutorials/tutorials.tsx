import React from "react";
import { useQuery } from "react-query";
import { useStyles } from "./tutorials.style";
import { Grid, Typography } from "@mui/material";
import { tutorialService } from "src/services/tutorial.service";
import { IVideoDetails } from "src/interfaces/video-details.interface";
import YouTubePlayer from "src/components/generic/youtube-player/youtube-player";

const Tutorials = () => {
  const styles = useStyles();
  const { data: tutorials } = useQuery<IVideoDetails[]>(
    "tutorials",
    () => tutorialService.getAll(),
    {
      refetchOnMount: false,
    }
  );

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>Tutorials</Typography>
      <Grid container spacing={3} style={styles.gridContainer}>
        {tutorials?.map(video => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={video.id} style={styles.gridItem}>
            <YouTubePlayer key={video.id} videoId={video.id} title={video.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default React.memo(Tutorials);
