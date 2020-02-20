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
  },
  emphasis: {
    fontSize: 40,
    color: "#E71F67"
  }
});

const TotalsChart = ({
  totalClients,
  setTotalClients,
  totalServices,
  setTotalServices
}) => {
  const classes = useStyles();

  useEffect(() => {
    getRequest("/gettotalclients").then(data => {
      setTotalClients(data);
    });
  }, []);

  useEffect(() => {
    getRequest("/gettotalservices").then(data => {
      setTotalServices(data);
    });
  }, []);

  return (
    <Card className={classes.card}>
      {totalClients && totalClients.length && (
        <span className={classes.emphasis}>
          {" "}
          {totalClients[0].count} clients!
        </span>
      )}
      <p variant="h6" component="h6">
        You currently have
      </p>
      {/* if services and services.length are TRUTHY, then render the output because services INITIALIZES AS AN EMPTY ARRAY */}
      {totalServices && totalServices.length && (
        <Typography variant="h2" component="h2" className={classes.emphasis}>
          {" "}
          {totalServices[0].count}{" "}
        </Typography>
      )}
      <Typography variant="h2" component="h2" className={classes.emphasis}>
        Services
      </Typography>
    </Card>
  );
};

export default TotalsChart;
