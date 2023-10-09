import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    image: {
      backgroundColor: "black",
      width: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "10px",
      aspectRatio: 16 / 9,
    },
  });
