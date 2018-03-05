// @flow

import { APPLY_FILTER } from '../constants/actionTypes';
import Filter from '../components/Filter';

// eslint-disable-next-line import/prefer-default-export
export const applyFilter = (filter: Filter) => ({ type: APPLY_FILTER, filter });
