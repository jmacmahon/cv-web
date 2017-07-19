/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import SearchBox from './searchbox';

const App = () => (
  <Provider store={store}>
    <SearchBox />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
