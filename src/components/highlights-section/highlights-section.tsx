import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import Carousel from "../carousel/carousel";
import { useStyles } from "./highlights-section.style";
import { MOCK_FEATURED_ITEMS } from "src/mock/featured.mock";

const HighlightsSection = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>FEATURED CONTENT</Typography>
      <Box sx={styles.gridContainer}>
        <Box sx={styles.gridItem}>
          <div style={styles.linksSection}></div>
        </Box>
        <Box sx={styles.gridItem}>
          <div style={styles.carouselContainer}>
            <Carousel items={MOCK_FEATURED_ITEMS} />
          </div>
          {/* <TextField style={styles.searchField} placeholder="Search" /> */}
        </Box>
        <Box sx={styles.gridItem}>
          <div style={styles.linksSection}></div>
        </Box>
      </Box>
    </div>
  );
};

export default React.memo(HighlightsSection);
