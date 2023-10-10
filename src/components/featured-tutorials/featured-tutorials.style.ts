import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      paddingTop: theme.margin(20),
      borderTop: `1px solid ${theme.palette.border.main}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.margin(50),
    },
    title: {
      width: "100%",
      fontSize: "32px",
      fontWeight: 400,
      textAlign: "center",
      marginBottom: theme.margin(20),
    },
    gridContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    gridItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "80%",
      height: "100%",
      objectFit: "cover",
      marginBottom: theme.margin(10),
    },
  });
