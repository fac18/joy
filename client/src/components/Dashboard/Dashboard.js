import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../NavBar/NavBar";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import LoadingPage from "../LoadingPage/LoadingPage";
import TotalsChart from "./TotalsChart";
import WellBeingPieChart from "./WellBeingPieChart";
import ServicesPopularityChart from "./ServicesPopularityChart";
import '../LoginPage/loginmodal.css';

const useStyles = makeStyles({
  root: {
    margin: "auto",
    textAlign: "center",
    fontFamily: "Source Sans Pro"
  },
  emphasis: {
    fontSize: 40,
    color: "#E71F67",
    margin: "1rem"
  }
});

const Dashboard = ({
  totalClients,
  setTotalClients,
  totalServices,
  setTotalServices,
  wellbeingTotals,
  setWellbeingTotals,
  servicesPopularity,
  setServicesPopularity
}) => {
  const classes = useStyles();

  // if (setTotalClients < 3) {
  //   return (
  //     <div className="load">
  //     <img alt="loading" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
  //     </div>
  //   );
  // }

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
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
