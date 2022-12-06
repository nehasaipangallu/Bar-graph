import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ActiveUserChart from '../active-user-chart/ActiveUserChart';
import RevenueChart from '../revenue-chart/RevenueChart';

export default function Tab() {
  return (
    <Tabs
      defaultActiveKey="overview"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="overview" title="Overview">
        <ActiveUserChart></ActiveUserChart>
        <RevenueChart></RevenueChart>
      </Tab>
      <Tab eventKey="cloudwatch" title="Cloudwatch"></Tab>
      <Tab eventKey="optimization" title="Optimization"></Tab>
    </Tabs>
  );
}
