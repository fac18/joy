import React, { Component, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Chart from "react-apexcharts";
import getRequest from "../../utils/getData";
import upArrow from "../../assets/up-arrow.svg";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 500,
    backgroundColor: "#EBEDEE",
    margin: "auto",
    marginTop: 25,
    padding: 20,
    color: "#676767",
    display: "flex",
    flexDirection: "column",
    fontSize: 20
  },
  chart: {
    margin: "0 auto"
  }
});

const TotalServices = ({ services, setServices }) => {
  const classes = useStyles();

  useEffect(() => {
    getRequest("/getallservices").then(data => {
      setServices(data);
    });
  }, []);

  return (
    <Card className={classes.card}>
      <Typography variant="h5" component="h5">
        Total No. of Services
      </Typography>
      <img className={classes.arrow} alt="profile" src={upArrow} />
      {/* if services and services.length are TRUTHY, then render the output because services INITIALIZES AS AN EMPTY ARRAY */}
      {services && services.length && (
        <h3>
          You currently have:
          <span className={classes.emphasis}>
            {" "}
            {services[0].count} services!
          </span>
        </h3>
      )}
    </Card>
  );
};

export default TotalServices;
