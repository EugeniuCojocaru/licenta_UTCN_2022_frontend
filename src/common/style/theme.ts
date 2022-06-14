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
  },
});

export default theme;
