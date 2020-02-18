import React, { Component, useEffect } from "react";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  ChartLabel,
  RadialChart,
  LabelSeries
} from "react-vis";
import { makeStyles } from "@material-ui/core";
import getRequest from "../../utils/getData";

const useStyles = makeStyles({
  root: {
    color: "red"
  }
});

let overallWellbeingObject = function(wellbeing) {
  return {
    // wellbeing object goes here
  };
};

const WellbeingPieGraph = ({ wellbeingTotals, setWellbeingTotals }) => {
  useEffect(() => {
    getRequest("/getwellbeingtotals").then(res => {
      setWellbeingTotals(res);
      // console.log(wellbeingTotals);
    });
  }, []);

  const classes = useStyles();
  const data = [
    { angle: 5, subLabel: "3" },
    { angle: 5, subLabel: "4" },
    { angle: 5, subLabel: "5" },
    { angle: 5, subLabel: "6" },
    { angle: 5, subLabel: "7" },
    { angle: 5, subLabel: "8" },
    { angle: 5, subLabel: "9" }
  ];

  return (
    <>
      <RadialChart
        data={data}
        width={300}
        height={300}
        showLabels="true"
        // labelsRadiusMultiplier="0.8"
      />
      <ChartLabel
        text="UCLA 3 Overall Current Wellbeing"
        // xPercent={0.6}
        // yPercent={0.55}
        // style={{
        //   textAnchor: "end"
        // }}
      />
    </>
  );
};

export default WellbeingPieGraph;
