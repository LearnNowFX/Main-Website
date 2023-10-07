export const theme = {
  palette: {
    background: {},
    typography: {
      main: "#ffffff",
      faded: "#4d4f51",
    },
    footer: {
      main: "#0f1010",
    },
    paper: {},
    button: {
      icon: "#515151",
    },
    icon: {
      main: "#ffffff",
    },
  },
  typography: {
    font: "Oswald",
    size: {
      header: "30px",
      title: "28px",
      subtitle: "20px",
      content: "14px",
    },
  },
  padding: (amount: number) => `${amount}px`,
  margin: (amount: number) => `${amount}px`,
};
