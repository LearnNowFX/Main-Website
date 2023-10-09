import { theme } from "./theme";
import { createTheme } from "@mui/material";

export const MUI_OVERRIDES = createTheme({
  typography: {
    fontFamily: theme.typography.font,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: "color 0.2s",
          color: theme.palette.typography.main,
          textTransform: "uppercase",
          "&:hover": {
            color: theme.palette.typography.hover,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.input.main,
          borderRadius: "5px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: theme.palette.typography.main,
          borderRadius: "0",
          fontSize: "16px",
          backgroundImage: "linear-gradient(180deg,#296ad4,#1656c1,#0343ae)",
          "&:hover": {
            backgroundImage: "linear-gradient(180deg,#0343ae,#1656c1,#296ad4)",
          },
          "&:disabled": {
            opacity: 0.5,
            color: theme.palette.typography.main,
          },
        },
      },
    },
  },
});
