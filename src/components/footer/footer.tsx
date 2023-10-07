import React from "react";
import { useStyles } from "./footer.style";
import { Typography } from "@mui/material";
import SocialMedia from "../social-media/social-media";

const Footer = () => {
  const styles = useStyles();
  const year = new Date().getFullYear();

  return (
    <div style={styles.container}>
      <img src="/images/footer-logo.png" />
      <Typography style={styles.text}>{`© 2019 - ${year} Learn Now FX`}</Typography>
      <SocialMedia />
    </div>
  );
};

export default React.memo(Footer);
