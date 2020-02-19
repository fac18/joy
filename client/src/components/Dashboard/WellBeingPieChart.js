import React, { Component, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Chart from "react-apexcharts";
import getRequest from "../../utils/getData";

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

const WellbeingPieGraph = ({ wellbeingTotals, setWellbeingTotals }) => {
  const classes = useStyles();

  useEffect(() => {
    getRequest("/getwellbeingtotals").then(data => {
      setWellbeingTotals(data);
    });
  }, []);

  if (!wellbeingTotals || wellbeingTotals.length === 0) {
    console.log("pooh");
    return null;
  } else {
    console.log(
      "I am wellbeing TOTAL!",
      wellbeingTotals,
      wellbeingTotals[0].total_ucla3,
      wellbeingTotals[0].count,
      wellbeingTotals[1].total_ucla3,
      wellbeingTotals[1].count,
      wellbeingTotals[2].total_ucla3,
      wellbeingTotals[2].count
    );
  }

  wellbeingTotals = {
    options: {
      series: [
        wellbeingTotals[0].count * 100,
        wellbeingTotals[1].count * 100,
        wellbeingTotals[2].count * 100
      ],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Lonely 8-9", "OK 5-7", "Not Lonely 3-4"],
      colors: ["rgb(255, 69, 96)", "rgb(0, 227, 150)", "rgb(0, 143, 251)"],
      fill: {
        colors: ["rgb(255, 69, 96)", "rgb(0, 227, 150)", "rgb(0, 143, 251)"]
      },
      legend: {
        position: "bottom",
        verticalAlign: "center",
        onItemClick: {
          toggleDataSeries: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
  };

  return (
    <Card className={classes.card}>
      <Typography variant="h5" component="h5">
        Overall Wellbeing Score
      </Typography>
      <Chart
        className={classes.chart}
        options={wellbeingTotals.options}
        series={wellbeingTotals.options.series}
        type="pie"
        width="380"
      />
    </Card>
  );
};

export default WellbeingPieGraph;
