import React from "react";
import { useStyles } from "./footer.style";
import { Typography } from "@mui/material";
import SocialMedia from "../social-media/social-media";
import FooterNavigator from "../footer-navigator/footer-navigator";

const Footer = () => {
  const styles = useStyles();

  const date = new Date();

  const openPrivacyPolicy = () => {
    window.open("https://youronlinechoices.eu/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src="/images/footer-logo.png" />
      </div>
      <div style={styles.textContainer}>
        <FooterNavigator />
        <Typography style={styles.text}>{`© 2019 - ${date.getFullYear()} Learn Now FX`}</Typography>
        <Typography sx={styles.policy} onClick={openPrivacyPolicy}>
          Privacy Statement & Cookies Policy
        </Typography>
      </div>
      <div style={styles.socialContainer}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default React.memo(Footer);
