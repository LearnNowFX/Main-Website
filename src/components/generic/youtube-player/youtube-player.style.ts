import { createStyles } from "src/styles/create-styles";
import { theme } from "src/styles/theme";

export const useStyles = () =>
  createStyles({
    container: {
      maxHeight: "400px",
      padding: "20px 0px",
      width: "80%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: `1px solid ${theme.palette.border.main}`,
      borderRadius: "20px",
    },
    actionsContainer: {
      marginTop: "10px",
      width: "80%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    title: {
      fontSize: "16px",
      fontWeight: 400,
      width: "80%",
      textAlign: "left",
      height: "100%",
      lineHeight: 1.1,
    },
    dialog: {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.18)",
    },
    videoPlayer: {
      padding: "20px",
    },
    playButton: {
      padding: "5px",
      marginRight: "15px",
      borderRadius: 0,
      backgroundImage: "linear-gradient(180deg,#296ad4,#1656c1,#0343ae)",
    },
    playIcon: {
      color: theme.palette.typography.main,
    },
  });
