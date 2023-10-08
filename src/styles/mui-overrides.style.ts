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
  },
});
