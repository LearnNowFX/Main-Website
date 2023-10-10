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
      margin: "5vw",
      marginBottom: theme.margin(100),
    },
    input: {
      margin: theme.margin(5),
      width: "300px",
    },
    captcha: {
      marginTop: theme.margin(10),
      width: "300px",
      transform: "scale(0.8) translateX(7px)",
      transformOrigin: "0 0",
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
