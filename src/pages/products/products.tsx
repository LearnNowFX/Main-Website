import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { useStyles } from "./product.style";
import { useSearchParams } from "react-router-dom";
import Product from "src/components/product/product";
import { Dialog, Grid, Typography } from "@mui/material";
import { IProduct } from "src/interfaces/product.interface";
import { productService } from "src/services/product.service";
import DetailedProduct from "src/components/detailed-product/detailed-product";

const Products = () => {
  const styles = useStyles();
  const { data: products } = useQuery<IProduct[]>("products", () => productService.getAll(), {
    refetchOnMount: false,
  });

  const [params] = useSearchParams();

  const selectedProduct = useMemo(() => {
    const productId = params.get("product");

    return products?.find(product => product.permalink === productId) || null;
  }, [params, products]);

  return (
    <>
      <div style={styles.container}>
        <Typography style={styles.title}>Products</Typography>
        <Grid container spacing={3} style={styles.gridContainer}>
          {products?.map(product => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={4}
              key={product.id}
              style={styles.gridItem}>
              <Product key={product.id} product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
      {selectedProduct && <DetailedProduct product={selectedProduct} />}
    </>
  );
};

export default React.memo(Products);
