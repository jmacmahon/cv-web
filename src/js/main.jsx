/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import SearchBox from './search-box';
import CardsList from './cards-list';

const App = () => (
  <Provider store={store}>
    <div className="container">
      <div>
        <SearchBox />
      </div>
      <div>
        <CardsList />
      </div>
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
