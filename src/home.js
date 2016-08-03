import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
// import createBrowserHistory from 'history/lib/createBrowserHistory';

// 兼容处理
import "babel-register"
import "babel-polyfill"
import "whatwg-fetch"
import "./util/DragDropTouch"

// store
// import configure from "../dataflow/store"
// containers
import Home from "./containers/Home"
import Test from "./containers/Test"
import Unlock from "./containers/Unlock"
import TodoApp from "./containers/TodoApp"


injectTapEventPlugin()

window.onload = function(){

  ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path="/test" component={Test}/>
      <Route path="/unlock" component={Unlock}/>
    </Router>
  ), document.getElementById('app'))
}
