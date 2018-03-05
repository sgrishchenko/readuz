// @flow

import { combineReducers } from 'redux';
import items from './itemReducer';
import filter from './filterReducer';

export default combineReducers({
  items,
  filter,
});
