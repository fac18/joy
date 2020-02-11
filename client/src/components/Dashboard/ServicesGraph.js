import React, { Component } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  XYPlot,
  HorizontalBarSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  ChartLabel
} from 'react-vis';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    margin: 'auto',
    color: grey
  }
});

const ServicesGraph = () => {
  const data = [
    { x: 22, y: 'Local Offer - support for people with SEND' },
    { x: 123, y: 'South Berkshire PCN Social Prescribing' },
    { x: 8, y: 'Social prescribing service (Reading)' },
    { x: 8, y: 'Green ‘n’ Tidy Gardening' },
    { x: 8, y: 'Wokingham Community Transport Scheme' },
    { x: 4, y: 'Coffee Morning' },
    { x: 5, y: 'Learning Spanish' },
    { x: 1, y: 'Pub lunch' },
    { x: 2, y: 'Community Kitchen Project' },
    { x: 6, y: 'Dementia Wellbeing & Befriending' },
    { x: 5, y: 'Modern Dance' },
    { x: 3, y: 'Alpha Course' },
    { x: 0, y: 'Mens Cooking' },
    { x: 0, y: 'Information and Advice' }
  ];
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <XYPlot
        style={{ margin: 'auto' }}
        yType='ordinal'
        height={300}
        width={300}
        stackBy='y'
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <ChartLabel
          text='% wellbeing increase'
          xPercent={0.9}
          yPercent={0.9}
          style={{
            textAnchor: 'end'
          }}
        />
        <HorizontalBarSeries data={data} />
      </XYPlot>
    </Card>
  );
};

export default ServicesGraph;
