import React from "react";
import { useStyles } from "./footer.style";

const Footer = () => {
  const styles = useStyles();

  return <div style={styles.container}>footer</div>;
};

export default React.memo(Footer);
