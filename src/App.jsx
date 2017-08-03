import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './router/routes'
import Home from './views/home.jsx';
import { Router, Route, browserHistory } from 'react-router';
import finalCreateStore from './redux/Store/store.jsx';
import reducer from './redux/Reducer';  // 引入reducers集合
import { syncHistoryWithStore } from 'react-router-redux'; // 利用react-router-redux提供的syncHistoryWithStore我们可以结合store同步导航事件
//样式引入
import './libs/stylesheets/normalize.css';
import './libs/stylesheets/sass/common.scss';

const store = finalCreateStore(reducer)
// 创建一个增强版的history来结合store同步导航事件
const history = syncHistoryWithStore(browserHistory, store)
render(
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('root')
);
 