import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import { useStyles } from "./product.style";
import { useSearchParams } from "react-router-dom";
import { IProduct } from "src/interfaces/product.interface";

interface IProductProps {
  product: IProduct;
}

const Product: FC<IProductProps> = ({ product }) => {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleProductClick = () => {
    const query = searchParams.get("product");

    if (query) {
      return;
    }

    setSearchParams(prev => ({ ...prev, product: product.permalink }));
  };

  const handleProductActionClick = () => {
    window.open(product.url, "_blank");
  };

  const image = `${import.meta.env.VITE_STATIC_ASSETS_SERVER}/thumbnails/${product.permalink}.webp`;

  const cost = product.free ? "DOWNLOAD FOR FREE" : `BUY NOW ${product.formatted_price}`;

  return (
    <div style={styles.container}>
      <img src={image} alt={product.name} style={styles.image} onClick={handleProductClick} />
      <div style={styles.info}>
        <Typography style={styles.title} onClick={handleProductClick}>
          {product.name}
        </Typography>

        <Button style={styles.action} onClick={handleProductActionClick}>
          <Typography style={styles.cost}>{cost}</Typography>
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Product);
