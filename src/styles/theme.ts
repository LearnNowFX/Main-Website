export const theme = {
  palette: {
    background: {
      main: "#0e0e10",
    },
    typography: {
      main: "#ffffff",
      faded: "#4d4f51",
      hover: "#2a92e5",
      active: "#2a92e5",
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
    border: {
      main: "#262b33",
    },
    input: {
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
