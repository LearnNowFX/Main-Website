import { createStyles } from "src/styles/create-styles";
import { theme } from "src/styles/theme";

export const useStyles = () =>
  createStyles({
    container: {
      height: "400px",
      width: "80%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: `1px solid ${theme.palette.border.main}`,
      borderRadius: "20px",
    },
    titleContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    title: {
      margin: "10px",
      fontSize: "16px",
      fontWeight: 400,
      width: "60%",
      textAlign: "center",
    },
  });
