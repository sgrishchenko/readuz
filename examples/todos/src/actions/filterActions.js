// @flow

import { createAction } from 'redux-actions';
import { APPLY_FILTER } from '../constants/actionTypes';

import type { Filter } from '../types';

export const applyFilter = createAction<string, Filter>(APPLY_FILTER);
