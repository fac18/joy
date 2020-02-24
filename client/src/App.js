import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from '../src/components/LandingPage/LandingPage';
import SearchClient from '../src/components/SearchClient/SearchClient';
import ClientProfile from '../src/components/ClientProfile/ClientProfile';
import WellbeingAssessment from '../src/components/WellbeingAssessment/WellbeingAssessment';
import RegisterClient from './components/RegisterClient/RegisterClient';
import ReferralForm from './components/ReferralForm/ReferralForm';
// import RegisterSuccess from './components/RegisterClient/RegisterSuccess';

const App = () => {
  const [clients, setClients] = React.useState([{}]);
  const [totalClients, setTotalClients] = React.useState([]);
  const [totalServices, setTotalServices] = React.useState([]);
  const [singleClient, setSingleClient] = React.useState(null);
  const [wellbeingTotals, setWellbeingTotals] = React.useState([]);
  const [servicesPopularity, setServicesPopularity] = React.useState([]);

  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/registerClient" component={RegisterClient} />
      {/* <Route exact path="/registerClientSuccess" component={RegisterSuccess} />      */}
      <Route
        path="/dashboard"
        render={() => (
          <Dashboard
            clients={clients}
            setClients={setClients}
            totalClients={totalClients}
            setTotalClients={setTotalClients}
            totalServices={totalServices}
            setTotalServices={setTotalServices}
            wellbeingTotals={wellbeingTotals}
            setWellbeingTotals={setWellbeingTotals}
            servicesPopularity={servicesPopularity}
            setServicesPopularity={setServicesPopularity}
          />
        )}
      />

      <Route
        path="/searchClient"
        render={() => (
          <SearchClient
            singleClient={singleClient}
            setSingleClient={setSingleClient}
            clients={clients}
            setClients={setClients}
          />
        )}
      />

      <Switch>
        <Route
          path="/clientProfile/:id"
          render={() => (
            <ClientProfile
              singleClient={singleClient}
              setSingleClient={setSingleClient}
            />
          )}
        />
        <Route
          path="/wellbeingAssessment/:id"
          render={() => (
            <WellbeingAssessment
              singleClient={singleClient}
              setSingleClient={setSingleClient}
            />
          )}
        />
        <Route
          path="/referralForm/:id"
          render={() => (
            <ReferralForm
              singleClient={singleClient}
              setSingleClient={setSingleClient}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
