import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Greeting from './routes/Products';
import Hello from "./routes/hello";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Greeting} />
        <Route path="/hello" exact component={Hello} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
