// @flow

import { createAction } from 'redux-actions';
import { APPLY_FILTER } from '../constants/actionTypes';

import type { Filter } from '../types';

// eslint-disable-next-line import/prefer-default-export
export const applyFilter = createAction(APPLY_FILTER, (filter: Filter) => filter);
