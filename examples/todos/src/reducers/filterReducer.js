// @flow

import { handleActions, type ActionType } from 'redux-actions';
import { APPLY_FILTER } from '../constants/actionTypes';
import { ALL } from '../constants/filterTypes';
import { applyFilter } from '../actions/filterActions';
import type { Filter } from '../types';

export default handleActions({
  [APPLY_FILTER]: (state: Filter, { payload }: ActionType<typeof applyFilter>) => payload,
}, ALL);
