import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        required: true,
        fullWidth: true,
        InputLabelProps: { shrink: true },
        variant: "standard",
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:after": {
            color: "#FFF",
          },
        },
      },
    },
  },
});

export default theme;
