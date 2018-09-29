import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import reducers from './reducers';
import apiMiddleware from './middleware/apiMiddleware';

import invoicesPage from './containers/InvoicesPage/InvoicesPage';
import invoiceDetailsPage from './containers/InvoiceDetailsPage/InvoiceDetailsPage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(apiMiddleware))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={invoicesPage} />
        <Route path="/:invoiceId" component={invoiceDetailsPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
