import React, { Component } from "react";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  ChartLabel
} from "react-vis";

const ServicesGraph = () => {
  const data = [
    { x: "HIGH (8-9)", y: 9 },
    { x: "MEDIUM (5-7)", y: 18 },
    { x: "LOW (3-4)", y: 3 }
  ];
  return (
    <XYPlot
      style={{ margin: "auto", backgroundColor: "white" }}
      xType="ordinal"
      height={500}
      width={450}
      margin={{ top: 50, right: 50, bottom: 100, left: 70 }}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      <ChartLabel
        text="Overall Wellbeing"
        xPercent={0.45}
        yPercent={0.75}
        style={{
          textAnchor: "start"
        }}
      />
      <VerticalBarSeries color="pink" data={data} />
    </XYPlot>
  );
};

export default ServicesGraph;
