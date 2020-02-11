import React, { Component } from 'react';
import ServicesGraph from './ServicesGraph';

const Dashboard = ({ serviceReferrals }) => {
  return (
    <div>
      <h2>My Dashboard</h2>
      <h3>
        Over the last month, you referred services to {serviceReferrals} people!
      </h3>
      <ServicesGraph />
    </div>
  );
};

export default Dashboard;
