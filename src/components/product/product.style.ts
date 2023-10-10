import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      backgroundColor: "black",
      width: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "10px",
      aspectRatio: 16 / 9,
    },
    textContainer: {
      marginTop: "10px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    title: {
      fontSize: "16px",
      fontWeight: 400,
      width: "60%",
      textAlign: "left",
    },
    info: {
      marginTop: "10px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    action: {
      width: "150px",
      display: "flex",
      alignItems: "center",
    },
    cost: {
      fontSize: "16px",
      fontWeight: 400,
    },
  });
