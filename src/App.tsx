import React from "react";
import { RouterPicker } from "./components/Router";
import { ThemeProvider } from "@mui/styles";
import theme from "./common/style/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterPicker />
    </ThemeProvider>
  );
}

export default App;
