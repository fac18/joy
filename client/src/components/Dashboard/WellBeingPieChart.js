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
  },
  horizontal: {
    display: "flex"
  }
});

const WellbeingPieGraph = ({
  totalClients,
  setTotalClients,
  initialWellbeingTotals,
  setInitialWellbeingTotals,
  currentWellbeingTotals,
  setCurrentWellbeingTotals
}) => {
  const classes = useStyles();

  useEffect(() => {
    getRequest("/getinitialwellbeingtotals").then(data => {
      setInitialWellbeingTotals(data);
    });
  }, []);
  useEffect(() => {
    getRequest("/getcurrentwellbeingtotals").then(data => {
      setCurrentWellbeingTotals(data);
    });
  }, []);

  useEffect(() => {
    getRequest("/gettotalclients").then(data => {
      setTotalClients(data);
    });
  }, []);

  if (!initialWellbeingTotals || initialWellbeingTotals.length === 0) {
    return null;
  } else {
    console.log("initialWellbeingTotals:", initialWellbeingTotals);
  }

  if (!currentWellbeingTotals || currentWellbeingTotals.length === 0) {
    return null;
  } else {
    console.log("currentWellbeingTotals:", currentWellbeingTotals);
  }

  if (!totalClients || totalClients.length === 0) {
    return null;
  } else {
    console.log("totalClients:", totalClients);
  }

  initialWellbeingTotals = {
    options: {
      series: [
        (initialWellbeingTotals[0].lonely_8_9 * 100) / 100,
        (initialWellbeingTotals[0].ok_5_6_7 * 100) / 100,
        (initialWellbeingTotals[0].not_lonely_3_4 * 100) / 100,
        totalClients[0].count -
          initialWellbeingTotals[0].lonely_8_9 -
          initialWellbeingTotals[0].ok_5_6_7 -
          initialWellbeingTotals[0].not_lonely_3_4
      ],
      chart: {
        width: 350,
        type: "pie"
      },
      labels: [
        `HIGH risk (Level 8-9)`,
        `MED risk (Level 5-7)`,
        `LOW risk (Level 3-4)`,
        `No assessments yet`
      ],
      colors: [
        "rgb(255, 69, 96)",
        "rgb(0, 227, 150)",
        "rgb(0, 143, 251)",
        "rgb(119, 93, 208)"
      ],
      fill: {
        colors: [
          "rgb(255, 69, 96)",
          "rgb(0, 227, 150)",
          "rgb(0, 143, 251)",
          "rgb(119, 93, 208)"
        ]
      },
      legend: {
        position: "bottom",
        onItemClick: {
          toggleDataSeries: false
        },
        horizontalAlign: "center"
        // paddingLeft: "4rem"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350
            },
            legend: {
              position: "right"
            }
          }
        }
      ]
    }
  };
  currentWellbeingTotals = {
    options: {
      series: [
        (currentWellbeingTotals[0].lonely_8_9 * 100) / 100,
        (currentWellbeingTotals[0].ok_5_6_7 * 100) / 100,
        (currentWellbeingTotals[0].not_lonely_3_4 * 100) / 100,
        totalClients[0].count -
          currentWellbeingTotals[0].lonely_8_9 -
          currentWellbeingTotals[0].ok_5_6_7 -
          currentWellbeingTotals[0].not_lonely_3_4
      ],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: [
        `HIGH risk (Level 8-9)`,
        `MED risk (Level 5-7)`,
        `LOW risk (Level 3-4)`,
        `NO ASSESSMENTS`
      ],
      colors: [
        "rgb(255, 69, 96)",
        "rgb(0, 227, 150)",
        "rgb(0, 143, 251)",
        "rgb(119, 93, 208)"
      ],
      fill: {
        colors: [
          "rgb(255, 69, 96)",
          "rgb(0, 227, 150)",
          "rgb(0, 143, 251)",
          "rgb(119, 93, 208)"
        ]
      },
      legend: {
        //   position: "bottom",
        //   onItemClick: {
        //     toggleDataSeries: true
        //   },
        show: false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350
            }
            // legend: {
            //   position: "bottom"
            // }
          }
        }
      ]
    }
  };

  return (
    <Card className={classes.card}>
      <Typography className={classes.header} variant="h5" component="h5">
        Overall UCLA3 Wellbeing
      </Typography>
      <div className={classes.horizontal}>
        <div>
          <Typography className={classes.header} variant="h6" component="h6">
            Initial Score
          </Typography>
          <Chart
            className={classes.chart}
            options={initialWellbeingTotals.options}
            series={initialWellbeingTotals.options.series}
            type="pie"
            width="250"
            height="280"
          />
        </div>
        <div>
          <Typography className={classes.header} variant="h6" component="h6">
            Current Score
          </Typography>
          <Chart
            className={classes.chart}
            options={currentWellbeingTotals.options}
            series={currentWellbeingTotals.options.series}
            type="pie"
            width="250"
            height="280"
          />
        </div>
      </div>
    </Card>
  );
};

export default WellbeingPieGraph;
