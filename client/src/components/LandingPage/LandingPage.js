import React from "react";
import { ReactComponent as LandingPageSvg } from "../../assets/landing-page.svg";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
// import LoginModal from "../LoginPage/LoginModal";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // display: "flex",

    flexWrap: "wrap",
    margin: "0 auto"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 250
  },
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
    padding: "0.5rem",
    margin: "2rem auto",
    fontWeight: "bold",
    width: "200px"
  },
  greenButton: {
    background: "#A0B43B",
    color: "white",
    "&:hover": {
      backgroundColor: "#707E29"
    },
    padding: "0.5rem",
    margin: "0.5rem auto",
    fontWeight: "bold",
    width: "200px",
    bottom: "1rem"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: "50px",
    marginTop: "2rem"
  },
  mainLink: {
    textDecoration: "none"
  },
  userIcon: {
    color: "rgba(0, 0, 0, 0.54)"
  }
});

<<<<<<< HEAD
const LandingPage = (props) => {
  
  const [show, setShow] = React.useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
=======
const LandingPage = () => {
  // const [show, setShow] = React.useState(false);
  // const showModal = () => setShow(true);
  // const hideModal = () => setShow(false);
>>>>>>> a79314a1ea1c50185a9473e872c428329c8b77e0

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <LoginModal show={show} handleClose={hideModal}>
            <p>Modal</p>
            <p>Data</p>
          </LoginModal> */}
          <LogoSvg className={classes.logo} />
          <Typography variant="h3" component="h3">
            Efficacy Tool
          </Typography>
          <Button
            className={classes.pinkButton}
            variant="container"
            size="large"
            // onClick={showModal}
            type="button"
            onClick={handleOpen}
          >
            Start Login
          </Button>
          <LandingPageSvg />
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <LogoSvg className={classes.logo} />
                <h2 id="transition-modal-title">Please log in below:</h2>
                <div className={classes.root}>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="filled"
                  >
                    <InputLabel htmlFor="filled-adornment-username">
                      Username
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-username"
                      value={values.weight}
                      onChange={handleChange("weight")}
                      endAdornment={
                        <InputAdornment position="end">
                          <AccountCircle className={classes.userIcon} />
                        </InputAdornment>
                      }
                      aria-describedby="filled-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight"
                      }}
                    />
                  </FormControl>
                  <div className={classes.root}>
                    <FormControl
                      className={clsx(classes.margin, classes.textField)}
                      variant="filled"
                    >
                      <InputLabel htmlFor="filled-adornment-password">
                        Password
                      </InputLabel>
                      <FilledInput
                        id="filled-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                </div>

                <Link className={classes.mainLink} to="/dashboard">
                  <Button
                    className={classes.pinkButton}
                    variant="container"
                    size="medium"
                    // onClick={event => setLogin(event.target.value)}
                  >
                    Login
                  </Button>
                </Link>
                <Button
                  className={classes.greenButton}
                  variant="container"
                  size="medium"
                  onClick={handleClose}
                >
                  Exit
                </Button>
              </div>
            </Fade>
          </Modal>
        </div>
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
