import React, { useMemo } from "react";
import { useQuery } from "react-query";
import Carousel from "../carousel/carousel";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./highlights-section.style";
import { formatTitle } from "src/utilities/title.utility";
import { IProduct } from "src/interfaces/product.interface";
import { MOCK_FEATURED_ITEMS } from "src/mock/featured.mock";
import { productService } from "src/services/product.service";
import { tutorialService } from "src/services/tutorial.service";

const HighlightsSection = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const { data: products } = useQuery("products", () => productService.getAll(), {
    refetchOnMount: false,
  });

  const { data: tutorials } = useQuery("tutorials", () => tutorialService.getAll(), {
    refetchOnMount: false,
  });

  const featured = useMemo(() => {
    if (!products || !tutorials) {
      return null;
    }

    return {
      products: products.slice(0, 6),
      tutorials: tutorials.slice(0, 6),
    };
  }, [products, tutorials]);

  const goToProductPage = (product: IProduct) => {
    return navigate(`/products?product=${product.permalink}`);
  };

  const goToTutorialPage = (tutorialId: any) => {
    return window.location.assign(`https://www.youtube.com/watch?v=${tutorialId}`);
  };

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>FEATURED CONTENT</Typography>
      <Box sx={styles.gridContainer}>
        <Box sx={styles.gridItem}>
          <div style={styles.linksSection}>
            <Typography style={styles.linksTitle}>TUTORIALS</Typography>
            {featured?.tutorials?.map(tutorial => (
              <div
                key={tutorial.id}
                style={styles.linksItem}
                onClick={() => goToTutorialPage(tutorial.id)}>
                <Typography sx={styles.linksItemTitle}>{formatTitle(tutorial.title)}</Typography>
              </div>
            ))}
          </div>
        </Box>
        <Box sx={styles.gridItem}>
          <div style={styles.carouselContainer}>
            <Carousel items={MOCK_FEATURED_ITEMS} />
          </div>
        </Box>
        <Box sx={styles.gridItem}>
          <div style={styles.linksSection}>
            <Typography style={styles.linksTitle}>PRODUCTS</Typography>
            {featured?.products?.map(product => (
              <div
                key={product.id}
                style={styles.linksItem}
                onClick={() => goToProductPage(product)}>
                <Typography sx={styles.linksItemTitle}>{formatTitle(product.name)}</Typography>
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default React.memo(HighlightsSection);
