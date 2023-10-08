import React, { useMemo } from "react";
import { Button } from "@mui/material";
import { useStyles } from "./header.style";
import { Menu } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { PAGES } from "src/constants/pages.constants";
import { useDeviceContext } from "src/context/device.context";

const DesktopMenu = () => {
  const styles = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const goToPage = (page: string) => {
    navigate(`/${page}`);
  };

  const activePage = useMemo(() => {
    return PAGES.find(page => location.pathname.includes(page)) || null;
  }, [location]);

  return (
    <div style={styles.menu}>
      {PAGES.map(page => {
        return (
          <Button
            key={page}
            onClick={() => goToPage(page)}
            sx={styles.button({ isActive: page === activePage })}>
            {page}
          </Button>
        );
      })}
    </div>
  );
};

const MobileMenu = () => {
  const styles = useStyles();

  return (
    <div style={styles.hamburgerContainer}>
      <Menu style={styles.hamburger} />
    </div>
  );
};

const Header = () => {
  const styles = useStyles();
  const { isMobile } = useDeviceContext();

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src="/images/brand-logo.png" style={styles.logo} />
      </div>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </div>
  );
};

export default React.memo(Header);
