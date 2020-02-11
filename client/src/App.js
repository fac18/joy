import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const App = () => {
  const [overallWellbeing, setOverallWellbeing] = React.useState(15);
  return <Dashboard overallWellbeing={overallWellbeing} />;
};

export default App;
