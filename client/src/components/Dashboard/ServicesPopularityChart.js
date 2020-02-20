import React, { Component, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import '../../../node_modules/react-vis/dist/style.css';
import getRequest from '../../utils/getData';
import Card from '@material-ui/core/Card';
import ReactApexChart from 'react-apexcharts';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 500,
    backgroundColor: '#EBEDEE',
    margin: 'auto',
    marginTop: 25,
    padding: 20,
    color: '#676767',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 20,
  },
  header: {
    fontWeight: 'bold',
  },
});

const ServicesPopularityGraph = ({
  servicesPopularity,
  setServicesPopularity,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getRequest('/getservicespopularity').then(data => {
      setServicesPopularity(data);
    });
  }, []);

  if (!servicesPopularity || servicesPopularity.length === 0) {
    console.log('pants');
    return null;
  } else {
    console.log('ServicesPopularity:', servicesPopularity);
  }

  servicesPopularity = {
    series: [
      {
        data: [
          servicesPopularity[0].sum,
          servicesPopularity[1].sum,
          servicesPopularity[2].sum,
          servicesPopularity[3].sum,
          servicesPopularity[4].sum,
        ],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          servicesPopularity[0].service_name,
          servicesPopularity[1].service_name,
          servicesPopularity[2].service_name,
          servicesPopularity[3].service_name,
          servicesPopularity[4].service_name,
        ],
      },
    },
  };

  return (
    <Card className={classes.card}>
      <Typography className={classes.header} variant="h5" component="h5">
        Top 5 Referral Services
      </Typography>
      <ReactApexChart
        options={servicesPopularity.options}
        series={servicesPopularity.series}
        type="bar"
        height={250}
      />
    </Card>
  );
};

export default ServicesPopularityGraph;
