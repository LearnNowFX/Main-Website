import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    menu: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      minWidth: "300px",
      width: "100%",
      maxWidth: "600px",
      margin: "10px 30px",
    },
    button: ({ isActive }) => ({
      width: "100px",
      height: "40px",
      color: isActive ? theme.palette.typography.active : theme.palette.typography.main,
      background: "linear-gradient(180deg,#181b1e,#262b33)",
      borderWidth: "2px",
      borderStyle: "solid",
      borderImage: isActive
        ? "linear-gradient(90deg,transparent,#064faa,transparent) 1"
        : "linear-gradient(0deg,#16181e,#14171d,#16181e) 1",
      margin: "0 5px",
      borderRadius: 0,
      "&:hover": {
        color: theme.palette.typography.hover,
      },
    }),
  });
