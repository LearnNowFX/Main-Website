import React from "react";
import { useStyles } from "./header.style";
import { useDeviceContext } from "src/context/device.context";
import MobileNavigator from "../mobile-navigator/mobile-navigator";
import DesktopNavigator from "../desktop-navigator/desktop-navigator";

const Header = () => {
  const styles = useStyles();
  const { isMobile } = useDeviceContext();

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src="/images/brand-logo.png" style={styles.logo} />
      </div>
      {isMobile ? <MobileNavigator /> : <DesktopNavigator />}
    </div>
  );
};

export default React.memo(Header);
