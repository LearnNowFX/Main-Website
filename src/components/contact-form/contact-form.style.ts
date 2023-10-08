import { theme } from "src/styles/theme";
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      margin: theme.margin(50),
    },
    input: {
      margin: theme.margin(5),
      width: "300px",
    },
    button: {
      margin: `10px 5px`,
      padding: "10px 40px",
      color: theme.palette.typography.main,
      borderRadius: "0",
      fontSize: "16px",
      backgroundImage: "linear-gradient(180deg,#296ad4,#1656c1,#0343ae)",
    },
  });
