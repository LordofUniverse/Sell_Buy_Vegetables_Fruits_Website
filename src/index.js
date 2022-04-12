import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Routes, Redirect, Link } from 'react-router-dom'

import Order from './Order';
import Sell from './Sell';
import Cart from './cart'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element = {<App/>} />
        <Route exact path="/order" element = {<Order/>} />
        <Route exact path="/sell" element = {<Sell/>} />
        <Route exact path="/cart" element = {<Cart/>} />
      </Routes>
    </Router>,
  </React.StrictMode>
);
