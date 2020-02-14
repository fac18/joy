import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ReactComponent as LogoSvg } from "../../svgs/logo.svg";
import NavMenu from "../NavBar/NavMenu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    bgcolor: "#000000"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  logo: {
    paddingTop: "0vh",
    height: "30px",
    margin: "auto"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#FFF" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
          >
            <NavMenu />
          </IconButton>
          <LogoSvg className={classes.logo} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
