import { APPLY_FILTER } from '../constants/actionTypes';
import { ALL } from '../constants/filterTypes';

export default (state = ALL, action) => {
  switch (action.type) {
    case APPLY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
