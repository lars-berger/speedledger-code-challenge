import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import reducers from './reducers';
import apiMiddleware from './middleware/apiMiddleware';

import invoicesPage from './containers/InvoicesPage/InvoicesPage';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(apiMiddleware))
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={invoicesPage} />
        <Route exact path="/register" component={invoicesPage} />
        {/* <Route path='/' component="show 404" /> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
