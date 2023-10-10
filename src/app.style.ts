import { createStyles } from "./styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      alignContent: "space-between",
    },
  });
