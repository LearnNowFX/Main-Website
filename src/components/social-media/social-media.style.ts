import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      margin: "5px",
      backgroundColor: theme.palette.button.icon,
    },
    icon: {
      width: "20px",
      height: "20px",
      color: theme.palette.icon.main,
    },
  });
