import React, { Component } from "react";
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

const WellbeingPieGraph = () => {
  const data = [
    { angle: 9, subLabel: "Lonely (8-9)", color: "#EBEDEE" },
    { angle: 5, subLabel: "Ok (5-7)" },
    { angle: 3, subLabel: "Not lonely (3-4)" }
  ];

  return (
    <>
      <ChartLabel
        text="UCLA 3 Overall Current Wellbeing"
        // margin={{ left: 40, right: 40, top: 10, bottom: 10 }}
      />
      <RadialChart
        data={data}
        innerRadius={100}
        width={200}
        height={200}
        showLabels="true"
        labelsRadiusMultiplier="1.5"
      />
    </>
  );
};

export default WellbeingPieGraph;
