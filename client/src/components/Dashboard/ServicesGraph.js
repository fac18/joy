import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  HorizontalBarSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  ChartLabel,
} from 'react-vis';

const ServicesGraph = () => {
  const data = [
    { x: 22, y: 'Support for people with SEND' },
    { x: 12, y: 'South Berkshire PCN' },
    { x: 8, y: 'Social prescribing (Reading)' },
    { x: 8, y: 'Green & Tidy Gardening' },
    { x: 8, y: 'Wokingham Community Transport' },
    { x: 4, y: 'Coffee Morning' },
    { x: 5, y: 'Learning Spanish' },
    { x: 1, y: 'Pub lunch' },
    { x: 2, y: 'Community Kitchen Project' },
    { x: 6, y: 'Dementia Wellbeing' },
    { x: 5, y: 'Modern Dance' },
    { x: 3, y: 'Alpha Course' },
    { x: 0, y: 'Mens Cooking' },
    { x: 4, y: 'Information and Advice' },
  ];
  return (
    <XYPlot
      style={{ margin: 'auto', backgroundColor: 'white' }}
      yType="ordinal"
      height={500}
      width={450}
      margin={{ left: 200, bottom: 70 }}
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis title="% Wellbeing Increase" />
      <YAxis />
      <ChartLabel
        text="% Wellbeing Increase"
        xPercent={0.6}
        yPercent={0.55}
        style={{
          textAnchor: 'start',
        }}
      />
      <HorizontalBarSeries color="#2F586D" data={data} />
    </XYPlot>
  );
};

export default ServicesGraph;
