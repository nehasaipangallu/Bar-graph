import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import ActiveUserChart from './components/active-user-chart/ActiveUserChart';

export default function Tab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        {/* <ActiveUserChart></ActiveUserChart> */}
      </Tab>
      <Tab eventKey="profile" title="Profile"></Tab>
      <Tab eventKey="contact" title="Contact" disabled></Tab>
    </Tabs>
  );
}
