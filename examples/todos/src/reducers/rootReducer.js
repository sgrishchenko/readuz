// @flow

import { inject } from 'readuz';
import { combineReducers } from 'redux';

import type { ReducerEnv } from './reducerEnv';

export default inject(
  (env: ReducerEnv) => env.itemReducer,
  (env: ReducerEnv) => env.filterReducer,
  (items, filter) => (
    combineReducers({
      items,
      filter,
    })
  ),
);
