import React, { Component, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Chart from "react-apexcharts";
import getRequest from "../../utils/getData";

const useStyles = makeStyles({
  root: {
    color: "red"
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
      fill: {
        colors: ["rgb(255, 69, 96)", "rgb(0, 227, 150)", "rgb(0, 143, 251)"]
      },
      labels: [
        "HIGH RISK (Lonely 8-9)",
        "MEDIUM RISK (5-7)",
        "LOW RISK (Not Lonely 3-4)"
      ],

      colors: ["rgb(255, 69, 96)", "rgb(0, 227, 150)", "rgb(0, 143, 251)"],

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
    <div className="donut">
      <Chart
        options={wellbeingTotals.options}
        series={wellbeingTotals.options.series}
        type="pie"
        width="380"
      />
    </div>
  );
};

export default WellbeingPieGraph;
