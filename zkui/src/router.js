import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import ZKchildren from "./routes/ZKchildren.js";

import Header from "./routes/Header.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
        <Route path="/ZKchildren" component={ZKchildren} />
        <Route path="/header" component={Header} />
        </div>
    
    </Router>
  );
}

export default RouterConfig;
