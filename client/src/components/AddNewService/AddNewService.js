import React from "react";
import { ReactComponent as LogoSvg } from "../../svgs/logo.svg";
// import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";

const AddNewService = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
        <LogoSvg />
        <h1>Add New Service Page</h1>
    </ThemeProvider>
    </>
  );
};

export default AddNewService;
