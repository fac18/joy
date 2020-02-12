import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import LandingPage from '../src/components/LandingPage/LandingPage';
import SearchClient from '../src/components/SearchClient/SearchClient';
import ClientProfile from '../src/components/ClientProfile/ClientProfile';

const App = () => {
  const [overallWellbeing, setOverallWellbeing] = React.useState(15);
  const [data, setOverallData] = React.useState({});

  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route
        path='/dashboard'
        render={() => (
          <Dashboard overallWellbeing={overallWellbeing} data={data} />
        )}
      />
      <Route path='/searchClient' component={SearchClient} />
      <Route path='/clientProfile' component={ClientProfile} />
    </Router>
  );
};

export default App;
