import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexBasis: "2600px",
      justifyContent: "space-around",
      flexDirection: "row",
      position: "fixed",
      bottom: 0,
      width: "100vw",
      minHeight: "100px",
      padding: "10px",
      backgroundColor: theme.palette.footer.main,
    },
    textContainer: {
      width: "300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: "16px",
      fontWeight: 300,
      color: theme.palette.typography.faded,
    },
    policy: {
      fontSize: "14px",
      fontWeight: 200,
      color: theme.palette.typography.faded,
    },
  });
