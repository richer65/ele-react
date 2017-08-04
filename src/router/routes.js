import React,{Component} from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from "../views/home.jsx";
import Test1 from "../views/testR1.jsx";
import Test2 from "../views/testR2.jsx";
import TestRedux from "../containers/testRedux.jsx";
import Login from "../views/login.jsx";


//login state check
var isLogin = function(nextState, replace){
  replace("/login")
}


const routes = 
  <Route>
    <Route path="/" component={Home} onEnter={isLogin}>
      <Route path="/test1" component={Test1} activeStyle={{color: 'red'}}/>
      <Route path="/test2" component={Test2} activeStyle={{color: 'red'}}/>
      <Route path="/testRedux" component={TestRedux} activeStyle={{color: 'red'}}/>
    </Route>
    <Route path="/login" component={Login}/>
  </Route>



export default routes