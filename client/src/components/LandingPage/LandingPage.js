import React from "react";
import { ReactComponent as LogoSvg } from "../../svgs/logo.svg";
import { ReactComponent as LandingPageSvg } from "../../svgs/landing-page.svg";
import { makeStyles } from "@material-ui/core/styles";
// import { StylesProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  logo: {
    paddingTop: "5vh",
    height: "70px"
  },
  button: {
    background: "#E71F67",
    color: "white",
    "&:hover": {
      backgroundColor: "#f06292"
    },
    padding: "10px 20px"
  }
});

const LandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <LogoSvg className={classes.logo} />
      <LandingPageSvg />
      <Button variant="contained" color="primary">
        Go to Dashboard
      </Button>
    </>
  );
};

export default LandingPage;
