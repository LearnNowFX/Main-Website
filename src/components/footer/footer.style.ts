import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      flexDirection: "row",
      position: "fixed",
      bottom: 0,
      width: "100vw",
      minHeight: "100px",
      padding: "10px",
      backgroundColor: theme.palette.footer.main,
    },
    logoContainer: {
      padding: "10px",
      width: "350px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    textContainer: {
      width: "350px",
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
    socialContainer: {
      padding: "15px",
      width: "300px",
    },
  });
