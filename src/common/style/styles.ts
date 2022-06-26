export const colors = {
  appBackground: "#d4d4d4",
  shadow: "rgba(0, 0, 0, 0.08)",
  white: "#FFFFFF",
  red: "#B3000B",
  buttonPrimary: "#2c2c2f",
  text: "rgb(123, 128, 154)",
  gradient: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
};

export const fonts = {};

export const classes = {
  button: {
    primary: {
      backgroundImage:
        "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
    },
    secondary: {
      color: colors.buttonPrimary,
      border: "2px solid",
    },
    sideMenu: {
      padding: 0,
      backgroundColor: "transparent",
    },
    icon: {
      padding: 0,
    },
  },
};

export const sxClasses = {
  select: {
    ".MuiInput-input:focus": {
      backgroundColor: "transparent",
    },
  },
  modal: {
    bgcolor: "#FFF",
    boxShadow: "2px 0 4px 0 rgba(0,0,0,0.08)",
    borderRadius: "8px",
    p: 2,
    px: 4,
    pb: 3,
  },
};
