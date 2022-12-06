import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Chart } from './chart/chart';

export default function Tab() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Chart(400, 600);
  }, []);

  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <div id="chart"></div>
      </Tab>
      <Tab eventKey="profile" title="Profile"></Tab>
      <Tab eventKey="contact" title="Contact" disabled></Tab>
    </Tabs>
  );
}
