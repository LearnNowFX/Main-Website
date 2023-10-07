import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
      position: "fixed",
      bottom: 0,
      width: "100vw",
      minHeight: "100px",
      padding: "10px",
      backgroundColor: theme.palette.footer.main,
    },
    text: {
      fontWeight: 300,
      color: theme.palette.typography.main,
    },
  });
