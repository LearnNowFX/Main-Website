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
      //   width: "100%",
      //   display: "flex",
      //   flexDirection: "row",
      //   alignItems: "space-around",
      //   justifyContent: "space-around",
      //   flexWrap: "wrap",
    },
    gridItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.margin(20),
    },
    linksSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.margin(20),
      width: "80%",
      //   minWidth: "min(300px, 90vw)",
      minHeight: "500px",
      backgroundImage: "radial-gradient(#292c33, #1b1c21)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderImage: "linear-gradient(45deg, #1b1c21, #292c33) 1",
    },
  });
