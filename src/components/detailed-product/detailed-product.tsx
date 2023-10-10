import React, { FC } from "react";
import DOMPurify from "dompurify";
import { useSearchParams } from "react-router-dom";
import { Button, Dialog, IconButton, Typography } from "@mui/material";
import { IProduct } from "src/interfaces/product.interface";

import "./detailed-product.style.css";
import { Close } from "@mui/icons-material";

interface IDetailedProductProps {
  product: IProduct;
}

const DetailedProduct: FC<IDetailedProductProps> = ({ product }) => {
  const [params, setParams] = useSearchParams();

  const clearSelectedProduct = () => {
    params.delete("product");
    setParams(params);
  };

  const handleProductActionClick = () => {
    window.open(product.url, "_blank");
  };

  const cost = product.free ? "DOWNLOAD FOR FREE" : `BUY NOW ${product.formatted_price}`;
  const image = `${import.meta.env.VITE_STATIC_ASSETS_SERVER}/thumbnails/${product.permalink}.webp`;

  return (
    <Dialog
      open={true}
      onClose={clearSelectedProduct}
      maxWidth="lg"
      PaperProps={{ className: "dialog" }}>
      <div className="container">
        <div className="image-container">
          <img src={image} alt={product.name} className="product-image" />
          <IconButton className="close-button" onClick={clearSelectedProduct}>
            <Close />
          </IconButton>
        </div>
        <div className="actions-container">
          <Typography className="title">{product.name}</Typography>
          <Button className="button" onClick={handleProductActionClick}>
            <Typography className="cost">{cost}</Typography>
          </Button>
        </div>
        <div
          className="product-description"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description),
          }}
        />
      </div>
    </Dialog>
  );
};

export default React.memo(DetailedProduct);
