import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ActiveUserChart from '../active-user-chart/ActiveUserChart';
import InactiveUsersChart from '../inactive-users/InactiveUsersChart';
import AppDownloads from '../appdownloads/AppDownloads';
import SubscriptionAnalytics from '../subscription-analytics/SubscriptionAnalytics';
import './Tab.css';

export default function Tab() {
  return (
    <div class="tabs">
      <Tabs
        defaultActiveKey="overview"
        id="uncontrolled-tab-example"
        className="mb-3 tab "
      >
        <Tab eventKey="overview" title="Overview" className="tab-item">
          <ActiveUserChart></ActiveUserChart>
          <InactiveUsersChart></InactiveUsersChart>
          <AppDownloads></AppDownloads>
          <SubscriptionAnalytics></SubscriptionAnalytics>
        </Tab>
        <Tab eventKey="cloudwatch" title="Cloudwatch"></Tab>
        <Tab eventKey="optimization" title="Optimization"></Tab>
      </Tabs>
    </div>
  );
}
