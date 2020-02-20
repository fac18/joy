import React from 'react';
import ServicesGraph from './ServicesGraph';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import NavBar from '../NavBar/NavBar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import LoadingPage from '../LoadingPage/LoadingPage';
import TotalsChart from './TotalsChart';
import WellBeingPieChart from './WellBeingPieChart';
import ServicesPopularityChart from './ServicesPopularityChart';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
  },
  card: {
    minWidth: 275,
    maxWidth: 500,
    backgroundColor: '#EBEDEE',
    margin: 'auto',
    marginTop: 25,
    padding: 20,
    color: '#676767',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 20,
  },
  emphasis: {
    fontSize: 40,
    color: '#E71F67',
  },
});

const Dashboard = ({
  totalClients,
  setTotalClients,
  totalServices,
  setTotalServices,
  wellbeingTotals,
  setWellbeingTotals,
  servicesPopularity,
  setServicesPopularity,
}) => {
  const classes = useStyles();

  if (totalClients === 1) {
    return <LoadingPage />;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <NavBar />
        <h2 className={classes.emphasis}>My Dashboard</h2>
        <TotalsChart
          totalClients={totalClients}
          setTotalClients={setTotalClients}
          totalServices={totalServices}
          setTotalServices={setTotalServices}
        />
        <WellBeingPieChart
          wellbeingTotals={wellbeingTotals}
          setWellbeingTotals={setWellbeingTotals}
        />
        <ServicesPopularityChart
          servicesPopularity={servicesPopularity}
          setServicesPopularity={setServicesPopularity}
        />
        <Card className={classes.card}>
          <ServicesGraph />
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
