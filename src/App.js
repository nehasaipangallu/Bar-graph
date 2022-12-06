import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat';
import Header from './components/header/Header';
import {
  Route,
  Routes,
  BrowserRouter,
  Switch,
  HashRouter,
} from 'react-router-dom';

export default function App() {
  return (
    <div>
       <HashRouter>
        <Header />
        </HashRouter>
     
    </div>
  );
}
