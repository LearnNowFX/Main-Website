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
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(30%, 1fr))",
      gap: "10px",

      "@media screen and (max-width: 1300px)": {
        gridTemplateColumns: "1fr",
      },
    },

    gridItem: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.padding(50),
      boxSizing: "border-box",
    },
    carouselContainer: {
      width: "100%",
      maxWidth: "950px",
    },
    searchField: {
      width: "100%",
      marginTop: theme.margin(20),
      marginBottom: theme.margin(20),
    },
    linksSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      minWidth: "min(400px, 70vw)",
      //   width: "100%",
      maxWidth: "70vw",
      minHeight: "300px",

      height: "100%",
      backgroundImage: "radial-gradient(#292c33, #1b1c21)",
      borderWidth: "1px",
      borderStyle: "solid",
      padding: "5px 20px",
      borderImage: "linear-gradient(45deg, #1b1c21, #292c33) 1",
    },
    linksTitle: {
      textAlign: "center",
      fontSize: "28px",
      fontWeight: 400,
      width: "100%",
      color: theme.palette.typography.main,
      marginTop: theme.margin(5),
      marginBottom: theme.margin(5),
    },
    linksItem: {
      width: "100%",
      margin: "5px 0",
      borderRadius: "15px",
      backgroundColor: theme.palette.typography.main,
      border: `2px solid ${theme.palette.border.main}`,
    },
    linksItemTitle: {
      textAlign: "center",
      textTransform: "none",
      fontSize: "16px",
      fontWeight: 400,
      width: "100%",
      padding: "5px 5px",
      color: theme.palette.background.main,
    },
  });
