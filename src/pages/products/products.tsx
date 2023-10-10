import React from "react";
import { useQuery } from "react-query";
import { useStyles } from "./product.style";
import { Grid, Typography } from "@mui/material";
import Product from "src/components/product/product";
import { IProduct } from "src/interfaces/product.interface";
import { productService } from "src/services/product.service";

const Products = () => {
  const styles = useStyles();
  const { data: products } = useQuery<IProduct[]>("products", () => productService.getAll(), {
    refetchOnMount: false,
  });

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>Products</Typography>
      <Grid container spacing={3} style={styles.gridContainer}>
        {products?.map(product => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={product.id} style={styles.gridItem}>
            <Product key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default React.memo(Products);
