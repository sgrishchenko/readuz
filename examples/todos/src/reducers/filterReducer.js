// @flow

import { APPLY_FILTER } from '../constants/actionTypes';
import { ALL } from '../constants/filterTypes';
import type { Filter, Action } from '../types';

export default (state: Filter = ALL, action: Action<*>) => {
  switch (action.type) {
    case APPLY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
