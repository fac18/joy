import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const App = () => {
  const [serviceReferrals, setServiceReferrals] = React.useState(15);
  return <Dashboard serviceReferrals={serviceReferrals} />;
};

export default App;
