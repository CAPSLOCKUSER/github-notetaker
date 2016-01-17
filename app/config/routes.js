import React from 'react';
import Main from '../componenets/Main.js';
import Home from '../componenets/Home.js';
import Router, { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);