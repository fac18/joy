import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useParams
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from '../src/components/LandingPage/LandingPage';
import SearchClient from '../src/components/SearchClient/SearchClient';
import ClientProfile from '../src/components/ClientProfile/ClientProfile';

const App = () => {
  const [overallWellbeing, setOverallWellbeing] = React.useState(15);
  const [data, setOverallData] = React.useState({});
  const [clients, setClients] = React.useState([{}]);
  const [singleClient, setSingleClient] = React.useState({});

  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route
        path='/dashboard'
        render={() => (
          <Dashboard
            clients={clients}
            setClients={setClients}
            overallWellbeing={overallWellbeing}
            data={data}
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
      <Route
        path='/clientProfile/:id'
        render={() => (
          <ClientProfile
            singleClient={singleClient}
            setSingleClient={setSingleClient}
          />
        )}
      />
    </Router>
  );
};

export default App;
