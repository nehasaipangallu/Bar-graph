import React, { useEffect, useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat';
import Header from './components/header/Header';
import SideNavbar from './components/sidenavbar/SideNavbar';
import ActiveUserChart from './components/active-user-chart/ActiveUserChart';
import Login from './components/auth/Login';

import {
  Route,
  Routes,
  BrowserRouter,
  Switch,
  HashRouter,
} from 'react-router-dom';
import Tab from './components/tab/Tab';

export default function App() {
  return (
    <div>
      {/* chart */}
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route
            exact
            path="/dashboard"
            element={
              <div>
                {' '}
                <Header />
                <div class="d-flex">
                  <SideNavbar />
                  <Tab />
                </div>{' '}
              </div>
            }
          ></Route>
        </Routes>
        {/* <Header />
        <div class="d-flex">
          <SideNavbar />
          <Tab />
        </div> */}
      </HashRouter>
    </div>
  );
}
