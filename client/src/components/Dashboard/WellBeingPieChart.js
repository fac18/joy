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
  },
  header: {
    fontWeight: "bold"
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
    return null;
  } else {
    console.log("wellbeingTotals:", wellbeingTotals);
  }

  wellbeingTotals = {
    options: {
      series: [
        (wellbeingTotals[0].lonely_8_9 * 100) / 100,
        (wellbeingTotals[0].ok_5_6_7 * 100) / 100,
        (wellbeingTotals[0].not_lonely_3_4 * 100) / 100
      ],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: [
        `${wellbeingTotals[0].lonely_8_9} clients at HIGH risk (UCLA3 level 8-9)`,
        `${wellbeingTotals[0].ok_5_6_7} clients at MEDIUM risk (UCLA3 level 5-7)`,
        `${wellbeingTotals[0].not_lonely_3_4} clients at LOW risk (UCLA3 level 3-4)`
      ],

      colors: ["rgb(255, 69, 96)", "rgb(0, 227, 150)", "rgb(0, 143, 251)"],
      fill: {
        colors: ["rgb(255, 69, 96)", "rgb(0, 227, 150)", "rgb(0, 143, 251)"]
      },
      legend: {
        position: "bottom",
        onItemClick: {
          toggleDataSeries: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350
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
      <Typography className={classes.header} variant="h5" component="h5">
        Overall UCLA3 Wellbeing Score
      </Typography>
      <Chart
        className={classes.chart}
        options={wellbeingTotals.options}
        series={wellbeingTotals.options.series}
        type="pie"
        width="400"
      />
    </Card>
  );
};

export default WellbeingPieGraph;
