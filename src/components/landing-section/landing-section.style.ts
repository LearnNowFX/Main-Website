import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    info: {
      position: "absolute",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      textAlign: "center",
      fontSize: "36px",
      fontWeight: 400,
    },
    subtitle: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: 300,
      marginBottom: "20px",
    },
    buttonContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      padding: "5px 20px",
      textAlign: "center",
      fontSize: "18px",
      fontWeight: 400,
      marginBottom: "20px",
    },
  });
