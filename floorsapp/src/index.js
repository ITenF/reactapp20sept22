import React from 'react';
import ReactDOM from 'react-dom/client';
//for styling
import './index.css';
//Pages
import App from './App';
import Shoot from "./Shoot"
import Processor from './pages/Processor';
import Opslag from './pages/Opslag';
//for Bootstrap
import Bootstrapnavbarfun from './Bootstrap-navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//for react-bootstrap
import 'react-bootstrap/dist/react-bootstrap.min.js';
//for react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//not used
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Bootstrapnavbarfun />
      <Routes>
      <Route exact path="/" component={App} />
      <Route path="opslag" element={ <Opslag />} />
      <Route path="processor" element={<Processor />} />
      </Routes>
    </Router>
    <App />
    <Shoot/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
