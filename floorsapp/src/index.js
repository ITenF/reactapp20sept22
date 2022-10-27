import React from 'react';
import ReactDOM from 'react-dom/client';
//for styling
import './index.css';
//Pages
import App from './App';
import Shoot from "./Shoot"
import Home from './pages/home'
import Processor from './pages/Processor';
import Opslag from './pages/Opslag';
import Inenuitvoer from './pages/in-en-uitvoer';
import Besturingssyteeml from './pages/besturingssyteem';
import Uitlegapps from './pages/uitleg_apps';
import BitsAndBites from './pages/bits_en_bites';
import Programmeertaal from './pages/programmeertaal';
import ServerUitleg from './pages/serverUitleg';
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
     {/* <Route exact path="/" component={App} /> */} 
     <Route path=""  element={<Home/>}  />
      <Route path="/"  element={<Home/>}  />
      <Route path="opslag" element={ <Opslag />} />
      <Route path="processor" element={<Processor />} />
      <Route path="inenuitvoer" element={<Inenuitvoer />} />
      <Route path="besturingssysteem" element={<Besturingssyteeml />} />
      <Route path="uitlegApps" element={<Uitlegapps />} />
      <Route path="bitsEnBites" element={<BitsAndBites />} />
      <Route path="programmeertaal" element={<Programmeertaal />} />
      <Route path="serverUitleg" element={<ServerUitleg />} />
      </Routes>
    </Router>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
