import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    hamburger: {
      fontSize: "35px",
      color: theme.palette.icon.main,
    },
    hamburgerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px",
    },
    drawer: {
      borderTopLeftRadius: "25px",
      borderTopRightRadius: "25px",
      width: "100%",
      minHeight: "200px",
      boxShadow: "",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.background.main,
    },
    menuItem: {
      width: "100%",
      textAlign: "center",
      fontSize: "20px",
      height: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: `2px solid ${theme.palette.border.main}`,
    },
    menuItemText: ({ isActive }) => ({
      color: isActive ? theme.palette.typography.active : theme.palette.typography.main,
    }),
  });
