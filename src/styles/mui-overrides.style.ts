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
          "&:hover": {
            color: theme.palette.typography.hover,
          },
        },
      },
    },
  },
});
