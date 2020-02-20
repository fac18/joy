import React, { Component, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
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
  arrow: {
    width: 80,
    margin: "0 2rem"
  },
  emphasis: {
    color: "#E71F67"
  },
  horizontalContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "1rem"
  },
  verticalContainer: {
    display: "block"
  },
  paragraph: {
    margin: 0,
    color: "#E71F67"
  },
  header: {
    fontWeight: "bold"
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
      <Typography className={classes.header} variant="h5" component="h5">
        You currently have:
      </Typography>
      <div className={classes.horizontalContainer}>
        <div className={classes.verticalContainer}>
          {/* if totalClients and totalClients.length are TRUTHY, then render the output because totalClients INITIALIZES AS AN EMPTY ARRAY */}
          {totalClients && totalClients.length && (
            <Typography
              variant="h3"
              component="h3"
              className={classes.emphasis}
            >
              {totalClients[0].count}
            </Typography>
          )}
          <Typography variant="h5" component="h5" className={classes.emphasis}>
            Clients
          </Typography>
        </div>
        <div className={classes.verticalContainer}>
          <img className={classes.arrow} alt="profile" src={upArrow} />
        </div>
        <div className={classes.verticalContainer}>
          {/* if totalServices and totalServices.length are TRUTHY, then render the output because totalServices INITIALIZES AS AN EMPTY ARRAY */}
          {totalServices && totalServices.length && (
            <Typography
              variant="h3"
              component="h3"
              className={classes.emphasis}
            >
              {totalServices[0].count}
            </Typography>
          )}
          <Typography variant="h5" component="h5" className={classes.emphasis}>
            Services
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default TotalsChart;
