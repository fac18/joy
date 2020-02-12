import React, { Component } from "react";
import "./App.css";
import LandingPage from "../src/components/LandingPage/LandingPage";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <LandingPage />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
