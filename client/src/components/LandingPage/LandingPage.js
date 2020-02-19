import React from "react";
import { ReactComponent as LandingPageSvg } from "../../assets/landing-page.svg";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import LoginModal from "../LoginPage/LoginModal";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  logo: {
    padding: "2rem 1rem 1rem 1rem",
    height: "70px"
  },
  pinkButton: {
    background: "#E71F67",
    color: "white",
    "&:hover": {
      backgroundColor: "#a11548"
    },
    padding: "10px 20px",
    margin: "2rem auto"
  }
});

const LandingPage = () => {
  const [show, setShow] = React.useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <LoginModal show={show} handleClose={hideModal}>
            <p>Modal</p>
            <p>Data</p>
          </LoginModal>
          <LogoSvg className={classes.logo} />
          <Typography variant="h3" component="h3">
            Efficacy Tool
          </Typography>
          <Button
            className={classes.pinkButton}
            variant="container"
            size="large"
            onClick={showModal}
          >
            START LOGIN
          </Button>
          <LandingPageSvg />
        </div>
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
