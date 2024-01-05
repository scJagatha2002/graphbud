import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Main.jsx';
import Add from './Components/Home/add.jsx';
import { Outlet, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        
        <Route index element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
