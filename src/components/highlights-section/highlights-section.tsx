import React from "react";
import { Grid, Typography } from "@mui/material";
import Carousel from "../carousel/carousel";
import { useStyles } from "./highlights-section.style";
import { MOCK_FEATURED_ITEMS } from "src/mock/featured.mock";

const HighlightsSection = () => {
  const styles = useStyles();

  const GRID_ITEM_PROPS = {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 4,
    xl: 4,
  };

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>FEATURED CONTENT</Typography>
      <Grid container style={styles.gridContainer}>
        <Grid item style={styles.gridItem} {...GRID_ITEM_PROPS}>
          <div style={styles.linksSection}></div>
        </Grid>
        <Grid item style={styles.gridItem} {...GRID_ITEM_PROPS}>
          <div style={styles.linksSection}>
            <Carousel items={MOCK_FEATURED_ITEMS} />
          </div>
        </Grid>
        <Grid item style={styles.gridItem} {...GRID_ITEM_PROPS}>
          <div style={styles.linksSection}></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(HighlightsSection);
