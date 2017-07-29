import React from 'react';
import ReactDOM, { render } from 'react-dom';
import routes from './router/routes'
import Home from './views/home.jsx';
import { Router, Route, hashHistory } from 'react-router';
import './libs/stylesheets/normalize.css'
//history


render(
  <Router history={hashHistory} routes={routes}>
  </Router>,
  document.getElementById('root')
);