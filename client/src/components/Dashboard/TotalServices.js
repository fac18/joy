import React, { Component, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import upArrow from "../../assets/up-arrow.svg";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import getRequest from "../../utils/getData";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    textAlign: "center",
    fontFamily: "Source Sans Pro"
  },
  card: {
    minWidth: 275,
    maxWidth: 500,
    backgroundColor: "#EBEDEE",
    margin: "auto",
    marginTop: 25,
    padding: 20,
    color: "#676767",
    display: "flex",
    flexDirection: "row",
    fontSize: 20
  },
  arrow: {
    width: 130,
    padding: 10
  },
  emphasis: {
    fontSize: 40,
    color: "#E71F67"
  }
});

const TotalServices = ({ services, setServices }) => {
  // useEffect(() => {
  //   getRequest("/getTotalServices").then(res => {
  //     setServices(res);
  //   });
  // }, []);

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Card className={classes.card}>
          <img className={classes.arrow} src={upArrow} />
          <h3>
            You currently have:
            <span className={classes.emphasis}> {services} services</span>
          </h3>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default TotalServices;
