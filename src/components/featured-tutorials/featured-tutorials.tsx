import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./featured-tutorials.style";
import { tutorialService } from "src/services/tutorial.service";
import YouTubePlayer from "../generic/youtube-player/youtube-player";
import { IVideoDetails } from "src/interfaces/video-details.interface";

const FeaturedTutorials = () => {
  const styles = useStyles();
  const { data: tutorials } = useQuery<IVideoDetails[]>(
    "tutorials",
    () => tutorialService.getAll(),
    {
      refetchOnMount: false,
    }
  );

  const featuredTutorials = useMemo(() => {
    if (!tutorials) {
      return null;
    }

    return tutorials.slice(0, 6);
  }, [tutorials]);

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>FEATURED TUTORIALS</Typography>
      <Grid container spacing={3} style={styles.gridContainer}>
        {featuredTutorials?.map(tutorial => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={tutorial.id} style={styles.gridItem}>
            <YouTubePlayer key={tutorial.id} videoId={tutorial.id} title={tutorial.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default React.memo(FeaturedTutorials);
