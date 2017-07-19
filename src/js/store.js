import { createStore, combineReducers } from 'redux';

import actions from './actions';
import itemData from './data';

function searchBox(state = { value: '' }, action) {
  switch (action.type) {
    case actions.UPDATE_SEARCHBOX_VALUE:
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

function itemStore(state = {}, action) {
  switch (action.type) {
    case actions.POPULATE_ITEM_STORE:
      return action.itemData;
    default:
      return state;
  }
}

const store = createStore(combineReducers({ searchBox, itemStore }));

store.dispatch({
  type: actions.POPULATE_ITEM_STORE,
  itemData,
});

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
