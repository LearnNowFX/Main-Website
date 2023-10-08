import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      width: "100vw",
      display: "flex",
      justifyContent: "space-between",
      minHeight: "50px",
      background: "linear-gradient(150deg,#090a0d,#1a1d24,#090a0d)",
    },
    logoContainer: {
      padding: "10px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
    },
    logo: {
      height: "65px",
    },
  });
