import React, { Component } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis';

const ServicesGraph = () => {
  const data = [
    { x: 'Local Offer - support for people with SEND', y: 8 },
    { x: 'South Berkshire PCN Social Prescribing', y: 8 },
    { x: 'Social prescribing service (Reading)', y: 8 },
    { x: 'Green ‘n’ Tidy Gardening', y: 8 },
    { x: 'Wokingham Community Transport Scheme', y: 5 },
    { x: 'Coffee Morning', y: 4 },
    { x: 'Learning Spanish', y: 9 },
    { x: 'Pub lunch', y: 1 },
    { x: 'Community Kitchen Project', y: 7 },
    { x: 'Dementia Wellbeing & Befriending', y: 6 },
    { x: 'Modern Dance ', y: 3 },
    { x: 'Alpha Course', y: 2 },
    { x: 'Mens Cooking', y: 0 },
    { x: 'Information and Advice', y: 0 }
  ];
  return (
    <div>
      <XYPlot xType='ordinal' height={300} width={300} stackBy='y'>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data} />
      </XYPlot>
    </div>
  );
};

export default ServicesGraph;
