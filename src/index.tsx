import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import { StoreState } from './models/StoreState';

import { VotesAction } from './redux/actions/index';
import { VotesReducer } from './redux/reducers/index';

import Votes from './containers/Votes';

const store = createStore<StoreState, VotesAction, any, any>(
  VotesReducer,
  {
    count: 1,
    name: 'Votes'
  }
);

/**
 * Entry-point.
 */
ReactDOM.render(
  <Provider store={store}>
    <Votes />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
