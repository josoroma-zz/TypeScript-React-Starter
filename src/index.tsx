import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { EnthusiasmAction } from './actions/index';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

// import App from './App';
import Hello from './containers/Hello';

const store = createStore<StoreState, EnthusiasmAction, any, any>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    name: 'TypeScript'
  }
);


/**
 * Entry-point.
 */
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
