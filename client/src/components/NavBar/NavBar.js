import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import NavMenu from "../NavBar/NavMenu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    bgcolor: "#000000",
    padding: 0,
    margin: 0
  },
  logo: {
    paddingTop: "0vh",
    height: "30px",
    width: "calc(100% - 130px)"
    // margin: "auto"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#FFF" }}>
        <Toolbar>
          <NavMenu />
          <LogoSvg className={classes.logo} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
