import React, { useMemo } from "react";
import { useQuery } from "react-query";
import Product from "../product/product";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./featured-products.style";
import { IProduct } from "src/interfaces/product.interface";
import { productService } from "src/services/product.service";

const FeaturedProducts = () => {
  const styles = useStyles();
  const { data: products } = useQuery<IProduct[]>("products", () => productService.getAll(), {
    refetchOnMount: false,
  });

  const featuredProducts = useMemo(() => {
    if (!products) {
      return null;
    }

    const premium = products.filter(product => !product.free);

    return premium.slice(0, 4);
  }, [products]);

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>FEATURED PRODUCTS</Typography>
      <Grid container spacing={3} style={styles.gridContainer}>
        {featuredProducts?.map(product => (
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={product.id} style={styles.gridItem}>
            <Product key={product.id} product={product} basic={true} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default React.memo(FeaturedProducts);
