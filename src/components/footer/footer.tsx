import React from "react";
import { useStyles } from "./footer.style";
import { Typography } from "@mui/material";
import SocialMedia from "../social-media/social-media";
import FooterNavigator from "../footer-navigator/footer-navigator";

const Footer = () => {
  const styles = useStyles();
  const year = new Date().getFullYear();

  return (
    <div style={styles.container}>
      <img src="/images/footer-logo.png" />
      <div style={styles.textContainer}>
        <FooterNavigator />
        <Typography style={styles.text}>{`© 2019 - ${year} Learn Now FX`}</Typography>
        <Typography style={styles.policy}>Privacy Statement & Cookies Policy</Typography>
      </div>
      <SocialMedia />
    </div>
  );
};

export default React.memo(Footer);
