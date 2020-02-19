import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from '../src/components/LandingPage/LandingPage';
import SearchClient from '../src/components/SearchClient/SearchClient';
import ClientProfile from '../src/components/ClientProfile/ClientProfile';
import WellbeingAssessment from '../src/components/WellbeingAssessment/WellbeingAssessment';

const App = () => {
  const [clients, setClients] = React.useState([{}]);
  const [singleClient, setSingleClient] = React.useState(null);
  const [wellbeingTotals, setWellbeingTotals] = React.useState([]);

  let match = useRouteMatch();

  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route
        path='/dashboard'
        render={() => (
          <Dashboard
            clients={clients}
            setClients={setClients}
            wellbeingTotals={wellbeingTotals}
            setWellbeingTotals={setWellbeingTotals}
          />
        )}
      />

      <Route
        path='/searchClient'
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
          path='/clientProfile/:id'
          render={() => (
            <ClientProfile
              singleClient={singleClient}
              setSingleClient={setSingleClient}
              match={match}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
