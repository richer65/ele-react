import React,{Component} from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from "../views/home.jsx";
import Test1 from "../views/testR1.jsx";
import Test2 from "../views/testR2.jsx";
const routes = <Route path="/" component={Home}>
  <Route path="/test1" component={Test1} activeStyle={{color: 'red'}}/>
  <Route path="/test2" component={Test2} activeStyle={{color: 'red'}}/>
</Route>



export default routes