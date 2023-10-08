import { useStyles } from "./header.style";
import { Menu } from "@mui/icons-material";
import React, { useMemo, useState } from "react";
import { PAGES } from "src/constants/pages.constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeviceContext } from "src/context/device.context";
import { Button, Drawer, IconButton, Typography } from "@mui/material";

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
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const activePage = useMemo(() => {
    return PAGES.find(page => location.pathname.includes(page)) || null;
  }, [location]);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const goToPage = (page: string) => {
    navigate(`/${page}`);
    closeMenu();
  };

  return (
    <>
      <IconButton style={styles.hamburgerContainer} onClick={openMenu}>
        <Menu style={styles.hamburger} />
      </IconButton>
      <Drawer
        open={menuOpen}
        onClose={closeMenu}
        anchor="bottom"
        PaperProps={{ style: styles.drawer }}>
        {PAGES.map(page => {
          return (
            <div key={page} style={styles.menuItem}>
              <Typography
                onClick={() => goToPage(page)}
                style={styles.menuItemText({ isActive: page === activePage })}>
                {page}
              </Typography>
            </div>
          );
        })}
      </Drawer>
    </>
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
