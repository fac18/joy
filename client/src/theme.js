import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    // Pinks
    primary: {
      main: "#E91E63",
      light: "#eb4b85",
      dark: "#a11548"
    },
    // Greens
    secondary: {
      main: "#A0B43B",
      light: "#b3c362",
      dark: "#707d29"
    }
  },
  typography: {
    fontFamily: [
      "Source Sans Pro",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Shadows Into Light Two"
    ].join(",")
  }
});

export default theme;
