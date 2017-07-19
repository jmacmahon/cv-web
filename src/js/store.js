import { createStore, combineReducers } from 'redux';

import actions from './actions';

function searchBox(state = { value: '' }, action) {
  switch (action.type) {
    case actions.UPDATE_SEARCHBOX_VALUE:
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

const store = createStore(combineReducers({ searchBox }));

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
