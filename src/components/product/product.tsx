import React, { FC } from "react";
import { useStyles } from "./product.style";
import { Button, Typography } from "@mui/material";
import { IProduct } from "src/interfaces/product.interface";
import { useNavigate, useSearchParams } from "react-router-dom";

interface IProductProps {
  product: IProduct;
  basic?: boolean;
}

const Product: FC<IProductProps> = ({ product, basic }) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleProductClick = () => {
    const query = searchParams.get("product");

    if (query) {
      return;
    }

    setSearchParams(prev => ({ ...prev, product: product.permalink }));
  };

  const handleProductActionClick = () => {
    if (basic) {
      navigate(`/products?product=${product.permalink}`);
      return;
    }

    window.open(product.url, "_blank");
  };

  const image = `${import.meta.env.VITE_STATIC_ASSETS_SERVER}/thumbnails/${product.permalink}.webp`;

  const COST_TEXT = product.free ? "FREE DOWNLOAD" : `BUY NOW ${product.formatted_price}`;

  const BUTTON_TEXT = basic ? "LEARN MORE" : COST_TEXT;

  return (
    <div style={styles.container}>
      <img src={image} alt={product.name} style={styles.image} onClick={handleProductClick} />
      <div style={styles.info}>
        <Typography style={styles.title} onClick={handleProductClick}>
          {product.name}
        </Typography>

        <Button style={styles.action} onClick={handleProductActionClick}>
          <Typography style={styles.cost}>{BUTTON_TEXT}</Typography>
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Product);
