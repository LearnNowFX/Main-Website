import { Typography } from "@mui/material";
import React, { FC } from "react";
import { IProduct } from "src/interfaces/product.interface";
import { useStyles } from "./product.style";

interface IProductProps {
  product: IProduct;
}

const Product: FC<IProductProps> = ({ product }) => {
  const styles = useStyles();

  return (
    <div>
      <img src={product.image} alt={product.name} style={styles.image} />
      <Typography>{product.name}</Typography>
    </div>
  );
};

export default React.memo(Product);
