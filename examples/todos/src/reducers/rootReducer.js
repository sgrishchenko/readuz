// @flow

import { inject, type Reader } from 'readuz';
import { combineReducers, type Reducer } from 'redux';
import { type ActionType } from 'redux-actions';

import type { ReducerEnv } from './reducerEnv';
import type { State } from '../types';

export const rootReducer: Reader<ReducerEnv, Reducer<State, ActionType<any>>> = inject(
  (env: ReducerEnv) => env.itemReducer,
  (env: ReducerEnv) => env.filterReducer,
  (items, filter) => (
    combineReducers({
      items,
      filter,
    })
  ),
);
