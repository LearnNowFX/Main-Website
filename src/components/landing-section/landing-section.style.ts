import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    container: {
      maxWidth: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    info: {
      marginTop: "-250px",
      maxWidth: "70vw",
      position: "absolute",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(10px)",
      borderRadius: "10px",
      padding: "20px 30px",
      border: "1px solid rgba(255,255,255,0.2)",
      boxShadow: "10px 10px 30px rgba(0,0,0,0.2)",
    },
    title: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: 400,
      filter: "drop-shadow(10px 10px 30px rgba(0,0,0,1))",
    },
    subtitle: {
      textAlign: "center",
      fontSize: "1rem",
      fontWeight: 300,
      marginBottom: "20px",
      filter: "drop-shadow(10px 10px 30px rgba(0,0,0,1))",
    },
    buttonContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      padding: "5px 20px",
      textAlign: "center",
      fontSize: "18px",
      fontWeight: 400,
      marginBottom: "20px",
    },
  });
