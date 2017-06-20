import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'babel-polyfill';

import App from './components/App';
import appReducer from './components/App/reducer';
import teams from './teams';
import './styles/manifest.styl';

const history = createHistory();
const middleware = routerMiddleware(history);

const mainStore = createStore(
  combineReducers({
    app: appReducer,
    routing: routerReducer,
  }),
  // Enable to access devTools in browser console
  window.devToolsExtension &&
  window.devToolsExtension(),
  applyMiddleware(thunk, middleware)
);

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { teams };
  }

  componentWillMount() {}

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={history}>
          <div>
            <Route
              exact
              path="/"
              render={() => <App />}
            />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.objectOf(PropTypes.any).isRequired,
};

render(
  <Root store={mainStore} />,
  document.getElementById('app')
);
