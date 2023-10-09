import { useStyles } from "./product.style";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "src/components/product/product";
import { IProduct } from "src/interfaces/product.interface";
import { productService } from "src/services/product.service";

const Products = () => {
  const styles = useStyles();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    productService.getAll().then(products => setProducts(products));
  }, []);

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>Products</Typography>
      <Grid container spacing={3} style={styles.gridContainer}>
        {products.map(product => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={product.id} style={styles.gridItem}>
            <Product key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default React.memo(Products);
