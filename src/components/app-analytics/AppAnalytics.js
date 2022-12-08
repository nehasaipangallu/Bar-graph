import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './AppAnalytics.css';

export default function AppAnalytics() {
  return (
    <div class="app-analytics col-lg-2 col-md-4 col-sm-8">
      <h5>App OS Analytics</h5>
      <div class="d-flex flex-column">
        <div>
          <p>
            Apple iOS <br />
            73%
          </p>
        </div>
        <ProgressBar now={73} />

        <div>
          <p>
            Blackberry <br /> 8%
          </p>
        </div>
        <ProgressBar now={18} />

        <div>
          <p>
            Android <br /> 19%
          </p>
        </div>
        <ProgressBar now={8} />
      </div>
    </div>
  );
}
