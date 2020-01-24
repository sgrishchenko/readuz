// @flow

import { just, type Reader } from 'readuz';
import type { Reducer } from 'redux';
import type { ActionType } from 'redux-actions';
import { itemReducer } from './itemReducer';
import { filterReducer } from './filterReducer';
import { rootReducer } from './rootReducer';
import { ALL } from '../constants/filterTypes';
import type { State, Todos, Filter } from '../types';

export type ReducerEnv = {
  rootReducer: Reader<ReducerEnv, Reducer<State, ActionType<any>>>,
  itemReducer: Reader<ReducerEnv, Reducer<Todos, ActionType<any>>>,
  filterReducer: Reader<ReducerEnv, Reducer<Filter, ActionType<any>>>
}

export const reducerEnv: ReducerEnv = {
  rootReducer,
  itemReducer: just(itemReducer),
  filterReducer: just(filterReducer),
};

export const simplifiedReducerEnv: ReducerEnv = {
  rootReducer,
  itemReducer: just(itemReducer),
  filterReducer: just(() => ALL),
};
