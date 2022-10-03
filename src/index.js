import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';
import LR from './components/LR';
import GG from './components/Gracyn';
import RA from './components/Richard';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundColor = "#fef9f8";
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/LR" element={<LR/>} />
        <Route path="/Gracyn" element={<GG/>} />
        <Route path="/Richard" element={<RA/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
/*root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
