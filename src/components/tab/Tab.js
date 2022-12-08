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
          <div class="row overflow-hidden">
            <div class="row overflow-hidden">
              <ActiveUserChart></ActiveUserChart>
              <InactiveUsersChart></InactiveUsersChart>
              <AppDownloads></AppDownloads>
              <AppAnalytics></AppAnalytics>
            </div>
            <div class="row overflow-hidden">
              {/* <Revenue></Revenue> */}
              <SubscriptionAnalytics></SubscriptionAnalytics>
            </div>
            {/* <Revenue></Revenue> */}
          </div>
        </Tab>
        <Tab eventKey="cloudwatch" title="Cloudwatch"></Tab>
        <Tab eventKey="optimization" title="Optimization">
          <div class="row">
            <UsageCost></UsageCost>
          </div>
        </Tab>
      </Tabs>
      
    </div>
  );
}
