import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducer from './reducers/reducer';
import App from './components/app/app';
import { getSearchID, getTickets } from './actions/actions';
import 'antd/dist/antd.css';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
      })
    : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk)));

store.dispatch(getSearchID());

const loadingTickets = () => {
  const { searchID, isStoped } = store.getState();
  if (!isStoped) {
    store.dispatch(getTickets(searchID));
    setTimeout(() => loadingTickets(), 2000);
  }
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

setTimeout(() => loadingTickets(), 1500);
