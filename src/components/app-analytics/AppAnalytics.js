import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './AppAnalytics.css';

export default function AppAnalytics() {
  return (
    
    <div  class="col-lg-2 col-md-4 col-sm-8 analytics-app">
    <div class="app-analytics ">
      <h5>App OS Analytics</h5>

      <div>
        <p>Apple iOS</p>
        <p>73%</p>
        <ProgressBar now={73} />
      </div>
      <div>
        <p>Blackberry</p>
        <p>8%</p>

        <ProgressBar now={18} />
      </div>
      <div>
        <p>Android</p>
        <p>19%</p>
        <ProgressBar now={8} />
      </div>
    </div>
    </div>
  );
}
