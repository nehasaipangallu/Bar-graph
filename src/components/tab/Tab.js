import React, { useEffect, useState } from 'react';
import './Tab.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ActiveUserChart from '../active-user-chart/ActiveUserChart';
import InactiveUsersChart from '../inactive-users/InactiveUsersChart';
import AppDownloads from '../appdownloads/AppDownloads';
import SubscriptionAnalytics from '../subscription-analytics/SubscriptionAnalytics';
import AppAnalytics from '../app-analytics/AppAnalytics';
import Revenue from '../revenue/Revenue';
import UsageCost from '../optimization-tab/usage-cost/UsageCost';

export default function Tab() {
  return (
    <div class="tabs">
      <Tabs
        defaultActiveKey="overview"
        id="uncontrolled-tab-example"
        className="mb-3 tab "
      >
        <Tab eventKey="overview" title="Overview" className="tab-item">
          <div class="tabs-item d-flex flex-column overflow-hidden align-content-start">
            <div class="overview-section-1 row">
              <ActiveUserChart></ActiveUserChart>
              <InactiveUsersChart></InactiveUsersChart>
              <AppDownloads></AppDownloads>
              <AppAnalytics></AppAnalytics>
            </div>
            <div class="overview-section-2 row ">
              <Revenue></Revenue>
              <SubscriptionAnalytics></SubscriptionAnalytics>
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="cloudwatch"
          title="Cloudwatch"
          className="tab-item"
        ></Tab>
        <Tab eventKey="optimization" title="Optimization" className="tab-item">
          <div class="d-flex flex-column tabs-item">
            <UsageCost></UsageCost>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
